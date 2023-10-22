# GROOVY BLOCK

#### CONTRIBUTORS: Trevor Rapp, Bruno Imbrizi. 
*This was an online tutorial lead by [Bruno Imbrizi](https://www.domestika.org/en/bruno_imbrizi).*

<br/>

[![View Project](https://user-images.githubusercontent.com/11747875/141830030-bb37c7b2-7c74-43fa-b705-779189b9f380.png)](https://trrapp12.github.io/groovy-blocks/)

<br>
<br>

https://user-images.githubusercontent.com/11747875/222486766-c540a42b-b98d-4825-a53a-0508b19b3f8c.mp4

<br>

---

<img align="left" alt="HTML5" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png" />
<img align="left" alt="CSS3" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png" />
<img align="left" alt="JavaScript" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png" />
<br>
<br/>

---

### DESCRIPTION

> “One day, I’m gonna open a restaurant, and everything on the menu is gonna be special. So, when somebody comes in and says, ‘Hey, Kelso, what’s special on the menu?’ I can say ‘Everything.'” 
>
> — Kelso, That 70s show.

Whether you love Kelso, the 70s, or just want something special, Groovy blocks was a good place to land.  I made it because I love making things that are fun, special, and that look good.  It was fun for me to introduce elements of the 70s in homeage to a time that was known for it's unique designs, colors and fonts.  The project itself is special because I got to practice the Canvas API, something I have long been wanting to do.  And as far as looking good, well... see for yourself.

<br/>

---

### QUICKSTART GUIDE

To use the app simply click on the ```View Project``` button or visit <a href="https://trrapp12.github.io/groovy-blocks/">https://trrapp12.github.io/groovy-blocks/</a>. 

<br/>

---

### THIS PROJECT DEMONSTRATES:

- [X] Use of Canvas API to draw squares.
      
- [X] use of basic JavaScript principles like loops and conditionals to create a randomized, regenerating pattern.

<br/>

---

### CHALLENGES I OVERCAME

This was the first time I used Canvas.  So it was a completely new experience.  The most obvious obstacle is learning the syntax.  After that there was a bit of conceptualizing how to create a grid of boxes that needed to occur through a nested for loop.  

But by far the most challenging was creating a timing function that would work dynamically so the interval on setInterval would be different everytime, but only with a range of 0 - 5 seconds.  My first attempt to accomplish this I created the following: 

```javascript  

    function setTimer() {
         const maxDelay = 2500;
         const delay = Math.floor(Math.random() * 2 + 1) * maxDelay;
         setInterval(() => {
             renderSquares()
             setTimer()
         }, delay)
    }

    setTimer()
    
```
    
My thought was to create a delay with `(Math.floor(Math.random() * 2) + 1 * maxDelay` where `maxDelay = 2500`.  This was unsucessful 1) because the `+1` served no purpose, and 2) because the `Math.floor()` created a situation where it would only return 1 or 5 since the 2 was always getting rounded down to either 0 or 1.  The second issue was that the timing function would start with a random interval, but eventually it would gradually speed up more and more until it became sickenly fast.  I thought at first it was because timesing something by a fraction over and over again will ultimately make it smaller and smaller.  However, when I console.log'ed the issue the interval times were fine.  Then I realized what was happening was every time the function fired it created a separate setInterval instance.  So I had to figure out how to clear them.  I could just add a `clearInterval()` since they were named.  So I discovered I could loop over the window object to find all the intervals and clear them all before setting a new one. This answer worked swimmingly.  The final timer function was this: 

```javascript

    function setTimer() {
        const maxDelay = 2500;
        const delay = (Math.random() * 2) * maxDelay;
        console.log(delay)
        setInterval(() => {
            for (let i = 0; i < 99999; i++) {
                window.clearInterval(i)
            }
            renderSquares()
            setTimer()
        }, delay)
    }

    setTimer()

```

<br/>

---

### MY OWN PERSONAL CONTRIBUTIONS INCLUDED

- [X] creating the random, ranged timing interval.
- [X] creating an animation effect that randomly chooses a color scheme for the blocks.
- [X] fixing the functionality so it would rerender on window resizeand the additionaly decoration on the pages.

<br/>

---

### ATTRIBUTIONS

Project inspired by [Creative Coding: Making Visuals with JavaScript](https://www.domestika.org/en/courses/2729-creative-coding-making-visuals-with-javascript) by [Bruno Imbrizi](https://www.domestika.org/en/bruno_imbrizi)

<br/>

---

### YOU CAN FIND ME AT:

*For more information see my [LinkedIn](https://www.linkedin.com/in/trevor-rapp-042a1037), or return to my [Github](https://github.com/trrapp12)*



