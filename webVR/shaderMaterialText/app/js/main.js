// Basic THREE.js variables
var camera,
    scene,
    controls,
    renderer;

var boxSize,
    cube,
    raycaster,
    manager,
    effect,
    vrDisplay;



var clock = new THREE.Clock();

var camera, scene, renderer, composer;

var uniforms, material, mesh;

var mouseX = 0, mouseY = 0,
lat = 0, lon = 0, phy = 0, theta = 0;

var width = window.innerWidth || 2;
var height = window.innerHeight || 2;

var windowHalfX = width / 2;
var windowHalfY = height / 2;

// Load the JSON font and init all functions
loader = new THREE.FontLoader();
loader.load('fonts/gotham_black_regular.json', function(font){
    init(font);
});


function init(font){
    // Setup three.js WebGL renderer. Note: Antialiasing is a big performance hit.
    // Only enable it if you actually need to.
    renderer = new THREE.WebGLRenderer({antialias: true});
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.autoClear = false;

    // Append the canvas element created by the renderer to document body element.
    document.body.appendChild(renderer.domElement);

    // Create a three.js scene.
    scene = new THREE.Scene();

    //--------------------------------------------
    // begin shader texture
    var textureLoader = new THREE.TextureLoader();

    uniforms = {
        fogDensity: { value: 0.45 },
        fogColor:   { value: new THREE.Vector3( 0, 0, 0 ) },
        time:       { value: 1.0 },
        resolution: { value: new THREE.Vector2() },
        uvScale:    { value: new THREE.Vector2( 3.0, 1.0 ) },
        texture1:   { value: textureLoader.load( "img/textures/cloud.png" ) },
        texture2:   { value: textureLoader.load( "img/textures/lavatile.jpg" ) }
    };

    uniforms.texture1.value.wrapS = uniforms.texture1.value.wrapT = THREE.RepeatWrapping;
    uniforms.texture2.value.wrapS = uniforms.texture2.value.wrapT = THREE.RepeatWrapping;

    var size = 0.65;

    material = new THREE.ShaderMaterial( {
        uniforms: uniforms,
        vertexShader: document.getElementById( 'vertexShader' ).textContent,
        fragmentShader: document.getElementById( 'fragmentShader' ).textContent

    } );

    mesh = new THREE.Mesh( new THREE.TorusGeometry( size, 0.3, 30, 30 ), material );
    mesh.rotation.x = 0.3;
    // scene.add( mesh );

    var renderModel = new THREE.RenderPass( scene, camera );
    var effectBloom = new THREE.BloomPass( 1.25 );
    var effectFilm = new THREE.FilmPass( 0.35, 0.95, 2048, false );

    effectFilm.renderToScreen = true;

    composer = new THREE.EffectComposer( renderer );

    composer.addPass( renderModel );
    composer.addPass( effectBloom );
    composer.addPass( effectFilm );

    // End shader texture
    //--------------------------------------------

    // Create a three.js camera.
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 10000);

    // Create raycaster object
    raycaster = new THREE.Raycaster(); // create once
    raycaster.near = 0.1;
    raycaster.far = 100;

    drawCrosshair();

    controls = new THREE.VRControls(camera);
    controls.standing = true;

    // Apply VR stereo rendering to renderer.
    effect = new THREE.VREffect(renderer);
    effect.setSize(window.innerWidth, window.innerHeight);

    // Add a repeating grid as a skybox.
    boxSize = 5;
    var loader = new THREE.TextureLoader();
    loader.load('img/box.png', onTextureLoaded);

    drawCube();

    // Render POSSIBLE text on the screen
    drawText(font);
    
    // Create a VR manager helper to enter and exit VR mode.
    var params = {
        hideButton: false, // Default: false.
        isUndistorted: false // Default: false.
    };

    manager = new WebVRManager(renderer, effect, params);

    window.addEventListener('resize', onResize, true);
    window.addEventListener('vrdisplaypresentchange', onResize, true);
}

function onTextureLoaded(texture) {
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(boxSize, boxSize);

  var geometry = new THREE.BoxGeometry(boxSize, boxSize, boxSize);
  var material = new THREE.MeshBasicMaterial({
    map: texture,
    color: 0x01BE00,
    side: THREE.BackSide
  });

  // Align the skybox to the floor (which is at y=0).
  skybox = new THREE.Mesh(geometry, material);
  skybox.position.y = boxSize/2;
  scene.add(skybox);

  // For high end VR devices like Vive and Oculus, take into account the stage
  // parameters provided.
  setupStage();
}

