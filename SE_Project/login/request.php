<?php
	$user = 'root';
	$pass = '';
	$db='seproject';
	$db = new mysqli('localhost',$user,$pass,$db) or die("Unable to connect");
	
	$fname = (isset($_GET['fname']) ? $_GET['fname'] : null);
	$lname = (isset($_GET['lname']) ? $_GET['lname'] : null);
	$id = (isset($_GET['id']) ? $_GET['id'] : null);
	$type = (isset($_GET['type']) ? $_GET['type'] : null);
	if($fname != null && $lname != null && $id != null && $type != null){
		$sql = "UPDATE patrons SET supension='".$type."' WHERE fname='".$fname."' and lname='".$lname."' and id='".$id."'";
		$result = $db->query($sql);
		if($result == TRUE){
			echo "0";
		}
		else{
			echo "1";
		}
	}
	$db->close();
?>