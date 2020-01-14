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