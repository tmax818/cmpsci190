


function createCookie(name, value, expires, path, domain, secure) {
    console.log(expires)
    document.cookie = `${name}=${value};Expires=${expires}`
    
}

console.log(document.cookie)

function getCookie(name) {
    var nameEquals = name + "=";
    var crumbs = document.cookie.split(';');
    for(var i = 0; i < crumbs.length; i++) {
        var crumb = crumbs[i];
        if(crumb.indexOf(nameEquals) === 0) {
            return unescape(crumb.substring(nameEquals.length, crumb.length));
        }
    }
    return null;
}
var delcookie = document.getElementById('del');


function deleteCookie(name) {
    document.cookie = "myCookieData=John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/";
    console.log(delname)

}


