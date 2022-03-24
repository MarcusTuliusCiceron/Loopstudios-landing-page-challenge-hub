# Frontend Mentor - Loopstudios landing page solution

This is a solution to the [Loopstudios landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/loopstudios-landing-page-N88J5Onjw). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Building process](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow


### Building process

I start building the top section. I first create HTML and then style it with SCSS. 
  I have to edit the image through gimp to add the black shade on the image as I was not able to do it properly with opacity and back image.
  Positioning the elment with flexbox padding and margin properties was really easy.
  I create some helper class that I put in style.scss file to hide content depending we are on desktop view or mobile view
  ```scss
  .hideForDesktop{
    display: none;
    @include breakpoint-down(medium){
        display: block;
    }
}

.hideForMobile{
    display: block;
    @include breakpoint-down(medium){
        display: none;
    }
}
  ```
  I implement animation that launch when page is displayed to have a more professional result. I used keyframes method, that i called in an animation css property. I create a separate folder to store all my animation.
  ```scss
  @keyframes titleFadeIn{
    0% {
        opacity: 0;
        transform: translateX(2rem);
      }
      100% {
        opacity: 1;
        transform: translateX(0);
      }
}
```
  I implemented the hamburger menu with previous helper class to display it only on mobile and tablet. I use absolute positioning and overflow method to make sure user is not able to scroll when the menu is open.

Then I implemented center section which is pretty easy in terms of layout. But I tried to animate it in only when user scrolls enough to make it visible. thanks to internet research i was able to use intersection API to track when an element enter in view. Below code is setting the observer: 
```js
const observer = new IntersectionObserver(entries => {
    // Loop over the entries
    entries.forEach(entry => {
      // If the element is visible
      if (entry.isIntersecting) {
        // Add the animation class
        entry.target.classList.add('inner_box_in_view');
        document.querySelector('.center_section').classList.add('center_section_in_view')
      }
    });
  });
  
  observer.observe(document.querySelector('.inner_box'));
```

Then I implemented the gallery as a grid. the layout was prette straight forward. When I tried to make the gallery item slide in one after each other I tried to use a calc function for timing delay but this was not supported by firefox so i decided to go with hard coded animation delay.

Then I implemented footer, it was also pretty straightforward due. I used pseudo element absolute position to create hover effect

### Useful resources

- [Brasspetal - github](https://github.com/brasspetals/fm-pod-request-access-landing-page) - This help me implement element apparation on loading the page thanks to keyframes animation
- [Cool CSS animation](https://coolcssanimation.com/how-to-trigger-a-css-animation-on-scroll/) - This helped to trigger the animation when element enter in user view
- [Stack overflow](https://stackoverflow.com/questions/27984452/css-calc-function-for-transition-delay) - This helped me understand that animation delay is not working on firefox and IE when using calc function


## Author

- Frontend Mentor - [@MarcusTuliusCiceron(https://www.frontendmentor.io/profile/MarcusTuliusCiceron)

## Acknowledgments

Special thanks to Brasspetal and all frontend mentor community for giving help and good vibes, I'm really having fun doing all those challenges, and can't believe that poeple actually get paid to do that :D
