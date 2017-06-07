'use strict';
/**
 * Initial Page Layout setup
 */

/**
 * Generate Sketches menu
 */


var sketches = [
        {
            'id': 'squareGrid',
            'sketchName': 'square grid',
            'enabled': false
        },
        {
            'id': 'particleSystem',
            'sketchName': 'particle system',
            'enabled': false
        },
        {
            'id': 'birdsNest',
            'sketchName': 'birds nest',
            'enabled': false
        },
        {
            'id': 'network',
            'sketchName': 'network',
            'enabled': false
        },
        {
            'id': 'noiseSpiral',
            'sketchName': 'noise spiral',
            'enabled': false
        },
        {
            'id': 'wiggleLines',
            'sketchName': 'wiggle lines',
            'enabled': false
        },
        {
            'id': 'polygonScribble',
            'sketchName': 'polygon scribble',
            'enabled': false
        },
        {
            'id': 'generativeDots',
            'sketchName': 'generative dots',
            'enabled': false
        }
    ];

var ul = document.getElementsByClassName('projectList')[0];
var li, linkElement, sketchID;

for (var i=0;i<sketches.length;i++){
    sketchID = sketches[i].id;
    li = document.createElement('li');
    linkElement = document.createElement('a');
    li.setAttribute('id', sketchID);
    linkElement.innerHTML = sketches[i].sketchName;
    ul.appendChild(li);
    li.appendChild(linkElement);
    li.addEventListener('click', loadSketch);
}



/********* Variables for the square grid *************************************/
var gridSize = 100,
    iterations = 20,    // number of times loop runs
    rotation = 5;        // rotation in degree


/********* Variables for the particle system *********************************/
var systemOuterRadius = 130;        // particle system
var ps = new ParticleSystem(systemCenter);
var systemCenter;

/********* Variables for the bird's nest *************************************/
var num = 100;

/********* Variables for the network *****************************************/
var numNetwork = 36;

/********* Variables for the noise spiral ************************************/
var border = 20;
var rotations = 25;

/********* Variables for the wiggle lines ************************************/
var border = 10;            // frame around image
var xstep = 2;              // stepsize (resolution) in x direction
var ystep = border;         // rows
var lastx;
var lasty;

/********* Variables for the polygon scribble ********************************/
var sides,
    variance,
    iterations,
    radius,
    scribbleX,
    scribbleY,
    angle;

/********* Variables for the Generative Gestaltung ********************************/

//max. Anzahl Kreise
var maxCount = 5000;
var currentCount = 1;
var arrayX = [maxCount];
var arrayY = [maxCount];

//Radius
var r = [maxCount];

/********* Processing SETUP function *****************************************/
function setup(){
    var canvas = createCanvas(800, 400);
    canvas.parent('content');
    stroke('rgba(0,0,0,0.3)');
    rectMode(CENTER);
    // width and height only exist after canvas is created
     systemCenter = p5.Vector(width/2, height/2);

     // next code is for polygon scribble
     sides = 10;
     variance = 5;
     iterations = 15;
     radius = 10;
     scribbleX = [];
     scribbleY = [];
     angle = radians(360/sides);

     for (var i=0; i < sides; i++) {
         scribbleX[i] = cos(angle*i+50) * radius;
         scribbleY[i] = sin(angle*i+50) * radius;
     }

     // next code is for the Generative Gestaltung
    arrayX[0] = width/2;
    arrayY[0] = height/2;
    r[0] = 20;
}

