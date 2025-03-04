const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"]

//Connection between html en js
const passwordField1 = document.querySelector("#passwordone");
let passwordField2 = document.getElementById("passwordtwo")
let btn = document.getElementById("btn")
let copyBtn = getSelection("copy-btn")


// Update the password fields with new passwords when the Generate passwords button is clicked
btn.addEventListener("click", () => {
    //console.log("Button works onclick")
    passwordField1.value = generatePassword() // Within th passwordField1 id get the value variable, there the function will be placed
    passwordField2.value = generatePassword()
})

//generate a random number for the array index
function getRandomCharacter() {
    let passwoordIndex = Math.floor(Math.random() * characters.length)
    return characters[passwoordIndex]
}

//Generate the letters 8x next to each other
function generatePassword() {
    let length = 10
    let password = ""
    for (let i = 0; i < length; i++) {
        password += getRandomCharacter()
    }
    return password
}

//copy the password to the clipboard
copyIcon1.addEventListener('click', () => { //when clicked then...
    //console.log("copy btn works")
    navigator.clipboard.writeText(passwordField1.value) // Copy this id
        .then(() => { // after that set an alert popup
            alert("Password 1 is copied")
            console.log(passwordField1.value);
        })
})

copyIcon2.addEventListener('click', () => { //when clicked then...
    //console.log("copy btn works")
    navigator.clipboard.writeText(passwordField2.value) // Copy this id
        .then(() => { // after that set an alert popup
            alert("Password 2 is copied")
            console.log(passwordField2.value);
        })
})
navigator.permissions.query({ name: "clipboard-write" }).then((result) => { //you can check whether you have clipboard-write access
    if (result.state == "granted" || result.state == "prompt") {
        alert("Write access granted!");
    }
});

navigator.permissions.query({ name: "clipboard-read" }).then((result) => { //you can check whether you have clipboard-read access
    if (result.state == "granted" || result.state == "prompt") {
        alert("Read access granted!");

    }
});



