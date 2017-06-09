var scene,
    camera,
    renderer,
    light,
		mouse,
		stereoEffect,
		vrEffect,
		cube,
		materialDepth;

var stereoEnabled = true;
var stereoFallbackEnabled = false;
var stereoFallback = false;
var controlsEnabled = false;

var moveForward = false;
var moveBackward = false;
var moveLeft = false;
var moveRight = false;
var canJump = false;

var prevTime = performance.now();
var velocity = new THREE.Vector3();

var sunPosition = new THREE.Vector3( 0, 1000, -1000 );
var screenSpacePosition = new THREE.Vector3();

var postprocessing = { enabled : true };
var orbitRadius = 200;
var bgColor = 0x000511;
var sunColor = 0xffee00;

function init() {
	if ( stereoEnabled && (WEBVR.isLatestAvailable() === false) && !stereoFallbackEnabled ) {
		// TODO create my own VR enabled message. (desktop, mobile, etc)
			// document.body.appendChild( WEBVR.getMessage() );
			// alert('Your browser does not support webVR')
	}

	materialDepth = new THREE.MeshDepthMaterial();

	/*****************************************************************************
   Basic THREE.js scene objects setup: renderer, scene and camera */
	scene = new THREE.Scene();
		// 	scene.fog = new THREE.Fog(0xabaf99, 0, 2000);
	// scene.fog = new THREE.Fog( 0xffffff, 0, 60 );
	scene.fog = new THREE.FogExp2( 0xffffff, 0.025 );

	renderer = new THREE.WebGLRenderer({antialias: true, alpha: false});
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  // renderer.setClearColor(0xFFFFFF);
	renderer.setClearColor( bgColor );
	// renderer.setClearColor(scene.fog.color);

	renderer.autoClear = false;
	renderer.sortObjects = false;


  camera = new THREE.PerspectiveCamera(85, window.innerWidth / window.innerHeight, .1);
	// The pointer lock controls take control of the camera position
	camera.position.set(0, -9, 1);
	// camera.lookAt(2, 3, -20);

	controls = new THREE.OrbitControls(camera, renderer.domElement);

	// // My light
	var ambientLight = new THREE.AmbientLight( 0xFFFFFF, 0.5 );
	scene.add( ambientLight );
	//
	// // The next two lights were taken from SPRING.
	// var aLight = new THREE.AmbientLight( 0x151c0f );
	// scene.add(aLight);

	var pLight = new THREE.PointLight( 0xe3fbdc, 0.9 );
	pLight.position.set(1000,600,0);
	scene.add(pLight);

	/*****************************************************************************
   According to the environment, enable VR or Orbit controls */
  if(stereoEnabled){
    controls = new THREE.VRControls( camera );
    controls.standing = true;
    vrEffect = new THREE.VREffect( renderer );

    if ( WEBVR.isAvailable() === true ) {
        document.body.appendChild( WEBVR.getButton( vrEffect ) );
    } else {
      if(stereoFallbackEnabled){
        console.info('Fallback to StereoEffect');
        stereoFallback = true;

        stereoEffect = new THREE.StereoEffect(renderer);
        stereoEffect.eyeSeparation = 1;

        noSleep = new NoSleep();
      }
      else {
        controls = new THREE.OrbitControls(camera);
        controls.enablePan = true;
        controls.enableZoom = true;
      }
    }
  }

	// check when the browser size has changed and adjust the camera accordingly
	window.addEventListener( 'resize', function( ) {
		var WIDTH = window.innerWidth;
		var HEIGHT = window.innerHeight;
		renderer.setSize( WIDTH, HEIGHT );
		camera.aspect = WIDTH / HEIGHT;
		camera.updateProjectionMatrix( );
	} );

  document.body.appendChild( renderer.domElement );

	drawElements();

	// PointerLock controls
	// https://raw.githubusercontent.com/mrdoob/three.js/master/examples/misc_controls_pointerlock.html
	// controls = new THREE.PointerLockControls( camera );
	// scene.add( controls.getObject() );

	var onKeyDown = function ( event ) {

		switch ( event.keyCode ) {

			case 38: // up
			case 87: // w
				moveForward = true;
				break;

			case 37: // left
			case 65: // a
				moveLeft = true; break;

			case 40: // down
			case 83: // s
				moveBackward = true;
				break;

			case 39: // right
			case 68: // d
				moveRight = true;
				break;

			case 32: // space
				if ( canJump === true ) velocity.y += 350;
				canJump = false;
				break;

		}

	};

	var onKeyUp = function ( event ) {

		switch( event.keyCode ) {

			case 38: // up
			case 87: // w
				moveForward = false;
				break;

			case 37: // left
			case 65: // a
				moveLeft = false;
				break;

			case 40: // down
			case 83: // s
				moveBackward = false;
				break;

			case 39: // right
			case 68: // d
				moveRight = false;
				break;

		}

	};

	document.addEventListener( 'keydown', onKeyDown, false );
	document.addEventListener( 'keyup', onKeyUp, false );

	axis = new THREE.AxisHelper(75);
	scene.add(axis);

	initPostprocessing();
}

