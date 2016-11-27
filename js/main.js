$(document).ready(function() {


	/**
	 * Cookies info
	 */
    if (readCookie("cookies_info") != "1"){
        $('.cookies-info').delay(1000).slideDown(500);
    }

    $('.cookies-info button').click(function() {
        createCookie("cookies_info", "1", 30);
        $('.cookies-info').slideUp();
    });


});