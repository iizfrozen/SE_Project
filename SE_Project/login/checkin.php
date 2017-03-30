<?php
	$user = 'root';
	$pass = '';
	$db='seproject';
	$db = new mysqli('localhost',$user,$pass,$db) or die("Unable to connect");
	$fname = (isset($_GET['fname']) ? $_GET['fname'] : null);
	$lname = (isset($_GET['lname']) ? $_GET['lname'] : null);
	$id = (isset($_GET['id']) ? $_GET['id'] : null);
	$result2 = false;
	
	if($fname != NULL && $lname != NULL){
		$sql = "SELECT * FROM patrons WHERE fname='".$fname."' and lname='".$lname."' and id='".$id."'";
		$result = $db->query($sql);
		if($result->num_rows < 1)
		{
			echo "1";
		}
		else
		{
			$sql3 = "SELECT * FROM checkin WHERE fname='".$fname."' and lname='".$lname."'and id='".$id."'";
			$result3 = $db->query($sql3);
			if($result3->num_rows < 1){
				$row = $result->fetch_assoc();
				if($row["supension"] > 0){
					echo "2";
				}
				else{
					$sql2 = "INSERT INTO checkin (fname,lname,id) VALUES('$fname','$lname','$id')";
					$result2 = $db->query($sql2);
					if($result2 == false){
						echo "3";
					}
					else{
						echo "0";
					}
				}
			}
			else{
				echo "4";
			}
		}
	}
	$db->close();
?>