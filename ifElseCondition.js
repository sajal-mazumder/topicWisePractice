

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

// let vehicleType = 'cycle'; // valid vehicle - bus, truck, car.
// let isPeakHour = false;
// let carRent = '';

// switch (true) {
//     case (vehicleType === 'Bus'):
//         carRent = '$2'
//         break;
//     case ( vehicleType === 'Truck'):
//         carRent = '$10'
//         break;
//     case (vehicleType === 'Car' && isPeakHour):
//         carRent = '$5'
//         break;
//     case (vehicleType === 'Car' && !isPeakHour):
//         carRent = '$8'
//         break;
//     default:
//         carRent = 'Select a valid vehicle.'
//         break;
// }
// console.log(carRent);

/*
🎉No 6:
Traffic light simulator: 
Accept a string variable representing a traffic light color (‘red’, ‘yellow’, ‘green’).
Output: ‘stop’, ‘slow down’, or ‘go’ respectively.
Include a fallback message for any invalid color.
*/

// let lightColor = 'Green';
// if (lightColor === 'Red') {
//     console.log('Stop!')
// }else if (lightColor === 'Yellow') {
//     console.log('Slow down.')
// }else if (lightColor === 'Green') {
//     console.log('Go to your destination.')
// }else{
//     console.log('Please select a valid color.')
// }

// using switch case

// let colorLight = 'Green';
// let traffic = '';
// switch (true) {
//     case colorLight === 'Red':
//         traffic = 'Stop.'
//         break;
//     case colorLight === 'Yellow':
//         traffic = 'Slow down.'
//         break;
//     case colorLight === 'Green':
//         traffic = 'Go first.'
//         break;
//     default:
//         traffic = 'Please select a valid color.'
//         break;
// }
// console.log(traffic);


/*
🎉No 7:  
Movie rating guide
Accept a letter grade representing a movie rating ( ‘G’, ‘PG’, ‘PG-13’, or ‘R’).
Log a short description of who is allowed to watch it.
Handle unknown rating codes gracefully.
*/

// let movieRating = 'V';
// if (movieRating === 'G') {
//     console.log('General spectetor. All ages people can enjoy.')
// }else if (movieRating === 'PG') {
//     console.log('Parental Guide allowed to watch movie.')
// }else if (movieRating === 'PG-13') {
//     console.log('Under 13 are allowed with Parental Guide.')
// }else if (movieRating === 'R') {
//     console.log('Restricted! Only adults are allowed.')
// }else{
//     console.log('Violance and Sexual content.')
// }

// using switch case

// let ratingMovie = 'V';
// let movie = '';
// switch (true) {
//     case ratingMovie === 'G':
//         movie = 'General Spectetor.'
//         break;
//     case ratingMovie === 'PG':
//         movie = 'Parental Guide need.'
//         break;
//     case ratingMovie === 'PG-13':
//         movie = 'Under 13 are not allowed.'
//         break;
//     case ratingMovie === 'R':
//         movie = 'Restricted.'
//         break;    
//     default:
//         movie = 'Horror movie.'
//         break;
// }
// console.log(movie);


/*
🎉No 8:
Gym membership tier (switch case)
Accept a membership level number (1 for Bronze, 2 for Silver, 3 for Gold).
Log the specific perks for the tier.
Make sure that higher tiers automatically inherit (“fall through” intentionally into) the perks of the lower tiers.
*/
// let gymMember = 11;
// // let packege = '';
// switch (gymMember) {
//     case  3:
//         // packege = 'You are a Gold star. Can use Stationary Bike (Spin Bike)'
//         console.log('you are a gold star.')
//     case  2:
//         // packege = 'You are a Silver star. Can use Chest Press Machine'
//         console.log('You are a silver star.')
//     case  1:
//         // packege = 'You are a Bronze star. Can use Dumbbells'
//         console.log('you are a bronze star.')
//         break;   
//     default:
//         // packege = 'Please select a valid membership.'
//         console.log('please select 1, 2 or 3.')
//         break;
// }
// console.log(packege);

// let member = 3;
// let offerPackeges = 'Your packege includes:';
// switch (member) {
//     case 3:
//         offerPackeges += '\n- Gold star: Stationary Bike (Spin Bike)'
//     case 2:
//         offerPackeges += '\n- Silver star: Chest Press Machine'
//     case 1:
//         offerPackeges += '\n- Bronze star: Dumbbells'
//         break;
//     default:
//         offerPackeges = 'please select 1, 2 or 3.'
//         break;
// }
// console.log(offerPackeges);

// if else condition

// let member = 2;
// let offerPackeges = 'Your packege includes:';
// if (member >=1 && member <=3) {
//     if (member >= 3) {
//         offerPackeges += '\n- Gold star: Stationary Bike (Spin Bike)';
//     }
//     if (member >= 2) {
//         offerPackeges += '\n- Silver star: Chest Press Machine';
//     }
//     if (member >=1) {
//         offerPackeges += '\n- Bronze star: Dumbbells';
//     }
// }else{
//     offerPackeges = 'Please select 1, 2 or 3.';
// }
// console.log(offerPackeges);


