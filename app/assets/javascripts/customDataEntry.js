$(document).ready(function() {
	tabsHandlers();
	profileEventHandlers();
	$(window.location.hash+"_id").trigger("click");
});
function refreshCufon() {
	//Refresh Cufon fonts
	Cufon.refresh();
}

function inputFieldHandlers() {
	focusEventHandler();
	unfocusEventHandler();
}

function transferFields() {
	focusEventHandler();
	unfocusEventHandler();
}

function tabsHandlers() {
	//Each tab event handler
	donateTabClickEventHandler();
	withdrawTabClickEventHandler();
}

function showErrorMsg(id) {
	//$(id).html(msg).fadeIn(600);
	$(id).fadeIn(600);
}

function hideErrorMsg(id) {
	//$(id).html(msg).fadeOut();
	$(id).fadeOut();
}

function nationalIDValidation() {
	var regex = /^\d{3}-?\d{3}-?\d{3}-?\d{3}-?\d{2}$/g;
	var nationalID = $("#national_id").val();
	if(nationalID.length != 0) {
		if(!regex.test(nationalID)) {
			$("#nat_id_error_msg").fadeIn(600);
		} else {
			$("#nat_id_error_msg").fadeOut();
		}
	}
}

function natIdFieldUnfocus() {
	$("#national_id").blur(nationalIDValidation);
}

function emailHandler() {
	$("#email").blur(emailValidation);
}

function emailValidation() {
	var regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,6}$/i;
	var email = $("#email").val();
	if(email.length != 0) {
		if(!regex.test(email)) {
			$("#email_error_msg").fadeIn(600);
		} else {
			$("#email_error_msg").fadeOut();
		}
	}
}

function focusEventHandler() {
	$(".textinput").focus(function() {
		$(this).css("background-color", "#FFFFFF");
	});
}

function unfocusEventHandler() {
	$(".textinput").blur(function() {
		$(this).css("background-color", "#F5F5F5");
	});
}

/*
*Load content of each tab using AJAX method
*/
//Donate Data Entry tab
function donateTabClickEventHandler() {
	$("#donate_id").click(function() {
		$("#content").load("donateDataEntry.html #content > *", refreshCufon);
		$("#withdraw_id").removeClass("active");
		if(!$(this).hasClass("active")) {
			$(this).addClass("active");
		}
	});
}

//Withdraw tab
function withdrawTabClickEventHandler() {
	$("#withdraw_id").click(function() {
		$("#content").load("Withdraw.html #content > *", refreshCufon);
		$("#donate_id").removeClass("active");
		if(!$(this).hasClass("active")) {
			$(this).addClass("active");
		}
	});
}
