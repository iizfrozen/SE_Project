<?php
	$user = 'root';
	$pass = '';
	$db='seproject';
	$db = new mysqli('localhost',$user,$pass,$db) or die("Unable to connect");
	$uname = (isset($_GET['name']) ? $_GET['name'] : null);
	$result2 = false;
	
	if($uname != NULL){
		$sql = "INSERT INTO checkin (name) VALUES('$uname')";
		$result2 = $db->query($sql);
		if($result2 == false){
			echo "1";
		}
		else{
			echo "0";
		}
	}
	$db->close();
?>