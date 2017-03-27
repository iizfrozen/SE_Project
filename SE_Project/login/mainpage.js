/********************************************************
****This function shall when called check in the patron**
****in the check in text field***************************
********************************************************/
function request() {
    var text = document.getElementById("request_text").value;
    if (text != "") {
        document.getElementById("requestshow").innerHTML = text;
    }//endif
    else
        document.getElementById("requestshow").innerHTML = "";
}//endrequest
var xmlHttp;
function checkin() {
	var checkin = document.getElementById("checkin_text").value;
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
				document.getElementById("checkinshow").innerHTML = checkin+" was added successfully.";
			}
		}
		else{
			//document.getElementById("displayuserinfo").innerHTML = xmlHttp.responseText;
		}
	}
    xmlHttp.open("GET", "checkin.php?name=" +checkin, true);
    xmlHttp.send();
}
var x = 0;
setInterval(function(){
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
},60*1000);
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