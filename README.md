# <center> Keep Notes </center>

## A brief description: ##
This website has some exciting features. For example, users can create notes and then search by note title. The website also has some validation: all note fields must be filled to be able to submit, the note title input field has length validation, and notes can't have the same title. Users can switch from Light Mode to Dark Mode. Notes and chosen Mode get saved in localStorage, so users don't lose data by closing the browser. And, of course, this website is fully responsive.


## The techs I use: ##

### Front-End: ###
-React.js
-React Router
-localStore
-CSS
-Bootstrap


### A brief tour of the website: ###
This is the homepage, the first page you see when you enter the website. From here, you can search notes if you have any, delete or add a new one and also change to dark mode:

![alt text](/src/img/home.png)

If you click the add icon in the bottom you will find the add note page, from there you can add new notes, also this inputs have validations: you need to fill both input fields to be able to submit, no notes can have the same title and note title cant be more than 30 characters, an error messenger will appear if any of those error occur.

![alt text](/src/img/add%20note.png)

Once you add a note you will be able to see it in the home page, you can delete the note if you click the delete icon.

![alt text](/src/img/all%20notes.png)

If you type in the search input all notes title the match with what you wrote will appear.

![alt text](/src/img/search.png)

Once you add a note you can close the browser without losing the data or the ambient mode you have chosen.

