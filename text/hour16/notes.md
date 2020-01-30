# Hour 16. Introducing Ajax

- Ajax aka remote scripting

## The Anatomy of Ajax

- blah blah blah

### Introducing Ajax

- allows you to add interfaces to a web app
- ajax builds an extra 'layer' of processing between the page and the server
- this layer is known as the ajax engine or ajax framework
- this engine/framework handles server communications asynchronously in the background
- ajax also handles updating page elements based on updates from the server

## The `XMLHttpRequest` Object

- hyperlinks and form submissions sent HTTP requests to the server.
- to work asynchronously, there must be a means of sending requests to the server seperate from requests to display a new page
- the `XMLHttpRequest` object allows for this.

## Talking with the Server

- HTTP requests traditionally require a page refresh after server code is executed. 
- the `XMLHttpRequest` object has properties that report on the process of server requests happening in the background

## What Happens at the Server?

- server views HTTP request from the JS object the same as any other
- ajax returns info from the server in a number of formats

## Putting it All Together

- use event handlers for HTTP requests via `XMLHttpRequest`
- functions are needed to monitor the progress of asynchronous http requests
- lots of diagrams!!!

## The `XMLHttpRequest` Object

- more blah blah

## Creating Instances of XMLHttpRequest

- must create an instance of ajax object like this:

~~~javascript
var request = new XMLHttpRequest();
~~~


## A Solution for All Browsers

- script for cross browser compatibility, fuck IE

## Methods and Properties

- there's a cool table of properties and methods, check it out!
- we're doing this for the next few lessons, yay!!

### The `open()` Method

- prepares the ajax object to communicate with the server
- two arguments
  - HTTP method(ie GET or POST)
  - destination URL
  - third argument sets synchronicity, default to true

### The `send()` Method

- sends the request, Surprise!
- one argument:
  - null if a GET request
  - content of request if POST
    - use `setRequestHeader` method to indicate the type of content.

## Sending the Server Request

- write [callAjax()]()

## Dealing with the Browser Cache

- add a parameter with random data to generate a new HTTP request rather than pull from browser cache.

## Monitoring Server Status

- must monitor an ajax requests status

## The `readyState` Property

- property of the ajax object that gives info from the server about the state of a request.
- has values 0 through 4

## Server Response Status Codes
- 200 is okay

## Callback Functions

- you know girl

## `responseText` and `responseXML` Properties

- these properties contain text and xml of the data returned by the server.
- `responseText` represents the data as a string that is read-only
- `responseXML` 



## Try It Yourself: An Ajax Clock

- 