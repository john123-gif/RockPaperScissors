## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
  - [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview
This is a rock, paper, scissors game with with two new additional options(spock, lizard).
With this game player wins a point on each win, loses a point on each lose, and both computer and player gains no points on a tie.

### The challenge
Users should be able to:
- View the optimal layout for the site depending on their device's screen size.

### Links
Live Link:  https://john123-gif.github.io/RockPaperScissors/
## My process
Developing this project had to begin with html and css. then used javaScript to render elements with thier respective styles based on user(player) and computer events.

### Built with
- HTML
- CSS
- JAVASCRIP


### What I learned
- Developing this project has helped me improve on my javaScript skills on functions, built-in functions and functions stack, as well as acquiring more understanding on OOP concept in javaScript.
- Manipulating html/css with javaScript.


 ```CSS
Desktop
  .scoreboard{
      width: 40rem;
      height: 6rem;
      justify-content: space-between;
  }

```javaScript
  if(!localStorage.getItem('counter')){
      localStorage.setItem('counter', 0);
  }

Mobile
@media screen and (max-width: 600px){

  .toggle-rules{
    display: flex
    flex-direction: column;
  }
}



### Continued development
- async javaScript


### Useful resources
-(https://www.w3schools.com) - understanding box shadow.
-(https://www.stakeflow.com) - understanding manipulation of css with javaScript. 
-(http://www.edx.org/cs50) - localStorage javaScript.
## Author
- linkedIn - [teyejohn](www.linkedin.com/in/teyejohn)