/*******************************************************************************
 Updates all the elements on the screen - requestAnimationFrame */
function update() {
  requestAnimationFrame(update);

	// camera.position.z-=0.01;

	if(stereoEnabled){
		if(stereoFallbackEnabled){
				stereoEffect.render( scene, camera );
		}else{
			vrEffect.render( scene, camera );
			controls.update();
		}
	}else{

	}

	if ( controlsEnabled ) {
		// raycaster.ray.origin.copy( controls.getObject().position );
		// raycaster.ray.origin.y -= 10;

		// var intersections = raycaster.intersectObjects( objects );

		// var isOnObject = intersections.length > 0;

		var time = performance.now();
		var delta = ( time - prevTime ) / 10000;

		velocity.x -= velocity.x * 10.0 * delta;
		velocity.z -= velocity.z * 10.0 * delta;

		velocity.y -= 9.8 * 100.0 * delta; // 100.0 = mass

		if ( moveForward ) velocity.z -= 400.0 * delta;
		if ( moveBackward ) velocity.z += 400.0 * delta;

		if ( moveLeft ) velocity.x -= 400.0 * delta;
		if ( moveRight ) velocity.x += 400.0 * delta;

		// if ( isOnObject === true ) {
		// 	velocity.y = Math.max( 0, velocity.y );
		//
		// 	canJump = true;
		// }

		controls.getObject().translateX( velocity.x * delta );
		controls.getObject().translateY( velocity.y * delta );
		controls.getObject().translateZ( velocity.z * delta );

		if ( controls.getObject().position.y < 10 ) {

			velocity.y = 0;
			controls.getObject().position.y = 10;

			canJump = true;

		}
		prevTime = time;
	}

	cube.rotation.x += 0.002;
	cube.rotation.y += 0.002;

	// renderer.render( scene, camera );

	if ( postprocessing.enabled ) {
		// Find the screenspace position of the sun
		screenSpacePosition.copy( sunPosition ).project( camera );
		screenSpacePosition.x = ( screenSpacePosition.x + 1 ) / 2;
		screenSpacePosition.y = ( screenSpacePosition.y + 1 ) / 2;
		// Give it to the god-ray and sun shaders
		postprocessing.godrayGenUniforms[ "vSunPositionScreenSpace" ].value.x = screenSpacePosition.x;
		postprocessing.godrayGenUniforms[ "vSunPositionScreenSpace" ].value.y = screenSpacePosition.y;
		postprocessing.godraysFakeSunUniforms[ "vSunPositionScreenSpace" ].value.x = screenSpacePosition.x;
		postprocessing.godraysFakeSunUniforms[ "vSunPositionScreenSpace" ].value.y = screenSpacePosition.y;
		// -- Draw sky and sun --
		// Clear colors and depths, will clear to sky color
		renderer.clearTarget( postprocessing.rtTextureColors, true, true, false );
		// Sun render. Runs a shader that gives a brightness based on the screen
		// space distance to the sun. Not very efficient, so i make a scissor
		// rectangle around the suns position to avoid rendering surrounding pixels.
		var sunsqH = 0.74 * window.innerHeight; // 0.74 depends on extent of sun from shader
		var sunsqW = 0.74 * window.innerHeight; // both depend on height because sun is aspect-corrected
		screenSpacePosition.x *= window.innerWidth;
		screenSpacePosition.y *= window.innerHeight;
		renderer.setScissor( screenSpacePosition.x - sunsqW / 2, screenSpacePosition.y - sunsqH / 2, sunsqW, sunsqH );
		renderer.setScissorTest( true );
		postprocessing.godraysFakeSunUniforms[ "fAspect" ].value = window.innerWidth / window.innerHeight;
		postprocessing.scene.overrideMaterial = postprocessing.materialGodraysFakeSun;
		renderer.render( postprocessing.scene, postprocessing.camera, postprocessing.rtTextureColors );
		renderer.setScissorTest( false );
		// -- Draw scene objects --
		// Colors
		scene.overrideMaterial = null;
		renderer.render( scene, camera, postprocessing.rtTextureColors );
		// Depth
		scene.overrideMaterial = materialDepth;
		renderer.render( scene, camera, postprocessing.rtTextureDepth, true );
		// -- Render god-rays --
		// Maximum length of god-rays (in texture space [0,1]X[0,1])
		var filterLen = 1.0;
		// Samples taken by filter
		var TAPS_PER_PASS = 6.0;
		// Pass order could equivalently be 3,2,1 (instead of 1,2,3), which
		// would start with a small filter support and grow to large. however
		// the large-to-small order produces less objectionable aliasing artifacts that
		// appear as a glimmer along the length of the beams
		// pass 1 - render into first ping-pong target
		var pass = 1.0;
		var stepLen = filterLen * Math.pow( TAPS_PER_PASS, -pass );
		postprocessing.godrayGenUniforms[ "fStepSize" ].value = stepLen;
		postprocessing.godrayGenUniforms[ "tInput" ].value = postprocessing.rtTextureDepth.texture;
		postprocessing.scene.overrideMaterial = postprocessing.materialGodraysGenerate;
		renderer.render( postprocessing.scene, postprocessing.camera, postprocessing.rtTextureGodRays2 );
		// pass 2 - render into second ping-pong target
		pass = 2.0;
		stepLen = filterLen * Math.pow( TAPS_PER_PASS, -pass );
		postprocessing.godrayGenUniforms[ "fStepSize" ].value = stepLen;
		postprocessing.godrayGenUniforms[ "tInput" ].value = postprocessing.rtTextureGodRays2.texture;
		renderer.render( postprocessing.scene, postprocessing.camera, postprocessing.rtTextureGodRays1  );
		// pass 3 - 1st RT
		pass = 3.0;
		stepLen = filterLen * Math.pow( TAPS_PER_PASS, -pass );
		postprocessing.godrayGenUniforms[ "fStepSize" ].value = stepLen;
		postprocessing.godrayGenUniforms[ "tInput" ].value = postprocessing.rtTextureGodRays1.texture;
		renderer.render( postprocessing.scene, postprocessing.camera , postprocessing.rtTextureGodRays2  );
		// final pass - composite god-rays onto colors
		postprocessing.godrayCombineUniforms["tColors"].value = postprocessing.rtTextureColors.texture;
		postprocessing.godrayCombineUniforms["tGodRays"].value = postprocessing.rtTextureGodRays2.texture;
		postprocessing.scene.overrideMaterial = postprocessing.materialGodraysCombine;
		renderer.render( postprocessing.scene, postprocessing.camera );
		postprocessing.scene.overrideMaterial = null;
	}
	else {
		renderer.clear();
		renderer.render( scene, camera );
	}
}

