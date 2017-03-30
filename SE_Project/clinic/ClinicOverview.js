var xmlHttp;

function GetXmlHttpObject() {
    xmlHttp = null;
    if (window.XMLHttpRequest) {
        // IE 7+, Safari, Opera, Firefox, etc.   
        xmlHttp = new XMLHttpRequest();
    }
    else {	// for IE 5 & 6 
        xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    return xmlHttp;
}
function displayClinic() {
    xmlHttp = GetXmlHttpObject();
    if (xmlHttp == null) {
        document.getElementById("error").innerHTML = "Browser does not support HTTP Request";
        return;
    }
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            document.getElementById("displayclinics").innerHTML = xmlHttp.responseText;
        }
        else {
            document.getElementById("displayclinics").innerHTML = xmlHttp.responseText;
        }
    }
    xmlHttp.open("GET", "displayClinic.php", true);
    xmlHttp.send();
}
var xmlHttp;

function GetXmlHttpObject() {
    xmlHttp = null;
    if (window.XMLHttpRequest) {
        // IE 7+, Safari, Opera, Firefox, etc.   
        xmlHttp = new XMLHttpRequest();
    }
    else {	// for IE 5 & 6 
        xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    return xmlHttp;
}
function addClinic() {
    var Cname = document.getElementById("Clinicname").value;
    var Cdate = document.getElementById("date").value;
    var Ctime = document.getElementById("time").value;
    var Ccap = document.getElementById("capacity").value;
    var Cinstr = document.getElementById("instructor").value;
	var cid = document.getElementById("cid").value;
    xmlHttp = GetXmlHttpObject();
    if (xmlHttp == null) {
        document.getElementById("error").innerHTML = "Browser does not support HTTP Request";
        return;
    }
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            if (xmlHttp.responseText == "0") {
                document.getElementById("error").innerHTML = Cname + " was added successfully.";
            }
            else if (xmlHttp.responseText == "1")
                document.getElementById("error").innerHTML = Cname + " already exists";
            else
                document.getElementById("error").innerHTML = "Error in adding user";
        }
    }
    xmlHttp.open("GET", "addClinic.php?Cname=" + Cname + "&Cdate=" + Cdate + "&Ctime=" + Ctime + "&Ccap=" + Ccap + "&Cinstr=" + Cinstr + "&id=" + cid , true);
    xmlHttp.send();
}

function deleteclinic(){
	var did = document.getElementById("did").value;
	xmlHttp=GetXmlHttpObject();
	if(xmlHttp==null){
		document.getElementById("error").innerHTML="Browser does not support HTTP Request";
		return;
	}
	xmlHttp.onreadystatechange = function(){
		if(xmlHttp.readyState == 4 && xmlHttp.status == 200){
			if(xmlHttp.responseText == ""){
				document.getElementById("error").innerHTML = did+" was deleted successfully.";
			}
			else{
				document.getElementById("error").innerHTMl = "Error";
			}
		}
		else{
			document.getElementById("error").innerHTML = xmlHttp.responseText;
		}
	}
	xmlHttp.open("GET","deleteClinic.php?did="+did,true);
	xmlHttp.send();
}