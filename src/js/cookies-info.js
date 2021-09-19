// Functions
function createCookie(name, value, days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
		var expires = "; expires=" + date.toGMTString();
	}
	else var expires = "";
	document.cookie = name + "=" + value + expires + "; path=/";
}

function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') c = c.substring(1, c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
	}
	return null;
}

function eraseCookie(name) {
	createCookie(name, "", -1);
}

// Usage
jQuery(function() {

	if ((readCookie("cookies_info") != "agree") && (readCookie("cookies_info") != "disagree")) {
		$('.cookies-info').delay(1000).slideDown(500);
	}

	$('.cookies-info-button.is-agree').click(function() {
		createCookie("cookies_info", "agree", 30);
		$('.cookies-info').slideUp();
		loadScripts();
	});

	$('.cookies-info-button.is-disagree').click(function() {
		createCookie("cookies_info", "disagree", 15);
		$('.cookies-info').slideUp();
	});

});

if (document.cookie.indexOf("cookies_info=agree") > -1) {
	loadScripts();
}
