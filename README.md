### Hey there I'm Super-Catch8108
I am a beginner level aspiring web developer and this is an idea that I had for a 'Godfather' fan site called KissTheRing.com. 

### What languages the website uses. 
The website consists of HTML/CSS and a bit of JS

### Overview
The website's structure takes one of a static blog style site. The data of the articles are currently stored in the '/js/data.js' folder in an array called 'posts'. The array is exported to the 'HomeScreen.js' file in the same folder where an object called HomeScreen with a render function is created. The function returns html output which cycles through the different posts and is then exported to 'app.js'. In 'app.js' is a function called router which calls the render function in a div with ID 'main-container'

### Header.js
The 'header.js' file stores the header used across all the pages. 
