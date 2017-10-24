$(document).ready(function() {
    // READ FROM THE FILE AND ADD DIVS
    $.ajax({
        url : './php/readTextEvent.php',
        type : 'POST',
        dataType : 'json',
        success : function (result) {
            for (var i = 0; i < result.length; i++) {
                var peventName = result[i][0];
                var pplitLocations = result[i][3];
                var pprice = "$" + result[i][4];;
                if (pprice == "$") {
                    pprice = "free";
                }
                var pdesc = result[i][5];
                var ptagsInput = result[i][6];

                if (ptagsInput != "") {
                var ptagsArray = ptagsInput.split(',');
                var ptagsFinal = "";
               

                $(ptagsArray).each(function (index) {
                    var pindivTag = ptagsArray[index];
                    var ptagHtml = "<li>"+pindivTag+"</li>"+"\n";
                    ptagsFinal += ptagHtml;   
                    console.log(ptagsFinal);
                });
                } else {
                    ptagsFinal = "<li>noTags</li>\n";
                }
                var pcreatedEvent = $('<div><div class="event-image"><img class="event-image-display" src="images/events/location-image.png"></div><div class="card-info"><h2 class="events-h2">'+peventName+'</h2><ul class="card-info-details"><li><p class="events-p">'+pplitLocations+'</p><p class="events-p">'+pprice+'</p></li></ul><div id="card-info-tags"><ul id="events-tags" class="tags">'+ptagsFinal+'</ul></div></div></div>');
                $('.events-container').append(pcreatedEvent);
                pcreatedEvent.attr('id', "customEvent");
                pcreatedEvent.attr('class',"card");
                pcreatedEvent.attr('value',i);
                pcreatedEvent.on("click", function() {
                    window.location.href = "customEvent.php?number=" + this.getAttribute("value");
                });
                //pcreatedEvent.attr('value', i);
            }
            console.log("Events : " +result.length); // The value of your php $row['adverts'] will be displayed
        },
        error : function () {
           alert("error reading from file or something");
        }
    })

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
        var tagsArray = tagsInput.split('/[ ,]+/');
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
        createdEvent.on("click", function() {
            window.location.href = "customEvent.php?number=" + this.getAttribute("value");
        });
    	$(".events-container").show();
		document.getElementById(eventName).scrollIntoView();
    	$(".create-event").slideToggle();
        
        //Send to php
        $.ajax({
            url: './php/writeText.php',
            type: 'POST',
            data: { eName: $("input[type='text'][name='ename']").val(), 
                eTime: $("input[type='time'][name='time']").val(),
                eDate: $("input[type='date'][name='date']").val(),
                eLocation: $("input[type='text'][name='location']").val(),
                ePrice: $("input[type='text'][name='price']").val(),
                eDesc: $("textarea[type='textarea'][name='desc']").val(),
                eTags: $("input[type='text'][name='etags']").val()},
            success: function(response) {}
        });
    });
});