var xmlHttp;

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
function addpatron(){
	var fname = document.getElementById("firstname").value;
	var lname = document.getElementById("lastname").value;
	var id = document.getElementById("id").value;
	var address = document.getElementById("address").value;
	xmlHttp=GetXmlHttpObject();
	if(xmlHttp==null){
		document.getElementById("error").innerHTML="Browser does not support HTTP Request";
		return;
	}
	xmlHttp.onreadystatechange = function(){
		if(xmlHttp.readyState == 4 && xmlHttp.status == 200){
			if(xmlHttp.responseText == "0"){
				document.getElementById("error").innerHTML = fname+" was added successfully.";
			}
			else if(xmlHttp.responseText == "1")
				document.getElementById("error").innerHTML = fname+" already exists";
			else
				document.getElementById("error").innerHTML = "Error in adding user";
		}
		else{
			document.getElementById("displayuserinfo").innerHTML = xmlHttp.responseText;
		}
	}
	xmlHttp.open("GET","addpatron.php?fname="+fname+"&lname="+lname+"&id="+id+"&address="+address,true);
	xmlHttp.send();
}
function deletepatron(){
	var did = document.getElementById("did").value;
	xmlHttp=GetXmlHttpObject();
	if(xmlHttp==null){
		document.getElementById("error1").innerHTML="Browser does not support HTTP Request";
		return;
	}
	xmlHttp.onreadystatechange = function(){
		if(xmlHttp.readyState == 4 && xmlHttp.status == 200){
			if(xmlHttp.responseText == ""){
				document.getElementById("error1").innerHTML = did+" was deleted successfully.";
			}
			else{
				document.getElementById("error1").innerHTMl = "Error";
			}
		}
		else{
			document.getElementById("displayuserinfo").innerHTML = xmlHttp.responseText;
		}
	}
	xmlHttp.open("GET","deletepatron.php?did="+did,true);
	xmlHttp.send();
}
function norp(){
	
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
	var sid = document.getElementById("sid").value;
	xmlHttp.open("GET","searchpatron.php?sid="+sid,true);
	xmlHttp.send();
}
function norp2(){
	
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
	var sid = document.getElementById("sname").value;
	xmlHttp.open("GET","searchpatron2.php?sname="+sid,true);
	xmlHttp.send();
}