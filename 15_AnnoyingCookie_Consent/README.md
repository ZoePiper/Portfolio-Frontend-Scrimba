# 8. Annoying Cookie Consent

## Project discription

On a website you get a cookie consent form. This is a model where you fill in your email and name.
Once you want to decline this option this is not possible. The accept en decline button switch around.
After accepting you get a loading screen for a few seconds. After that a conformation screen with the text and laughing pirate that you sold your soul.
Made in HTML, CSS and JavaScript

## Live Project

You can find the site on<a href="https://golden-gaufre-916cf8.netlify.app/"> Click here <a>

## Visual

<img width="553" alt="Screenshot Annoying Cookie Consent" src="https://github.com/ZoePiper/Portfolio-Frontend-Scrimba/blob/main/15_AnnoyingCookie_Consent/images/1stPage.png?raw=true
">
    
## Design problem. 
Execute later Timer

## Solution.

setTimeout(function, delay in milliseconds)
3000 = 3 seconds
If you want to show something later, you need to add the time to the next one.
So the first one appears after 3 seconds, and after it appears, you want the next message 4 seconds later.
So 3 + 4 = 7 → 7000

example:
setTimeout(function() {
console.log('Lima!')
}, 3000)

Replace the current style using JavaScript with element.style
example:
const revealBtn = document.getElementById('reveal-btn')
const answer = document.getElementById('answer')

revealBtn.addEventListener('click', function() {
answer.style.display = 'block'
})

FormData is used to collect all the data from a form and store it in an object-like structure.
When you click submit, you can prevent the default page reload and create a FormData object from the form.

example:
loginForm.addEventListener('submit', function(e) {
e.preventDefault(); // Prevent the form from refreshing the page

    const loginFormData = new FormData(loginForm);
    console.log(loginFormData);

});

Output = FormData {field text}

You can personalize messages or process the data by using .get() with the name attribute of the input fields.
example:
const username = loginFormData.get('username');
const password = loginFormData.get('password');

console.log(`Welcome, ${username}!`);

## Design process and Tools.

This was a tutorial from Scrimba. Practising my HTML, CSS, JS
source: https://scrimba.com/frontend-path-c0j/~0dh

##Results.
Modal with extra features

##What's Next.
Change the content

## What have I learned?

<ul>
    <li>setTimeout</li>
    <li>element.style</li>
    <li>forms</li>
    <li>formData&get.()</li>
    <li>aria-labels</li>
    <li>event.preventDefault</li>
    <li>CSS:row-reverse</li>
    <li>toggling classes</li>
    <li>'diabled'sttribute</li>
   
</ul>
