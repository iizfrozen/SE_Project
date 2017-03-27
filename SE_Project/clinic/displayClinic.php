<?php
	$user = 'root';
	$pass = '';
	$db = 'seproject';
	$db = new mysqli('localhost',$user,$pass,$db) or die("Unable to connect");


	$query = "SELECT * FROM clinictable"; //clinictable may have to be changed depending on database
	$result = $db->query($query);
	if($result->num_rows > 0){
			echo "<table border ='1'><tr><th>Clinic Name</th><th>Clinic Date</th><th>Clinic Time</th><th>Clinic Capacity</th><th>Clinic Instructor</th></tr>"; // start a table tag in the HTML
			while($row = $result->fetch_assoc()){
				echo "<tr> <td>".$row["Cname"]."</td><td>".$row["Cdate"]."</td><td>".$row["Ctime"]."</td><td>".$row["Ccap"]."</td><td>".$row["Cinstr"]."</td></tr>";
			}
			echo "</table>";
		}
		else{
			echo "0 results";
	}


	$db->close();
?>