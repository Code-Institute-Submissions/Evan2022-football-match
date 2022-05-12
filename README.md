# Football Match

Football Match is a football/Champions League themed memory matching game which demonstrates the use of JavaScript to give the user a interactive frontend experience. This website is targeted towards adults and children interested in puzzle/memory games and football fans. 

Football Match is a fully responsive site which will give users the chance to compete against eachother to improve their scores and hopefully be added to the game's leaderboard. 
![Responsive Mockup](./assets/Images/Responsive.JPG)

## User experience 
- __New User__
  - As a new user I would want to understand the purpose of the website upon entry. 
  - I would want a clear path to allow me to start playing the game soon after site entry. 
  - I would want the game controls to be easy to understand and clearly detailed to me. 
  - I would want a smooth gaming experience without too much unnecessary information. 

- __Returning user__
  - As a returning user I would want to try and beat my previous score set, or try to beat other users high scores.
  - As a returning user I am familiar with the game and controls so I would like to start playing the game shortly after entry.  

## Existing Features 
- __The Football Match Home Page__
  
  - This is the first page the user will be greeted with upon entry to the site. The background image is of the fictional Champions League Stadium which fits the overall team of the site. The Image is a outside view of the stadium giving the message to the user that they have not yet entered the game as they are still outside of the stadium. 
  - The user has the option to select PLAY which will direct the client into the game page of the website. 
  - The user also has the option to proceed to the leaderboard of the website to view the existing high scores before playing. 
  ![Website Home Page](./assets/Images/Capture.JPG)

- __The Game Area__

  - Upon entry to the game area the user is greeted by a 4x4 grid of blocks. The instruction is given above the grid on the goal of the game, to match as many blocks in the least amount of moves possible. Every block selection is counted and added to the users game score. The perfect game score is 16, given there is 16 blocks and a minimum of 16 clicks is required to complete the game. Each click by the user will reveal a football team logo, the goal is for the user to select the same logo one after another in order to get a match. 
  - The game background is of inside the Champions League Stadium giving the user the feeling that the game is about to start, similar to if the user was attending a football game in person. 
  - The user is also given the option to proceed to the leaderboard or return to the home page. 
  - If the client selects 2 blocks that do not match, the logos will be revealed for seconds, flash red and then return to hidden. The goal is for the user to learn from their mistakes and remember which logo is behind each block. 
  - Upon a correct guess the image will stay revealed and the block will turn green. 
  ![Guess](./assets/Images/answer.JPG)

- __The Score Area__

  - Once the user completes the game revealing all 16 team logos they will be redirected to the score page after a 2 second delay. 
  - The users game score will be displayed as the page heading. The user will have the option to save this score if they wish giving them the possibility of being added to the score leaderboard depending on their result. The user is required to enter a username before saving. 
  - If the user wishes to better their score they have the option to play again or return to the home screen. 
  ![Score Page](./assets/Images/Scores.JPG)

- __Score Leaderboard__

  - Provided the client saves their score they will be re-directed to the Score leaderboard and final page of the game. If the client's score was low enough it will be recorded on the leaderboard list otherwise they will be giving the option to play again or return home. 
  - The background image of the final page is a outside view of the Champions League Stadium giving the user the feeling that they have now left the stadium, left the game. 
  ![Leaderboard](./assets/Images/leaderboard.JPG)

## Design 
- __Colours__
  - Colour use stayed consistent throughout all web pages. Only a total of 4 colors where used throughout: 
    - rgba(0, 0, 0, .7);
    - rgb(31, 17, 235);
    - White
    - Black

- __Background Images__
  - Background images were all consistent in colour and theme. All 4 Images featured a view point of the Champions League Stadium, inside or out. These images hope to give the user the feeling of going to a live football match as the game takes place inside the stadium and finishes outside. 

-__Fonts__
 - All Headings - font-family: 'Fredoka One', cursive;
 - All body text - font-family: 'Open Sans', sans-serif; 

## Validator Testing
- __HTML__
  - No errors were returned when passing through the official W3C validator.
- __CSS__
  - No errors were found when passing through the official (Jigsaw) validator.
- __JavaScript__
  - No errors were found when passing through the official Jshint Validator. 
     - The following metrics were returned from 3 seperate JS iles:
     - File game.js:
       - There are 5 functions in this file.
       - Function with the largest signature take 1 arguments, while the    median is 0.
       - Largest function has 23 statements in it, while the median is 3.
       - The most complex function has a cyclomatic complexity value of 5 while the median is 1.
     - File scores.js:
       - There are 4 functions in this file.
       - Function with the largest signature take 2 arguments, while the median is 0.5.
       - Largest function has 6 statements in it, while the median is 1.
       - The most complex function has a cyclomatic complexity value of 1 while the median is 1.
    - leaderboard.js:
       - There is only one function in this file.
       - It takes one argument.
       - This function contains only one statement.
       - Cyclomatic complexity number for this function is 1.
- __Responsive__
  - Lighthouse report completed with a 99 overall score. 
  ![lighthouse](./assets/Images/lighthouse.JPG)

## Deployment
- __GitHub Pages__
  - The site was deployed to GitHub pages. The steps to deploy are as follows:
  - In the GitHub repository, navigate to the Settings tab.
  - From the source section drop-down menu, select the Master Branch.
  - Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment.

The live link can be found - https://evan2022.github.io/football-match/.

## Technologies 
  - JavaScript.
  - HTML5
  - CSS. 
  - Photoshop. 
  - GitHub.
  - GitPod.

## Credits 
- __Content__
  - Instructions on how to set up a base memory card name were followed from https://www.youtube.com/watch?v=B6aJpbX_IZU&list=LL&index=2
  - Instructions on how to save and display game scores from local browser storage were taken from https://www.youtube.com/watch?v=DFhmNLKwwGw 

- __Media__
  - All football team logos were taken from each clubs wikipedia page. I used photoshop to re-size the images to 150x150px. 
  - pitch.jpg and stadiumout.jpg were taken from https://www.pixelstalk.net/1080p-cool-images-free/
  - stadiumview.jpg and stadiumstand.jpg were taken from - https://www.framestore.com/work/2018-rebrand?language=fr















