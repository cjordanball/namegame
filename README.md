# namegame
This project was created as a sample project for a potential employer.  Below is a bit of explanation of how to run the code and the features that are included in it.

## Running the Code
After copying the repository onto your local machine, simply run *npm install* to download dependencies.  However, the only dependencies incorporated into this project are *less*, *esLint* and *http-server*.  The first two will not be necessary to run the project, and you may well have *http-server* already installed on your machine, so there might not be any need to run *npm install*.

## About the Project
As noted in the previous paragraph, there are no frameworks used in this project, with the exception of a little bit of *less*, which really did not get much use here.  It had been a long time since I had the chance to do a bit of unaided HTML/CSS/JavaScript programming and thought it would be fun to do so on this project.  Actually, there is almost no HTML in this project, other than a shell *html* page containing entry points for the CSS and JavaScript.  All elements included in the body are created in JavaScript.

The project allows users to practice identifying coworkers by seeing a photo of the worker and matching it with a name.  There are two basic modes, a "Names to Face" mode in which a single snapshot is paired with 5 employee names from which to choose, and a "Faces to Name" mode in which a group of 5 photos is paired with a single employee name and the user clicks on the photo that matches the name.  Each mode allows the option of limiting the pool of employees to all employees (at least all that are included in the given JSON file), or current employees, *i.e.*, those employees that have a jobTitle entry in their JSON depiction.

The "Names to Face" mode is rather simple: it presents the photo, the question "Whose mug is this?", and five names.  If the wrong name is clicked upon, it turns red.  If the correct name is clicked, the game immediately moves on to the next photo.

The "Faces to Name" mode includes two special features. First, the user can choose to keep score.  If so, then each correct match is worth 5 points, however, each incorrect attempt lowers the value of that iteration's worth by a single point.  So two numbers appear: the first is a current value, showing the points that can be obtained by choosing correctly with the next click, the second is the cumulative value of points scored.  There is no persistence in the point totals, *i.e.*, once the user ends the game, the points start again from 0 when the next game is opened.

The second feature is an input bar into which the user can type a hint, or mnemonic phrase to remember the name.  This input field appears upon the user clicking on the correct photo.  In addition, hovering over the photos generates a tooltip, the text of which is the mnemonic phrase entered for that employee previously. Of course, at the beginning of the game that is a pretty rare event, and the tooltip is almost always "No hint available".  However, as more and more rounds are played, the user will have more and more assistance available in the form of the tooltip hints.
