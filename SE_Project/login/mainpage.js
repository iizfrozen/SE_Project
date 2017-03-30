/********************************************************
****This function shall when called check in the patron**
****in the check in text field***************************
********************************************************/
var x = 0;
var xmlHttp2;
function request() {
	var fname = document.getElementById("request_fname").value;
	var lname = document.getElementById("request_lname").value;
	var id = document.getElementById("request_id").value;
	var rd;
	if(document.getElementById("request_type1").checked){
		rd = 1;
	}
	else if(document.getElementById("request_type2").checked){
		rd = 2;
	}
	else if(document.getElementById("request_type3").checked){
		rd = 3;
	}
	xmlHttp = GetXmlHttpObject();
	if(xmlHttp==null)
    {
		document.getElementById("display").innerHTML = "Error";
		return;
    }
	xmlHttp.onreadystatechange = function(){
		if(xmlHttp.readyState == 4 && xmlHttp.status == 200){
			var response = xmlHttp.responseText;
			if(xmlHttp.responseText == "0"){
				document.getElementById("requestshow").innerHTML = fname+" was added successfully.";
			}
		}
		else{
			//document.getElementById("displayuserinfo").innerHTML = xmlHttp.responseText;
		}
	}
    xmlHttp.open("GET", "request.php?fname=" +fname+"&lname="+lname+"&id="+id+"&type="+rd, true);
    xmlHttp.send();
}//endrequest
function remove() {
	var fname = document.getElementById("remove_fname").value;
	var lname = document.getElementById("remove_lname").value;
	var id = document.getElementById("remove_id").value;
	xmlHttp = GetXmlHttpObject();
	if(xmlHttp==null)
    {
		document.getElementById("display").innerHTML = "Error";
		return;
    }
	xmlHttp.onreadystatechange = function(){
		if(xmlHttp.readyState == 4 && xmlHttp.status == 200){
			var response = xmlHttp.responseText;
			if(xmlHttp.responseText == "0"){
				document.getElementById("removeshow").innerHTML = fname+" was removed successfully.";
			}
		}
		else{
			//document.getElementById("displayuserinfo").innerHTML = xmlHttp.responseText;
		}
	}
    xmlHttp.open("GET", "remove.php?fname=" +fname+"&lname="+lname+"&id="+id, true);
    xmlHttp.send();
}//endrequest
function showallcheckin() {
	xmlHttp = GetXmlHttpObject();
	if(xmlHttp==null)
    {
		document.getElementById("display").innerHTML = "Error";
		return;
    }
	xmlHttp.onreadystatechange = function(){
		if(xmlHttp.readyState == 4 && xmlHttp.status == 200){
			var response = xmlHttp.responseText;
			if(xmlHttp.responseText){
				document.getElementById("checkinall").innerHTML = response;
			}
		}
		else{
			//document.getElementById("displayuserinfo").innerHTML = xmlHttp.responseText;
		}
	}
    xmlHttp.open("GET", "checkinshowall.php", true);
    xmlHttp.send();
}//endrequest
var xmlHttp;
function checkin() {
	var fname = document.getElementById("checkin_fname").value;
	var lname = document.getElementById("checkin_lname").value;
	var id = document.getElementById("checkin_id").value;
	xmlHttp = GetXmlHttpObject();
	if(xmlHttp==null)
    {
		document.getElementById("display").innerHTML = "Error";
		return;
    }
	xmlHttp.onreadystatechange = function(){
		if(xmlHttp.readyState == 4 && xmlHttp.status == 200){
			var response = xmlHttp.responseText;
			if(xmlHttp.responseText == "0"){
				document.getElementById("checkinshow").innerHTML = fname+" was added successfully.";
			}
			else if(xmlHttp.responseText == "1"){
				document.getElementById("checkinshow").innerHTML = fname+" hasn't signed the waiver.";
			}
			else if(xmlHttp.responseText == "2"){
				document.getElementById("checkinshow").innerHTML = fname+" is suspended from the wall."
			}
			else if(xmlHttp.responseText == "3"){
				document.getElementById("checkinshow").innerHTML = "Error checking them in.";
			}
			else if(xmlHttp.responseText == "4"){
				document.getElementById("checkinshow").innerHTML = fname+" is already checked in.";
			}
		}
		else{
			//document.getElementById("displayuserinfo").innerHTML = xmlHttp.responseText;
		}
	}
    xmlHttp.open("GET", "checkin.php?fname=" +fname+"&lname="+lname+"&id="+id, true);
    xmlHttp.send();
}
setInterval(function(){
	var date = new Date();
	var d = date.toDateString();
	d = d.replace(/\s+/g, '');
	var t = date.toLocaleTimeString();
	t = t.replace(/:/g,'');
	t = t.replace(/\s+/g,'');
	d = d+t;
	xmlHttp2=GetXmlHttpObject();
	if(xmlHttp2==null){
		document.getElementById("error").innerHTML="Browser does not support HTTP Request";
		return;
	}
	xmlHttp2.onreadystatechange = function(){
		if(xmlHttp2.readyState == 4 && xmlHttp.status == 200){
			if(xmlHttp2.responseText == "0"){
				checkinreport();
			}
		}
		else{
		}
	}
	xmlHttp2.open("GET","writeCheckinRecords.php?filename="+d,true);
	xmlHttp2.send();
},60*1000);
function checkinreport(){
	xmlHttp = GetXmlHttpObject();
	if(xmlHttp==null)
    {
		return;
    }
	xmlHttp.onreadystatechange = function(){
		if(xmlHttp.readyState == 4 && xmlHttp.status == 200){
			var response = xmlHttp.responseText;
			if(xmlHttp.responseText == "0"){
				x = x + 1;
				document.getElementById("error").innerHTML = "I ran " + x + " times";
			}
		}
		else{
			//document.getElementById("displayuserinfo").innerHTML = xmlHttp.responseText;
		}
	}
    xmlHttp.open("GET", "delete.php", true);
    xmlHttp.send();
}
function GetXmlHttpObject() {
	xmlHttp = null;
	if (window.XMLHttpRequest) {
    xmlHttp = new XMLHttpRequest();
    }
    else {
        xmlHttp = new ActiveXObject("Microsoft.XMLHTTP")
    }
    return xmlHttp;
}