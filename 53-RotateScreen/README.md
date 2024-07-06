# 53-RotateScreen

## Project discription 
   Making a website with a dynamic rotating feature to shoe thw navigation menu 

## Live Project
Click <a href="https://lively-caramel-de72b4.netlify.app"> here </a>to see the live app.



## Visual
<img width="553" alt="Screenshot 53-RotateScreen" src="https://github.com/ZoePiper/Portfolio-Frontend/blob/main/53-RotateScreen/Screenshot_RotateScreen_Dicht.png?raw=true">

<img width="553" alt="Screenshot 53-RotateScreen" src="https://github.com/ZoePiper/Portfolio-Frontend/blob/main/53-RotateScreen/Screenshot_RotateScreen_Open.png?raw=true">    

## Design problem. 
Navigation was stuck to the bottom. The background gray was visable in the first state.

The button position was off


## Solution. 
Be mindful that element selectors don't have class ".", By removing this at the  nav selctor the position of the nav was placed correctly.

Putting the ID connected to the elemnt makes this css work: ".circle button#close {}"

Use queryselector for classes in js "const container = document.querySelector('.container')"




## Design process. 
Walking through a tutorial en watching it a few times. Placing notes in the code for futur reference

##Results. 
It's great to see that the animation works smoothly. It really looks very professional.



## What have I learned?
<ul>
  <li>Start position in element
   transform: translateX(0);
    transition-delay: 0.3s;</li>
  <li>End position on click class 
  transform: translateX(-100%);
    transition: transform 0.4s ease-in;</li>
    <li>Making tabs in a list by li + li + li</li>
  <li>The span tags</li>
    <li>Id ans utility classes</li>
    <li> text shadows</li>

</ul>


    Source: https://www.udemy.com/course/50-projects-50-days/
    https://github.com/bradtraversy/50projects50days/tree/master/rotating-nav-animation
