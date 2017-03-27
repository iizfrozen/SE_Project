<?php
	$user = 'root';
	$pass = '';
	$db='seproject';
	$db = new mysqli('localhost',$user,$pass,$db) or die("Unable to connect");
	
	$uname = (isset($_GET['uname']) ? $_GET['uname'] : null);
	if($uname != null){
		$sql = "SELECT pass FROM logininfo WHERE name='$uname'";
		if($db->query($sql) == FALSE){
			echo "error";
		}
		else{
			$result = $db->query($sql);
			$i = $result->fetch_assoc();
			echo $i['pass'];
		}
	}
	$db->close();
?>