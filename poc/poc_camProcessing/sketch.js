var init = function(){
}

$(function(){
	
	//setup global variables
	sourceArea = $('#sourceCodeContainer');
	appletDom = $('#applet');
	
	
	showSourceCode(0);
	if(!visual.isPjs){
		displayApplet();
		setEmbedCode(visual.width, visual.height);
		setMaximizeButton(visual.width, visual.height);
	}
	
	$('#appletContainerClickHandler').bind('click', function () {
		 showSourceContainer();
		});
	
	
	//<?  echo ($fid = $currentUser->getFlattrID()) ? 'showFlattr();' : ''; //show flattr if user has an ID ?>
	//check if maximize applet button needs to be displayed
	
});

var setEmbedCode = function(w,h){
	embedCodeArea = $("#embedCode");
	wp = w*1+28;
	hp = h*1+80;
	id = visual.visualID;
	url = 'http://www.openprocessing.org/sketch/'+id+'/embed/?width='+w+'&height='+h+'&border=true';
	embedCodeArea.html('<iframe width="' + wp +'" height="'+ hp +'" scrolling="no" frameborder="0" src="'+url+'"></iframe>');
	$('#embedPreviewLink').attr('href',url);
}

var toggle = function(divName){
	$("#"+divName).toggle();
}
//================TOGGLE SOURCE FUNCTION============
var appletDom;
var toggleFullScreenCode = function(){
		var div = $('#sourceCodeContainer'); 
		if (!div.hasClass('sourceCodeContainerFullscreen')) { //if it is collapse, expand it
			div.addClass('sourceCodeContainerFullscreen');
			allSourceCode = $('.sourceCode').addClass('sourceCodeFullscreen');
			
		} else { //if expanded, collapse
			div.removeClass('sourceCodeContainerFullscreen');
			allSourceCode = $('.sourceCode').removeClass('sourceCodeFullscreen');
			
		}
}
//===TOGGLE EDIT DETAILS==========
var toggleEditDetails = function(){
		var formDiv = $('#editDetailsDiv'); 
		var detailsDiv = $('#detailsDiv'); 
		if (formDiv.css('display') == 'none') { //if it is collapse, expand it
			formDiv.css('display', 'block');
			detailsDiv.css('display', 'none');
			 } else { 	formDiv.css('display', 'none');  detailsDiv.css('display', 'block');}
}

//===TOGGLE EMBED==========
var toggleEmbed = function(){
		toggleDisplay("embedCodeDiv");
}

//===TOGGLE DISPLAY==========
var toggleDisplay = function(toShow){
		var formDiv = $(toShow); 
		var detailsDiv = $('#detailsDiv'); 
		if (formDiv.css('display') == 'none') { //if it is collapse, expand it
			formDiv.show();
			detailsDiv.hide();
		} else { 
			formDiv.hide();
			detailsDiv.toggle();}
}

var toggleDiv = function(toShow){
		$(toShow).toggle(); 
}

//===ADD/REMOVE TO FAVORITES======
var setFavorite = function(){
	if(isGuestUser) {
		location.href = "/login?prevUrl=/sketch/"+visual.visualID+"&message=Please login or register before adding sketches to your favorites.";
		return;
	}
	

	$.ajax({
  		url:'/sketch/'+visual.visualID+'/setFavoriteAjax',
		success: function(data){
		      var response = data || "0";
			  if (response == "1"){ 
			  $('#addToFavorites').css('display', 'none');
			  $('#addedToFavorites').css('display', 'inline-block');
			  $('#addedToFavoritesAlert').css('display', 'inline-block');
			  } 
			  else if(response == "-1") {
			  $('#addToFavorites').css('display', 'inline-block');
			  $('#addedToFavorites').css('display', 'none');
			  $('#addedToFavoritesAlert').css('display', 'none');
			  }
			   else if(response == "0") {
			  $('#addToFavorites').text("failed.");
			  $('#addedToFavorites').text("failed."); 
			  }
		    },
		    onFailure: function(){ 
			  $('#addToFavorites').text("failed.");
			  $('#addedToFavorites').text("failed."); }
		  });



}

//===REMOVE FROM COLLECTION====
var removeFromCollection = function(fromID, collectionTitle, fade){
		var answer = confirm("Do you want to remove your sketch from the collection \"" +collectionTitle+ "\" ?")
			if (answer){
						
				var url = '/collection/'+fromID+'/removeSketch/'+visual.visualID;
				// notice the use of a proxy to circumvent the Same Origin Policy.
				//Effect.Fold('visBox'+visualID);
				if(fade!=false){
					$('#collectionBox'+fromID).fadeIn();
				}
				$.ajax({
					url: url,
				 	success: function(data) {
						$('#collectionBox'+fromID).fadeOut(); 
							  }
				});
			}
}

