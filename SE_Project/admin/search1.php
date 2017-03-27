<?php
	$user = 'root';
	$pass = '';
	$db='seproject';
	$db = new mysqli('localhost',$user,$pass,$db) or die("Unable to connect");
	$uname = (isset($_GET['uname']) ? $_GET['uname'] : null);
	$sql = "SELECT * FROM logininfo WHERE name='".$uname."'";
	$result = $db->query($sql);		
	if($result->num_rows > 0){
			echo "<table><tr><th>Userid</th><th>Password</th></tr>";
			$row = $result->fetch_assoc();
			echo "<tr> <td>".$row["name"]."</td><td>".$row["pass"]."</td></tr>";
			echo "</table>";
		}
		else{
			echo "Zero results.";
		}
	$db->close();
?>