/* * POSSIBLE * * STARBUCKS LOVE */

var starbucksLove = starbucksLove || {};

(function (context, $) {
    vars = {
        // PRODUCTION thumbs images path
        imageFolderPath :   'http://d3m0y8gwpnhv0v.cloudfront.net/invite-prod3/img/',
        // STAGING thumbs images path
        //imageFolderPath :   'http://sbux100-love.s3-website-us-west-2.amazonaws.com/invite/img/',

        // amazonec2Url    :   'http%3A%2F%2Fec2-54-191-103-216.us-west-2.compute.amazonaws.com%2F%3Fimage_id%3D',
        amazonec2Url    :   'http%3A%2F%2Fec2-54-191-132-228.us-west-2.compute.amazonaws.com%2F%3Fimage_id%3D',
        exportedImgPath :   'http://ec2-54-149-236-13.us-west-2.compute.amazonaws.com/api/card/download/',
        needScrolling   :   0,
        imageSrc        :   '',
        textYou         :   'Your name', 
        textWho         :   'Their name',
        formState       :   0,
        textboxesState  :   0,
        cardGuid        :   '',
        cardUrl         :   '',
        cardLongUrl     :   '',
        description     :   'Join me for the World’s Largest #StarbucksDate!',
        profanityList   :   ["4r5e","5h1t","5hit","a55","a_s_s","anal","anus","ar5e","arrse","arse","arsehole","arseholes","arses","ass","ass-fucker","ass-hat","ass-hats","ass-jabber","ass-jabbers","ass-pirate","ass-pirates","assbag","assbags","assbandit","assbandits","assbanger","assbangers","assbite","assbites","assclown","assclowns","asscock","asscocks","asscracker","asscrackers","asses","assface","assfaces","assfuck","assfucker","assfuckers","assfucks","assfukka","assgoblin","assgoblins","asshat","asshats","asshead","assheads","asshole","assholes","asshopper","asshoppers","assjacker","assjackers","asslick","asslicker","asslickers","asslicks","assmonkey","assmonkeys","assmunch","assmuncher","assmunchers","assmunches","assmunchs","assnigger","assniggers","asspirate","asspirates","assshit","assshits","assshole","asssholes","asssucker","asssuckers","asswad","asswads","asswhole","asswipe","asswipes","axwound","axwounds","b!tch","b00bs","b17ch","b1tch","ballbag","balls","ballsack","bampot","bampots","bastard","bastards","beaner","beaners","beastial","beastiality","bellend","bestial","bestiality","bi+ch","biatch","bitch","bitchass","bitcher","bitchers","bitches","bitchin","bitching","bitchs","bitchtits","bitchy","bitchys","bloody","blow job","blow jobs","blowjob","blowjobs","boiolas","bollock","bollocks","bollok","bollox","bolloxs","boner","boners","boob","boobs","booobs","boooobs","booooobs","booooooobs","breasts","brotherfucker","brotherfuckers","buceta","bugger","bullshit","bullshits","bum","bumblefuck","bumblefucks","bunny fucker","butt","butt plug","butt plugs","butt-pirate","butt-pirates","buttfucka","buttfuckas","buttfucker","buttfuckers","butthole","buttmuch","buttplug","c0ck","c0cksucker","camel toe","camel toes","carpet muncher","carpetmuncher","carpetmunchers","cawk","chesticle","chesticles","chinc","chincs","chink","chinks","choad","choads","chode","chodes","cipa","cl1t","clit","clitface","clitfaces","clitfuck","clitfucks","clitoris","clits","clusterfuck","clusterfucks","cnut","cock","cock-sucker","cockass","cockbite","cockbites","cockburger","cockburgers","cockface","cockfaces","cockfucker","cockfuckers","cockhead","cockheads","cockjockey","cockjockeys","cockknoker","cockknokers","cockmaster","cockmasters","cockmongler","cockmonglers","cockmongruel","cockmongruels","cockmonkey","cockmonkeys","cockmunch","cockmuncher","cockmunchers","cocknose","cocknoses","cocknugget","cocknuggets","cocks","cockshit","cockshits","cocksmith","cocksmiths","cocksmoke","cocksmoker","cocksmokers","cocksmokes","cocksniffer","cocksniffers","cocksuck ","cocksucked ","cocksucker","cocksuckers","cocksucking","cocksucks ","cocksuka","cocksukka","cockwaffle","cockwaffles","cok","cokmuncher","coksucka","coochie","coochies","coochy","coochys","coon","coons","cooter","cooters","cox","cracker","crackers","crap","cum","cumbubble","cumbubbles","cumdumpster","cumdumpsters","cumguzzler","cumguzzlers","cumjockey","cumjockeys","cummer","cumming","cums","cumshot","cumslut","cumsluts","cumtart","cumtarts","cunilingus","cunillingus","cunnie","cunnies","cunnilingus","cunt","cuntass","cuntface","cuntfaces","cunthole","cuntholes","cuntlick ","cuntlicker","cuntlicker ","cuntlickers","cuntlicking ","cuntrag","cuntrags","cunts","cuntslut","cuntsluts","cyalis","cyberfuc","cyberfuck ","cyberfucked ","cyberfucker","cyberfuckers","cyberfucking ","d1ck","dago","dagos","damn","damns","deggo","deggos","dick","dick-sneeze","dick-sneezes","dickbag","dickbags","dickbeaters","dickface","dickfaces","dickfuck","dickfucker","dickfuckers","dickfucks","dickhead","dickheads","dickhole","dickholes","dickjuice","dickjuices","dickmilk","dickmilks","dickmonger","dickmongers","dicks","dickslap","dickslaps","dicksucker","dicksuckers","dicksucking","dicksuckings","dicktickler","dickticklers","dickwad","dickwads","dickweasel","dickweasels","dickweed","dickweeds","dickwod","dickwods","dike","dikes","dildo","dildos","dink","dinks","dipshit","dipshits","dirsa","dlck","dog-fucker","doggin","dogging","donkeyribber","doochbag","doochbags","dookie","dookies","doosh","douche","douche-fag","douche-fags","douchebag","douchebags","douches","douchewaffle","douchewaffles","duche","dumass","dumb ass","dumbass","dumbfuck","dumbfucks","dumbshit","dumbshits","dumshit","dumshits","dyke","dykes","ejaculate","ejaculated","ejaculates ","ejaculating ","ejaculatings","ejaculation","ejakulate","f u c k","f u c k e r","f4nny","f_u_c_k","fag","fagbag","fagbags","fagfucker","fagfuckers","fagging","faggit","faggits","faggitt","faggot","faggotcock","faggotcocks","faggots","faggs","fagot","fagots","fags","fagtard","fagtards","fanny","fannyflaps","fannyfucker","fanyy","fatass","fcuk","fcuker","fcuking","feck","fecker","felching","fellate","fellatio","fellatios","feltch","feltchs","fingerfuck ","fingerfucked ","fingerfucker ","fingerfuckers","fingerfucking ","fingerfucks ","fistfuck","fistfucked ","fistfucker ","fistfuckers ","fistfucking ","fistfuckings ","fistfucks ","flamer","flamers","flange","fook","fooker","fuck","fucka","fuckass","fuckbag","fuckbags","fuckboy","fuckboys","fuckbrain","fuckbrains","fuckbutt","fuckbutter","fuckbutters","fuckbutts","fucked","fuckeds","fucker","fuckers","fuckersucker","fuckersuckers","fuckface","fuckfaces","fuckhead","fuckheads","fuckhole","fuckholes","fuckin","fucking","fuckings","fuckingshitmotherfucker","fuckins","fuckme ","fucknut","fucknuts","fucknutt","fucknutts","fuckoff","fuckoffs","fucks","fuckstick","fucksticks","fucktard","fucktards","fucktart","fucktarts","fuckup","fuckups","fuckwad","fuckwads","fuckwhit","fuckwit","fuckwits","fuckwitt","fuckwitts","fudge packer","fudgepacker","fudgepackers","fuk","fuker","fukker","fukkin","fuks","fukwhit","fukwit","fux","fux0r","gangbang","gangbanged ","gangbangs ","gay","gayass","gaybob","gaybobs","gaydo","gaydos","gayfuck","gayfuckist","gayfuckists","gayfucks","gaylord","gaylords","gays","gaysex","gaytard","gaytards","gaywad","gaywads","goatse","god-dam","god-damned","goddamn","goddamned","goddamnit","goddamnits","goddamns","gooch","gooches","goochs","gook","gooks","gringo","gringos","guido","guidos","handjob","handjobs","hard on","hard ons","hardcoresex ","heeb","heebs","hell","hells","heshe","ho","hoar","hoare","hoe","hoer","hoes","homo","homodumbshit","homodumbshits","homos","honkey","honkeys","hore","horniest","horny","hos","hotsex","humping","humpings","jack-off ","jackass","jackoff","jagoff","jagoffs","jap","japs","jerk off","jerk offs","jerk-off ","jerkass","jigaboo","jigaboos","jism","jiz ","jizm ","jizz","jizzs","jungle bunny","jungle bunnys","junglebunny","junglebunnys","kawk","kike","kikes","knob","knobead","knobed","knobend","knobhead","knobjocky","knobjokey","kock","kondum","kondums","kooch","kooches","koochs","kootch","kootches","kootchs","kraut","krauts","kum","kummer","kumming","kums","kunilingus","kunt","kunts","kyke","kykes","l3i+ch","l3itch","labia","lameass","lardass","lesbian","lesbians","lesbo","lesbos","lezzie","lezzies","lmfao","lust","lusting","m0f0","m0fo","m45terbate","ma5terb8","ma5terbate","masochist","master-bate","masterb8","masterbat*","masterbat3","masterbate","masterbation","masterbations","masturbate","mcfagget","mcfaggets","mick","micks","minge","minges","mo-fo","mof0","mofo","mothafuck","mothafucka","mothafuckas","mothafuckaz","mothafucked ","mothafucker","mothafuckers","mothafuckin","mothafucking ","mothafuckings","mothafucks","mother fucker","motherfuck","motherfucked","motherfucker","motherfuckers","motherfuckin","motherfucking","motherfuckings","motherfuckka","motherfucks","muff","muffdiver","muffdivers","muffs","munging","mungings","mutha","muthafecker","muthafuckker","muther","mutherfucker","n1gga","n1gger","nazi","negro","negros","nigaboo","nigaboos","nigg3r","nigg4h","nigga","niggah","niggas","niggaz","nigger","niggers","niggers ","niglet","niglets","nob","nob jokey","nobhead","nobjocky","nobjokey","numbnuts","nut sack","nut sacks","nutsack","nutsacks","orgasim ","orgasims ","orgasm","orgasms ","p0rn","paki","pakis","panooch","panooches","panoochs","pawn","pecker","peckerhead","peckerheads","peckers","penis","penisbanger","penisbangers","penisfucker","penisfuckers","penispuffer","penispuffers","phonesex","phuck","phuk","phuked","phuking","phukked","phukking","phuks","phuq","pigfucker","pimpis","piss","pissed","pissed off","pissed offs","pisseds","pisser","pissers","pisses ","pissflaps","pissin ","pissing","pissoff ","polesmoker","polesmokers","pollock","pollocks","poon","poonani","poonanis","poonany","poonanys","poons","poontang","poontangs","poop","porch monkey","porch monkeys","porchmonkey","porchmonkeys","porn","porno","pornography","pornos","prick","pricks","pricks ","pron","pube","punanny","punannys","punta","puntas","pusse","pussi","pussies","pussy","pussylicking","pussylickings","pussys","pussys ","puto","putos","queef","queefs","queer","queerbait","queerbaits","queerhole","queerholes","queers","rectum","renob","renobs","retard","rimjaw","rimjob","rimjobs","rimming","ruski","ruskis","s hit","s.o.b.","s_h_i_t","sadist","sand nigger","sand niggers","","sandnigger","sandniggers","schlong","schlongs","screwing","scroat","scrote","scrotes","scrotum","semen","sex","sh!+","sh!t","sh1t","shag","shagger","shaggin","shagging","shemale","shi+","shit","shitass","shitbag","shitbagger","shitbaggers","shitbags","shitbrains","shitbreath","shitbreaths","shitcanned","shitcanneds","shitcunt","shitcunts","shitdick","shitdicks","shite","shited","shitey","shitface","shitfaced","shitfaceds","shitfaces","shitfuck","shitfull","shithead","shitheads","shithole","shitholes","shithouse","shithouses","shiting","shitings","shits","shitspitter","shitspitters","shitstain","shitstains","shitted","shitter","shitters","shitters ","shittiest","shittiests","shitting","shittings","shitty","shitty ","shittys","shiz","shiznit","shiznits","shizs","skank","skanks","skeet","skeets","skullfuck","skullfucks","slut","slutbag","slutbags","sluts","smeg","smegma","smegs","smut","snatch","snatches","snatchs","son-of-a-bitch","spac","spic","spick","spicks","spics","splooge","splooges","spook","spooks","spunk","suckass","t1tt1e5","t1tties","tard","tards","teets","teez","testical","testicle","testicles","thundercunt","thundercunts","tit","titfuck","titfucks","tits","titt","tittie5","tittiefucker","titties","tittyfuck","tittyfucks","tittywank","titwank","tosser","turd","tw4t","twat","twathead","twatlips","twats","twatty","twatwaffle","twatwaffles","twunt","twunter","unclefucker","unclefuckers","v14gra","v1gra","vag","vagina","vaginas","vags","vajayjay","vajayjays","viagra","vjayjay","vjayjays","vulva","w00se","wang","wank","wanker","wankjob","wankjobs","wanks","wanky","wetback","wetbacks","whoar","whore","whorebag","whorebags","whoreface","whorefaces","whores","willies","willy","wop","wops","xrated","xxx"],
    };

    /* ***********************************************************************
    /* Function to check if the site is shown on a mobile resolution screen */
    function isMobile(){
        var browserWidth = $(window).width();
        if (browserWidth <= 640)
            return true;
        return false;
    }

    /* *********************************************************************************
     * Adds the background image to the canvas and writes the text from the textboxes */
    function drawPic() {
        // Get the canvas element and its 2d context
        var canvas = document.getElementById('sbx_canvas'),
            context = canvas.getContext('2d'),
            imageObj = new Image(),
            xpos01 = 260,
            xpos02 = 465,
            ypos = 390;
        
         imageObj.onload = function () {
             canvas.width = imageObj.width;
             canvas.height = imageObj.height;
             context.drawImage(imageObj, 0, 0);
            
             if(vars.textboxesState === 1) {
                 context.font = "70px 'Amatic SC'";
                 context.fillStyle = "white";
                 context.textAlign = "end";
                 context.fillText(vars.textYou.toUpperCase(), xpos01, ypos);
                 context.textAlign = "start";
                 context.fillText(vars.textWho.toUpperCase(), xpos02, ypos);
             }
         };
      
        imageObj.setAttribute('crossOrigin', 'anonymous');
        imageObj.src = vars.imageSrc;
    }

    /* ***************************************************************************************************
    /* Add event listeners to input textfields. When user types on any of the textfields, the text will be
     * added to the image dynamically */
    function addInputEventListeners() {
        var inputYou = $('#inputYou')[0],
            inputWho = $('#inputWho')[0];

        vars.textWho = "";
        vars.textYou = "";

        inputYou.addEventListener("input", function(e) {
            profanityValidator();
        }, false);
        
        inputWho.addEventListener("input", function(e) {
            profanityValidator();
        }, false);
    }

    /* ***************************************************************************************************
    /* Swear words filter */
    function profanityValidator() {
        $('.errorMsg').css({'visibility':'hidden'});
        var inputWords = (
                $('#inputYou').val().toLowerCase()
                + " "
                + $('#inputYou').val().toLowerCase().replace(/\s+/g, '') //removing whitespaces
                + " "
                + $('#inputWho').val().toLowerCase()
                + " "
                + $('#inputWho').val().toLowerCase().replace(/\s+/g, '')
                + " "
                + $('#inputYou').val().toLowerCase()
                + $('#inputWho').val().toLowerCase()
                + " "
                + $('#inputYou').val().toLowerCase().replace(/\s+/g, '')
                + $('#inputWho').val().toLowerCase().replace(/\s+/g, '')
                + " "
                + $('#inputYou').val().toLowerCase()
                + $('#inputWho').val().toLowerCase().replace(/\s+/g, '')
                + " "
                + $('#inputYou').val().toLowerCase().replace(/\s+/g, '')
                + $('#inputWho').val().toLowerCase()
                ).split(" "),
            areWordsValid = true;

        for (var i=0; i < inputWords.length; i++) {
            if (inputWords[i] != "" && $.inArray(inputWords[i], vars.profanityList) > -1) {
                areWordsValid = false;
                break;
            }
        }

        if (areWordsValid) {
            vars.textboxesState = 1;
            $('.profanityErrorMsg').css({'visibility':'hidden'});
            $(".button.create").removeClass("disabled");
            vars.textYou = $('#inputYou').val();
            vars.textWho = $('#inputWho').val();
        } else {
            $('.profanityErrorMsg').css({'visibility':'visible'});
            $(".button.create").addClass("disabled");
            vars.textWho = ""; 
            vars.textYou = "";
        }
        
        // draw the names or an empty word
        drawPic();
    }

    /* *********************************************************************************
    /* Create the facebook, google+, pinterest and twitter buttons using the bitly URL */
    function createShareButtons() {
        // facebook
        $('.facebook').on('click', function() {
                var shareTitle = "World's Largest #StarbucksDate",
                captionFacebook = 'Join me at the World’s Largest #StarbucksDate!',
                fbDesc = 'atStarbucks.tumblr.com',
                shareUrl = vars.cardLongUrl,
                picture = 'http://ec2-54-149-236-13.us-west-2.compute.amazonaws.com/uploadedimages/' + vars.cardGuid + "_sl_card.png",

                // PRODUCTION facebookAppId
                facebookAppId = '1548662948719795';
                // STAGING facebookAppId
                //facebookAppId = '339224686265420';

            possible.ShareMe.openFacebook(shareTitle, fbDesc, captionFacebook, shareUrl, picture, facebookAppId, faceBookCallBack);
        });

        function faceBookCallBack(response){
            // Google Tag Manager Analytics
            dataLayer.push({'event': 'invite-shared-to-facebook'});
        }

        // pinterest 
        var pinterestUrl = "http://www.pinterest.com/pin/create/button/?url=" + vars.amazonec2Url + vars.cardGuid + "&media=http%3A%2F%2Fec2-54-149-236-13.us-west-2.compute.amazonaws.com%2FUploadedImages%2F" + vars.cardGuid + "_sl_card.png&description=Join%20me%20for%20the%20World%27s%20Largest%20%23StarbucksDate!";
        $(".pinterest-container .pinterest").replaceWith("<a href='" + pinterestUrl + "' data-pin-do='buttonPin' data-pin-shape='round'data-pin-height='32'></a>");
        
        window.parsePinBtns(document.getElementById('pinterest'));
        $(".pinterest-container a").addClass("pinterest");
        $(".pinterest-container a").click(function (e) {
            // Google Tag Manager Analytics
            dataLayer.push({'event': 'invite-shared-to-pinterest'});
        }); 

        // google+ 
        var options = {
            // PRODUCTION clientid
            clientid: '865905838610-ajceo65nh6jhguif199a2fipm0a81msl.apps.googleusercontent.com',
            // STAGING clientid
            //clientid: '865905838610-4m9plviik3537vi3r9f94soqmkem3l15.apps.googleusercontent.com',

            contenturl: vars.cardLongUrl,
            contentdeeplinkid: '/pages',
            cookiepolicy: 'single_host_origin',
            prefilltext: vars.description,
            calltoactionlabel: 'CREATE',
            calltoactionurl: vars.cardLongUrl,
            calltoactiondeeplinkid: '/pages/create'
        };
        gapi.interactivepost.render("googleplus", options);

        $('.socialMediaContainer').show();
        var imageAbsolutePath = vars.exportedImgPath + vars.cardGuid;
        $('.download').attr('href', imageAbsolutePath);
    }


   function getParameterByName(name) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
            results = regex.exec(location.search);
        return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    }

    function homeClick() {
        if ($('.loaderAnimation').is(":hidden")) {
            $('.circle').html("1");
            vars.formState = 0;
            $('#inputYou, #inputWho').val("");
            vars.textWho = "";
            vars.textYou = "";
            $('.home').removeClass('home').addClass('create');
            $('.instructionsContainer').removeClass('stepThree').addClass('stepOne');
            $('.canvasContainer, .buttonsContainer, .socialMediaContainer').hide();
            $('.namesForm').css({'visibility':'hidden'});
            $('.namesForm').hide();
            $('.instructionsText').html('Choose a design.').removeClass('instructionsTextStep3').addClass('instructionsTextStep1');
            $('.instructionsText, .thumbs').show();
        }
    }

    /* ******************************
     * Init all required functions */
    function init () {

        /* --------------------------------------------------------------
         * Init Social Media */
        // twitter
        $('.twitter').click(function (e) {
            e.preventDefault();
            // request a small url using bitly before sharing the image
            $.getJSON(
                "http://api.bitly.com/v3/shorten?callback=?",
                {
                    "apiKey": "R_31970340ff2d47368494089a88168855",
                    "format": "json",
                    "login": "starbuckslove",
                    "longUrl": vars.cardLongUrl,
                },
                
                function (response) {
                    vars.cardUrl = response.data.url;
                                            
                    var twitterUrl = "http://twitter.com/share?url=" + vars.cardUrl + "&text=Join+me+for+the+World's+Largest+%23StarbucksDate";
                     //We trigger a new window with the Twitter dialog, in the middle of the page
                    window.open(
                        twitterUrl,
                        'twitterwindow', 
                        'height=450, width=550, top=' + ($(window).height() / 2 - 225) + ', left=' + $(window).width() / 2 + ', toolbar=0, location=0, menubar=0, directories=0, scrollbars=0');
                
                    // Google Tag Manager Analytics
                    dataLayer.push({'event': 'invite-shared-to-twitter'});
                }
            );
        });

        // google+
        window.___gcfg = {
            lang: 'EN',
            parsetags: 'explicit'
        };
        $("#googleplus").click(function (e) {
            // Google Tag Manager Analytics
            dataLayer.push({'event': 'invite-shared-to-googleplus'});
        }); 

        // download
        $('.download').click(function (e) {
            // Google Tag Manager Analytics
            dataLayer.push({'event': 'invite-downloaded'});
        }); 

        //--------------------------------------------------------------
        if($('body').hasClass('starbucksLoveShareCard')) {
            var imgID = getParameterByName('image_id'),
                imgPath = 'http://ec2-54-149-236-13.us-west-2.compute.amazonaws.com/UploadedImages/',
                imgName = '_sl_card.png',
                imgSrc = imgPath + imgID + imgName; 

            $('#cardImage').attr('src', imgSrc);
        }
        else {
            $('.back').click(function(){
                if(vars.formState === 1){
                    $('.circle').html("1");
                    $('.canvasContainer, .buttonsContainer').hide();
                    $('.namesForm').hide();
                    $('.instructionsText').html('Choose a design.').removeClass('instructionsTextStep3').addClass('instructionsTextStep1');
                    $('.instructionsText, .thumbs').show();
                    $('.instructionsContainer').removeClass('stepTwo').addClass('stepOne');
                    vars.formState = 0;
                }
                else
                    if(vars.formState === 2){
                        $('.circle').html("2");
                        $('.instructionsText, .socialMediaContainer').hide();
                        $('.namesForm').css({'visibility':'visible'});
                        $('.home').removeClass('home').addClass('create');
                        $('.instructionsContainer').removeClass('stepThree').addClass('stepTwo');
                        vars.formState = 1;
                    }
            });

            $('.create').click(function() {
                if(vars.formState === 0){
                    $('.circle').html("2");
                    $('.instructionsText').hide();
                    $('.instructionsContainer').css({'padding-bottom':'0'});
                    $('.namesForm').css({'visibility':'visible'});
                    $('.namesForm').show();
                    vars.formState = 1;
                }
                else 
                    if(vars.formState === 1) {
                        if(!$(this).hasClass("disabled")) {
                            if($('#inputYou').val()==="" || $('#inputWho').val()==="") {
                                $('.errorMsg').css({'visibility':'visible'});
                            }
                            else {
                                $('.socialMediaContainer').show();
                                // Google Tag Manager Analytics
                                dataLayer.push({'event': 'invite-creation'});

                                var $animatedLoader = $('.loaderAnimation'),
                                    inviteText = 'Your invite is ready!<br />Share it or save to camera roll.';

                                if (!isMobile()){
                                    inviteText = 'Your invite is ready!<br />Share it or save to desktop.';
                                }

                                $('.instructionsText').show().html(inviteText).addClass('instructionsTextStep3');
                                $('.instructionsContainer').removeClass('stepTwo').addClass('stepThree');
                                //$animatedLoader.show();
                                $('.namesForm, .buttonsContainer').css({'visibility':'hidden'});
                                $('.namesForm').hide();

                                $('.errorMsg').css({'visibility':'hidden'});
                                $('.circle').html('3');

                                if (vars.needScrolling) {
                                    window.scrollTo(0, 230);
                                }
                                vars.formState = 2;

                                // unbind home button
                                $( ".home" ).unbind( "click", homeClick );
                                
                                var card = document.getElementById("sbx_canvas").toDataURL("image/png");
                                card = card.replace(/^data:image\/(png|jpg);base64,/, "");

                                var data = new FormData();
                                data.append("UploadedCard", card);

                                $.ajax({
                                    type: 'POST',
                                    url: "http://ec2-54-149-236-13.us-west-2.compute.amazonaws.com/api/card/upload",
                                    contentType: false,
                                    processData: false,
                                    data: data
                                }).done(function (cardGuid) {
                                    vars.cardGuid = cardGuid;

                                    // PRODUCTION .php file url
                                    // vars.cardLongUrl = "http://ec2-54-191-103-216.us-west-2.compute.amazonaws.com/?image_id=" + vars.cardGuid ;
                                    vars.cardLongUrl = "http://ec2-54-191-132-228.us-west-2.compute.amazonaws.com/?image_id=" + vars.cardGuid ;
                                    // STAGING .php file url
                                    //vars.cardLongUrl = "http://ec2-54-191-103-216.us-west-2.compute.amazonaws.com/sbxlove100.php?image_id=" + vars.cardGuid;

                                    $.get("http://graph.facebook.com/?id=" + vars.cardLongUrl + "&scrape=true", function() {}).
                                        done(function() {
                                            createShareButtons();
                                            $animatedLoader.hide();
                                            $('.create').removeClass('create').addClass('home');
                                            $('.buttonsContainer').css({'visibility':'visible'});
                                            //bind home click action
                                            $( ".home" ).bind( "click", homeClick );
                                        });
                                }).error(function (jqXHR, textStatus, errorThrown) {
                                    response.html(jqXHR.responseText || textStatus);
                                });

                                $('.socialConnect .PIN_1422488029454_pin_it_button_en_32_red_round').addClass('pinterest sprite');
                                $('.create').removeClass('create').addClass('home');
                                $('.buttonsContainer').css({'visibility':'visible'});

                            }
                        }
                    }
            });

            $('.thumb').click(function(){
                var $this = $(this),
                    id = $this.attr('id'),
                    imgSrc = vars.imageFolderPath + id + "_big.png";

                $('.canvasContainer, .buttonsContainer').show();
                $('.namesForm').css({'visibility':'visible'});
                $('.namesForm').show();
                $('.thumbs, .instructionsText').hide();
                $('.thumb').removeClass('selected');
                $this.addClass('selected');

                addInputEventListeners();

                $('.circle').html("2");
                $('.instructionsContainer').removeClass('stepOne').addClass('stepTwo');
                vars.formState = 1;

                vars.imageSrc = imgSrc;
                drawPic();
                window.scrollTo(0, 230);

                // Google Tag Manager Analytics
                dataLayer.push({'event': 'invite-begin'});

                //check if the step two has scroll bar
                vars.needScrolling = !(document.body.scrollHeight > document.body.clientHeight);
            });

            $("#mobileMenu .toggle, #mobileMenuBtn").on('click', function() {
                var $mobileMenu, topOffset;
                $mobileMenu = $("#mobileMenu");
                if ($mobileMenu.hasClass("open")) {
                  return $mobileMenu.removeClass("open");
                }
                else {
                    $mobileMenu.addClass("open");
                    return $("#mainHeader > .mainHeaderAffix").addClass("affix").removeClass("affix-top");
                }
            });
        }

        $('#main, .topNav').on('click', '.socialWrap .socialToggle', function(e) {
            e.preventDefault();
            return e.stopPropagation();
        });

        $('#main, .topNav').on('mouseenter', '.socialWrap .socialToggle', function() {
            $('.share-box-open').not($(this).parents('.share-box-open')).removeClass('share-box-open');
            return $(this).parents('.socialWrap').addClass('share-box-open');
        });

        $('#main').on('mouseleave', '.share-box-open', function() {
            return $(this).removeClass('share-box-open');
        });

        $('#main, .topNav').on('mouseleave', '.socialWrap .share-box', function() {
            return $(this).parents('.socialWrap').removeClass('share-box-open');
        });

        $('#main').on('click', 'nav.share-box a', function(e) {
            e.preventDefault();
            return socialShare($(this).attr('href'));
        });

        socialShare = function(url) {
            var popup, px, py;
            px = Math.floor(((screen.availWidth || 1024) - 626) / 2);
            py = Math.floor(((screen.availHeight || 700) - 436) / 2);
            popup = window.open("" + url, "sharer", "toolbar=0,status=0,width=626,height=436,left=" + px + ",top=" + py);
            if (popup) {
                popup.focus();
            }
            return false;
        };

        $('.searchToggle').click(function() {
            return toggleNavSearch($(this).parent());
        });

        toggleNavSearch = function($wrapEl) {
            if (!$wrapEl.hasClass("open")) {
                $wrapEl.addClass("open");
                $wrapEl.find('input[type=text]').focus();
            } else {
                $wrapEl.removeClass("open");
                $wrapEl.find('input[type=text]').val('').blur();
            }
            return true;
        };

    }
    $(init);
}(starbucksLove, jQuery));