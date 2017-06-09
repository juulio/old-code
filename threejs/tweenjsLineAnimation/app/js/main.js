/*
 * Possible Costa Rica
 * Javascript TweenJS - Three.js
 *
 */
 var tweenjsLineAnimation = window.tweenjsLineAnimation || {};

/*
 * Global logic
 * @namespace
 */

(function (context) {

	'use strict';

    var canvas, context;
    var tweens=[];

    function setCanvas(){
        canvas = document.createElement( 'canvas' );     
        canvas.width = 400;
        canvas.height = 400;
        canvas.style.border = "solid 1px #000";
        canvas.style.display = "block";
        canvas.style.margin = "0 auto";
        
        context = canvas.getContext( '2d' );
        context.lineWidth = 2;
        context.strokeStyle = "rgb(0,0,0)";
        document.body.appendChild( canvas );
    }

    function loadJSON(callback) {   
        var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
        xobj.open('GET', 'js/points.json', true); // Replace 'my_data' with the path to your file
        xobj.onreadystatechange = function () {
            if (xobj.readyState == 4 && xobj.status == "200") {
                // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
                callback(xobj.responseText);
            }
        };
        xobj.send(null);  
    }

    function createTweens(jsonPoints){
        var currentTween, start, temp, end;

        for (var i=0;i<jsonPoints.length; i++){
            if(i==0){
                start = {
                    x : jsonPoints[i].startX,
                    y: jsonPoints[i].startY
                };
            }
            temp = {
                x : jsonPoints[i].startX,
                y: jsonPoints[i].startY
            },
            end = {
                x : jsonPoints[i].endX,
                y : jsonPoints[i].endY
            };

            console.log(start);

            currentTween = new TWEEN.Tween(start).to(end, 1000).onUpdate( function () {
                context.beginPath();
                context.moveTo( start.x, start.y );
                context.lineTo( temp.x, temp.y );
                context.closePath();
                context.stroke();

                temp.x = start.x;
                temp.y = start.y;                
            });
            // currentTween.start();
            tweens.push(currentTween)
        }
    }

    function chainTweens(){
        tweens[0].chain(tweens[1], tweens[2]);
        tweens[1].chain(tweens[3], tweens[4]);
        // tweens[2].chain(tweens[4]);
    }

    function init( ) {

        setCanvas();

        var start = { x : 200, y: 0 },
            temp = { x: 200, y: 0 },
            end = { x : 200, y : 200 };
        
        var tween01 = new TWEEN.Tween(start)
            .to(end, 2000)
            .onUpdate( function () {
                context.beginPath();
                context.moveTo( start.x, start.y );
                context.lineTo( temp.x, temp.y );
                context.closePath();
                context.stroke();

                temp.y = start.y;
            });

        var start2 = { x : 200, y: 200 },
        temp2 = { x: 200, y: 200 },
        end2 = { x : 100, y : 200 };

        var tween02 = new TWEEN.Tween(start2)
            .to(end2, 2000)
            .onUpdate( function () {
                context.beginPath();
                context.moveTo( start2.x, start2.y );
                context.lineTo( temp2.x, temp2.y );
                context.closePath();
                context.stroke();

                temp2.y = start2.y;
            });

        tween01.chain(tween02);
        tween01.start();

        // loadJSON(function(response) {
        //     createTweens(JSON.parse(response));
        //     // chainTweens();
        //     // console.log(tweens);
        //     tweens[0].chain(tweens[1]);
        //     tweens[0].start();
        //     // tweens[1].start();
        // });
    }

    function animate( time ) {
        requestAnimationFrame( animate );
        TWEEN.update( time );
    }


    init();
    animate();

}(tweenjsLineAnimation));

// sin ( 0.0 ) = 0
// sin ( 0.1 ) = 0.998334
// sin ( 0.2 ) = 0.198669
// sin ( 0.3 ) = 0.295520
// sin ( 0.4 ) = 0.389418
// sin ( 0.5 ) = 0.479425


// [
//     [
//         {"stroke": [0, 0, 0]},
//         {"strokeWidth": 1},
//         {"bezier": [135, 92, 166, 94, 219, 67, 237, 104]},
//         {"bezier": [237, 104, 254, 139, 227, 195, 253, 223]},
//         {"bezier": [253, 223, 274, 246, 325, 238, 353, 236]},
//         {"bezier": [353, 236, 380, 232, 399, 222, 424, 214]},
//         {"bezier": [424, 214, 468, 199, 493, 225, 514, 259]}
//     ]
// ]