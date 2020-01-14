# Hour 6. Scripts That Do More

## Conditional Statements

- conditional statements - used to detect conditions arising in the values of variables in a script.

## The `if()` Statement

- general form:
  - if(this condition is true) then do this;
- test for false:
  - if(!true) then do this;

## Comparison Operators

  |Operator|Meaning|
  |---|---|
  |==|is equal to|
  |===|is equal to in both value and type|
  |!=| is not equal to|
  |>| is greater than|
  |<|is less than|
  |>=| is greater than or equal|
  |<=|is less than or equal|

  ## More about if()

- add additional code between {}
- `(condition) ? [do if true] : [do if false]`
- else too!

## The switch Statement

~~~javascript

switch(color) {
  case "red" :
    message = "Stop";
    break;
  case "yellow" :
    message = "Punch it!";
    break;
  case "green" :
    message = "go"
    break;
  default :
    message = "treat it like a stop sign!";
}
~~~

- there can be any number of code statments in each section

## Logical Operators

- testing a combination of criteria with if ... else becomes unwieldy
- `temp >= 64 && temp <= 72` === `temp < 64 || temp > 72`

## Loops and Control Structures

- if statements are *junctions* in a program
- if you don't know the number of iterations, loops

### while

- `while` is like `if` except it goes back and checks the condition again
- syntax: `while(condition) { execute this code...}
  
### do ... while

- like `while` except it will always execute at least once.

### for

- for(initial, test, counter change)

### Leaving a Loop with break

- break ends the loop and returns operation to the line immediately after the closing brace

### Looping through Objects with `for ... in`

- special loop for stepping through the properties of an object.

## Debugging Your Scripts

- kind of basic
- Google Chrome is the Chromium open source browser backaged and distributed by Google.

## Try It Yourself: A Banner Cycling Script

- `onload` 
  - method on the `window` object
  - set as a property on the body element 
- `setInterval()` 
  - JS function
  - two args:
    - function to run
    - delay in milliseconds
- [banner.html](banner.html)


## Summary 

- testing conditions
- control flow
- browser debugging tools
