$(document).ready(function() {


	/**
	 * EU cookie info
	 */
    $('.cookies-info').delay(1000).slideDown(500);

    $('.cookies-info button').click(function() {
        var date = new Date();
        date.setFullYear(date.getFullYear() + 10);
        document.cookie = 'cookie-agreed=1; path=/; expires=' + date.toGMTString();
        $('.cookie-info').slideUp();
    });


});