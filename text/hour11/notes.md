# Hour 11. Navigating the DOM

## DOM Nodes

- deal with the `document` object and it's properties and methods
- [listing 11.1](one.html)

## Types of Nodes

- *element nodes* - an HTML element 
- *text nodes* - text content of the HTML elements, always contained within an element node

## The `childNodes` Property

- `childNodes` - an array-like list of all a node's children called a *NodeList* that's numerically indexed.
- cannot use certain array methods like push() and pop()
- live collection - it updates

## `firstChild` and `lastChild`

- `firstChild` == childNodes[0]

## The `parentNode` Property

- returns the parent node the the node to which it's applied.

## `nextSibling` and `previousSibling`

## Node Value

- return the value stored in a node
- usually to return the text stored in a text node.

## Node Name

- returns the name of the specified node as a string
- read-only

## Selecting Elements with `getElementsByTagName()`

## Try it Yourself

## Reading an Element's Attributes

## Summary

- nodes and navigating with node-related methods
- Mozilla's DOM inspector