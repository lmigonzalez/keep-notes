# <center> Keep Notes </center>

## A brief description: ##
This is a Full Stack App where you have the option to get some great quotes. You can copy and share quotes white a single click. But it doesn't stop there. The fun part comes when you register and log in. Once you log in, you can submit and give likes to quotes. You can go to your profile and edit or delete any quote you have previously created. If you leave the website and come back in another moment, you won't have to log in since I configured the section to last one year unless you're logged out. User Data and Quote data get saved in a MongoDB database.


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

