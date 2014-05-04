$(document).ready(
	function(){
		tabsHandlers();
		profileEventHandlers();
		$(window.location.hash+"_id").trigger("click");
	}
);

function profileEventHandlers(){
    inputFieldHandlers();
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
    profileTabClickEventHandler();
    donateTabClickEventHandler();
    needTabClickEventHandler();
    transfuseTabClickEventHandler();
    logTabClickEventHandler();
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
//ViewReports tab
function profileTabClickEventHandler(){
    $("#profile_id").click(function (){
        $("#content").load("ViewReportsPola.html #content", profileEventHandlers);
        $("#donate_id").removeClass("active");
        $("#need_id").removeClass("active");
        $("#transfuse_id").removeClass("active");
        $("#log_id").removeClass("active");
        $(this).addClass("active");
    });
}
//Settings tab
function donateTabClickEventHandler(){
    $("#donate_id").click(function (){
        $("#content").load("SettingsPola.html #content");
        $("#profile_id").removeClass("active");
        $("#need_id").removeClass("active");
        $("#transfuse_id").removeClass("active");
        $("#log_id").removeClass("active");
        $(this).addClass("active");
    });
}
//Pending tab
function needTabClickEventHandler(){
    $("#need_id").click(function (){
        $("#content").load("PendingPola.html #content");
        $("#profile_id").removeClass("active");
        $("#donate_id").removeClass("active");
        $("#transfuse_id").removeClass("active");
        $("#log_id").removeClass("active");
        $(this).addClass("active");
    });
}
//sent tab
function transfuseTabClickEventHandler(){
    $("#transfuse_id").click(function (){
        $("#content").load("SentPola.html #content");
        $("#profile_id").removeClass("active");
        $("#donate_id").removeClass("active");
        $("#need_id").removeClass("active");
        $("#log_id").removeClass("active");
        $(this).addClass("active");
    });
}
//log tab
function logTabClickEventHandler(){
    $("#log_id").click(function (){
        $("#content").load("log.html #content");
        $("#profile_id").removeClass("active");
        $("#donate_id").removeClass("active");
        $("#need_id").removeClass("active");
        $("#transfuse_id").removeClass("active");
        $(this).addClass("active");
    });
}
