# 54. To Do app

## Client background / Project discription 
    An app where to can fill in your to do text. This will displace under each other. You can cross them off when you are done or delete them with your richt mouse click. This is a desktop version.

## Live Project
Click <a href="https://54-todo.netlify.app/"> here </a>to see the live app.



## Visual
<img width="533" alt="Screenshot 54-todo netlify app" src="https://user-images.githubusercontent.com/38401274/226109516-054dee53-375d-4723-b669-e07654f7cab8.png">

    
## Design problem. 
When filling everything in your content vanishes after refreshing

## Constraints. 
Nope

## Solution. 
This code saves as a array with JSON Stringify to make a string
and if you want to get it out of storage use JSON.parse

localStorage.setItem('todos', JSON.stringify(todos))
JSON.parse(localStorage.getItem(obj)))


## Design process and Tools. 
This was a tutorial from Udemy. Practacing my HTML, CSS, JS
source: https://www.udemy.com/course/50-projects-50-days/learn/lecture/23600000?start=0#learning-tools

##Results. 
A simple functioning Todo app

##What's Next. 
Adding more buttons and making a more robust ToDo app

## What have I learned?
<ul>
  <li>Local storage</li>
  <li>JSON.parse</li>
    <li>Local storags visable in the DOM Application</li>
  <li>Add input</li>
    <li>.remove</li>
    <li> .toggle</li>

</ul>