//===REMOVE COMMENT====
var removeComment = function(commentID){
		var answer = confirm("Do you want to remove the comment from this sketch?");
			if (answer){
						
				var url = '/sketch/'+visual.visualID+'/removeCommentAjax/'+commentID;
				$.ajax({
					url: url,
					  type: 'GET',
				  success: function(data) {
					if(data == 'true' || data == '1'){
						$('#comment'+commentID).slideUp();
					}

				  }
				});
			}
}

var displayApplet = function(){

	appletDom = $('#appletAjaxContainer');
	appletDom.html("loading sketch…");
	var appletFrame = $('<iframe></iframe>');
	appletFrame.css({
		'width': visual.width+'px',
		'height':visual.height+'px',
		'border': '0px',
		'overflow':'hidden'
		});
	appletFrame.attr('src','/sketch/'+visual.visualID+'/show/');
	appletDom.html("");
	appletDom.append(appletFrame);
}

var showSourceCode = function(index){
	//close all of them
	allSourceCode = $('.sourceCode');
	allFilenames = $('.filename');
		allSourceCode.css('display', 'none');
		allFilenames.removeClass('filenameSelected');
	
	//show the selected one
	$('#sourceCode'+index).css('display', 'block' );
	$('#filename'+index).addClass('filenameSelected');
}

var showTweakContainer = function(){
	var sourceArea = $('#sourceCodeContainer');
	var appletContainer = $('#appletContainer');
	var tweakContainer = $('#tweakContainer');
	sourceArea.removeClass('sourceCodeOpaque');
	sourceArea.hide();
	$('#filenameList').hide();
	appletContainer.hide();
	if($('#tweakContainer > iframe').length == 0){
		var htmlString = '<iframe src="/sketch/'+visual.visualID+'/tweaks" style="width:100%; height:100%; border:none;" ></iframe>';	
		tweakContainer.html(htmlString);
	}
	tweakContainer.show();
	
	$('.paperButtonSelected').removeClass('paperButtonSelected');
	$('#tweakButton').addClass('paperButtonSelected');
	var sCodes=$('.sourceCode');
	sCodes.removeClass('showScrollbar');
}

var showSourceContainer = function(){
	var sourceArea = $('#sourceCodeContainer');
	var appletContainer = $('#appletContainer'); 
	var tweakContainer = $('#tweakContainer');
	sourceArea.addClass('sourceCodeOpaque');
	appletContainer.hide();
	tweakContainer.hide();
	sourceArea.show();
	$('#filenameList').show();
	
	$('.paperButtonSelected').removeClass('paperButtonSelected');
	$('#sourceCodeButton').addClass('paperButtonSelected');
	$('.sourceCode').addClass('showScrollbar');
}

var showAppletContainer = function(){
	var sourceArea = $('#sourceCodeContainer');
	var appletContainer = $('#appletContainer');
	var tweakContainer = $('#tweakContainer');
	sourceArea.removeClass('sourceCodeOpaque');
	tweakContainer.hide();
	sourceArea.show();
	$('#filenameList').hide();
	appletContainer.show();
	
	$('.paperButtonSelected').removeClass('paperButtonSelected');
	$('#sketchButton').addClass('paperButtonSelected');
	var sCodes=$('.sourceCode');
	sCodes.removeClass('showScrollbar');
}

var commentTextAreaFocus = function(obj){
	//clearField(obj, 'What do you think?'); 
	$(obj).addClass('edited');
	$(obj).one('blur',function(){ if($(this).attr('value') == ''){$(obj).removeClass('edited')}});
	
}
var clearField = function(obj, defaultText){ //called when user clicks on comment area
	if ($(obj).attr('value') == defaultText) {$(obj).attr('value',"")};
	$(obj).one('blur', function(){ if($(this).attr('value') == ""){$(obj).attr('value',defaultText)}});
}

var setPjsDimensions = function(w, h){
	var iframePjs = $('#iframePjs');
	iframePjs.css('width',w);
	iframePjs.css('height',h);
	var maxW = parseInt($('#appletAjaxContainer').css('max-width'));
	if(w > maxW){ //center the iframe inside container
		iframePjs.css('left', -(w - maxW)/2);
	}
	setEmbedCode(w, h);
	setMaximizeButton(w,h);
	return true;
}


try {
SyntaxHighlighter.defaults['light'] = true;
SyntaxHighlighter.defaults['wrap-lines'] = true;
SyntaxHighlighter.all();
}
catch(exception){}
