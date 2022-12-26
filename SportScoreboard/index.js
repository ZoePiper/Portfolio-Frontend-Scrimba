
var homeScoreEL = document.getElementById("homeScore-el")
var guestScoreEL = document.getElementById("guestScore-el")
// console.log(homeScoreEL)
// console.log(guestScoreEL)

var pointsHome=0
var pointsGuest=0


function add1(){
    pointsHome +=1
    homeScoreEL.textContent= pointsHome 
}
function add2(){
    pointsHome +=2
    homeScoreEL.textContent= pointsHome 
}
function add3(){
    pointsHome +=3
    homeScoreEL.textContent= pointsHome  
}

function add1Guest(){
    pointsGuest +=1
    guestScoreEL.textContent= pointsGuest 
}
function add2Guest(){
    pointsGuest +=2
    guestScoreEL.textContent= pointsGuest 
}
function add3Guest(){
    pointsGuest +=3
    guestScoreEL.textContent= pointsGuest  
}
 