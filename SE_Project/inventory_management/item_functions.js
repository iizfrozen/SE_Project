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
function additem(){
	var item_desc = document.getElementById("itemdesc").value;
	var item_life = document.getElementById("itemlife").value;
	var item_id = document.getElementById("itemid").value;
	xmlHttp=GetXmlHttpObject();
	if(xmlHttp==null){
		document.getElementById("error").innerHTML="Browser does not support HTTP Request";
		return;
	}
	xmlHttp.onreadystatechange = function(){
		if(xmlHttp.readyState == 4 && xmlHttp.status == 200){
			if(xmlHttp.responseText == "0"){
				//document.getElementById("error").innerHTML = item_id+" was added successfully.";
			}
			/* else if(xmlHttp.responseText == "1")
				document.getElementById("error").innerHTML = item_id+" already exists";
			else
				document.getElementById("error").innerHTML = "Error in adding item"; */
		}
		else{
			//document.getElementById("displayuserinfo").innerHTML = xmlHttp.responseText;
		}
	}
	xmlHttp.open("GET","additem.php?itemdesc="+item_desc+"&itemlife="+item_life+"&itemid="+item_id,true);
	xmlHttp.send();
}
function searchItemsById(){
	document.getElementById("sid").innerHTML = "";
	xmlHttp=GetXmlHttpObject();
	if(xmlHttp==null){
		//document.getElementById("error").innerHTML="Browser does not support HTTP Request";
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
	var id_to_search = document.getElementById("sid").value;
	xmlHttp.open("GET","searchitem.php?sid="+id_to_search,true);
	xmlHttp.send();
}
function searchItemsByDescription(){
	document.getElementById("sid").innerHTML = "";
	xmlHttp=GetXmlHttpObject();
	if(xmlHttp==null){
		//document.getElementById("error").innerHTML="Browser does not support HTTP Request";
		return;
	}
	xmlHttp.onreadystatechange = function(){
		if(xmlHttp.readyState == 4 && xmlHttp.status == 200){
			document.getElementById("results").innerHTML = xmlHttp.responseText;
		}
		else{
			document.getElementById("results").innerHTML = xmlHttp.responseText;
		}
	}
	var id_to_search = document.getElementById("s_description").value;
	xmlHttp.open("GET","searchitem_description.php?sid="+id_to_search,true);
	xmlHttp.send();
	
}
function display_All_Items(){
	xmlHttp=GetXmlHttpObject();
	if(xmlHttp==null){
		document.getElementById("error").innerHTML="Browser does not support HTTP Request";
		return;
	}
	xmlHttp.onreadystatechange = function(){
		if(xmlHttp.readyState == 4 && xmlHttp.status == 200){
			document.getElementById("results").innerHTML = xmlHttp.responseText;
		}
		else{
			document.getElementById("results").innerHTML = xmlHttp.responseText;
		}
	}
	xmlHttp.open("GET","display_all_items.php",true);
	xmlHttp.send();

}
