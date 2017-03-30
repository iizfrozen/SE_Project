<?php
//Initial setup... 
	$user = 'root';
	$pass = '';
	$db ='seproject';
	$table = 'patrons';
	$filename = (isset($_GET['filename']) ? $_GET['filename'] : null);
	$db = new mysqli('localhost',$user,$pass,$db) or die("Unable to connect");
	$sql = "SELECT * FROM ".$table;
	$result = $db->query($sql);	
	//$filename = "temp_patron"; 
	//Open file to put records into 
	//"a" for append, "w" for write. 
	$file_records = fopen('../reports/'.$filename.'.txt', "w") or die ("Unable to open file!"); 
	//Write records to that file using fwrite($patron_file_log, %text_to_write);
	//
	if($result->num_rows > 0){
		while($row = $result->fetch_assoc()){ // Display all of the rows until fetch_assoc returns false... 
		 //id,fname,lname,address,supension
			fwrite($file_records, $row["fname"]." ".$row["lname"]." ".$row["address"].PHP_EOL);
			
		}
	}
	else {
		fwrite($file_records, "No patrons today.");
	}
		
	
	$db->close(); 

?>