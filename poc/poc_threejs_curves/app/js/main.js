/*
 * Main Site
 *
 * Global Namespace
 */
 var curves_threejs = window.curves_threejs || {};

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
        camera.position.z = 400;

        renderer = new THREE.WebGLRenderer();
        renderer.setPixelRatio( window.devicePixelRatio );
        renderer.setSize( window.innerWidth, window.innerHeight );
        document.body.appendChild( renderer.domElement );

        
        controls = new THREE.OrbitControls( camera, renderer.domElement );

        // // Create a Cube Mesh with basic material
        // var geometry = new THREE.BoxGeometry( 1, 1, 1 );
        // var material = new THREE.MeshBasicMaterial( { color: "#433F81" } );
        // var cube = new THREE.Mesh( geometry, material );

        // // Add cube to Scene     
        // scene.add( cube );

        var x0 = 10,
            y0 = 10,
            x1 = 100,
            y1 = 100,
            x2 = 400,
            y2 = 400;

        // var geometry = new THREE.Geometry();
        // geometry.vertices.push(new THREE.Vector2(x1, y1, 0));
        // geometry.vertices.push(new THREE.Vector2(x2, y2, 0));
        
        // var material = new THREE.LineBasicMaterial( { color: 0xffffff, linewidth: 2 } );
        
        // var line = new THREE.Line(geometry, material);
        
        // scene.add(line); 

        // var SUBDIVISIONS = 20;
        // var geometry = new THREE.Geometry();
        // var curve = new THREE.QuadraticBezierCurve3();
        // curve.v0 = new THREE.Vector3(x0, y0, 0);
        // curve.v1 = new THREE.Vector3(x1, y1, 0);
        // curve.v2 = new THREE.Vector3(x2, y2, 0);
        // for (var j = 0; j < SUBDIVISIONS; j++) {
        //    geometry.vertices.push( curve.getPoint(j / SUBDIVISIONS) )
        // }

        // var material = new THREE.LineBasicMaterial( { color: 0xffffff, linewidth: 2 } );
        // var line = new THREE.Line(geometry, material);
        // scene.add(line);

        // smooth my curve over this many points
        var numPoints = 100;

        var spline = new THREE.SplineCurve3([
           new THREE.Vector3(0, 0, 0),
           new THREE.Vector3(0, 200, 0),
           new THREE.Vector3(150, 150, 0),
           new THREE.Vector3(150, 50, 0),
           new THREE.Vector3(250, 100, 0),
           new THREE.Vector3(250, 300, 0)
        ]);

        var material = new THREE.LineBasicMaterial({
            color: 0xff00f0,
        });

        var geometry = new THREE.Geometry();
        var splinePoints = spline.getPoints(numPoints);

        for(var i = 0; i < splinePoints.length; i++){
            geometry.vertices.push(splinePoints[i]);  
        }

        

        var line = new THREE.Line(geometry, material);
        scene.add(line);


        /*
         * Handles window resize events
         */
        window.onresize = function () {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize( window.innerWidth, window.innerHeight );
        };

        animate();
    }

    
     /*
     * Updates objects on each frame
     */
    function animate() {
        requestAnimationFrame( animate );

        renderer.render( scene, camera );
    }

    init();

}(curves_threejs));
