function createCookie(name, value, days) {
	let expires;
	if (days) {
		let date = new Date();
		date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
		expires = "; expires=" + date.toUTCString();
	} else {
		expires = "";
	}
	document.cookie = name + "=" + value + expires + "; path=/";
}

function readCookie(name) {
	let nameEQ = name + "=";
	let ca = document.cookie.split(';');
	for (let i = 0; i < ca.length; i++) {
		let c = ca[i];
		while (c.charAt(0) === ' ') c = c.substring(1, c.length);
		if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
	}
	return null;
}

function eraseCookie(name) {
	createCookie(name, "", -1);
}

let ready = (callback) => {
	if (document.readyState !== "loading") {
		callback();
	} else {
		document.addEventListener("DOMContentLoaded", callback);
	}
}

ready(() => {
	if ((readCookie("cookies_consent") !== "agree") && (readCookie("cookies_consent") !== "disagree")) {
		setTimeout(() => {
			document.querySelector('.cookies-consent').classList.add('visible');
		}, 1000);
	}

	document.querySelector(".cookies-consent-button.is-agree").addEventListener("click", (e) => {
		createCookie("cookies_consent", "agree", 30);
		document.querySelector('.cookies-consent').classList.remove('visible');
		loadCookiesScript();
	});

	document.querySelector(".cookies-consent-button.is-disagree").addEventListener("click", (e) => {
		createCookie("cookies_consent", "disagree", 30);
		document.querySelector('.cookies-consent').classList.remove('visible');
	});

	document.querySelector(".cookies-consent-reset").addEventListener("click", (e) => {
		eraseCookie("cookies_consent");
		document.querySelector('.cookies-consent').classList.add('visible');
	});
});

if (document.cookie.indexOf("cookies_consent=agree") > -1) {
	loadCookiesScript();
}
