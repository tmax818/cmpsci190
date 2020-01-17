1. Why try example code in multiple browsers?

With each new release of JavaScript (i.e. EC2017, EC2018 etc.), different browsers implement new JavaScript functionality at different rates. Sites like caniuse.com serve as a reference for which JavaScript functionality can be used in which browsers. Compliers such as Babel are used with libraries such as React that rely heavily on the new class syntax in JavaScript. 
 

2. 
- What are the two basic ways to assocate JS code in a webpage? 

JavaScript code can be embeded in the html file between script tags or it can be written in external files with a '.js' extension and linked via the src attribute of a script tag. 
- What is a JS statement?



- What is a variable? 

A variable is like a box in which a value can be stored. In JavaScript, variables are declared with the `var` keyword and the `let` and `const` keywords in EC2016 and beyond.

- What is an operator?

An operator is a component of a programming language that performs a prescribed operation on one or more operands. 

3. What is a JS Function?

A JavaScript funciton is a means of keeping code DRY (Don't Repeat Yourself). It is a mechanism for wrapping commonly used statements in a reusable package. It can be invoked with or without arguments and can return values or not.  

4. Discuss the similarities and differences between: 
- `alert()` 
- `confirm()` 
- `prompt()` 
methods on the window object. 

All three methods open a modal dialog box in the browser. All three methods also block other user interaction on a site until the user clicks a button. The alert() method simply displays a message, while the confirm() and prompt() methods ask for user input. The confirm() method returns a boolean value that is contingent upon the user's action. The prompt() method returns a string value for what the user types in the dialog box or null if the user clicks "cancel".  

- What are the methods typically used for?

The methods are used for interaction with the user. 

5. What are the three datatypes in JS? What sort of data is each meant to represent?

Three of the primative datatypes in JavaScript are String, Number and Boolean. Strings represent collections of characters inclosed in quotation marks("" or ''). Numbers represent integers and floating-point or decimal numbers. Booleans represent the values true or false. 
 


## Post

Question 1:

With each new release of JavaScript (i.e. EC2017, EC2018 etc.), different browsers implement new JavaScript functionality at different times (some faster than others). Sites like MDN (Links to an external site.) include a table at the bottom of a JavaScript reference page that shows which browsers have implemented the given functionality. Compilers such as Babel (Links to an external site.) are used with libraries such as React that rely heavily on the new class syntax in newer versions of JavaScript.
 
Question 2:
 
JavaScript code can be embedded in the HTML file between script tags or it can be written in external files with a .js extension and linked via the src attribute of a script tag.
A JavaScript statement is a command given to be executed in a script. A statement in JavaScript can be composed of expressions, operators and other statements. 
A variable is like a box in which a value can be stored. In JavaScript, variables are declared with the var keyword and the let and const keywords in EC2016 and beyond.
An operator is a component of a programming language that performs a prescribed operation on one or more operands. Operators can be logical, comparison, arithmetic etc. An operator's functionality is based in the data type of its operand(s). For example, arithmetic operators(i.e. +, -, /, *, %) cannot be used in the context of non-numerical data types. 
Question 3:

A JavaScript function is a means of keeping code DRY (Don't Repeat Yourself). It is a mechanism for wrapping commonly used blocks of code in a reusable package. It can be invoked with or without arguments and can return values or not. Functions in JavaScript are first class, meaning that they can be passes as arguments to other function or treated the same as any other data structure. Functions in JavaScript are also objects. 
 
Question 4:
 
All three methods open a modal dialog box in the browser. All three methods also block other user interaction on a site until the user clicks a button.
The alert() method simply displays a message, while the confirm() and prompt() methods ask for user input.
The confirm() method returns a Boolean value that is contingent upon the user's action. If the user clicks "ok", a value of true is returned. If the user clicks "cancel", a value of false is returned.
The prompt() method returns a string value for what the user types in the dialog box or null if the user clicks "cancel".
Question 5:

Three of the primitive datatypes in JavaScript are String, Number and Boolean. Strings represent collections of characters enclosed in quotation marks("" or ''). Numbers represent integers and floating-point( or decimal numbers). Booleans represent the values true or false.