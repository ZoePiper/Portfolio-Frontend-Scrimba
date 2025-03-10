const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("inputbtn")

console.log(inputEl)

const uitputMeterEl = document.getElementById("uitputmeter")
console.log(uitputMeterEl)
const uitputLiterEl = document.getElementById("uitputliter")
console.log(uitputLiterEl)
const uitputKiloEl = document.getElementById("uitputkilo")
console.log(uitputKiloEl)



const calculateMeter = 3.281
const calculateLiter = 0.264
const calculateKilo = 2.204





function calculator() {
    let input = Number(inputEl.value)
    console.log(input)

    let meterFeet = input * calculateMeter
    let feetMeter = input / calculateMeter
    let literGallon = input * calculateLiter
    let gallonLiter = input / calculateLiter
    let kiloPound = input * calculateKilo
    let poundKilo = input / calculateKilo

    console.log(meterFeet.toFixed(3))
    console.log(feetMeter.toFixed(3))

    let meterText = `${input} meters = ${meterFeet.toFixed(3)}  feet | ${input} feet = ${feetMeter.toFixed(3)} meters`
    let literText = `${input} meters = ${literGallon.toFixed(3)}  feet | ${input} feet = ${gallonLiter.toFixed(3)} meters`
    let kiloText = `${input} meters = ${kiloPound.toFixed(3)}  feet | ${input} feet = ${poundKilo.toFixed(3)} meters`

    uitputMeterEl.innerHTML = meterText
    uitputLiterEl.innerHTML = literText
    uitputKiloEl.innerHTML = kiloText

}


