# Hour 7. Object Oriented Programming

- OOP helps make code efficient, readable, and maintainable
- also clear, reliable and reusable

## What is Object Oriented Programming (OOP)?

- contrast OOP with *procedural* programming.
  - procedural - data stored in variables that are operated on by a list of instructions.
- In OOP data and instructions are intertwined.
- data is conceptualized as descrete *things* 
- properties and methods
- class = blueprint
- instance = the thing created from the blueprint.
- *constructor function* 
- OOP advantages:
  - code reuse
  - encapsulation - keeping data seperate and secure.
  - inheritance - new objects can use features of other objects
  
## Object Creation

- Different ways to create an object
  - *direct instance* or *constructor function*

## Create a Direct Instance

~~~javascript
var myNewObject = new Object();
~~~

- add a property
- 
~~~javascript
myNewObject.info = 'I am a shiny new object';
~~~

- add a method
- 
~~~javascript
function myFunc() {
    alert(this.info);
};
myNewObject.showInfo = myFunc;
~~~

## Using the `this` Keyword

- When you use `this` inside a function(method) it refers to the function's parent object.
- assigning the method to `myNewObject` you give meaning to `this` that it would otherwise lack.

## Anonymous Functions

- alternative to the above:

~~~javascript
  myNewObject.showInfo = function() {
      alert(this.info);
  }
~~~

- the above is much less confusing.

## Using a Constructor Function

- *singleton* - an object with only one global instance
- *object constructor function*
  - creates a kind of *template* to make instances of the object
  - declare a function and add properties and methods with the `this` keyword

~~~javascript

function myObjectType() {
    this.info = "some info string";
    this.showInfo = function() {
        alert(this.info);
    }
    this.setInfo = function(newInfo) {
        this.info = newInfo
    }
}
~~~

### Instantiating an Object

~~~javascript

var myNewObject = new myObjectType();

~~~

### Using Constructor Function Arguments

~~~javascript

function Person(personName) {
    this.name = personName;
    this.info = 'I am called ' + this.name;
    this.showInfo = function() {
        alert(this.info);
    }
}
~~~

## Extending and Inheriting Objects Using `proptype`

### Extending Objects

- keyword `proptype` allows extending objects with new methods and properties after they have been instantiated.

~~~javascript
Person.prototype.sayHello = function() {
    alert(this.name + "says hello");
}
~~~

### Inheritance

- *inheritance - the ability to create one object type from another.
- create "generic" objects that can be made specific. 

## Encapsulation



















