# Hour 12. Scripting the DOM

## Creating New Nodes

- Two stage process;
  1. create a new node. in 'limbo' when first created
  2. add the new node to the tree in the desired location

### `createElement()

~~~javascript
var newDiv = document.createElement("div");
~~~

`newDiv` exits in 'limbo'

### `createTextNode()`

### `cloneNode()`

## Manipulating Child Nodes

### `appendChild()`

- locate the parent node and call `appendChild()` on it:

~~~javascript
var newText = doument.createTextNode("Sample text");
var myDiv = document.getElementById('id1');
myDiv.appendChild(newText);
~~~

### `insertBefore()`

### `replaceChild()`

### `removeChild()`

## Editing Element Attributes
## Dynamically Loading JavaScript FIles

## Try it

## Summary

- create new nodes 
- add, edit and remove DOM nodes to edit page content dynamically.



