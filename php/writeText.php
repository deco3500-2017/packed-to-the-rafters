<?php
echo $_GET['ename']; 	// event name
echo $_GET['time']; 	// event time
echo $_GET['date']; 	// event date
echo $_GET['location']; // event location
echo $_GET['desc']; 	// event Description
echo $_GET['etags']; 	// event tags
// Assume it works until testing on the server
$myfile = fopen("data.txt", "a") or die("Unable to open file!");
$txt = $_GET['ename'] + ":" + $_GET['time'] + ":" + $_GET['date'] + ":" + $_GET['location'] + ":" + $_GET['desc'] + ":" + $_GET['etags'] + "\n";
fwrite($myfile, "\n". $txt);
fclose($myfile);
?>