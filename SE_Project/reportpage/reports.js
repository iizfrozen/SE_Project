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
function patronreport(){
	var filename = document.getElementById("patron_filename").value;
	xmlHttp=GetXmlHttpObject();
	if(xmlHttp==null){
		document.getElementById("error").innerHTML="Browser does not support HTTP Request";
		return;
	}
	xmlHttp.onreadystatechange = function(){
		if(xmlHttp.readyState == 4 && xmlHttp.status == 200){
			if(xmlHttp.responseText == "0"){}
		}
		else{
			document.getElementById("displayuserinfo").innerHTML = xmlHttp.responseText;
		}
	}
	xmlHttp.open("GET","writePatronRecords.php?filename="+filename,true);
	xmlHttp.send();
}
function checkinreport(){
	var filename = document.getElementById("checkin_filename").value;
	xmlHttp=GetXmlHttpObject();
	if(xmlHttp==null){
		document.getElementById("error").innerHTML="Browser does not support HTTP Request";
		return;
	}
	xmlHttp.onreadystatechange = function(){
		if(xmlHttp.readyState == 4 && xmlHttp.status == 200){
			if(xmlHttp.responseText == "0"){}
		}
		else{
			document.getElementById("displayuserinfo").innerHTML = xmlHttp.responseText;
		}
	}
	xmlHttp.open("GET","writeCheckinRecords.php?filename="+filename,true);
	xmlHttp.send();
}