/*
🎉No 9:
Fitness workout plans (switch case )
Accept a string for the current day of week.
Log “Cardio” for monday and wednesday, “Strength” for tuesday and thursday, “Yoga” for friday and “Rest Day” for the weekend.
Group the matching days together efficiently.
*/
// 


/*
🎉No 10:
The amusement park ride
A roller coaster requires a rider to be over 120 cm tall and accompanied by an adult, or they can ride alone if they are over 140 cm tall.
Your states:
You are 135 cm tall and you are alone.
Is the final scenario true or false for you being allowed to ride?
*/
// let height = 128;
// let hasCompany = true;
// if (height >= 120 && hasCompany || height > 140) {
//     console.log('can ride.')
// }else{
//     console.log('not allowed.')
// }

// ternary

// let allowRide = (height >=120 && hasCompany || height > 140) ? 'allowed' : 'not allowed.';
// console.log(allowRide);


/*
🎉No 11:
The online discount
A website gives a discount if a customer is a new user and has a promo code.
Alternatively, they get the discount if they are a VIP member ( regardless of the code or user age).
Your stats: You are a new user, you don’t have a promo code, and you are a VIP member.
Is the final scenario true or false for you getting the discount?
*/

// let newCustomer = true;
// let hasPromoCode = false;
// let isVIP = false;
// if (isVIP) {
//     console.log('Discount 100%.')
// }else if (newCustomer && hasPromoCode) {
//     console.log('Also discount 100%')
// }else{
//     console.log('No discount.')
// }

// ternary 

// let getDiscount = (isVIP) ? 'discount 100%.' : (newCustomer && hasPromoCode) ? 'also get discount 100%' : 'sorry, no discount.';
// console.log(getDiscount);

/*
🎉No 12:
The automated greenhouse
The watering system turns on if the soil is dry and the temperature is above 25 degrees.
Current stats: the soil is wet, the temperature is 30 and it is 9:00 pm.
Is the final scenario true or false for the watering system turning on?
*/

// let soilCondition = 'wet';
// let temperature = 28;
// let peakHour = false;
// if (soilCondition === 'dry' && temperature > 25) {
//     if (peakHour === true) {
//         console.log('Turn on waterinng system.')
//     }else{
//         console.log('Turn off watering system.')
//     }
// }else{
//     console.log('No need watering system.')
// }

// ternary

// let watering = (soilCondition === 'dry' && temperature > 25) ? (peakHour ? 'turn on watering' : 'turn off watering') : 'no need to watering.';
// console.log(watering);

/*
🎉No 13:
The exam eligibility 
To sit for an exam, a student must have paid their fees and have an attendance over 75%. However, if they have a medical waiver, they only need to have paid their fees.
Your stats: You paid your fees, your attendance is 65% and you do not have a medical waiver.
Is the final scenario true or false for you being eligible for the exam?
*/

// let paidFees = true;
// let attendence = 80;
// let medicalWaver = false;
// if (paidFees && (attendence >= 75 || medicalWaver)) {
//     console.log('allowed for exam.')
// }else{
//     console.log('not allowed.')
// }


// if (paidFees) {
//     if (attendence >=75 || medicalWaver) {
//         console.log('allowed.')
//     }else{
//         console.log('not allowed.')
//     }
// }else{
//     console.log('First pay your fees.')
// }

// ternary

// let sitForExam = (paidFees) ? ((attendence >= 75 || medicalWaver) ? 'allowed for exam' : 'not allowed.') : 'first pay fees.';
// console.log(sitForExam);

/*
🎉No 14:
The smartphone unlock
A phone will unlock if face ID matches or if the correct PIN is entered.
However, the phone will absolutely not unlock if the battery is completely dead, no matter what.
Current status: Face ID matches, the PIN is incorrect, and the battery is completely dead.
Is the final scenario true or false for the phone unlocking?
*/

// let batteryDead = false;
// let matchFaceID = true;
// let isPin = false;
// if (!batteryDead) {
//     if (matchFaceID || isPin) {
//         console.log('unlock your phone.')
//     }else{
//         console.log('make sure your face ID or correct Pin.')
//     }
// }else{
//     console.log('first turn on your mobile phone.')
// }

// ternary 

// let openMobile = (!batteryDead) ? ((matchFaceID || isPin) ? 'unlock your phone.' : 'first check face Id or Pin.') : 'turn on your phone.';
// console.log(openMobile);


/*
🎉No 15:
OTP Verification
To log in to an app, the user must provide the correct OTP.
However, if the user is using a "Trusted Device", they can log in without an OTP.
But if the user is directly blocked, they will not be allowed to log in under any circumstances. 
*/

let isBlocked = true;
let isTrustedDevice = false;
let isCorrectOTP = false;

if (!isBlocked) {
    if (isTrustedDevice || isCorrectOTP) {
        console.log('log into app.')
    }else{
        console.log('wrong OTP or not trusted device.')
    }
}else{
    console.log('sorry! you are blocked.')
}

// ternary

let logInApp = (!isBlocked) ? ((isTrustedDevice || isCorrectOTP) ? 'log in to app.' : 'wrong otp or unknown device.') : 'you are blocked.';
console.log(logInApp);