/******************************************************************************
 * Request animation frame loop function
 */
var lastRender = 0;

function animate(timestamp) {
    // var delta = Math.min(timestamp - lastRender, 500);
    var delta = 5 * clock.getDelta();
    lastRender = timestamp;

    // Apply rotation to cube mesh
    cube.rotation.y += delta * 0.0006;

    updateRaycaster();

    controls.update();
    
    //--------------------------------------------
    uniforms.time.value += 0.2 * delta;
    
    mesh.rotation.y += 0.0125 * delta;
    mesh.rotation.x += 0.05 * delta;
    // mesh.rotation.x += 0.000005 * delta;

    // renderer.clear();
    // composer.render( 0.01 );  // Render the scene through the manager.
    //--------------------------------------------

    manager.render(scene, camera, timestamp);
    effect.render(scene, camera);

    vrDisplay.requestAnimationFrame(animate);
}

function onResize(e) {
  effect.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
}

// Get the HMD, and if we're dealing with something that specifies
// stageParameters, rearrange the scene.
function setupStage() {
  navigator.getVRDisplays().then(function(displays) {
    if (displays.length > 0) {
      vrDisplay = displays[0];
      if (vrDisplay.stageParameters) {
        setStageDimensions(vrDisplay.stageParameters);
      }
      vrDisplay.requestAnimationFrame(animate);
    }
  });
}

function setStageDimensions(stage) {
  // Make the skybox fit the stage.
  var material = skybox.material;
  scene.remove(skybox);

  // Size the skybox according to the size of the actual stage.
  var geometry = new THREE.BoxGeometry(stage.sizeX, boxSize, stage.sizeZ);
  skybox = new THREE.Mesh(geometry, material);

  // Place it on the floor.
  skybox.position.y = boxSize/2;
  scene.add(skybox);

  // Place the cube in the middle of the scene, at user height.
  cube.position.set(0, controls.userHeight, 0);
}


/******************************************************************************
 * Verifies Raycaster Objects Array
 */
function updateRaycaster(){
  var intersectedObject;
  // // update the picking ray with the camera and mouse position
  raycaster.setFromCamera(  { x: 0, y: 0 }, camera );
  // raycaster.set(controls.getObject().position, controls.getDirection(new THREE.Vector3()));

  // calculate objects intersecting the picking ray
  var intersects = raycaster.intersectObjects( scene.children, true );
  // var intersects = raycaster.intersectObjects( scene.getObjectByName('cube').children );

  for ( var i = 0; i < intersects.length; i++ ) {
    intersectedObject = intersects[ i ].object;

    if(intersectedObject.name == 'cube'){
      // intersectedObject.material.color.set(0xff0000);
      // console.log(intersectedObject);
      intersectedObject.material.wireframe = true;
    }
  }
}

/********************************************************************************
 * Draws the crosshair
 */
function drawCrosshair(){
  innerCrossHairScale = 0.07;
  innerCrossHairGrowing = true;
  innerCrossHairSquareRotation = 0.03;

  var crosshairPositionZ = -0.9;
  var material = new THREE.LineBasicMaterial({ color: 0x00FF00 });

  var x = 0.007, y = 0.007; // crosshair size

  var geometry = new THREE.Geometry();
  geometry.vertices.push(new THREE.Vector3(-x, y, 0));
  geometry.vertices.push(new THREE.Vector3(x, y, 0));
  geometry.vertices.push(new THREE.Vector3(x, -y, 0));
  geometry.vertices.push(new THREE.Vector3(-x, -y, 0));
  geometry.vertices.push(new THREE.Vector3(-x, y, 0));

  var crosshair = new THREE.Line( geometry, material );

  var lineGeometry = new THREE.Geometry();
  lineGeometry.vertices.push(new THREE.Vector3(0, 3, 0));
  lineGeometry.vertices.push(new THREE.Vector3(0, 3, -40));

  var crosshairLine = new THREE.Line(lineGeometry, material);

  // place it in the center
  var crosshairPercentX = 50;
  var crosshairPercentY = 50;
  var crosshairPositionX = (crosshairPercentX / 100) * 2 - 1;
  var crosshairPositionY = (crosshairPercentY / 100) * 2 - 1;

  crosshair.rotation.z = 45 * Math.PI / 180;
  crosshair.position.x = crosshairPositionX * camera.aspect;
  crosshair.position.y = crosshairPositionY;
  crosshair.position.z = crosshairPositionZ;

  camera.add( crosshair );

  // Center square
  var squareGeometry = new THREE.Geometry();
  squareGeometry.vertices.push(new THREE.Vector3(-x, y, 0));
  squareGeometry.vertices.push(new THREE.Vector3(x, y, 0));
  squareGeometry.vertices.push(new THREE.Vector3(x, -y, 0));
  squareGeometry.vertices.push(new THREE.Vector3(-x, -y, 0));
  squareGeometry.vertices.push(new THREE.Vector3(-x, y, 0));
  innerCrossHairSquare = new THREE.Line( squareGeometry, material );
  innerCrossHairSquare.scale.set(innerCrossHairScale, innerCrossHairScale, innerCrossHairScale);
  innerCrossHairSquare.position.x = crosshairPositionX * camera.aspect;
  innerCrossHairSquare.position.y = crosshairPositionY;
  innerCrossHairSquare.position.z = crosshairPositionZ;
  camera.add( innerCrossHairSquare );

  scene.add( camera );
}

