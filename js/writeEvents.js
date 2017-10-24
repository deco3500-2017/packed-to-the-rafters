$(document).ready(function() {
	/*
	$.get('./php/readTextEvent.php', function(data) {
       // do nothing
    });
    alert("loading file");
	*/

    var eventName;

	 /* Shows create event div */
    $(".add-event").on("click", function() {
        $(".create-event").slideToggle();
        $(".events-container").fadeOut();
    });

    /* Cancels create event div */
    $("#cancel-create").on("click", function() {
        $(".events-container").show();
        $(".create-event").slideToggle();
    });

    /* Creates event */
    $("#save-create").on("click", function() {

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
        //Don't check if time is in the past. due to all events
        //that are within todays date are being plotted
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
        var tagsInput = $("#create-event-tags").val();
        var tagsArray = tagsInput.split(/[ ,]+/);
        var tagsFinal = "";

		$(tagsArray).each(function (index) {
			var indivTag = tagsArray[index];
			var tagHtml = "<li>"+indivTag+"</li>"+"\n";
			tagsFinal += tagHtml;
			console.log(tagsFinal);
		});

    	var createdEvent = $('<div class="card"><div class="event-image"><img class="event-image-display" src="images/events/location-image.png"></div><div class="card-info"><h2 class="events-h2">'+eventName+'</h2><ul class="card-info-details"><li><p class="events-p">'+splitLocations+'</p><p class="events-p">'+price+'</p></li></ul><div id="card-info-tags"><ul id="events-tags" class="tags">'+tagsFinal+'</ul></div></div></div>');
		$('.events-container').append(createdEvent);
		createdEvent.attr('id', eventName);

    	$(".events-container").show();
		document.getElementById(eventName).scrollIntoView();
    	$(".create-event").slideToggle();

      $("#"+eventName).on("click", function(){
        $("#editEventPage").show();
        window.scrollTo(0,0);
      });

      $("#edit-back-btn").on("click", function(){
        $("#editEventPage").hide();
      });

    });

});
