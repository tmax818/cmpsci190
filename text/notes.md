# Reading Notes

# Hour 1. Introducing JavaScript

## Web Scripting Fundamentals

- scripts
  - make websites "live"
  - terms comes from theater
    - defines the *actions* of actors
    - in a webpage, elements are actors

### Server- Vs. Client-Side Programming

- Two fundamental ways
  - server-side scripting
    - server executes script before delivering page to client
    - ie product prices, user credentials, contents of mailbox
  - client-side scripting
    - scripts are sent to the client
    - page animation, input/form validation, redirection
  - Ajax - incorportate server-side script output into client-side JS programs

- JavaScript has nothing to do with Java

## JavaScript in a Nutshell

- "A program written in JavaScript can access the elements of a webpage and the browser window in which it is running and perform action on those elements as well as create new ones."
- Examples:
  - open a new window of specific size, position and style
  - provide navigation aids(ie drop-down menues)
  - form validaiton
  - change element look/behavior based on events
  - detect advanced features supported in the particular browser being used

## Where JavaScript Came From

- mid-1990s for Netscape Navigator 2
- European Computer Manufacturers Association(ECMA) 
- Other client-side scripting languages: Microsoft's jScript and VBScript based on Visual Basic
- JavaScript has much better browser support

## The Browser Wars

- Netscape navigator 4 and Internet Expolorer 4 each defined its own additons to JavaScript
- World Wide Web Consortium (W3C) is a resource of info and tools, [website](https://www.w3.org/). Statardized the way webpages were constructed and manipulated by means of the DOM. DOM has levels?

## The `<script>` Tag

- JS can be included between <script></script> tags within the HTML.
- JS is interpreted not compiled. JS instructions are passed as plain text and interpreted by the browser. This makes JS code easy to read and edit
- for versions before HTML5, script tags must include the type attribute.

~~~html
<script type="text/javascript">
    ... JavaScript Code
</script>
~~~

## Introducing the DOM

- Document Object Model (DOM) - a conceptual way of visualizing a document and its content
- When a browser parses the source code in an HTML file it creates a type of internal model known as the DOM representation. The browser refers to this model when rendering a page. JS can access and edit various parts of the DOM representation.
- Prior 'levels' of the DOM limited JS's access.
- BOM = Browser Object Model
- "The W3C's more ambitions definition has produced a DOM that is valid not just for web pages and JS, but for any programming language and for XML, in addtition to HTML, documents.
- This book's focus is on W3C's DOM Levels 1 and 2 definitions. [More info on DOM levels](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model) 

## The W3C and Standard Compliance

- This book focusis on browsers that are compatible with DOM Level 1 or better

## The `window` and `document` Objects

- Browsers create in memory, an internal representation of the page and all its elements(ie DOM).
- elements have logical, hierarchical structure and are *objects*.
- each object has *properties* and *methods* to manipulate those properties.
- the `window` object is at the top of the hierarchical tree.
- the `window` object's children: document, location, history, navigator, ...
- `document` object contains all the HTML and other recources.
- `location` - details of the URL
- `history` - details of previous pages visited by the browser
- `navigator` - browser type, version, and capabilities. See [Hour4]().
- `object1.object2.object3` represents object3 whose parent is object2 which is a child of object1

## Object Notation

- notation: `parent.child`(ie `window.document`)
- last item can be a *property* or *method* of the parent object (ie `window.document.title` where title is the property of the current document)
- if several windows are open, each one will have a separate window and document object.

## Talking to the User

### `window.alert()`

~~~html
<script>
    window.alert("This is the message");
</script>
// you can leave of the window
~~~

- window is the *global object*
- `document.write()` - writes the string argument provided directly to HTML. It is not used in practice

## Try It Yourself: "Hello World!" in JS

- [hello.html](hello.html)

## Summary

- server-side
- client-side
- JS history
- DOM

## Exercises

- add `document.lastModified` using `document.write()` and `alert()`
- try code in different browsers
  

# Hour 2. Writing Simple Scripts

## Including JavaScript in Your Web Pages

- Two basic methods:
  - include JS in the HTML file
  - preferalbe: include code in a separate file 

~~~HTML
<script src='mycode.js' ></script>

//relative path
<script src='/path/to/mycode.js' ></script>

//absolute path
<script src='http://www.example.com/path/to/mycode.js' ></script>
~~~

- separate file advantages:
  - updates: avaliable to all pages using js file.
  - cleaner HTML code, easier to maintain.
  - improved performance, browser caches the included file.

- "you can have as many script tags as you need."

## JavaScript Statments

- JS programs are lists of instructions, the instructions are called statments.
- statements should be on a separate line and end with a semicolon;

## Commenting Your Code

- *comments* - statements not intended to be executed, but meant for human readers of the code.
- // single line comment
- /* multiline comments use these things I never use them*/

## Variables

- a named "pigeon-hole" where we keep data
- alphanumeric characters, $, or _
- JS is case sensitive
- JS uses camelCase
- `var netPrice = 8.99;`
- use readable variable names

## Operators

### Arithmetic Operations

- we can +,-,*, and /.
- increment(++) and decrement(--)
- += and -=, and so on

## Operator Precedence

- pemdas
- same as other languages

## Using the + operator with Strings

- + operator means concatenate with strings
- string + number = string and string version of number
  
## Try it Yourself: Convert Celsius to Fahrenheit

- [temperature.html](temperature.html)

## Capturing Mouse Events

- one purpose of JS is to make sites interactive.
- *events*: mouse in browser window, button clicks, keyboard key pressed, page loaded...
- JS can work with events via *event handlers*, this hour covers onClick, onMouseOver, and onMouseOut.
- Not a good practice to put event handlers in HTML, just doing it for part one.

## The `onClick` Event Handler

- can be applied to nearly all HTML elements visible on a page.
- we can add attributes to the HTML elements themselves.

~~~html
<p onclick=" ...JS code...">execute the code bro!!</p>
~~~

[twothree.html](twothree.html)
- the `onclick` event fired!
- case change is because of XHTML?

## onMouseOver and onMouseOut Event Handlers

- `onMouseOver` event fires when the user's cursor enters the region of the screen occupied by the element in question.
- `onMouseOut` is when the cursor leaves the same region.

- I want to come back and do this exercise!!!

# Hour 3. Using Functions

- functions allow for reusable code
- they make code easier to debug and maintain.

## General Syntax

~~~javascript

function sayHello() {
    alert("Hello");
    // more code here...
}
~~~
- you can collect functions in one script

## Calling Functions

- use functionName() to call a function
- case sensitive function names are.
- *methods* are functions that belong to an object

## Putting JavaScript Code in the Page <head></head>

- functions in a `<script>` tag in the `<head>` or in an external file can be used anywhere on a page.
- functions in the head section ensures they have been defined before they are called.

## Arguments

- data passed to a function are arguments.
- x in this case is a parameter, while 3 is the argument
~~~javascript
function cube(x) {
    alert(x * x * x);
}
cube(3);
~~~

## Multiple Arguments

- just seperate arguments/paramters with commas(,)

## Returning Values from Functions

~~~javascript
function cube(x) {
    return x * x * x;
}
cube(3);
~~~

## Scope of Variables

- "Golden Rule": "Variables declared inside a function only exist inside that function."
- This limitation is known as the *scope*
- local variable - variables declared inside a function
- global variable - variables declared outside any function

## Summary

- functions and how to make them
- calling functions and passing them data
- returning stuff from funcitons

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

- [navigator.html](navigator.html)



