<?php
	$user = 'root';
	$pass = '';
	$db = 'seproject';
	$db = new mysqli('localhost',$user,$pass,$db) or die("Unable to connect");
	$aname = (isset($_GET['aname']) ? $_GET['aname'] : null);
	$pass = (isset($_GET['pass']) ? $_GET['pass'] : null);
	$sql4 = "UPDATE logininfo SET pass='".$pass."' WHERE name='".$aname."'";
	$result4 = $db->query($sql4);
	if($result4 == FALSE){
		echo "1";
	}
	else{
		echo "0";
	}
	$db->close();
?>