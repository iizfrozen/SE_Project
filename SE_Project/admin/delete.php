<?php
	$user = 'root';
	$pass = '';
	$db='seproject';
	$db = new mysqli('localhost',$user,$pass,$db) or die("Unable to connect");
	$uname = (isset($_GET['uname']) ? $_GET['uname'] : null);
	$sql = "DELETE FROM logininfo WHERE name='".$uname."'";
	$result = $db->query($sql);
	$db->close();
?>