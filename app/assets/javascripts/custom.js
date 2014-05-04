$(document).ready(
	function(){
		tabsHandlers();
		profileEventHandlers();
		$(window.location.hash+"_id").trigger("click");
        /*
         *$(document).ajaxSuccess(function() {  
         *    Cufon.refresh();
         *});
         */
	}
);

function refreshCufon() {
    //Refresh Cufon fonts
    Cufon.refresh(); 
}

function profileEventHandlers(){
    inputFieldHandlers();
    refreshCufon();
}
function saveBtnHandler(){
	$("#save_btn").click(function(){
		$("#save_indicator").fadeIn();
		//initialize(26.8357675,30.7956597);
	});
}
function initialize(lat, lng) {
        var map_canvas = document.getElementById('map_canvas');
        var map_options = {
          center: new google.maps.LatLng(lat, lng),
          zoom: 5,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(map_canvas, map_options)
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
    profileTabClickEventHandler();
    donateTabClickEventHandler();
    needTabClickEventHandler();
    transfuseTabClickEventHandler();
    logTabClickEventHandler();
	/*Amr Mahfouz*/
	AdminTabClickEventHandler();
	ManagerTabClickEventHandler();
	DataEntriesTabClickEventHandler();
	RegesteredUserTabClickEventHandler();
	BloodCentersTabClickEventHandler();
	/*Amr Mahfouz*/
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
//Profile tab
function profileTabClickEventHandler(){
    $("#profile_id").click(function (){
        $("#content").load("profile.html #content > *", profileEventHandlers);
        $("#donate_id").removeClass("active");
        $("#need_id").removeClass("active");
        $("#transfuse_id").removeClass("active");
        $("#log_id").removeClass("active");
        if (!$(this).hasClass("active")) {
            $(this).addClass("active");    
        }
    });
}
//Donate tab
function donateTabClickEventHandler(){
    $("#donate_id").click(function (){
        $("#content").load("donate.html #content > *",  function(){
			refreshCufon;
			initialize(26.8357675,30.7956597);
			});
        $("#profile_id").removeClass("active");
        $("#need_id").removeClass("active");
        $("#transfuse_id").removeClass("active");
        $("#log_id").removeClass("active");
        if (!$(this).hasClass("active")) {
            $(this).addClass("active");
        }
    });
}
//Need tab
function needTabClickEventHandler(){
    $("#need_id").click(function (){
        $("#content").load("need.html #content > *", function(){
			refreshCufon;
			initialize(26.8357675,30.7956597);
			});
        $("#profile_id").removeClass("active");
        $("#donate_id").removeClass("active");
        $("#transfuse_id").removeClass("active");
        $("#log_id").removeClass("active");
        if (!$(this).hasClass("active")) {
            $(this).addClass("active");
        }
    });
}
//Transfuse tab
function transfuseTabClickEventHandler(){
    $("#transfuse_id").click(function (){
        $("#content").load("transfuse.html #content > *", refreshCufon);
        $("#profile_id").removeClass("active");
        $("#donate_id").removeClass("active");
        $("#need_id").removeClass("active");
        $("#log_id").removeClass("active");
        if (!$(this).hasClass("active")) {
            $(this).addClass("active");    
        }
    });
}
//Log tab
function logTabClickEventHandler(){
    $("#log_id").click(function (){
        $("#content").load("log.html #content > *", refreshCufon);
        $("#profile_id").removeClass("active");
        $("#donate_id").removeClass("active");
        $("#need_id").removeClass("active");
        $("#transfuse_id").removeClass("active");
        if (!$(this).hasClass("active")) {
            $(this).addClass("active");
        }
    });
}
/* Amt Mahfouz*/
//Adminstrator Tab
function AdminTabClickEventHandler() {
	$("#adminstrator_id").click(function() {
		$("#content").load("Adminstrators.html #content");
		$("#managers_id").removeClass("active");
		$("#dataEntries_id").removeClass("active");
		$("#registeredUser_id").removeClass("active");
		$("#bloodCenters_id").removeClass("active");
		$(this).addClass("active");
	});
}

//Managers Tab
function ManagerTabClickEventHandler() {
	$("#managers_id").click(function() {
		$("#content").load("Managers.html #content");
		$("#adminstrator_id").removeClass("active");
		$("#dataEntries_id").removeClass("active");
		$("#registeredUser_id").removeClass("active");
		$("#bloodCenters_id").removeClass("active");
		$(this).addClass("active");
	});
}

//DataEntries Tab
function DataEntriesTabClickEventHandler() {
	$("#dataEntries_id").click(function() {
		$("#content").load("DataEntries.html #content");
		$("#adminstrator_id").removeClass("active");
		$("#managers_id").removeClass("active");
		$("#registeredUser_id").removeClass("active");
		$("#bloodCenters_id").removeClass("active");
		$(this).addClass("active");
	});
}

//Regestered User Tab
function RegesteredUserTabClickEventHandler() {
	$("#registeredUser_id").click(function() {
		$("#content").load("RegisteredUsers.html #content");
		$("#adminstrator_id").removeClass("active");
		$("#managers_id").removeClass("active");
		$("#dataEntries_id").removeClass("active");
		$("#bloodCenters_id").removeClass("active");
		$(this).addClass("active");
	});
}

//Blood Centers Tab
function BloodCentersTabClickEventHandler() {
	$("#bloodCenters_id").click(function() {
		$("#content").load("BloodCenters.html #content");
		$("#adminstrator_id").removeClass("active");
		$("#managers_id").removeClass("active");
		$("#registeredUser_id").removeClass("active");
		$("#dataEntries_id").removeClass("active");
		$(this).addClass("active");
	});
}

/*Amr Mahfouz*/