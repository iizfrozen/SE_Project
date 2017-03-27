<?php
	$user = 'root';
	$pass = '';
	$db='seproject';
	$db = new mysqli('localhost',$user,$pass,$db) or die("Unable to connect");
	
	$uname = (isset($_GET['name']) ? $_GET['name'] : null);
	if($uname != null){
		$sql = "SELECT supension FROM patron WHERE fname='$uname'";
		if($db->query($sql) == FALSE){
			echo "error";
		}
		else{
			$result = $db->query($sql);
			$sql = "INSERT INTO patron (suspension) VALUES(1)";
			$result = $db->query($sql);
			if($db->query($sql) == FALSE){
				echo "error";
			}
			else{
				echo "0";
			}
		}
	}
	$db->close();
?>