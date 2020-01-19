# Hour 10. JavaScript and Cookies

- JavaScript cannot transfer info from one page to another.
- Cookies allow:
  - storage/retrieval of info from users computer
  - store user preferences
  - store dates of prior visits

## What Are Cookies?

- HTTP protocol is *stateless* - server retains no memeory of transactions once completed
- Cookies get around this problem
- cookies are small strings of info stored on a user's computer.
- users can disallow cookies, don't depend on them. Explain why you are using them.

## Limitations of Cookies

- about 20 cookies per domain name
- total of 4KB of cookie info
- never store critical data

## The `document.cookie` Property

- cookies are stored/retrieved using the `cookie` property on the `document` object.
- each cookie is a key/value pair: `username=sam`
- cookies are *stiringlike* they are not really strings
- individual cookies are separated by simicolons within the string. `username=same;location=USA;status=fullmember;`


## Escaping and Unescaping Data

- cookie values cannot contain: simicolons, commas and whitespace( space or tab).
- data must be encoded to be stored.
- `escape()` function encodes values
- `unescape()` funciton recovers the value

## Cookie Ingredients

- each cookie has other pieces of info associated with it.

### `cookieName` and `cookieValue`

- 

### domain

- attribute that tells the browser which domain the cookie belongs to.
- purpose is to control cookie operation across subdomains
  
### path

- attribute to specify a directgory where the cookie is available.
- optional
- / means the cookie is valid for the whole domain

### secure

- optional and rarely used
- flag that indicates the browser should use SSL when sending cookies to the server

### expires

- date after which the cookie is deleted
- in UTC time
- if not set, cookie will be deleted after browser session

## Writing a Cookie

- assign a value to the `document.cookie` containing required attributes:
  
  ~~~javascript
  document.cookie = "username=sam;expires=15/06/202200:00:00";
  ~~~

- could use JavaScript's date object.
- use `escape()` function though:

~~~javascript

var cookieDate = new Date(2022, 05, 15);
var user = "Same Jones";
document.cookie =username=" + escape(user) + ";expires=" + cookieDate.toUTCSting();
~~~

## A Function to Write a Cookie

- just write a cookie function!

~~~javascript
fuction createCookie(name, value, days, path, domain, secure) {
    var date = new Date();
    date.setTime(date.getTime() + (days*24*60*60*1000));
    var expires = date.to
}
~~~


## Try It Yourself: Writing Cookies

## Reading a Cookie

## Deleting Cookies

## Try It Yourself: Using Cookies

- using external js file [cookies.js](cookies.js)
- and [index.html](index.html)
- and [cookies2.html](cookies2.html)

## Setting Multiple Values in a Single Cookie

## Summary

- cookies and how to set, retrieve and delete them
- concatentate multiple values into a single cookie.




