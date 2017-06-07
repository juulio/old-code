
//check jquery
window.jQuery || document.write('<script src="/assets/js/jquery.js"><\/script>');
var canvas;
var setupDimensions = function(e){
	if((e.attributeName == 'height' || e.attributeName == 'width')){
		//console.log(e.attributeName + ' changed from ' + e.oldValue + ' to ' + e.newValue );
		//set iframe dimensions
		  try { 
			   if(parent.location.host == window.location.host){ //test if there is a parent
					iframePjs = parent.document.getElementById("iframePjs");
					if(parent.setPjsDimensions(canvas.width(), canvas.height()) !== true){  //incase DOM loads faster for show/, it should repeat parent call until DOM loads and script executes on parent.
						  //console.log('Can not set Pjs dimensions. Retrying...');
						window.setTimeout(function(){ 	setupDimensions(e); }, 500) //call itself until you receive true above	
						
					}else{
				  			//console.log('Dimensions set.');
					}
			   }
			 else {
				 //console.log('window locations dont match');
			 }
		  } catch(ev) {
			 // console.log('Can not find parent frame. Retrying...');
			  window.setTimeout(function(){ 	setupDimensions(e); }, 500) //call itself until you receive true above
			}
	}else{
		
	}
}

$(function(){
	canvas = $("canvas");
	canvas.attrchange({
		trackValues: true,
		callback: setupDimensions
	});
});