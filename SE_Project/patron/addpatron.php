<?php
	$user = 'root';
	$pass = '';
	$db='seproject';
	$db = new mysqli('localhost',$user,$pass,$db) or die("Unable to connect");
	$fname = (isset($_GET['fname']) ? $_GET['fname'] : null);
	$lname = (isset($_GET['lname']) ? $_GET['lname'] : null);
	$address = (isset($_GET['address']) ? $_GET['address'] : null);
	$id = (isset($_GET['id']) ? $_GET['id'] : null);
	if($fname != NULL){
		$sql = "INSERT INTO patrons (id,fname,lname,address,supension) VALUES('$id','$fname','$lname','$address',1)";
		$result2 = $db->query($sql);
		if($result2 == false){
			echo $sql;
		}
		else{
			echo "0";
		}
	}
	$db->close();
?>