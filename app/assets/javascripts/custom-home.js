$(document).ready(
	function(){
		tabsHandlers();
		profileEventHandlers();
		$(window.location.hash+"_id").trigger("click");
        slide_show();
        /*
         *$(document).ajaxSuccess(function() {  
         *    Cufon.refresh();
         *});
         */
	}
);

function initialize(lat, lng) {
        var map_canvas = document.getElementById('map_canvas');
        var map_options = {
          center: new google.maps.LatLng(lat, lng),
          zoom: 5,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(map_canvas, map_options)
      }
function refreshCufon() {
    //Refresh Cufon fonts
    Cufon.refresh();
}

function profileEventHandlers(){
    inputFieldHandlers();
    refreshCufon();
    slide_show();
}
function saveBtnHandler(){
	$("#save_btn").click(function(){
		$("#save_indicator").fadeIn();
	});
}
function inputFieldHandlers() {
    focusEventHandler();
    unfocusEventHandler();
	phoneFieldUnfocus();
	natIdFieldUnfocus();
	saveBtnHandler();
	emailHandler();
}
function tabsHandlers() {
    //Each tab event handler
    homeTabClickEventHandler();
    donateTabClickEventHandler();
    needTabClickEventHandler();
    transfuseTabClickEventHandler();
    contactUsTabClickEventHandler();
}

function showErrorMsg(id){
	//$(id).html(msg).fadeIn(600);
	$(id).fadeIn(600);
}
function hideErrorMsg(id){
	//$(id).html(msg).fadeOut();
	$(id).fadeOut();
}

function nationalIDValidation(){
	var	regex	=	/^\d{3}-?\d{3}-?\d{3}-?\d{3}-?\d{2}$/g;
	var	nationalID	=	$("#national_id").val();
	if (nationalID.length != 0){
		if (!regex.test(nationalID)){
			$("#nat_id_error_msg").fadeIn(600);
		}else{
			$("#nat_id_error_msg").fadeOut();
		}
	}
}
function natIdFieldUnfocus(){
	$("#national_id").blur(nationalIDValidation);
}

function mobileNumberValidation(){
	var	regex	=	/^\d{4}-?\d{3}-?\d{4}$/g;
	var	phoneNumber	=	$("#mobile_phone").val();
	if (phoneNumber.length != 0){
		if (!regex.test(phoneNumber)){
			$("#phone_error_msg").fadeIn(600);
		}else{
			$("#phone_error_msg").fadeOut();
		}
	}
}

function emailHandler(){
	$("#email").blur(emailValidation);
}
function emailValidation(){
	var	regex	=	/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,6}$/i;
	var	email	=	$("#email").val();
	if (email.length != 0){
		if (!regex.test(email)){
			$("#email_error_msg").fadeIn(600);
		}else{
			$("#email_error_msg").fadeOut();
		}
	}
}

function phoneFieldUnfocus(){
	$("#mobile_phone").blur(mobileNumberValidation);
}
function focusEventHandler() {
    $(".textinput").focus(function(){
        $(this).css("background-color","#FFFFFF");
    });
}

function unfocusEventHandler() {
    $(".textinput").blur(function(){
        $(this).css("background-color","#F5F5F5");
    });
}

/*
 *Load content of each tab using AJAX method
 */
//Home tab
function homeTabClickEventHandler(){
    $("#home_id").click(function (){
        $("#content").load("/home #content > *", profileEventHandlers);
        $("#slide-show").load("/home #slide-show > *", profileEventHandlers);
        $("#donate_id").removeClass("active");
        $("#need_id").removeClass("active");
        $("#transfuse_id").removeClass("active");
        $("#contact_us_id").removeClass("active");
        $("body").attr("id", "page1");
        if (!$(this).hasClass("active")) {
            $(this).addClass("active");    
        }
    });
}
//Donate tab
function donateTabClickEventHandler(){
    $("#donate_id").click(function (){
        $("#content").load("donate.html #content > *",   function(){
			refreshCufon();
			initialize(26.8357675,30.7956597);
			});
        $("#home_id").removeClass("active");
        $("#need_id").removeClass("active");
        $("#transfuse_id").removeClass("active");
        $("#contact_us_id").removeClass("active");
        $("body").attr("id", "page2");
        if (!$(this).hasClass("active")) {
            $(this).addClass("active");    
        }
        $(".row-3").remove();
    });
}
//Need tab
function needTabClickEventHandler(){
    $("#need_id").click(function (){
        $("#content").load("need.html #content > *",   function(){
			refreshCufon();
			initialize(26.8357675,30.7956597);
			});
        $("#home_id").removeClass("active");
        $("#donate_id").removeClass("active");
        $("#transfuse_id").removeClass("active");
        $("#contact_us_id").removeClass("active");
        $("body").attr("id", "page2");
        if (!$(this).hasClass("active")) {
            $(this).addClass("active");
        }
        $(".row-3").remove();
    });
}
//Transfuse tab
function transfuseTabClickEventHandler(){
    $("#transfuse_id").click(function (){
        $("#content").load("transfuse.html #content > *", refreshCufon);
        $("#home_id").removeClass("active");
        $("#donate_id").removeClass("active");
        $("#need_id").removeClass("active");
        $("#contact_us_id").removeClass("active");
        $("body").attr("id", "page2");
        if (!$(this).hasClass("active")) {
            $(this).addClass("active");    
        }
        $(".row-3").remove();
    });
}
//Log tab
function contactUsTabClickEventHandler(){
    $("#contact_us_id").click(function (){
        $("#content").load("contacts.html #content > *", refreshCufon);
        $("#home_id").removeClass("active");
        $("#donate_id").removeClass("active");
        $("#need_id").removeClass("active");
        $("#transfuse_id").removeClass("active");
        $("body").attr("id", "page2");
        if (!$(this).hasClass("active")) {
            $(this).addClass("active");
        }
        $(".row-3").remove();
    });
}

function slide_show(){
        $('.slider')._TMS({
            prevBu:'.prev',
            nextBu:'.next',
            playBu:'.play',
            duration:800,
            easing:'easeOutQuad',
            preset:'simpleFade',
            pagination:false,
            slideshow:3000,
            numStatus:false,
            pauseOnHover:true,
            banners:true,
            waitBannerAnimation:false,
            bannerShow:function(banner){
            banner.hide().fadeIn(500)
            },
            bannerHide:function(banner){
                banner.show().fadeOut(500)
            }
    });
}
