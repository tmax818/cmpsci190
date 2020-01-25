---
title: Week Three
...

1. If you have Firefox, download and install the DOM Inspector and familiarize yourself with its interface. Use the program to investigate the DOM of some of your favorite web pages.  Did you notice any similarities or differences?  Briefly discuss your findings.  NOTE: Since most web browsers have built-in DOM inspection tools, you should be able to do your inspection with any other browser. (5 points).

I perused several websites with the 'inspect' window open in Chrome. I also have the React Developer Tools Chrome Extension installed. One thing I noticed with sites that use React verses thoese that don't is that the React sites seem to have a large number of script tags in their head setions. It was also very interesting to see how many websites are using AWS. 

I found this exercise endlessly facinating. I learned that I have a lot to learn about HTML and how it works.

The most interesting one I found was this:

![kahn](./khan.png)

Kahn Academy puts an advertisement that they are hiring developers in an HTML comment. I think I am going to reach out to them. 

2. The textbook states that JavaScript does not work well with CSS style rules in cross-browser situations.  In your own words, why is this true?  (5 points)

The 'C' in CSS stands for cascading. All browsers have default CSS settings that are applied automatically. These default settings can override styles that the developer creates given that styles are applied in a "cascading" manner. NPM ools such as [Normalize.css](https://necolas.github.io/normalize.css/) can and should be used to ensure that styling is rendered as entended by the developer in different browsers. 

3. Hour 14  covers the topic of Good Coding Practice.  In your opinion, would it have made it easier to learn JavaScript if this topic had been presented earlier in the textbook?  As a JavaScript programmer, what information in Hour 14 is most valuable to you?  (5 points)

I believe that the tips given in Hour 14 would not make sense to someone learning JavaScript as their first langauge. One thing I think the author could have done better would have been to not violate this advice in presenting topics. To this point it has been rare that he has seperated JavaScript code into a separate file. 

I found the section on `try catch` and the use of `<noscript>` tags the most valueable.  

4. In your own words, explain the technique of preloading images for animations.  (5 points)

Prealoading images is a means of ensuring a better user experience using JavaScript. The author suggests using the `window.onload` event to get a jump on loading images that can take longer to download. Browsers will cache images instead of waiting for the server to load them each time a page is refreshed. 

I conducted additional research and found that the `DOMContentLoaded` event is a better option for this effort. I attached a script to an `index.html` page with the following script:

~~~javascript
window.onload = (e) => { console.log("window loaded")}

document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM loaded');
});
~~~

despite the order of the functions in the script, the second one always executes first in my Chrome browser. Upon refreshing the page, the event listner on `DOMContentLoaded` executes noticably faster. If you are viewing this comment on my [website]() you can open a console and hit refresh to see my demo.
