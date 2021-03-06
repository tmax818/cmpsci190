---
title: Week Five
...


1. Discuss the advantages and disadvantages of using JavaScript libraries such as jQuery.  (5 points)

The major disadvantage of using any library is the additional code required for their implementation. The joke about jQuery is the analogy of a banana. Supposing you want a banana that represents some simple functionality like an accordion menu. If you want that banana, you also have to take the 800 pound gorilla that is holding the banana. You also have to take the tree that the gorilla is sitting in. You also have to take the jungle where the tree is located. The point is that adding functionality through jQuery involves significant overhead that can slow down an application.

Another major disadvantage is the steep learning curve associated with some libraries(i.e. React!!!). It can take a developer (me especially) a long time to master the syntax and file structure of a new framework.

The advantages of libraries and frameworks, however, cannot be overstated. Frameworks like Ruby on Rails allow for the creation of fully functional full stack web apps in minutes with a single command: `rails new my-app`. The React library has an NPM module, `create-react-app`, that mimics the single command functionality of Rails. 

With the advent of Nodejs and the associated NPM modules, full stack web apps can be built entirely in JavaScript. Within the ecosystem of NPM modules, any functionality you can dream of is available with a simple command line download. Given that most NPM modules have dependencies whose dependencies have dependencies and so on, I wonder if this helps counter the 'weight' criticism that is often leveled at jQuery?  

2. Browse the jQuery UI Interactions, Widgets, Effects and Utilities at https://jqueryui.com/ (Links to an external site.).  Pick two of your favorites and describe them. (5 points)

My first favorite is the date picker:

<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>jQuery UI Datepicker - Default functionality</title>
  <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
  <link rel="stylesheet" href="/resources/demos/style.css">
  <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
  <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
  <script>
  $( function() {
    $( "#datepicker" ).datepicker();
  } );
  </script>
</head>
<body>
 
<p>Date: <input type="text" id="datepicker"></p>

<script>
var date = document.getElementById('datepicker')

</script>
 
 
</body>
</html>

This is a widget that allows a user to easily pick a date. The information is available as the value property on the input object.

My other favorite is the add class effect:

<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>jQuery UI Effects - addClass demo</title>
  <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
  <link rel="stylesheet" href="/resources/demos/style.css">
  <style>
    .toggler { width: 500px; height: 200px; position: relative; }
    #button { padding: .5em 1em; text-decoration: none; }
    #effect { width: 240px;  padding: 1em; border: 1px solid #000; background: #eee; color: #333; }
    .newClass { text-indent: 40px; letter-spacing: .4em; width: 410px; height: 120px; padding: 30px; margin: 10px; font-size: 1.1em; }
  </style>
  <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
  <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
  <script>
  $( function() {
    $( "#button" ).on( "click", function() {
      $( "#effect" ).addClass( "newClass", 1000, callback );
    });
 
    function callback() {
      setTimeout(function() {
        $( "#effect" ).removeClass( "newClass" );
      }, 1500 );
    }
  } );
  </script>
</head>
<body>
 
<div class="toggler">
  <div id="effect" class="ui-corner-all">
      Etiam libero neque, luctus a, eleifend nec, semper at, lorem. Sed pede.
  </div>
</div>
 
<button id="button" class="ui-state-default ui-corner-all">Run Effect</button>
 
 
</body>
</html>

I see this as an effective way to emphasize and draw attention to information. I would use this effect with a mouseover event rather than a button. 

3. You have undoubtedly noticed that there are inconsistencies between the information presented in our textbook and the code needed to solve some of the exercises.  Why do you think these inconsistencies exist?  (5 points)

Our textbook is the fifth edition (Copyright 2013) of a text that is now in it's seventh edition that was released last year. In 2015 a new edition of JavaScript known as ES6 was released that added major new features to the language. I don't have a copy of the latest edition of our text, but looking at the Table of Contents online, it looks like Ajax and jQuery are not covered as extensively as in our edition. 

A major recent improvement in JavaScript has been the introduction of the fetch API which greatly simplifies the complexity associated with Ajax. The inconsistencies are inevitable given the rapid changes in both JavaScript and the functionality of web browsers. It seems impossible for one person to stay on top of the rapid changes in any computer technology. 