/*******************************************************************************
 */
function drawElements(){
	var floorPlane,
		floorColor,
		floorGeometry,
		floorMaterial;

	// Base Plane
	floorColor = 0x1A1A1A;
	floorGeometry = new THREE.PlaneGeometry( 3, 400 );
	floorMaterial = new THREE.MeshLambertMaterial( {color: floorColor, side:THREE.DoubleSide} );
	floorPlane = new THREE.Mesh( floorGeometry, floorMaterial );
	floorPlane.position.set(0, 0, -35);
	floorPlane.rotation.set(90*3.14/180, 0, 0);
	scene.add(floorPlane);

	// Target Square
	floorColor = 0x0000FF;
	floorGeometry = new THREE.PlaneGeometry( 4, 2 );
	floorMaterial = new THREE.MeshLambertMaterial( {color: floorColor, side:THREE.DoubleSide} );
	floorPlane = new THREE.Mesh( floorGeometry, floorMaterial );
	floorPlane.position.set(0, 4, -20);
	scene.add(floorPlane);


	// Reference Side Squares
	drawSideSquare(1, 1, -1, 1, 0);
	drawSideSquare(1, 1, -2, 1, -10);
	drawSideSquare(1, 1, -2, 1, -20);
	drawSideSquare(1, 1, -2, 1, -30);
	drawSideSquare(1, 1, -2, 1, -40);
	drawSideSquare(1, 1, -2, 1, -50);
	drawSideSquare(1, 1, -2, 1, -60);
	drawSideSquare(1, 1, -2, 1, -70);
	drawSideSquare(1, 1, -2, 1, -80);
	drawSideSquare(1, 1, -2, 1, -90);
	drawSideSquare(1, 1, -2, 1, -100);
	drawSideSquare(1, 1, -2, 1, -120);
	drawSideSquare(1, 1, -2, 1, -140);
	drawSideSquare(1, 1, -2, 1, -160);
	drawSideSquare(1, 1, -2, 1, -180);
	drawSideSquare(1, 1, -2, 1, -200);
	drawSideSquare(1, 1, -2, 1, -220);
	drawSideSquare(1, 1, -2, 1, -240);
	drawSideSquare(1, 1, -2, 1, -260);
	drawSideSquare(1, 1, -2, 1, -280);
	drawSideSquare(1, 1, -2, 1, -300);
	drawSideSquare(1, 1, -2, 1, -320);

	drawCube(10, 10, 10, 15, 8, -10);

}

