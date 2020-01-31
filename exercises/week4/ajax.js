function getXMLHttpRequest() {
    try {
        try {
            return new ActiveXObject("Microsoft.XMLHTTP");
        }
        catch (e) {
            return new ActiveXObject("Msxml2.XMLHTTP");
        }
    }
    catch (e) {
        return new XMLHttpRequest();
    }

}
function callAjax() {
    var url = "http://ec2-18-188-242-78.us-east-2.compute.amazonaws.com/clock.php";
    var myRandom = parseInt(Math.random() * 99999999);
    myRequest.open("GET", url + "?rand=" + myRandom, true);
    myRequest.onreadystatechange = responseAjax;
    myRequest.send(null);
  
}
function responseAjax() {
    if (myRequest.readyState == 4) {
        if (myRequest.status == 200) {
            var now = new Date();
            var localTime = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
            var serverTime = myRequest.responseText

            document.getElementById("clock").innerHTML = "Server: " + serverTime + "<br />Local: " + localTime;
        } else {
            alert("An error has occurred: " + myRequest.statusText);
        }
    }
}
var myRequest = getXMLHttpRequest();
console.log(myRequest.readyState)

setInterval(() => {
    callAjax()
}, 900);