/*
 * Main Site
 *
 * Global Namespace
 */
 var dancing_lines = window.dancing_lines || {};

/*
 * Global logic
 * @namespace
 */

(function (context) {

    'use strict';

    var camera, scene, renderer, container, controls;
    var cube;

    /*  
     * Init all functions
     */
    function init() {
        scene = new THREE.Scene();

        camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
        camera.position.z = 22;

        renderer = new THREE.WebGLRenderer();
        renderer.setPixelRatio( window.devicePixelRatio );
        renderer.setSize( window.innerWidth, window.innerHeight );
        document.body.appendChild( renderer.domElement );

        controls = new THREE.OrbitControls( camera, renderer.domElement );


        //Create a closed wavey loop
        var curve = new THREE.CatmullRomCurve3( [
            new THREE.Vector3( 0, 0, 0 ),
            new THREE.Vector3( 0, 5, 5 ),
            new THREE.Vector3( 5, 10, 0 ),
            new THREE.Vector3( 5, 5, 5 ),
            new THREE.Vector3( 10, 0, 10 )
        ] );

        var geometry = new THREE.Geometry();
        geometry.vertices = curve.getPoints( 50 );
        
        /********************************/
        // console.log(curve.getPoints(50));
        /********************************/
        
        var material = new THREE.LineBasicMaterial( { color : 0xfff000 } );

        // Create the final object to add to the scene
        var curveObject = new THREE.Line( geometry, material );

        scene.add(curveObject);

        window.addEventListener( 'resize', onWindowResize, false );

        animate();
    }

    /*
     * Handles window resize events
     */
    function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize( window.innerWidth, window.innerHeight );
    }

    /*
     * Updates objects on each frame
     */
    function animate() {
        requestAnimationFrame( animate );

        renderer.render( scene, camera );
    }

    init();

}(dancing_lines));
