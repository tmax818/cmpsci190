# Hour 8. Meet JSON

## What is JSON?

- JavaScript Object Notation (JSON)
  - a simple and compact notation for JavaScript
  - an object expressed in JSON is really just expressed in normal JavaScript code.
  
## JSON Syntax

~~~javascript
var jsonObject = {
    "param1":"value1",
    "param2":"value2",
    "param3":"value3"
}

alert(jsonObject.param1); // alerts 'value1'
~~~

- JSON is better than XML
- serialization - conversion of data into string fromat for storage and/or transmission.
- JSON advantages:
  - easy to read
  - simple in concept
  - self-documenting
  - fast to creat and parse
  - subset of JavaScript

## Accessing JSON Data

### Using eval()

- [DON'T use eval()!!!](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval#Never_use_eval!)
- The eval() function evaluates JavaScript code represented as a string.

## Using Native Browser Support

- Browsers create a JavaScript object called `JSON` to manage encoding and decoding.
- `JSON` has two methods:`stringify()`  and `parse()`

## JSON.parse()

- takes a JSON-serialized object and creates a POJO.

## Data Serialization with JSON

- *serialization* - the process of converting data into a format that can be stored or transmitted across a network and recovered later into the same format as the original.
  
## JSON.stringify()

- `JSON.stringify()` - serializes POJOs into strings for transmission/storage

## JSON Data Types

- parameter(key) rules:
  - cannot be JS reserved word
  - must not start with a number
  - only special characters: '_' and '$"
- JSON objects can contain:
  - Number
  - String
  - Boolean
  - Array
  - Object
  - null(empty)

## Simulating Associative Arrays

## Creating Objects with JSON

### Properties
### Methods
### Arrays
### Objects

## JSON Security

## Summary

- JSON notation
  - data interchange syntax
  - can create instances of JS objects
- native JSON support in browsers