/*******************************************************************************
 */
function drawSideSquare(squareW, squareH, squareX, squareY, squareZ){
	squareGeometry = new THREE.PlaneGeometry( squareW, squareH);
	squareMaterial = new THREE.MeshLambertMaterial( {color: 0xFF0000, side:THREE.DoubleSide} );
	squarePlane = new THREE.Mesh( squareGeometry, squareMaterial );
	squarePlane.position.set(squareX, squareY, squareZ);
	scene.add(squarePlane);
}

/*******************************************************************************
 */
function drawCube(cubeW, cubeH, cubeD, cubeX, cubeY, cubeZ){
	var cubeGeometry = new THREE.BoxGeometry( cubeW, cubeH, cubeD );
	var cubeMaterial = new THREE.MeshLambertMaterial( {color: 0xd3d3d3, wireframe:false} );
	cube = new THREE.Mesh( cubeGeometry, cubeMaterial );
	cube.position.set(cubeX, cubeY, cubeZ);
	scene.add(cube);
}

var blocker = document.getElementById( 'blocker' );
var instructions = document.getElementById( 'instructions' );

// var havePointerLock = 'pointerLockElement' in document || 'mozPointerLockElement' in document || 'webkitPointerLockElement' in document;
//
// if ( havePointerLock ) {
//
// 	var element = document.body;
//
// 	var pointerlockchange = function ( event ) {
//
// 		if ( document.pointerLockElement === element || document.mozPointerLockElement === element || document.webkitPointerLockElement === element ) {
//
// 			controlsEnabled = true;
// 			controls.enabled = true;
//
// 			blocker.style.display = 'none';
//
// 		} else {
//
// 			controls.enabled = false;
//
// 			blocker.style.display = '-webkit-box';
// 			blocker.style.display = '-moz-box';
// 			blocker.style.display = 'box';
//
// 			instructions.style.display = '';
//
// 		}
//
// 	};
//
// 	var pointerlockerror = function ( event ) {
// 		instructions.style.display = '';
// 	};
//
// 	// Hook pointer lock state change events
// 	document.addEventListener( 'pointerlockchange', pointerlockchange, false );
// 	document.addEventListener( 'mozpointerlockchange', pointerlockchange, false );
// 	document.addEventListener( 'webkitpointerlockchange', pointerlockchange, false );
//
// 	document.addEventListener( 'pointerlockerror', pointerlockerror, false );
// 	document.addEventListener( 'mozpointerlockerror', pointerlockerror, false );
// 	document.addEventListener( 'webkitpointerlockerror', pointerlockerror, false );
//
// 	instructions.addEventListener( 'click', function ( event ) {
// 		instructions.style.display = 'none';
// 		// Ask the browser to lock the pointer
// 		element.requestPointerLock = element.requestPointerLock || element.mozRequestPointerLock || element.webkitRequestPointerLock;
//
// 		if ( /Firefox/i.test( navigator.userAgent ) ) {
// 			var fullscreenchange = function ( event ) {
// 				if ( document.fullscreenElement === element || document.mozFullscreenElement === element || document.mozFullScreenElement === element ) {
// 					document.removeEventListener( 'fullscreenchange', fullscreenchange );
// 					document.removeEventListener( 'mozfullscreenchange', fullscreenchange );
// 					element.requestPointerLock();
// 				}
// 			};
//
// 			document.addEventListener( 'fullscreenchange', fullscreenchange, false );
// 			document.addEventListener( 'mozfullscreenchange', fullscreenchange, false );
//
// 			element.requestFullscreen = element.requestFullscreen || element.mozRequestFullscreen || element.mozRequestFullScreen || element.webkitRequestFullscreen;
//
// 			element.requestFullscreen();
//
// 		}
// 		else {
// 			element.requestPointerLock();
// 		}
//
// 	}, false );
//
// }
// else {
// 	instructions.innerHTML = 'Your browser doesn\'t seem to support Pointer Lock API';
// }

