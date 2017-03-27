<?php
	$user = 'root';
	$pass = '';
	$db='seproject';
	$db = new mysqli('localhost',$user,$pass,$db) or die("Unable to connect");
	$sid = (isset($_GET['sid']) ? $_GET['sid'] : null);
	$sql = "SELECT * FROM items WHERE item_id='".$sid."'";
	$result = $db->query($sql);	
	if($result == false){
			echo $sql;
		}
		else{
			//echo "Sucess!";
		}	
	if($result->num_rows > 0){
			echo "<table><tr><th>Item description  </th><th>Item Lifetime  </th><th>Item Id</th></tr>";
			$row = $result->fetch_assoc();
			echo "<tr> <td>".$row["item_desc"]."</td><td> ".$row["item_life"]." </td><td> ".$row["item_id"]." </td></tr>";
			echo "</table>";
		}
		else{
			echo "Zero results.";
		}
	$db->close();
?>