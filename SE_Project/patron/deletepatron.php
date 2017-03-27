<?php
	$user = 'root';
	$pass = '';
	$db='seproject';
	$db = new mysqli('localhost',$user,$pass,$db) or die("Unable to connect");
	$did = (isset($_GET['did']) ? $_GET['did'] : null);
	$sql = "DELETE FROM patrons WHERE id='".$did."'";
	$result = $db->query($sql);
	$db->close();
?>