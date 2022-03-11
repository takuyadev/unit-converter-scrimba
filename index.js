let currentValue = 0;
let newValue = document.getElementById("conversionValue")
let unit = document.getElementById("unit");

//units
let meter = document.getElementById("convertMeter")
let feet = document.getElementById("convertFeet")
let liter = document.getElementById("convertLiter")
let gallon = document.getElementById("convertGallon")
let kilogram = document.getElementById("convertKilograms")
let pound = document.getElementById("convertPounds")

//conversion functions
const convertMeterToFeet = () => (currentValue * 3.28084).toFixed(3);
const convertFeetToMeter = () => (currentValue * 0.3048).toFixed(3);
const convertLiterToGallon = () => (currentValue * 0.264172).toFixed(3);
const convertGallonToLiter = () => (currentValue * 3.78541).toFixed(3);
const convertKilogramToPound = () => (currentValue * 2.20462).toFixed(3);
const convertPoundsToKilogram = () => (currentValue * 0.453592).toFixed(3);

//interaction functions
const getValue = () => currentValue = parseInt(newValue.value);

const convertUnits = () => {
    meter.textContent = `${currentValue} meters = ${convertMeterToFeet()} feet `;
    feet.textContent = `${currentValue} feet = ${convertFeetToMeter()} meters `;
    gallon.textContent = `${currentValue} gallons = ${convertGallonToLiter()} liters `;
    liter.textContent = `${currentValue} liters = ${convertLiterToGallon()} gallons`;
    kilogram.textContent = `${currentValue} kilograms = ${convertKilogramToPound()} pound `;
    pound.textContent = `${currentValue} pounds = ${convertPoundsToKilogram()} kilograms `;
}

const changeUnit = () => {
    getValue();
    convertUnits();
     unit.textContent = currentValue;  
}