$(document).ready(function() {
    function getParam () {
        var i;
        for (var i = window.location.href.length - 1; i != 0; i--) { // minus one because of weird stop line character
            if (window.location.href.charAt(i) < 48 || window.location.href.charAt(i) > 57) {
                break;
            }
        }
        var stringNumber = window.location.href.slice(i, window.location.href.length);
        console.log(stringNumber);
        return parseInt(stringNumber);
    }
    // READ FROM THE FILE AND ADD DIVS
    $.ajax({
        url : './php/readTextEvent.php',
        type : 'POST',
        dataType : 'json',
        success : function (result) {
            
            var i = getParam();
            var eventName = result[i][0];
            var eventTime = result[i][1];

            var eventDate = result[i][2];
            var litLocations = result[i][3];
            var price = "$" + result[i][4];;
            if (price == "$") {
                price = "free";
            }
            var desc = result[i][5];
            var tagsInput = result[i][6];

            if (tagsInput != "") {
            var tagsArray = tagsInput.split(',');
            var tagsFinal = "";
           

            $(tagsArray).each(function (index) {
                var indivTag = tagsArray[index];
                var tagHtml = "<li>"+indivTag+"</li>"+"\n";
                tagsFinal += tagHtml;   
                console.log(tagsFinal);
            });
            } else {
                tagsFinal = "<li>noTags</li>\n";
            }
            //var pcreatedEvent = $('<div class="card"><div class="event-image"><img class="event-image-display" src="images/events/location-image.png"></div><div class="card-info"><h2 class="events-h2">'+peventName+'</h2><ul class="card-info-details"><li><p class="events-p">'+pplitLocations+'</p><p class="events-p">'+pprice+'</p></li></ul><div id="card-info-tags"><ul id="events-tags" class="tags">'+ptagsFinal+'</ul></div></div></div>');
            //$('.events-container').append(pcreatedEvent);
            //pcreatedEvent.attr('id', peventName);
            $('#eName').html(eventName);
            $('#eDate').html(eventDate);
            $('#eTime').html(eventTime);
            $('#eDesc').html(desc);
            $('#ePrice').html(price);
            console.log("Events : " + result.length); // The value of your php $row['adverts'] will be displayed
        },
        error : function () {
           alert("error reading from file or something");
        }
    })
});