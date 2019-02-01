# Project2-Concert-Diary
A full-stack application using MEHN (Mongoose, Express, Handlebars, and Node) with CRUD functionality and RESTful routes, that lets users save memories of shows they've attended.

# Description
This project is an exercise in building full-stack web applications.  The resulting application allows users to keep track of attended concerts and see concerts attended by others.  Creation of this application using Express was challenging due to the freedom allowed by the framework.  This guided me to gain a deeper understanding of how the various parts of an application work seperately and together.

# Brief Example
Below is a snippet of my models code, which is where I started structuring my project.
![snippet of models code](images/concertdiarycodesnip.png?raw=true)

Below is a picture of the application homepage
![snippet of models code](images/concertdiarypic.png?raw=true)


# Technologies Used
* Text Editor - VSCode
  * used to write the code
*  CLI - Command Line Interface
  * used to interact with files
* npm install
  * used in the CLI to add dependencies
* Express - Node.js web application framework
* nodemon
  * used to restart local server when updates were made (development-side)
* hbs - handlebars
  * used to build semantic templates for views
* body-parser - middleware
  * used to enable the app to read user-submitted form data
* mongoose - Mongodb object modeling tool
  * used to enable the app to interact with the db

# Installation Instructions for dependencies
* To install dependencies, use your CLI to change directories into your project folder.  Run `$ npm init --y` to initialize npm within your folder.
* Utilize the command `$ npm install` followed by the name of each desired dependency.
  * For example: `$ npm install express`

# Approach Taken
* Came up with a concept, feature ideas, and a bonus feature idea (via Pen and Paper)
* Chose needed Models and structured these with properties and types (via Pen and Paper)
* Decided what controller actions were needed and came up with the structure of the routes (via Pen and Paper)
* Created a repository (via Github)
* Structured my root file (via VSCode)
* Installed npm and needed dependencies (via CLI)
* Created the basic file structure of the app (via VSCode)
* Began working on layout/flow of site (via Pen and Paper)
* Began coding! (via VSCode)
  * Started with the file structure 
  * Began filling out my models, controllers, routes, then views
* The rest of my process consisted of creating, testing, modifying, and debugging code



# Features
* Create a User account
* Sign up/log in with username and password
* Create, display and save posts about concerts attended, which includes a section for journaling
* View feed of concert posts
* Comment on concert posts

# Unsolved Problems
* Photo uploads
* Expand profile to include upcoming shows
* Add future show feature
* "Like" feature
* Fix "choose username" 
* Fix the timestamp to render only day of week, month, day of month, year

# Resources
* I used the file structure from a recently completed lab (GA MEHN Lab) to inform this project.  
* I used GA lessons on Express, Node, Mongoose, and deployment to inform this project.
* Google was my friend