/*******************************************************************************
 * Draw POSSIBLE text
 */
function drawText(font){
    var theText = "POSSIBLE webVR";
    textColorGrowing = true,
    textColor = {
        r : 0,
        g : 0,
        b : 0
    };

    var hash = document.location.hash.substr( 1 );

    if ( hash.length !== 0 ) {
        theText = hash;
    }
 
    geometry = new THREE.TextGeometry( theText, {
        font: font,
        size: 0.5,
        height: 0.05,
        curveSegments: 10
    });

    geometry.computeBoundingBox();

    var centerOffset = -0.5 * ( geometry.boundingBox.max.x - geometry.boundingBox.min.x );

    var material = new THREE.MultiMaterial( [
    // new THREE.MeshBasicMaterial( { color: Math.random() * 0xffffff, overdraw: 0.5 } ),
    new THREE.MeshBasicMaterial( { color: 0x7E7E7E, overdraw: 0.5 } ),// FRENTE  de las letras
    // new THREE.MeshBasicMaterial( { color: 0xA8A8A8 } ) // LADO de las letras
    new THREE.MeshBasicMaterial( { color: textColor } ) // LADO de las letras
    ] );

    //------------------------
    var textureLoader = new THREE.TextureLoader();

    uniforms = {
        fogDensity: { value: 0.45 },
        fogColor:   { value: new THREE.Vector3( 0, 0, 0 ) },
        time:       { value: 1.0 },
        resolution: { value: new THREE.Vector2() },
        uvScale:    { value: new THREE.Vector2( 1.0, 1.0 ) },
        texture1:   { value: textureLoader.load( "img/textures/cloud.png" ) },
        texture2:   { value: textureLoader.load( "img/textures/lavatile.jpg" ) }
    };

    uniforms.texture1.value.wrapS = uniforms.texture1.value.wrapT = THREE.RepeatWrapping;
    uniforms.texture2.value.wrapS = uniforms.texture2.value.wrapT = THREE.RepeatWrapping;

    var size = 0.65;

    material = new THREE.ShaderMaterial( {
        uniforms: uniforms,
        vertexShader: document.getElementById( 'vertexShader' ).textContent,
        fragmentShader: document.getElementById( 'fragmentShader' ).textContent

    } );
    //------------------------
    // var material = new THREE.MeshBasicMaterial( { color: 0x7E7E7E, overdraw: 0.5 } );
    // var material = new THREE.MeshLambertMaterial( {color: 0xd3d3d3, wireframe:false} );

    textMesh = new THREE.Mesh( geometry, material );

    // textMesh.position.x = centerOffset;
    // textMesh.position.y = 0;
    // textMesh.position.z = -4;

    textMesh.position.set(centerOffset, controls.userHeight, -1);

    group = new THREE.Group();
    group.add( textMesh );

    scene.add( group );
    }

/*******************************************************************************
 * Draw Cube
 */
function drawCube(){
    // Create 3D objects.
    var geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);
    var material = new THREE.MeshNormalMaterial({
        color: 0x7777ff,
        wireframe: false
    });

    cube = new THREE.Mesh(geometry, material);

    // Position cube mesh to be right in front of you.
    cube.position.set(0, controls.userHeight, -1);
    cube.name = 'cube';
    // Add cube mesh to your three.js scene
    scene.add(cube);
}