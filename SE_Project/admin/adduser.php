<?php
	$user = 'root';
	$pass = '';
	$db='seproject';
	$db = new mysqli('localhost',$user,$pass,$db) or die("Unable to connect");
	$uname = (isset($_GET['uname']) ? $_GET['uname'] : null);
	$pass = (isset($_GET['pass']) ? $_GET['pass'] : null);
	$result2 = false;
	if($uname != NULL){
		$sql = "INSERT INTO logininfo (name,pass) VALUES('$uname','$pass')";
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