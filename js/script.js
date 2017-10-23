$(document).ready(function() {
    
    /*====== LOCATION SELECTOR ======*/

    /* Shows the location selector div */
    $("#event-location").on("focus", function(){
      $("#locationSelector").slideToggle();
      $(".events-container").fadeOut();
    });

    /* Hides the location selector div */
    $("#locations-back-btn").on("click", function(){
      $("#locationSelector").slideToggle();
    });

    /* Adding the long and lat to the location input box when location is selected */
    $("#location-1").on("click", function(){
      $("#locationSelector").slideToggle();
      $("#event-location").val("‎-27.470125 153.021072");
    });

    $("#location-2").on("click", function(){
      $("#locationSelector").slideToggle();
      $("#event-location").val("‎-27.469522 153.025214");
    });

    $("#location-3").on("click", function(){
      $("#locationSelector").slideToggle();
      $("#event-location").val("‎-27.468772 153.023466");
    });

    $("#location-4").on("click", function(){
      $("#locationSelector").slideToggle();
      $("#event-location").val("‎-27.465557 153.035808");
    });

    $("#location-5").on("click", function(){
      $("#locationSelector").slideToggle();
      $("#event-location").val("‎-27.463564 153.039336");
    });

    $("#location-6").on("click", function(){
      $("#locationSelector").slideToggle();
      $("#event-location").val("‎-27.480488 153.032832");
    });

    $("#location-7").on("click", function(){
      $("#locationSelector").slideToggle();
      $("#event-location").val("‎-27.485533 153.038032");
    });

    $("#location-8").on("click", function(){
      $("#locationSelector").slideToggle();
      $("#event-location").val("‎-27.476393 153.022230");
    });

    $("#location-9").on("click", function(){
      $("#locationSelector").slideToggle();
      $("#event-location").val("‎-27.475075 153.020913");
    });

    $("#location-10").on("click", function(){
      $("#locationSelector").slideToggle();
      $("#event-location").val("‎-27.470430 153.016971");
    });



    /*====== CREATE EVENT ======*/

    // Adds a new event to the text document
    // The text document is used to simulate event adding
    /// IMPORTANT ADD Jquery code and see if you can work
    //  around ajax's stupid protocols for local storage
    function writeToFile(_name, _date, _time, _lat, _long, _price, _desc, _tags){
        //alert(_name);
        /*var fso = new ActiveXObject("Scripting.FileSystemObject");
        var myFile = fso.OpenTextFile("data/data.txt", 8, false, 0);
        myFile.WriteLine(_name + ':' + _date + ':' + _time + ':'
            + _lat + ':' + _long + ':' + _price + ':' + _desc + _tags);
        myFile.Close();*/
        $.ajax({
            url: './php/writeText.php',
            type: 'GET',
            data: { "callFunc1": "1"},
            success: function(response) { alert(response); }
        });
    }

    /* Creates event */
    $("#save-create").on("click", function() {
    	// Validate inputs - to be done
        // First Check if inputs aren't empty an valid
        if (!$("#event-name").val()) {
            alert("Event name cannot be empty");
            return;
        }// Assuming all characters are handled
        var eventName = $("#event-name").val();

        // Check Date
        if (!$("#event-date").val()) { // format is dd/mm/yyyy
            alert("Event date cannot be empty");
            return;
        }
        var dateNow = new Date();
        var eventDate = new Date($("#event-date").val());
        if (eventDate < dateNow) {
                alert("Events cannot be contained within the past");
        }

        // Check Time
        if (!$("#event-time").val()) {
            alert("Event time cannot be empty");
            return;
        }
        /* Don't check if time is in the past. due to all events
        that are within todays date are being plotted */
        var eventTime = $("#event-time").val();

        // Check Location
        if (!$("#event-location").val()) {
            alert("Event location cannot be empty");
            return;
        }
        // Check if it only contains latitude and longitude
        var splitLocations = $("#event-location").val().split(" ");
        if (splitLocations.length != 2) {
             alert("Location isn't in latitude and longitude format");
             return;
        }
        // Check if latitude and longitude are in the bounds of the earth
        var lat = parseFloat(splitLocations[0]);
        var lon = parseFloat(splitLocations[1]);
        if ((lat < -90 || lat > 90) || (lon < -180 || lon > 180)) {
            alert("The latitude you submited is out of the bounds of this world");
            return;
        }
        // END CHECK
        var price = $("#event-price").val();
        var desc = $("#event-desc").val();
        var tags = $("event-tags").val();
        // Now append to the document
        writeToFile(eventName, eventDate, eventTime, lat, lon, price, desc, tags);
    	$(".events-container").show();
    	$(".create-event").slideToggle();
    });



    /*====== GEOLOCATE FEATURE ======*/

    // Read ahead, second then adds it to the input
    function showPosition(position) {
        $("#event-location").val(position.coords.latitude + ' ' + position.coords.longitude);
    }

    //Autofills towards their geolocation, first Checks it
    $("#geo-locate").on("click", function() {
        if (navigator.geolocation) {
            //$("#event-location").val(position.coords.latitude + ' ' + position.coords.longitude);
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            x.innerHTML = "Geolocation is not supported by this browser.";
        }

    });



    /*====== SHOW/HIDE DIVS ======*/

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

    /* Shows Oktoberfest chat */
    $("#okt-icon").on("click", function() {
        $("#oktoberfest-chat").slideToggle();
        $(".details-cont").fadeOut();
    });

    /* Hides Oktoberfest chat */
    $("#okt-chat-back").on("click", function() {
        $(".details-cont").show();
        $("#oktoberfest-chat").slideToggle();
    });

    /* Shows Chakradance chat */
    $("#chakradance-icon").on("click", function() {
        $("#chakradance-chat").slideToggle();
        $(".details-cont").fadeOut();
    });

    /* Hides Chakradance chat */
    $("#chakradance-chat-back").on("click", function() {
        $(".details-cont").show();
        $("#chakradance-chat").slideToggle();
    });

    /* Shows Emporium chat */
    $("#emporium-icon").on("click", function() {
        $("#emporium-chat").slideToggle();
        $(".details-cont").fadeOut();
    });

    /* Hides Oktoberfest chat */
    $("#emporium-chat-back").on("click", function() {
        $(".details-cont").show();
        $("#emporium-chat").slideToggle();
    });

    /* Shows Open Air chat */
    $("#open-air-icon").on("click", function() {
        $("#open-air-chat").slideToggle();
        $(".details-cont").fadeOut();
    });

    /* Hides Open Air chat */
    $("#open-air-chat-back").on("click", function() {
        $(".details-cont").show();
        $("#open-air-chat").slideToggle();
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



    /*====== REDIRECTING ======*/

    /* Redirects to map page */
    $("#login").on("click", function() {
        window.location.href = "map.html";
    });

    /* Redirects to Oktoberfest card */
    $("#oktoberfest").on("click", function() {
        window.location.href = "indiv-events/oktoberfest.html";
    });
    /* Redirects to Open Air card */
    $("#open-air").on("click", function() {
        window.location.href = "indiv-events/open-air.html";
    });
    /* Redirects to Emporium card */
    $("#emporium").on("click", function() {
        window.location.href = "indiv-events/emporium.html";
    });
    /* Redirects to Chakradance card */
    $("#chakradance").on("click", function() {
        window.location.href = "indiv-events/chakradance.html";
    });



    /*====== DISCOVER ICONS ======*/

    /* Adds select class to discover icons - for dev purposes only */
    $(".discover ul li div").on("click", function() {
        var clicked = $(this).is("#discover-active")

        if (clicked) {
            $(this).removeAttr('id');
        }
        else {
            $(".discover ul li div").removeAttr('id');
            $(this).attr('id', 'discover-active');
        };
    });

});
