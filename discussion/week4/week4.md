---
title: Week Four
...


1.  In your own words, discuss the difference between Ajax GET and POST requests.  (3 points).

Ajax GET and POST requests are two ways the browser(i.e. client) can interact with a server. GET requests are more common than POST requests. Every time a browser visits a new website, a GET request is sent to a server asking for the content of the website whether the site is static or dynamic with linked back end functionality. A POST request is a request to actually manipulate or change data stored on the back end usually in a database. Common examples of POST requests would be adding content to social media. Every tweet on Twitter is an example of a POST request sent to Twitter's back end. 

2. The Hour 17 ajax library doesn’t currently do very much to detect and act upon errors. How could you modify it to react to a req.status of other than 200?  (5 points)

HTTP status codes are grouped by hundreds:
codes between 200 and 299 means success,
300 to 399 means redirection,
400 to 499 is a client error and codes in the 
500s is a server error.

This situation seems to lend itself to the use of relational operators. A conditional structure(i.e. a switch statement) could be implemented that would execute code based on whether a status code was greater than 299 or less than 500. 

3.  In your own words, describe what Firebug is and what it can be used for?  (5 points)

Firebug is a FireFox plugin that has not been in use since 2017. All the functionality that Firebug had has been implemented in Mozilla's Browser for developers. The functionality Firebug pioneered is now available in most browsers under the developer tools functions.

4. Visit the Script.aculo.us page at http://script.aculo.us/ (Links to an external site.) and review the complete list of effects made available by this library.  Which 3 effects are most interesting to you?  (3 points)

I love the fact that the effects are prepackaged in Ruby on Rails. I love building Rails apps and I can't wait to use this. I think the shopping card, auto complete and sortable lists would be the most useful.