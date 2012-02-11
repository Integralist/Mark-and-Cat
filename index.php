<!doctype html>
<!-- Explanation: http://www.phpied.com/conditional-comments-block-downloads/ -->
<!--[if IE]><![endif]-->
<html dir="ltr" lang="en">
	<head>
		<meta charset="utf-8">
		<meta name="description" content="Mark and Catherine's Wedding" />
		<meta name="author" content="Mark McDonnell" />
		<title>Mark and Catherine's Wedding</title>
		<script src="Assets/Scripts/Utils/html5.min.js"></script>
		<link rel="stylesheet" href="Assets/Styles/normalise.css" />
		<link rel="stylesheet" href="Assets/Styles/bootstrap.css" />
		<link rel="stylesheet" href="Assets/Styles/fonts.css" />
		<link rel="stylesheet" href="Assets/Styles/structure.css" />
		<link rel="stylesheet" media="screen and (-webkit-min-device-pixel-ratio:0)" href="Assets/Styles/webkit.css" />
	</head>
	<?php flush(); ?>
	<body>
		<header class="dimension centralalign"></header>
		<div class="split">
			<div class="dimension centralalign">
				<h1>Location</h1>
				<div id="map"></div>
				<hr>
				<h2>Dress Code</h2>
				<p>Smart day wear with a vintage hint.</p>
				<hr>
				<h2>Gifts</h2>
				<p>Although your presence on the day is all we really wish for, if you were considering giving a gift then we would appreciate money helping towards our honeymoon trip to America.</p>
				<hr>
				<h2>Contact</h2>
				<p>If you need to get in contact with us for any reason then you find us at the following locations:</p>
				<ul class="centralalign contact">
					<li><a href="http://www.facebook.com/barramac">http://www.facebook.com/barramac</a></li>
					<li><a href="http://twitter.com/integralist">http://twitter.com/integralist</a></li>
					<li><a href="http://twitter.com/barracat">http://twitter.com/barracat</a></li>
					<li><a href="mailto:macandcat@gmail.com">macandcat@gmail.com</a></li>
				</ul>
			</div>
		</div>
		<?php flush(); ?>
		<script data-main="Assets/Scripts/main" src="Assets/Scripts/Require.min.js"></script>
		<?php include 'Assets/Includes/GoogleAnalytics.php'; ?>
	</body>
</html>
