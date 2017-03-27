<?php
	$user = 'root';
	$pass = '';
	$db='seproject';
	$db = new mysqli('localhost',$user,$pass,$db) or die("Unable to connect");
	$sql = "DELETE checkin WHERE date < DATE_SUB(NOW(), .33 * INTERVAL 1 DAY)";
	$db->close(+);
?>