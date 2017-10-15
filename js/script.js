$(document).ready(function() {
	/* Redirects to map page */
    $("#login").on("click", function() {
    	window.location.href = "map.html";
    });

    /* Shows create event div */
    $(".add-event").on("click", function() {
    	$(".create-event").slideToggle();
    });

    /* Cancels create event */
    $("#cancel").on("click", function() {
    	$(".create-event").slideToggle();
    });
});