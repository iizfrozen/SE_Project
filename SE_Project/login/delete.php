<?php
	$user = 'root';
	$pass = '';
	$db='seproject';
	$db = new mysqli('localhost',$user,$pass,$db) or die("Unable to connect");
	$sql = "DELETE FROM checkin";
	$db->query($sql);
	$db->close();
?>