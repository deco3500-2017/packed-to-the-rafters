<!DOCTYPE html>
<html>
<head>
	<title>Travel Pack</title>
	<!-- Slick Slider | REF: http://kenwheeler.github.io/slick/#go-get-it -->
	<link rel="stylesheet" type="text/css" href="../slick/slick.css"/>
	<link rel="stylesheet" type="text/css" href="../slick/slick-theme.css"/>
	<link href="https://fonts.googleapis.com/css?family=Montserrat:400,600" rel="stylesheet">
	<!-- Font Awesome | REF: http://fontawesome.io/license/ -->
	<script src="https://use.fontawesome.com/9f0f64771e.js"></script>
	<link rel="stylesheet" type="text/css" href="../css/style.css">
	<!-- jQuery plugings | REF: https://jquery.com/ -->
	<script type="text/javascript" src="../js/jquery-3.2.1.js"></script>
	<script type="text/javascript" src="../js/script.js"></script>
	<script type="text/javascript" src="../js/customScript.js"></script>
    <meta name="viewport" content="width=device-width">
    <meta charset="UTF-8">
</head>
<body class="indiv-event">
    <a href="../events.html"><button class="back-btn"><i class="fa fa-arrow-circle-left" aria-hidden="true"></i></button></a>
	<!-- Event Image -->
	<div class="indiv-event-image">
		<div>
			<img src="../images/events/location-image.png">
		</div>
		<div>
			<img src="../images/events/location-image.png">
		</div>
	</div>

	</div>
	<div class="details-cont">
		<div class="event-titles">
			<h1 id="eName" class="indiv-event-h1"></h1>
			<p id="indiv-location" class="minor-details"></p>
		</div>
		<div class="event-details relative">
			<span id="chakradance-icon" class="chat-icon"><i class="fa fa-commenting-o" aria-hidden="true"></i></span>
			<div id="currently-here-imgs">
				<div class="relative">
					<img src="../images/profile/person1.jpg">
				</div>
			<span id="currently-here-plus">+ 1</span>
			</div>
			<h2 class="indiv-event-h2">Date &amp; Time</h2>
			<p id="eDate" class="minor-details"></p>
			<p id="eTime" class="minor-details"></p>

			<h2 class="indiv-event-h2">Price</h2>
			<p id="ePrice" class="minor-details"></p>

			<h2 class="indiv-event-h2">Details</h2>
			<p id="eDesc" class="minor-details"></p>

			<div class="event-buttons">
				<button id="attend-chakradance" class="indiv-event-btn">Attend Event</button>
				<button id="not-inter-chakradance" class="indiv-event-btn">Not Interested</button>
			</div>
		</div>
	</div>

	<!-- Chat Screen -->
	<div id="chakradance-chat" class="chat-scr">
		<img src="../images/events/chakradance/chat.jpg">
		<button id="chakradance-chat-back" class="back-btn"><i class="fa fa-arrow-circle-left" aria-hidden="true"></i></button>
	</div>

	<!-- START Slick Slider | REF: http://kenwheeler.github.io/slick/#go-get-it -->
	<script type="text/javascript" src="http://code.jquery.com/jquery-1.11.0.min.js"></script>
  	<script type="text/javascript" src="http://code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
	<script type="text/javascript" src="../slick/slick.min.js"></script>

	<script>
	$(document).ready(function(){
	  $('.indiv-event-image').slick({
			dots: true,
		    prevArrow: false,
		    nextArrow: false,
			infinite: true,
			speed: 300,
			slidesToShow: 1,
			centerMode: true,
			variableWidth: true
	  });
	});
	</script>
	<!-- END Slick Slider -->
</body>
</html>
