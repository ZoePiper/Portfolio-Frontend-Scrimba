# 10.PasswordGenerator

## Project discription 
   This App lets you make a uniek password. By pressing the generate button you can chooes out of 2 passwords. There is an extra function to copy the first or second code. This will be alerted when used

## Live Project
Click <a href="https://10-passwordgenerator.netlify.app/"> here </a>to see the live app.


## Visual
<img width="553" alt="Screenshot SportScoreboard" src="/Users/zoepiper/Documents/Frontend/Portfolio-Frontend/10_PasswordGenerator/Screenshot_PasswordGenerator.png">
    
## Design problem. 
Connecting Classes to the js script with QuerySelector. Reviewing flexblox. Adding a copy function that I don't know how.


## Solution. 
Copy function used from navigator.clipboard from a google search

## Design process. 
Walk potential clients through your design process. Provide as much context as possible to explain your decisions.

##Results. 
A great app for generating safe and random passwords

##What's next? 
Add more functions to this app. A possibility to lengthen de passwoord, add caps, lower letters, special elements to the password and a setup button function for all these new functions.


## What have I learned?
<ul>
  <li>button id="btn" , onclick="generatePassword()"></li>
  <li>plugin Tabnine ai for VScode helps filling in</li>
    <li>For Font Awsome icons -> link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css"
        integrity="sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ=="
        crossorigin="anonymous" referrerpolicy="no-referrer" </li>
  <li> Layout for elements -> .container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 5px;</li>
    <li>const passwordField1 = document.querySelector("#passwordone");</li>
    <li> btn.addEventListener("click", () => {</li>
    <li>Copy text -> navigator.clipboard.writeText(passwordField1.value)</li>
        <li>navigator.permissions.query for writing en reading</li>
</ul>

## Source
<a href= "https://scrimba.com/scrim/ce4zJVUp">Example with more functions</a>
<a href= "https://setyourpasswords.netlify.app " > Also a nice source</a>
<a href = "https://scrimba.com/learn/frontend/solo-project-pro-password-generator-cR9B46Sg">Tutorial Scrimba </a>


