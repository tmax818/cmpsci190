---
title: Week Two
...



1. In your own words, what is an if() statement and what is an if() statement used for? (2 points)

An `if()` statement is an indespensable means to the construction of more complex and useful applications. It allows a programmer to control the flow of code execution based on conditions such as user input or events. It can be likened to a fork in a road or in more complex applications, like a freeway interchange. 


2. What are the types of loop statements discussed in Hour 7?  Are these loop statements functionally equivalent meaning, do all of the loop statements do the same thing? (3 points)


3. Hours 1 through 6 of the textbook introduced us to the procedural programming paradigm—where computer programs are written as a set of instructions which are performed in sequence, to achieve a goal or solve a problem.  Hour 7 introduces us to the Object Oriented Programming paradigm—where objects are created to encapsulate data and methods and programs are written to manipulate those objects and their properties.  Which of these two paradigms do you prefer, and why? (10 points)

In answering this question, I must begin with a confession: I am in love with Ruby and Python. These are the first langauges I learned and I don't think I could have learned to code without them. Both are languages that allow for both procedural and object oriented paradigms. However, both lean toward implementation of an object oriented approach and are more powerful when used in that way.

The object oriented paradigm is much clearer and easier to understand. This is a simple, but illustrative example. Determining if a number is even or odd in the procedural paradigm would be the same in most languages:

~~~
num % 2 == 0
~~~
The result of this expression determines whether the value stored in `num` is even or odd, the result will be true or false, respectively. In Ruby where everything, includeing numbers, are objects, the syntax reads much more like a natural langague like English. This is the same expression in Ruby:

~~~
num.even?
~~~

In Ruby, a number "knows" whether it is even, odd or a host of other facts. In Ruby, you are in essence asking a number if it is even and it answers you. 

Another reason I prefer the obect oriented paradigm is related to my number example. OOP is more in keeping with the way the "real world" actually works. At least it is more in keeping with the way humans mentally interact with the world. The world consists of "objects" like cars, numbers, shopping carts and bank accounts. The fact that 3 is odd is an enherent fact about the number 3. 

  


4. In your own words, what makes JSON useful? (3 points)


5. In your own words, describe how you would make sure you always have a valid event object to examine. (2 points)