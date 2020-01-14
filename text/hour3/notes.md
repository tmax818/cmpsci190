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