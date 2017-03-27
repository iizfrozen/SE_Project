<?php
	$user = 'root';
	$pass = '';
	$db ='seproject';
	$db = new mysqli('localhost',$user,$pass,$db) or die("Unable to connect");
	$itemdesc = (isset($_GET['itemdesc']) ? $_GET['itemdesc'] : null); 
	$itemlife = (isset($_GET['itemlife']) ? $_GET['itemlife'] : null);
	$itemid = (isset($_GET['itemid']) ? $_GET['itemid'] : null);
	//echo "Hello"; 
	if($itemdesc != NULL){
		$sql = "INSERT INTO items (item_desc, item_life, item_id) VALUES('$itemdesc', $itemlife, $itemid);";
		//echo "Hello"; 
		$result2 = $db->query($sql);
		if($result2 == false){
			echo $sql;
		}
		else{
			echo "Sucess!";
		}
	}
	$db->close();
?>