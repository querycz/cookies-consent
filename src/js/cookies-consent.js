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

	if ((readCookie("cookies_consent") != "agree") && (readCookie("cookies_consent") != "disagree")) {
		$('.cookies-consent').delay(1000).slideDown(500);
	}

	$('.cookies-consent-button.is-agree').click(function() {
		createCookie("cookies_consent", "agree", 30);
		$('.cookies-consent').slideUp();
		loadScripts();
	});

	$('.cookies-consent-button.is-disagree').click(function() {
		createCookie("cookies_consent", "disagree", 15);
		$('.cookies-consent').slideUp();
	});

});

if (document.cookie.indexOf("cookies_consent=agree") > -1) {
	loadCookiesScript();
}
