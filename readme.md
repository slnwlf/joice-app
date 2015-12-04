Joice overview:

Joice is a recipe assistant app.  The user asks for recipe recommendations and Joice returns a solution based on those answers.

This version is meant to emulate the Lark app, which is for personal fitness.  Joice is simply a bot that answers questions based on your selections.     Like Lark, the user is really just making choices rather than inputing text. 

I will be performing user tests to see how beta users respond to chatting with a Bot.  Especially as their experience compares to chatting with a real person, which we are also testing. 

Features:

At its core Joice is a rules engine.  I built a decision tree with answers that point to next questions.   The rules engine programmatically builds the question flow and presents the next question.

As a highlight, the only GET call is to get the first question.  The questions are preseeded in the database.   

So the system is extremely scalable and editable.

Next:

Next I would like to add solutions to the database.  And present various solutions based on answers to the questions.  And a reset button.   And make it more responsive.  And add testing.  And add users and favorites.  And an API connection to a recipe database. 

Of note:

It was super useful to build the first draft of the app in hard coded jQuery.  It was a great exercise in jQuery and CSS styling.  But it quickly got complex, buggy, and difficult to edit. 

Also to anyone starting their project 1 I would recommend keeping the scope as SMALL as possible.  The reason is that there are so many technologies and moving parts - Heroku, Node, HTML, Handlebars, CSS, jQuery, Chai, APIs, auth, Javascript, Node, body parser, Mongo, etc.  The real purpose of the project is to pull together a full-stack app.   If I were to do it again I would want an app with one button that pulls info from an API. 

Link to Heroku app:

https://socket-chat2.herokuapp.com/