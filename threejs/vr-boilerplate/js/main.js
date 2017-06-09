
	var scene,
	    camera,
	    renderer,
	    light,
			mouse,
			stereoEnabled = true,
			stereoFallbackEnabled = false,
			stereoFallback = false,
			stereoEffect,
			vrEffect;

	function init() {
		if ( stereoEnabled && (WEBVR.isLatestAvailable() === false) && !stereoFallbackEnabled ) {
			// TODO create my own VR enabled message. (desktop, mobile, etc)
				document.body.appendChild( WEBVR.getMessage() );
		}

		/*****************************************************************************
	   Basic THREE.js scene objects setup: renderer, scene and camera */
	  renderer = new THREE.WebGLRenderer({antialias: true, alpha: false});
	  renderer.setSize(window.innerWidth, window.innerHeight);
	  renderer.setPixelRatio(window.devicePixelRatio);
	  renderer.setClearColor(0x000000);

	  scene = new THREE.Scene();

	  camera = new THREE.PerspectiveCamera(85, window.innerWidth / window.innerHeight, .1);
	  camera.position.z = 7;

		controls = new THREE.OrbitControls(camera, renderer.domElement);

		var ambientLight = new THREE.AmbientLight( 0xFFFFFF, 0.5 );
		scene.add( ambientLight );

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

	  update();
	}

	/*******************************************************************************
	 Updates all the elements on the screen - requestAnimationFrame */
	function update() {
	  requestAnimationFrame(update);

		if(stereoEnabled){
			if(stereoFallbackEnabled){
					stereoEffect.render( scene, camera );
			}else{
				vrEffect.render( scene, camera );
				controls.update();
			}
		}else{
			renderer.render(scene, camera);
		}
	}

	init();
