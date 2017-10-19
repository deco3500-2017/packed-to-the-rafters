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
        //$.post("./php/writeText.php", function(data){
        //});
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

    /* Adds select class to discover icons - for dev purposes only */
    $(".discover ul li").on("click", function() {
        var clicked = $(this).is("#discover-active")
        
        if (clicked) {
            $(this).removeAttr('id');
        }
        else {
            $(".discover ul li").removeAttr('id');
            $(this).attr('id', 'discover-active');
        };
    });

});