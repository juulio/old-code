// Thneed trees - Julio Del Valle - 2016 - Costa Rica
'use strict';

 //---------------------------------------------------------
 // THREE.js basic variables declaration
var renderer,
  camera,
  scene,
  loader,
  textMaterial,
  textGeometry,
  textMesh,
  today,
  time,
  hours,
  minutes,
  seconds,
  globalFont;


// 1. Create renderer object for THREE.js
renderer = new THREE.WebGLRenderer();
renderer.setClearColor(0x000000);
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

scene = new THREE.Scene();

camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 50 );
camera.position.z = 20;
camera.position.x = 20;

var ambientLight = new THREE.AmbientLight( 0x000000 );
scene.add( ambientLight );

var lights = [];
lights[ 0 ] = new THREE.PointLight( 0xffffff, 1, 0 );
lights[ 1 ] = new THREE.PointLight( 0xffffff, 1, 0 );
lights[ 2 ] = new THREE.PointLight( 0xffffff, 1, 0 );

lights[ 0 ].position.set( 0, 200, 0 );
lights[ 1 ].position.set( 100, 200, 100 );
lights[ 2 ].position.set( - 100, - 200, - 100 );

scene.add( lights[ 0 ] );
scene.add( lights[ 1 ] );
scene.add( lights[ 2 ] );

function checkTime(i) {
  return (i < 10) ? "0" + i : i;
}

function setTime(){
  today = new Date();
  hours = checkTime(today.getHours());
  minutes = checkTime(today.getMinutes());
  seconds = checkTime(today.getSeconds());

  time = hours + ':' + minutes + ':' + seconds;
}

function renderTextGeometry(font, text){
  textMaterial = new THREE.MeshPhongMaterial(
     { color: 0x00ff00, specular: 0xffffff }
   );

  textGeometry = new THREE.TextGeometry( text, {
    size: 4,
    height: 2,
    font: font,
    curveSegments: 10,
    bevelThickness: 1,
    bevelSize: 1,
    bevelEnabled: true
  });

  scene.remove(textMesh);
  textMesh =  new THREE.Mesh( textGeometry, textMaterial );

  scene.add( textMesh );
}


// 1. Set Current time
setTime();

// 2. Update time every second
setInterval(function() {
  setTime();
}, 1000);

// 3. Render the 3D text on the screen
function update(font){
  requestAnimationFrame(update);
  renderTextGeometry(globalFont, time);
  renderer.render(scene, camera);
}

// Load the JSON font and set the scene
loader = new THREE.FontLoader();
var fontPath = 'fonts/gotham_black_regular.json';

loader.load(fontPath, function(font){
  globalFont = font;
  renderTextGeometry(font, time);
  update();
});
