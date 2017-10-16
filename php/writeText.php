<?php
$myfile = fopen("./data/data.txt", "w") or die("Unable to open file!");
$txt = "Event text\n";
fwrite($myfile, $txt);
fclose($myfile);
?>