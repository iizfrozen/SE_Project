<?php
	$user = 'root';
	$pass = '';
	$db='seproject';
	$db = new mysqli('localhost',$user,$pass,$db) or die("Unable to connect");
	$item_name = (isset($_GET['itemname']) ? $_GET['itemname'] : null);
	$sql = "DELETE FROM items WHERE itemname='".$item_name."'";
	$result = $db->query($sql);
	$db->close();
?>