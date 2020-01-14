# Hour 4. DOM Objects and Built-In Objects

## Interacting with the User

### alert()

- *modal* - script execution pauses and all user interaction with the page is suspended until the user clears the dialog.
- `alert()` takes a message string as an argument. It does not return a value.

### confirm()

- also a *modal*
- takes a string as argument
- provides user with a choice: 'OK' or 'Cancel'
- 'OK' returns `true`
- 'Cancel' returns `false`

### prompt()

- *modal* that asks user for data
- takes a message as arugment
- takes a optional second argument as default response
- 'OK' or Enter key press returns the string or default
- 'Cancel' returns *null*
- null can be 0 or false depending on context.

## Selecting Elements by Their `id`

- `getElementById()` returns the DOM element with the specified id.
- we have access to all the properties and methods of the DOM element.
- should return a single element as ids are unique.

## The `innerHTML` Property

- property on many DOM elements
- can be used to get and set 

## Accessing Browser History

- `window.history` object represents the browser's history.
- it's a list of URLs previously visited.
- only property in the history object is `length`. 
- `history` object has three methods
  - `forward()` and `back()` are the same as pressing Forward and Back buttons on the browser.
  - this is confusing:
    - `history.next()
  - `go()` takes a single parameter, integer or string

## Using the `location` Object

- `location` object has info about the currently loaded page.
- URL:
  - [protocol]//[hostname]:[port]/[pathname][search][hash]

- example:
  - http://www.example.com:8080/tools/display.php?section=435#list

|Property|Description|
|:-----------:|:---------------------------------:|
|location.href|'http://www.example.com:8080/tools/display.php?section=435#list'|
|location.protocol|'http:'|
|location.host|'www.example.com:8080'|
|location.hostname|'www.examle.com'|
|location.port|'8080'|
|location.pathname|'/tools/display.php'|
|location.search|'?section=435'|
|location.hash|'#list'|

### Navigating Using the `location` Object

- two ways:
  - directly set the `href` property of the object:
    - `location.href = 'www.newpage.com';`
    - this maintains the original page in the browser's history list.
  - use the location object's `replace()` method:
    - `location.replace('www.newpage.com');`
    - this removes the sending page from history list

## Reloading the Page

- use location object's `reload()` method.
- `reload()` w/o arguments retrieves the current page from the browser's cache.
- `reload(true);` retrieves the page from the server

## Browser Information - The `navigator` Object

- the `navigator` object's properties contain data about the browser itself

## Try it Yourself: Displaying Info Using the navigator Object

- [navigator.html](navigator.html) - this is cool

## Dates and Times

- Date object is created when needed and not part of the DOM.
- Each Date object can represent different dates and times.

### Create a Date Object with Current Date and Time

- `var mydate = new Date();`
- mydate is an object containing info about the date and time it was created
- Date object methods:
  - var year = mydate.getFullYear(); // four-digit year
  - var month = mydate.getMonth(); // month numbers
  - var date = mydate.getDate(); //day of the month
  - var day = mydate.getDay(); //day numbers
  - var hours = mydate.getHours(); hours part of time
  - var minutes = mydate.getMinutes(); // minutes part of time
  - var seconds = mydate.getSeconds(); // seconds part of time

### Creating a Date Object witha a Given Date and Time

- this is done by passing arguments to the Date() statement.
- [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date), MDN uses React!

### Setting and Editing Dates and Times

- Date object has methods for setting and editing. Check out MDN link above

## Simplifying Calculations with the `Math` Object

- Math object methods can be called directly

### Rounding

- `ceil()`, `floor()`, and `round()` are used for truncating decimal parts of numbers.

### Finding Minimum and Maximum

- use `min()` and `max()`

### Random Numbers

- `Math.random()` generates a random number between 0 and 1.
- function for generating a random integer between 0 and r:

~~~javascript
function myRand(r) {
  return Math.round(Math.randome() * r);
}
~~~

### Mathematical Constants

|Costant| Description|
|:----:|----:|
|E|Base of natural logs ~2.718|
|LN2|Natural log of 2|
|LN10|Natural log of 10|
|LOG2E|Base 2 log of E|
|LOG10E|base 10 log of E|
|PI|You know, pi!! ~3.14159|

## The `with` Keyword

- can be used with any object
- `with` takes an object as an argument followed by a code block in braces.

~~~javascript

with (Math) {
  var rand = random();
  var biggest = max(3,4,5)
}
~~~

## Try it Yourself: Reading the Date and Time

- let completed exercise suffice for now

## Summary

- built-in JS objects
- window objects modal dialogs
- `document.getElementById()` method