/********* Processing DRAW function *****************************************/
function draw(){
    clear();
    if(sketches[0].enabled){
        stroke('rgba(0,0,0,0.3)');

        for (var x = gridSize/2; x < width; x+=gridSize) {
            for (var y = gridSize/2; y < height; y+=gridSize) {
                var rectSize = gridSize-10;      // set rect size 10px smaller than grid

                push();
                translate(x, y);
                for (var i = 0; i < iterations; i++) {
                    // fill (0,random(20));
                    rect(0, 0, rectSize, rectSize);
                    rectSize = rectSize / (sin(radians(rotation)) + cos(radians(rotation)));
                    rotate(radians(rotation));
                }
                pop();
            }
        }
        if(rotation < 90) {
            rotation+=0.5;
        }
        else {
            rotation = 0;
        }
    }

    if(sketches[1].enabled){
        ps.run();
        if(ps.particles.length<30000){
            ps.addParticle();
        }
    }

    if(sketches[2].enabled){
        stroke('rgba(0,0,100,0.3)');

        var radius = width/4-20;
        translate(width/2, height/2);   // move the origin to the center

        for (var i = 0; i < num; i++) {
            var angle1 = random(0, TWO_PI);  // set random number between 0 and 360
            var x1 = sin(angle1) * radius;    //  first point on circle
            var y1 = cos(angle1) * radius;
            var angle2 = random(0, TWO_PI);
            var x2 = sin(angle2) * radius;    // second point on circle
            var y2 = cos(angle2) * radius;
            line(x1, y1, x2, y2);               // line between first and second point

            // second point on circle
            // line between  rst and second point
        }
    }

    if(sketches[3].enabled){
        stroke('rgba(255,0,0,0.4)');

        translate(width/2, height/2);   // move origin to screen center

        var angle1 = [numNetwork];        // these are arrays of numbers.
        var angle2 = [numNetwork];        // the amount is defined by num
        var x1 = [numNetwork];
        var x2 = [numNetwork];
        var y1 = [numNetwork];
        var y2 = [numNetwork];

        for (var i = 0; i < numNetwork; i++) {
            var radius = random(88, width/4-10);
            angle1[i] = random(0, TWO_PI);
            x1[i] = sin(angle1[i]) * radius;
            y1[i] = cos(angle1[i]) * radius;
            angle2[i] = random(0, TWO_PI);
            x2[i] = sin(angle2[i]) * radius;
            y2[i] = cos(angle2[i]) * radius;
        }

        for (var i = 0; i < numNetwork; i++) {
            for (var a = 1; a < numNetwork; a++) {
            strokeWeight(random(0.5, 1.5));
            line(x1[i], y1[i], x2[a], y2[a]);
            }
        }
    }

    if(sketches[4].enabled){
        stroke('rgba(0,135,0,0.4)');

        var radius = width/5 - border;
        var centX = width/2;        // center of canvas
        var centY = height/2;
        var x, y;
        var lastx = 0;
        var lasty = 0;
        var radiusNoise = random(10);

        for ( var ang = 0; ang <= 360*rotations; ang += 0.5) {
            radiusNoise += 0.5;
            radius -= 0.005;
            var thisRadius = radius - (noise(radiusNoise) * 10);
            var rad = radians(ang);
            x = centX + (thisRadius * cos(rad));
            y = centY + (thisRadius * sin(rad));
            if (lastx > 0) {
                line(x, y, lastx, lasty);
            }
            lastx = x;
            lasty = y;
        }
    }

    if(sketches[5].enabled){
        stroke(0);
        for (var i = ystep/2; i <= height-(border+ystep/2); i+=ystep) {
            for (var x = border; x <= width-border; x +=xstep) {
                var y = noise(random(border, border+ystep))*15;
                if (x == border) {
                    lastx= 0;
                }
                if (lastx > 0) {
                    line(x, y+i, lastx, lasty+i);
                }
                lastx = x;
                lasty = y;
            }
        }
    }

    if(sketches[6].enabled){
        stroke('rgba(80,80,80,0.2)');
        for (var a=0; a < iterations; a++) {            // array of polygon coordinates
            for (var i=0; i < sides; i++) {
                scribbleX[i] += random(-variance, variance);
                scribbleY[i] += random(-variance, variance);
            }

            beginShape();                               // draw polygon shape
            curveVertex(scribbleX[sides-1]+width/2, scribbleY[sides-1]+height/2);
            for (var i=0; i < sides; i++) {
              curveVertex(scribbleX[i]+width/2, scribbleY[i]+height/2);
            }
            curveVertex(scribbleX[0]+width/2, scribbleY[0]+height/2);
            curveVertex(scribbleX[1]+width/2, scribbleY[1]+height/2);
            endShape();
        }
    }

    if(sketches[7].enabled){
        //Radius und Position werdern zufällig festgelegt.
        var newR = random(1, 7);
        var newX = random(0+newR, width-newR);
        var newY = random(0+newR, height-newR);


        var closestDist = 100000000;
        var closestIndex = 0;


        // Consultar cuáles son los círculos más cercanos. Si la distancia es menor que cualquier otra, un valor de referencia en el "closestIndex" variable se almacena.
        for(var i=0; i < currentCount; i++) {
            var newDist = dist(newX,newY, arrayX[i],arrayY[i]);
            if (newDist < closestDist) {
              closestDist = newDist;
              closestIndex = i;
            }
        }

        // Un Nuevo círculo se coloca con precisión al lado del distrito más cercana. Esto se hace mediante la computación ángulo significa "atan2"
        var angle = atan2(newY-arrayY[closestIndex], newX-arrayX[closestIndex]);

        arrayX[currentCount] = arrayX[closestIndex] + cos(angle) * (r[closestIndex]+newR);
        arrayY[currentCount] = arrayY[closestIndex] + sin(angle) * (r[closestIndex]+newR);
        r[currentCount] = newR;
        currentCount++;

        // Draw Circles
        for (var i=0 ; i < currentCount; i++) {
           var Alpha = 20+i/4;
           fill(0, 35, 75, Alpha);
           stroke(0, 35, 75, Alpha+5);
           ellipse(arrayX[i],arrayY[i], r[i]*2,r[i]*2);
        }

        if (currentCount >= maxCount){
            noLoop();
        }
    }
}

