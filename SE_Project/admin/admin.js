var xmlHttp;
function adduser(){
	var aname = document.getElementById("uname2").value;
	var pass = document.getElementById("pass2").value;
	xmlHttp=GetXmlHttpObject();
	if(xmlHttp==null){
		document.getElementById("error").innerHTML="Browser does not support HTTP Request";
		return;
	}
	xmlHttp.onreadystatechange = function(){
		if(xmlHttp.readyState == 4 && xmlHttp.status == 200){
			if(xmlHttp.responseText == "0"){
				document.getElementById("error").innerHTML = aname+" was added successfully.";
			}
			else if(xmlHttp.responseText == "1")
				document.getElementById("error").innerHTML = aname+" already exists";
			else
				document.getElementById("error").innerHTML = "Error in adding user";
		}
		else{
			document.getElementById("displayuserinfo").innerHTML = xmlHttp.responseText;
		}
	}
	xmlHttp.open("GET","adduser.php?uname="+aname+"&pass="+pass,true);
	xmlHttp.send();
}

function deleteuser(){
	var aname = document.getElementById("deletename").value;
	xmlHttp=GetXmlHttpObject();
	if(xmlHttp==null){
		document.getElementById("error").innerHTML="Browser does not support HTTP Request";
		return;
	}
	xmlHttp.onreadystatechange = function(){
		if(xmlHttp.readyState == 4 && xmlHttp.status == 200){
			if(xmlHttp.responseText == ""){
				document.getElementById("error").innerHTML = aname+" was deleted successfully.";
			}
			else{
				document.getElementById("error").innerHTMl = "Error";
			}
		}
		else{
			document.getElementById("displayuserinfo").innerHTML = xmlHttp.responseText;
		}
	}
	xmlHttp.open("GET","delete.php?uname="+aname,true);
	xmlHttp.send();
}
//Searches for a user
function norp(){
	document.getElementById("searchinfo").innerHTML = "";
	xmlHttp=GetXmlHttpObject();
	if(xmlHttp==null){
		document.getElementById("error").innerHTML="Browser does not support HTTP Request";
		return;
	}
	xmlHttp.onreadystatechange = function(){
		if(xmlHttp.readyState == 4 && xmlHttp.status == 200){
			document.getElementById("searchinfo").innerHTML = xmlHttp.responseText;
		}
		else{
			document.getElementById("searchinfo").innerHTML = xmlHttp.responseText;
		}
	}
	var aname = document.getElementById("search").value;
	xmlHttp.open("GET","search1.php?uname="+aname,true);
	xmlHttp.send();
}
function changeuser(){
	var aname;
	aname = document.getElementById("uname").value;
	var pass = document.getElementById("pass").value;
	xmlHttp=GetXmlHttpObject();
	if(xmlHttp==null){
		document.getElementById("error").innerHTML="Browser does not support HTTP Request";
		return;
	}
	xmlHttp.onreadystatechange = function(){
		if(xmlHttp.readyState == 4 && xmlHttp.status == 200){
			if(xmlHttp.responseText == "0"){
				document.getElementById("error").innerHTML = aname+" was change successfully.";
			}
			else
				document.getElementById("error").innerHTML = "Error in updating user";
		}
		else{
			document.getElementById("displayuserinfo").innerHTML = xmlHttp.responseText;
		}
	}
	xmlHttp.open("GET","edituser.php?aname="+aname+"&pass="+pass,true);
	xmlHttp.send();
}
function GetXmlHttpObject()
{
   xmlHttp=null;
   if (window.XMLHttpRequest) 
   {
		// IE 7+, Safari, Opera, Firefox, etc.   
		xmlHttp = new XMLHttpRequest();
   } 
   else 
   {	// for IE 5 & 6 
		xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
   }
   return xmlHttp;
}