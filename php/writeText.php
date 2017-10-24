<?php
// Assume it works until testing on the server
$myfile = fopen("data.txt", "a") or die("Unable to open file!");
$eName = $_POST['eName'];
$eTime = $_POST['eTime'];
$eDate = $_POST['eDate'];
$eLocation = $_POST['eLocation'];
$ePrice = $_POST['ePrice'];
$eDesc = $_POST['eDesc'];
$eTags = $_POST['eTags'];
$txt = $eName . '/' . $eTime . '/' . $eDate . '/' . $eLocation . '/' . $ePrice . '/' . $eDesc . '/' . $eTags. "\n";
//$myphpvariable= $_POST['param1'];
echo $eTime;
fwrite($myfile, $txt);
fclose($myfile);
?>