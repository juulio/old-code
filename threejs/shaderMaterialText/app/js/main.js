'use strict';

// Basic THREE.js variables
var camera, controls, scene, renderer, composer;

var loader, effect, uniforms, lavaMaterial, textMesh, fontSize, centerOffset, room;

var clock = new THREE.Clock();

var tweenParams = {
    fontSize : 0.4,
    positionX : -3,
    rotationX : 3 * Math.PI / 2,
    cameraPositionZ : 3
};

var amountOfParticles = 800;
var isMouseDown = true;

var mouse = new THREE.Vector2();

// Load the JSON font and init all functions
loader = new THREE.FontLoader();
loader.load('fonts/gotham_black_regular.json', function(font){
    init(font);
    animate();
});

function init(font){
    scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2( 0x000000, 0.002 );

    renderer = new THREE.WebGLRenderer( { antialias: true } );
    renderer.setClearColor( scene.fog.color );
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.sortObjects = false;
    renderer.autoClear = false;

    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 10000);

    var urlPrefix = "img/skybox/";
    // var urls = [ urlPrefix + "front.png", urlPrefix + "back.png", urlPrefix + "up.png", urlPrefix + "down.png", urlPrefix + "right.png", urlPrefix + "left.png"];
    var urls = [ urlPrefix + "grave_ft.png", urlPrefix + "grave_bk.png", urlPrefix + "grave_up.png", urlPrefix + "grave_dn.png", urlPrefix + "grave_rt.png", urlPrefix + "grave_lf.png"];
    // var urls = [ urlPrefix + "doom_ft.png", urlPrefix + "doom_bk.png", urlPrefix + "doom_up.png", urlPrefix + "doom_dn.png", urlPrefix + "doom_rt.png", urlPrefix + "doom_lt.png"];
    var cubeMaterials = [
        // Do not modify the images order
        new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load(urls[0]), side: THREE.DoubleSide } ),
        new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load(urls[1]), side: THREE.DoubleSide } ),
        new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load(urls[2]), side: THREE.DoubleSide } ),
        new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load(urls[3]), side: THREE.DoubleSide } ),
        new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load(urls[4]), side: THREE.DoubleSide } ),
        new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load(urls[5]), side: THREE.DoubleSide } ),
    ];

    // Create a MeshFaceMaterial, which allows the cube to have different materials on each face
    var cubeMaterial = new THREE.MeshFaceMaterial( cubeMaterials );

    room = new THREE.Mesh(
        new THREE.BoxGeometry( 80, 80, 80),
        cubeMaterial
    );

    scene.add( room );

    controls = new THREE.OrbitControls( camera, renderer.domElement );

    createTween();
    renderText(font, 'POSSIBLE');
    renderParticles();

    document.body.appendChild(renderer.domElement);

    // renderer.domElement.addEventListener( 'mousedown', onMouseDown, false );
    // renderer.domElement.addEventListener( 'mouseup', onMouseUp, false );
    // renderer.domElement.addEventListener( 'touchstart', onMouseDown, false );
    // renderer.domElement.addEventListener( 'touchend', onMouseUp, false );

    window.addEventListener('resize', onWindowResize, true);
}

/******************************************************************************
 * Request animation frame loop function
 */
 var lastRender = 0;

function animate(timestamp) {
    requestAnimationFrame(animate);

    TWEEN.update(timestamp);

    var delta = 5 * clock.getDelta();

    uniforms.time.value += 0.2 * delta;

    if ( isMouseDown === true ) {
        addParticlesToRoom(delta);
    }

    keepParticlesInsideRoom(delta);

    controls.update();
    
    renderer.clear();
    composer.render( 0.01 );
}

/*******************************************************************************
 * On Window Resize Event Handler
 */
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );
}

/*******************************************************************************
 * On Mouse Down Event Handler
 */
function onMouseDown() {
    isMouseDown = true;
    mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
    mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
}

/*******************************************************************************
 * On Mouse Up Event Handler
 */
function onMouseUp() {
    isMouseDown = false;
}

/*******************************************************************************
 * Draw POSSIBLE text
 */
function renderText(font, theText){
    var hash = document.location.hash.substr( 1 );

    if ( hash.length !== 0 ) {
      theText = hash;
    }

    let textGeometry = new THREE.TextGeometry( theText, {
      font: font,
      size: tweenParams.fontSize,
      height: 0.05,
      curveSegments: 10
    });

    textGeometry.computeBoundingBox();

    centerOffset = -0.5 * ( textGeometry.boundingBox.max.x - textGeometry.boundingBox.min.x );

    var textureLoader = new THREE.TextureLoader();

    uniforms = {
      fogDensity: { value: 0.45 },
      fogColor:   { value: new THREE.Vector3( 0, 0, 0 ) },
      time:       { value: 1.0 },
      resolution: { value: new THREE.Vector2() },
      uvScale:    { value: new THREE.Vector2( 0.3, 0.3 ) },
      texture1:   { value: textureLoader.load( "img/textures/cloud.png" ) },
      texture2:   { value: textureLoader.load( "img/textures/disturb.jpg" ) },
      // texture3:   { value: textureLoader.load( "img/textures/lavatile.jpg" ) }
    };

    uniforms.texture1.value.wrapS = uniforms.texture1.value.wrapT = THREE.RepeatWrapping;
    uniforms.texture2.value.wrapS = uniforms.texture2.value.wrapT = THREE.RepeatWrapping;
    // uniforms.texture3.value.wrapS = uniforms.texture3.value.wrapT = THREE.RepeatWrapping;

    lavaMaterial = new THREE.ShaderMaterial( {
      uniforms: uniforms,
      vertexShader: document.getElementById( 'vertexShader' ).textContent,
      fragmentShader: document.getElementById( 'fragmentShader' ).textContent

    } );

    textMesh = new THREE.Mesh( textGeometry, lavaMaterial );

    textMesh.position.set(centerOffset, 0, -1);

    let group = new THREE.Group();
    group.add( textMesh );

    var renderModel = new THREE.RenderPass( scene, camera );
    var effectBloom = new THREE.BloomPass( 1.25 );
    var effectFilm = new THREE.FilmPass( 0.35, 0.95, 2048, false );

    effectFilm.renderToScreen = true;

    composer = new THREE.EffectComposer( renderer );

    composer.addPass( renderModel );
    composer.addPass( effectBloom );
    composer.addPass( effectFilm );

    scene.add( group );
}

