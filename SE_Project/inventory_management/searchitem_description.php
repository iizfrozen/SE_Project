<?php
	$user = 'root';
	$pass = '';
	$db='seproject';
	$db = new mysqli('localhost',$user,$pass,$db) or die("Unable to connect");
	$sid = (isset($_GET['sid']) ? $_GET['sid'] : null);
	if($sid == null){
		echo "Please enter a description.";
		return; 
	}
	$sql = "SELECT * FROM items WHERE item_desc LIKE '".$sid."%'";
	$result = $db->query($sql);	
	if($result == false){
			echo $sql;
		}
		else{
			//echo "Sucess!";
		}	
	if($result->num_rows > 0){
			echo "<table><tr><th>Description     </th><th>Lifetime     </th><th>ID    </th></tr>";
			while($row = $result->fetch_assoc()){ // Display all of the rows until fetch_assoc returns false... 
			echo "<tr> <td>".$row["item_desc"]."</td><td> ".$row["item_life"]." </td><td> ".$row["item_id"]." </td></tr>";
			}
			echo "</table>";
		}
		else{
			echo "Zero results.";
		}
	$db->close();



?>