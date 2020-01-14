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
  