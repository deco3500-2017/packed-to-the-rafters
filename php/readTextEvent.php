<?php
	$myfile = fopen("data.txt", "r") or die("Unable to open file!");
	$fullFile = fread($myfile,filesize("data.txt"));
	$rows = split("\n", $fullFile);

	for ($i = 0; $i < count($rows) - 1; $i++) {
    	$col[$i] = split('/', $rows[$i]);
	}
	$array = array(
        'ajax' => $rows,
        'advert' => 'adverts',
     );
    echo json_encode($col);
?>