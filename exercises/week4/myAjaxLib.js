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

function doAjax(url, query, callback, reqtype, getxml) {
    var myreq = getXMLHttpRequest();
    myreq.onreadystatechange = function () {
        console.log(query)
        console.log(myreq.readyState);
        if(myreq.readyState === 1) alert("loading...");
        if(myreq.readyState === 2) alert("loaded...");
        if(myreq.readyState === 3) alert("interactive...Not sure what that means!!!!");
        

        if (myreq.readyState === 4) {
            if (myreq.status == 200) {
                console.log(myreq.status);
                var item = myreq.responseText;
                console.log(item);
                if (getxml == 1) item = myreq.responseXML;
                eval(callback + '(item)');
            }
        }
    }
    if (reqtype.toUpperCase() == "POST") {
        requestPOST(url, query, myreq);
    } else {
        requestGET(url, query, myreq);
    }
}

function requestGET(url, query, req) {
    console.log(url)
    var myRandom = parseInt(Math.random() * 99999999);
    if (query == '') {
        var callUrl = url + '?rand=' + myRandom;
    } else {
        var callUrl = url + '?' + query + '&rand=' + myRandom;
    }
    req.open("GET", callUrl, true);
    req.send(null);
}

function requestPOST(url, query, req) {
    console.log(url)
    console.log(query)
    req.open("POST", url, true);
    req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    req.send(query);
}
