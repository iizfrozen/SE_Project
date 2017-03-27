<?php
	$user = 'root';
	$pass = '';
	$db='seproject';
	$db = new mysqli('localhost',$user,$pass,$db) or die("Unable to connect");
	$sid = (isset($_GET['sid']) ? $_GET['sid'] : null);
	$sql = "SELECT * FROM patrons WHERE id LIKE '%".$sid."'";
	$result = $db->query($sql);		
	if($result->num_rows > 0){
			echo "<table><tr><th>Userid</th><th>First Name</th><th>Last Name</th><th>Address</th></tr>";
			$row = $result->fetch_assoc();
			echo "<tr> <td>".$row["id"]."</td><td>".$row["fname"]."</td><td>".$row["lname"]."</td><td>".$row["address"]."</td></tr>";
			echo "</table>";
		}
		else{
			echo "Zero results.";
		}
	$db->close();
?>