<?php
	$user = 'root';
	$pass = '';
	$db = 'seproject';
	$db = new mysqli('localhost',$user,$pass,$db) or die("Unable to connect");


	$query = "SELECT * FROM checkin"; //clinictable may have to be changed depending on database
	$result = $db->query($query);
	if($result->num_rows > 0){
			echo "<h2>Checked In Patrons</h2><br/><table border ='1'><tr><th>First Name</th><th>Last Name</th><th>Date</th><th>ID</th></tr>"; // start a table tag in the HTML
			while($row = $result->fetch_assoc()){
				echo "<tr><td>".$row["fname"]."</td><td>".$row["lname"]."</td><td>".$row["date"]."</td><td>".$row["id"]."</td></tr>";
			}
			echo "</table>";
		}
		else{
			echo "0 results";
	}


	$db->close();
?>