/*******************************************************************************
 * Draw Sphere Particles
 */
function renderParticles(){
    var sphereRadius = Math.random() * (0.04 - 0.02 + 1) + 0.02;
    var sphereGeometry = new THREE.SphereGeometry( 0.04, 10, 10 );

    for ( var i = 0; i < amountOfParticles; i ++ ) {

        var object = new THREE.Mesh( sphereGeometry, new THREE.MeshLambertMaterial( { color: Math.random() * 0xffffff } ) );
        var object = new THREE.Mesh( sphereGeometry, lavaMaterial);

        object.position.x = Math.random() * 4 - 2;
        object.position.y = Math.random() * 4 - 2;
        object.position.z = Math.random() * 4 - 2;

        object.rotation.x = Math.random() * 2 * Math.PI;
        object.rotation.y = Math.random() * 2 * Math.PI;
        object.rotation.z = Math.random() * 2 * Math.PI;

        object.scale.x = Math.random() + 0.5;
        object.scale.y = Math.random() + 0.5;
        object.scale.z = Math.random() + 0.5;

        object.userData.velocity = new THREE.Vector3();
        object.userData.velocity.x = Math.random() * 0.01 - 0.005;
        object.userData.velocity.y = Math.random() * 0.01 - 0.005;
        object.userData.velocity.z = Math.random() * 0.01 - 0.005;

        room.add( object );

    }
}

function addParticlesToRoom(delta){
    var particle = room.children[ 0 ];
    room.remove( particle );

    // particle.position.set( 0, 0, - 0.75 );
    particle.position.set( mouse.x, mouse.y, -3 );
    particle.position.applyQuaternion( camera.quaternion );
    particle.userData.velocity.x = ( Math.random() - 0.5 ) * 0.02 * delta;
    particle.userData.velocity.y = ( Math.random() - 0.5 ) * 0.02 * delta;
    particle.userData.velocity.z = ( Math.random() * 0.01 - 0.05 ) * delta;
    particle.userData.velocity.applyQuaternion( camera.quaternion );
    room.add( particle );
}

function keepParticlesInsideRoom(delta){
    for ( var i = 0; i < room.children.length; i ++ ) {

        var particle = room.children[ i ];

        particle.userData.velocity.multiplyScalar( 1 - ( 0.001 * delta ) );

        particle.position.add( particle.userData.velocity );

        // if ( particle.position.x < - 3 || particle.position.x > 3 ) {

        //     particle.position.x = THREE.Math.clamp( particle.position.x, - 3, 3 );
        //     particle.userData.velocity.x = - particle.userData.velocity.x;

        // }

        // if ( particle.position.y < - 3 || particle.position.y > 3 ) {

        //     particle.position.y = THREE.Math.clamp( particle.position.y, - 3, 3 );
        //     particle.userData.velocity.y = - particle.userData.velocity.y;

        // }

        // if ( particle.position.z < - 3 || particle.position.z > 3 ) {
        if ( particle.position.z < - 3 ) {
            particle.position.z = THREE.Math.clamp( particle.position.z, - 3, 3 );
            particle.userData.velocity.z = - particle.userData.velocity.z;
        }

        particle.rotation.x += particle.userData.velocity.x * 2 * delta;
        particle.rotation.y += particle.userData.velocity.y * 2 * delta;
        particle.rotation.z += particle.userData.velocity.z * 2 * delta;
    }
}

/*******************************************************************************
 * Tween for fontSize animation
 */
function createTween(){
    new TWEEN.Tween(tweenParams)
    .to({
        // fontSize : 2.2,
        // positionX : -2.5,
        // rotationX : 0
        cameraPositionZ : 1.1
    }, 3000)
    .onUpdate( function () {
        // textMesh.scale.x = tweenParams.fontSize;
        // textMesh.scale.y = tweenParams.fontSize;
        // textMesh.scale.z = tweenParams.fontSize;
        // textMesh.rotation.x = tweenParams.rotationX;
        // textMesh.position.x = tweenParams.positionX;
        camera.position.z = tweenParams.cameraPositionZ;
    }).easing(TWEEN.Easing.Sinusoidal.InOut).start();
}