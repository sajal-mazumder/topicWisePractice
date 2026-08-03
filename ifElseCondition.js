

/*
🎉No 1: 
Turning AC or Heater
An automated home system needs to decide whether to turn on heating, the cooling or do nothing. 
Input: Current temperature (Number)
Logic to figure out: If the temperature is below 18, turn on the Heating.
If the temperature is between 18 and 25 (inclusive), keep the climate control Off.
If the temperature is above 25, turn on AC.
Goal: Determine the thermostat action.
*/

// let currentTemp = 15;
// if (currentTemp < 18) {
//     console.log('Turn on Heater.')
// }else if (currentTemp <= 25) {
//     console.log('Keep the climate control off.')
// }else{
//     console.log('Turn on AC!')
// }

// using logical operator

// if (currentTemp < 18 ) {
//     console.log('Turn on Heating.')
// }else if (currentTemp >= 18 && currentTemp <= 25) {
//     console.log('Keep the climate control off.')
// }else{
//     console.log('Turn on AC!')
// }


// using ternary operator

// let turnAC = (currentTemp < 18) ? 'Turn on Heating.' : (currentTemp <=25 ? 'Keep the climate control off' : 'Turn on AC.')
// console.log(turnAC)

/*
🎉No : 2
Password validator
A system checks if a new password meets minimal safety standards.
Input: Password length ( number ) and contains numbers (true / false)
Logic to figure out: 
If the password length is less than 8 characters, return ‘too short’
If the password length is 8 or more characters, check if it contains numbers and special character.
If it has numbers and special character, return ‘strong’. Or return ‘week’.
Goal: Return the correct security label.
*/

// let password = 'abe#$#@@@@8';
// let hasNumber = /\d/.test(password);
// let hasCharacter = /[^A-Za-z0-9]/.test(password);

// if (password.length < 8) {
//     console.log('Too short Password!')
// }else if (hasNumber && hasCharacter) {
//     console.log('Strong Password.')
// }else{
//     console.log('Weak Password.')
// }

// using ternary

// let printedPassword = (password.length < 8) ? 'Too short Password' : ((hasNumber && hasCharacter) ? 'Strong Password' : 'Weak Password.');
// console.log(printedPassword);

/*
🎉No : 3 
The e-commerce shipping calculator
An online store determines shipping costs based on the total purchase price and membership level.
Input: 
Order total (number) and is VIP Member (true / false).
Logic to figure out: 
If the customer is a VIP member, shipping cost is completely free, (0$) no matter the order total.
If they are not a VIP member, look at the order total: order $50 or more get free shipping (0$).
Orders under 50$ cost 5$ for shipping.
Goal: orders under 50$ cost 5$ for shipping.
*/

// let totalOrder = 20;
// let isVIP = false;

// if (isVIP) {
//     console.log('Shipping cost free. You are a VIP customer.')
// }else if (totalOrder > 50) {
//     console.log('Shipping cost free. You ordered more than 50 items.')
// }else{
//     console.log('Shipping cost $5. Your order less than 50 and not a VIP customer.')
// }

// using ternary 

// let orderCost = (isVIP) ? 'Shipping cost free. You are a VIP customer.' : (totalOrder > 50 ? 'Shipping cost free. You ordered more than 50 items.' : 'Shipping cost $5. Your order less than 50 and not a VIP customer.');
// console.log(orderCost);

// logical operator

// if (isVIP || totalOrder > 50) {
//     console.log('Shipping cost 0.')
// }else{
//     console.log('Shipping cost $5.')
// }

/*
🎉No : 4
Cinema ticket pricing
A cinema offers various discounts based on age and student status.
Inputs:  Age (number) and is Student (true / false).
Logic to figure out: 
Children under 12 years old get a ticket for 6$.
Seniors age >= 65 get a ticket for 8$.
For everyone else (12 to 64) : If they are a student they pay 10$, otherwise 15$.
Goal : determine the ticket price.
*/

// let age = 10;
// let isStudent = true;

// if (age < 12) {
//     console.log('Pay $6 for ticket.')
// }else if (age >= 65) {
//     console.log('Pay $8 for ticket.')
// }else if (age < 65 && isStudent) {
//     console.log('Pay $10 for ticket.')
// }else{
//     console.log('Pay $15 for ticket.')
// }

// ternary

// let ticketPrice = (age < 12) ? 'Pay $6 for ticket' : ((age >= 65) ? '$8': (age < 65 && isStudent) ? '$10' : '$15');
// console.log(ticketPrice);


/*
🎉No 5: 
Toll booth calculation
A small toll booth calculates fees based on the vehicle types and the time of day.
Inputs: Vehicles type ( ‘car’, ‘truck’, or ‘motorbike’) and peak hours (true / false).
Logic: 
Motorbikes always pay $2.
Trucks always pay 10$.
Cars pay 5$ during non-peak hours, but if it is peak hours, they pay 8$.
Goal: determine the correct toll amount for a given vehicle.
*/

// let typeOfVehicle = 'Cycle';
// let isPeakHour = false;
// if (typeOfVehicle === 'Truck') {
//     console.log('Pay $10.')
// }else if (typeOfVehicle === 'Motorbike') {
//     console.log('Pay $2.')
// }else if (typeOfVehicle === 'Car' && isPeakHour) {
//     console.log('Pay $5.')
// }else if (typeOfVehicle === 'Car' && !isPeakHour) {
//     console.log('Pay $8')
// }
// else{
//     console.log('Select a valid Vehicle.')
// }

// switch case

let vehicleType = 'cycle'; // valid vehicle - bus, truck, car.
let isPeakHour = false;
let carRent = '';

switch (true) {
    case (vehicleType === 'Bus'):
        carRent = '$2'
        break;
    case ( vehicleType === 'Truck'):
        carRent = '$10'
        break;
    case (vehicleType === 'Car' && isPeakHour):
        carRent = '$5'
        break;
    case (vehicleType === 'Car' && !isPeakHour):
        carRent = '$8'
        break;
    default:
        carRent = 'Select a valid vehicle.'
        break;
}
console.log(carRent);

                                                                                                                      