/*******************************************************************************
 */
function initPostprocessing() {
	postprocessing.scene = new THREE.Scene();
	postprocessing.camera = new THREE.OrthographicCamera( window.innerWidth / - 2, window.innerWidth / 2,  window.innerHeight / 2, window.innerHeight / - 2, -10000, 10000 );
	postprocessing.camera.position.z = 100;
	postprocessing.scene.add( postprocessing.camera );
	var pars = { minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter, format: THREE.RGBFormat };
	postprocessing.rtTextureColors = new THREE.WebGLRenderTarget( window.innerWidth, window.innerHeight, pars );
	// Switching the depth formats to luminance from rgb doesn't seem to work. I didn't
	// investigate further for now.
	// pars.format = THREE.LuminanceFormat;
	// I would have this quarter size and use it as one of the ping-pong render
	// targets but the aliasing causes some temporal flickering
	postprocessing.rtTextureDepth = new THREE.WebGLRenderTarget( window.innerWidth, window.innerHeight, pars );
	// Aggressive downsize god-ray ping-pong render targets to minimize cost
	var w = window.innerWidth / 4.0;
	var h = window.innerHeight / 4.0;
	postprocessing.rtTextureGodRays1 = new THREE.WebGLRenderTarget( w, h, pars );
	postprocessing.rtTextureGodRays2 = new THREE.WebGLRenderTarget( w, h, pars );
	// god-ray shaders
	var godraysGenShader = THREE.ShaderGodRays[ "godrays_generate" ];
	postprocessing.godrayGenUniforms = THREE.UniformsUtils.clone( godraysGenShader.uniforms );
	postprocessing.materialGodraysGenerate = new THREE.ShaderMaterial( {
		uniforms: postprocessing.godrayGenUniforms,
		vertexShader: godraysGenShader.vertexShader,
		fragmentShader: godraysGenShader.fragmentShader
	} );
	var godraysCombineShader = THREE.ShaderGodRays[ "godrays_combine" ];
	postprocessing.godrayCombineUniforms = THREE.UniformsUtils.clone( godraysCombineShader.uniforms );
	postprocessing.materialGodraysCombine = new THREE.ShaderMaterial( {
		uniforms: postprocessing.godrayCombineUniforms,
		vertexShader: godraysCombineShader.vertexShader,
		fragmentShader: godraysCombineShader.fragmentShader
	} );
	var godraysFakeSunShader = THREE.ShaderGodRays[ "godrays_fake_sun" ];
	postprocessing.godraysFakeSunUniforms = THREE.UniformsUtils.clone( godraysFakeSunShader.uniforms );
	postprocessing.materialGodraysFakeSun = new THREE.ShaderMaterial( {
		uniforms: postprocessing.godraysFakeSunUniforms,
		vertexShader: godraysFakeSunShader.vertexShader,
		fragmentShader: godraysFakeSunShader.fragmentShader
	} );
	postprocessing.godraysFakeSunUniforms.bgColor.value.setHex( bgColor );
	postprocessing.godraysFakeSunUniforms.sunColor.value.setHex( sunColor );
	postprocessing.godrayCombineUniforms.fGodRayIntensity.value = 0.75;
	postprocessing.quad = new THREE.Mesh(
		new THREE.PlaneBufferGeometry( window.innerWidth, window.innerHeight ),
		postprocessing.materialGodraysGenerate
	);
	postprocessing.quad.position.z = -9900;
	postprocessing.scene.add( postprocessing.quad );
}

init();
update();