function loadSketch(e){
    var ID = this.id;
    switch(ID){
        case 'squareGrid':
            clearAllSketches();
            sketches[0].enabled = true;
            break;
        case 'particleSystem':
            clearAllSketches();
            sketches[1].enabled = true;
            break;
        case 'birdsNest':
            clearAllSketches();
            sketches[2].enabled = true;
            break;
        case 'network':
            clearAllSketches();
            sketches[3].enabled = true;
            break;
        case 'noiseSpiral':
            clearAllSketches();
            sketches[4].enabled = true;
            break;
        case 'wiggleLines':
            clearAllSketches();
            sketches[5].enabled = true;
            break;
        case 'polygonScribble':
            clearAllSketches();
            sketches[6].enabled = true;
            break;
        case 'generativeDots':
                clearAllSketches();
                sketches[7].enabled = true;
                break;
        default:
            clearAllSketches();
    }
}

function clearAllSketches(){
    for(var f=0;f<sketches.length;f++){
        sketches[f].enabled = false;
    }
}



/*******************************************************************************
 * Classes definition for Particle System
 */

/*******************************************************************************
 * Particle Class
 * Particles can be
 *    particleType = 0 outer (circular motion)
 *    particleType = 1 inner (move towards the centers)Adapted by Evelyn Eastmond
 */
function Particle(dotSpeed, dotRadius, rotationRadius, centerPoint, particleType, particleColor) {
  this.dotSpeed = dotSpeed;
  this.dotRadius = dotRadius;
  this.rotationRadius = rotationRadius;
  this.centerPoint = centerPoint;
  this.particleType = particleType;
  this.particleColor = particleColor;
  // Angle to define the particle's starting position on the outer circle
  this.angle = Math.random() * (6.28 - 0 + 1);

  this.run = function(){
    this.update();
    this.draw();
  };

  this.update = function(){
    // Update for inner particles. Movement towardes the center.
    if(this.particleType == 0){
        // Esta línea debería mover las partículas hacia el centro del canvas
        this.rotationRadius -= this.dotSpeed/3;
    }
    // Update angle for outer particles. Circular Motion.
    if(this.particleType == 1){
      this.angle+=this.dotSpeed/100;
    }
  };

  this.draw = function(){
    var pos_x, pos_y;
    pos_x = Math.cos(this.angle)*this.rotationRadius;
    pos_y = Math.sin(this.angle)*this.rotationRadius;

    stroke(this.particleColor);
    push();
        translate(width/2, height/2);
        rect(pos_x, pos_y, 1, 1);
    pop();
  };

  // Is the Particle alive or dead?
  this.isDead = function(){
    if ( this.particleType == 0 && this.rotationRadius <= 0.0) {
      return true;
    }
    if ( this.particleType == 1 && this.angle >= 6.28 ) {
      return true;
    }
    else {
      return false;
    }
  }
 }

/*******************************************************************************
  * Particle System Class
  */
function ParticleSystem(systemCenterPoint) {
  this.systemCenterPoint = systemCenterPoint;
  this.particles = []

  var dotRadius = 1,
      rotationRadius = systemOuterRadius;

  this.addParticle = function(){
    var dotSpeed = Math.random() * (0.7 - 0.05) + 0.05,
        particleType = Math.round(Math.random()),
        randomR = Math.floor(Math.random() * (255 - 200) + 200),
        randomG = Math.floor(Math.random() * (200 - 10) + 10),
        randomB = Math.floor(Math.random() * (80 - 20) + 20),
        randomA = Math.random(),
        particleColor = 'rgba(' + randomR + ',' + randomG + ',' + randomB + ',' + randomA + ')';

    if(particleType == 0){
      rotationRadius = Math.random() * (systemOuterRadius - 100) + 100;
    //  rotationRadius = Math.random() * (90 - 70) + 70;
    //  rotationRadius = Math.random() * (systemOuterRadius - (systemOuterRadius-50) + (systemOuterRadius-50));
    }

    this.particles.push(new Particle(dotSpeed, dotRadius, rotationRadius, this.systemCenterPoint, particleType, particleColor));
  }

  // Call run method of each movingDot
  this.run = function(){
    for (var a=0;a<this.particles.length;a++){
      var particle = this.particles[a];
      particle.run();
      if(particle.isDead()) {
        this.particles.splice(a, 1);
      }
    }
  }

 };

 /*******************************************************************************
 */
