# Frontend Mentor - multi step form

For prospective employers, jump to My Process section for summary.

This is a solution to the [Multistep form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/multistep-form-YVAnSdqQBJ). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)

## Overview

### The challenge

Your challenge is to build out this multi-step form and get it looking as close to the design as possible.
You can use any tools you like to help you complete the challenge. So if you've got something you'd like to practice, feel free to give it a go.
Your users should be able to:
Complete each step of the sequence
Go back to a previous step to update their selections
See a summary of their selections on the final step and confirm their order
View the optimal layout for the interface depending on their device's screen size
See hover and focus states for all interactive elements on the page
Receive form validation messages if:
A field has been missed
The email address is not formatted correctly
A step is submitted, but no selection has been made

### Screenshot

Screenshots are listed in the screenshot folder. All were captured from Firefox.

![desktop step1](screenshots/Step1%20desktop%20with%20errorFront%20end%20mentor%20multistep%20form.png)
![mobile step1](screenshots/Step1%20mobile%20with%20error%20Front%20end%20mentor%20multistep%20form.png)
![desktop step2](screenshots/Step2%20desktopFront%20end%20mentor%20multistep%20form.png)
![desktop step3](screenshots/Step3%20desktop%20Front%20end%20mentor%20multistep%20form.png)

## My process

I initially read about React hook form from an article by Robin Wieruth (The road to react book). This seemed to me a perfect opportunity to try this out with the front end mentor project here.

For the CSS I had a main index.css file using the principles learned from Kevin Powells CSS demystified course to do the bulk of the styling. I used inline styles in the jsx for error handling and also a standalone CSS file only concerned with a switch component. This was for for ease of maintainence and avoiding naming clashes.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [React hook form] - (https://www.react-hook-form.com) - a React form library with no dependencies.
