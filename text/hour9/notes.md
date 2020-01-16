# Hour 9. Responding to Events

- What is event handling and what are proper cross-browser event handlers?

## Understanding Event Handlers

- events are fundamental
- JavaScript needs a way of detecting user actions(ie events)
- *event handler* - code must be called from these to be associated with events when they fire.



### Examples of Events

- click, mouseover, mouseout and the `body`'s `load` event
- COPY TABLE of common events.
- 

## Adding Event Handlers

- it's better to keep HTML and JS seperate.
- More elegant and flexible way:
  - access the element(ie button) from within the JavaScript code:

- suppose you have this function:

~~~javascript
function buttonAlert() {
    alert("you clicked the button");
}
~~~

- first way to link them:
~~~html
<input type="button" id="myButton" onclick="buttonAlert()" />
~~~
- better way to link them:
~~~javascript
document.getElementById('myButton').onclick = buttonAlert
~~~
This is called *registering* an event handler notice we don't invoke the function. This would pass the function return value to the elements onclick handler

## Removing an Event Handler

~~~javascript
document.getElementById("myButton").onclick = null;
~~~

not sure why you would do this.

## Default Actions

### Preventing Default Actions

## Try it Yourself: Preventing the onSubmit Default Action

- [default.html](default.html)


## The `event` Object

### The W3C Approach

### The Microsoft Approach

## Cross-Browser Event Handlers

## Try it Yourself: Listing `onClick` Event Properties

## Advanced Event Handler Registration

### The W3C Method

### The Microsoft Method

## A Cross-Browser Implementation

## Summary

- how JS can be used to handle events
