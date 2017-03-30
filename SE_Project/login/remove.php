<?php
	$user = 'root';
	$pass = '';
	$db='seproject';
	$db = new mysqli('localhost',$user,$pass,$db) or die("Unable to connect");
	
	$fname = (isset($_GET['fname']) ? $_GET['fname'] : null);
	$lname = (isset($_GET['lname']) ? $_GET['lname'] : null);
	$id = (isset($_GET['id']) ? $_GET['id'] : null);
	if($fname != null && $lname != null && $id != null){
		$sql = "UPDATE patrons SET supension='0' WHERE fname='".$fname."' and lname='".$lname."' and id='".$id."'";
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