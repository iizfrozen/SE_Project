<?php
	$user = 'root';
	$pass = '';
	$db = 'seproject';
	$db = new mysqli('localhost',$user,$pass,$db) or die("Unable to connect");

	$Cname = (isset($_GET['Cname']) ? $_GET['Cname'] : null);
	$Cdate = (isset($_GET['Cdate']) ? $_GET['Cdate'] : null);
	$Ctime = (isset($_GET['Ctime']) ? $_GET['Ctime'] : null);
	$Ccap = (isset($_GET['Ccap']) ? $_GET['Ccap'] : null);
	$Cinstr = (isset($_GET['Cinstr']) ? $_GET['Cinstr'] : null);
	$result2 = false;
	if($Cname != NULL){
		$sql = "INSERT INTO clinictable (Cname,Cdate,Ctime,Ccap,Cinstr) VALUES('$Cname','$Cdate','$Ctime','$Ccap','$Cinstr')";
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
