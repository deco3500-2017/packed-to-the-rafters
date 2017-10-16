$(document).ready(function() {
	/* Redirects to map page */
    $("#login").on("click", function() {
    	window.location.href = "map.html";
    });

    /* Shows create event div */
    $(".add-event").on("click", function() {
    	$(".create-event").slideToggle();
    	$(".events-container").fadeOut();
    });

    /* Cancels create event */
    $("#cancel").on("click", function() {
    	$(".events-container").show();
    	$(".create-event").slideToggle();
    });

    /* Cancels create event div */
    $("#cancel-create").on("click", function() {
    	$(".events-container").show();
    	$(".create-event").slideToggle();
    });

    /* Creates event */
    $("#save-create").on("click", function() {
    	// Validate inputs - to be done
    	$(".events-container").show();
    	$(".create-event").slideToggle();
    });

    /* Shows edit profile div */
    $("#profile-settings").on("click", function() {
    	$(".edit-profile").slideToggle();
    	$(".profile-container").fadeOut();
    });

    /* Cancels edit profile div */
    $("#cancel-edit").on("click", function() {
    	$(".profile-container").show();
    	$(".edit-profile").slideToggle();
    });

    /* Saves profile changes */
    $("#save-edit").on("click", function() {
    	// Validate inputs - to be done
    	$(".profile-container").show();
    	$(".edit-profile").slideToggle();
    });

});