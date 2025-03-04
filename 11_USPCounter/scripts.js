// let interval = 4000;
// let Displayvalue = document.querySelectorAll(".number");

// Displayvalue.forEach(valueDisplay => {
//     let startValue = 0;
//     let endValue = parseInt(valueDisplay.getAttribute("data-val"));
//     let duration = Math.floor(interval / endValue)
//     let counter = setInterval(function () {
//         startValue += 1;
//         valueDisplay.textContent = startValue;
//         if (startValue == endValue) {
//             clearInterval(counter);
//         }
//     }, duration);
// });

// let interval = 4000;
// let Displayvalue = document.querySelectorAll(".num");


// Displayvalue.forEach((valueDisplay) => {
//     let startValue = 0;
//     let endValue = parseInt(valueDisplay.getAttribute("data-val"));
//     let duration = Math.floor(interval / endValue);
//     let counter = setInterval(function () {
//         startValue += 1;
//         valueDisplay.textContent = startValue;
//         if (startValue == endValue) {
//             clearInterval(counter);
//         }
//     }, duration);
// });

const counters = document.querySelectorAll(".count");
const speed = 200;

counters.forEach((counter) => {
    const updateCount = () => {
        const target = parseInt(counter.getAttribute('data-target')); // Get the attribute "data-target" in the counter class and turn it into an int
        const count = parseInt(counter.innerText); //Adds a number to the inner text of the H3 until it reaches the target value.
        const increment = Math.trunc(target / speed); // trunc rounds of the divided value 
        console.log(increment);

        if (count < target) {
            counter.innerText = count + increment; //adding our increment value to the counter and changing the DOM value using counter.innerText
            setTimeout(updateCount, 1);//function executes a specific function after a given period of time, second parameter is 1 milliseconds
        } else {
            count.innerText = target;
        }

    };
    updateCount();
});




