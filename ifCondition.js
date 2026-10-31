

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

// let temperature = 16;
// if (temperature < 18) {
//     console.log('Turn on Heating system.')
// }else if(temperature <= 25){
//     console.log('Climate control off.')
// }else{
//     console.log('Turn on AC.')
// }

// ternary

// let turnAC = (temperature < 18) ? 'Turn on Heating.' : (temperature <= 25 ? 'Climate control off.' : 'Turn on AC.')
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

// let pass = 'as%ll3'
// let hasNumber = /\d/.test(pass)
// let hasCharacter = /[A-Za-z0-9]/.test(pass);
// if(pass.length < 8){
//     console.log('too short')
// }else if( hasNumber && hasCharacter){
//     console.log('strong password.')
// }else{
//     console.log('week password.')
// }

// let password = (pass.length < 8) ? 'too short' : ((hasCharacter && hasNumber) ? 'strong' : 'week');
// console.log(password)


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

let orderCost = 60;
let isVIP = true;

// if(isVIP){
//     console.log('Shipping cost 0$.')
// }else if( orderCost >= 50){
//     console.log('Free shipping')
// }else{
//     console.log('Shipping cost 5$.')
// }

// let shippingCost = isVIP ? 'shipping cost 0' : ((orderCost >= 50) ? 'free shipping' : 'shipping cost 5$.')
// console.log(shippingCost)

// if(isVIP || orderCost >= 50 ){
//     console.log('free shipping')
// }else{
//     console.log('shipping cost 5$.')
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

// let age = 12;
// let isStudent = true;

// if(age < 12){
//     console.log('ticket for 6$.')
// }else if(age >= 65){
//     console.log('ticket for 8$.')
// }else if(age >= 12 && isStudent){
//     console.log('ticket for 10$')
// }else{
//     console.log('ticket for 15$.')
// }

// let ticketPrice = age < 12 ? 'ticket for 6$' : ((age >= 65) ? 'ticket for 8$.' : (age >= 12 && isStudent) ? 'ticket for 10$': 'ticket for 15$.')
// console.log(ticketPrice)

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

// let vihicle = 'bus';
// let peakHour = false;

// if(vihicle.toLocaleLowerCase() === 'motorbike'){
//     console.log('rent 2$')
// }else if(vihicle.toLocaleLowerCase() === 'truck'){
//     console.log('rent 10$')
// }else if(vihicle.toLocaleLowerCase() === 'car' && peakHour){
//     console.log('rent 5$')
// }else if(vihicle.toLocaleLowerCase() === 'car' && !peakHour){
//     console.log('rent 8$')
// }else{
//     console.log('choose right vihicle.')
// }

// let vihicles = 'truck';
// let peakHour = false;
// let rent = '';

// switch (true) {
//     case (vihicles.toLocaleLowerCase() === 'truck'):
//         rent = '10$'
//         break;
//     case (vihicles.toLocaleLowerCase() === 'motorbike'):
//         rent = '2$'
//         break;
//     case (vihicles.toLocaleLowerCase() === 'car' && peakHour):
//         rent = '5$'
//         break;
//     case (vihicles.toLocaleLowerCase() === 'car' && !peakHour):
//         rent = '8$'
//         break;

//     default:
//         rent = 'select a valid vihicle'
//         break;
// }
// console.log(rent)

// let carRent = vihicles === 'truck' ? 'rent 10$' : ((vihicles === 'motorbike') ? 'rent 2$' : (vihicles === 'car' && peakHour) ? 'rent 5$' : (vihicles === 'car' && !peakHour) ? 'rent 7$' : 'select a valid vihicle.')
// console.log(carRent);


/*
🎉No 6:
Traffic light simulator: 
Accept a string variable representing a traffic light color (‘red’, ‘yellow’, ‘green’).
Output: ‘stop’, ‘slow down’, or ‘go’ respectively.
Include a fallback message for any invalid color.
*/

// let lightColor = 'reD';
// if(lightColor.toLowerCase() === 'red'){
//     console.log('stop')
// }else if(lightColor.toUpperCase() === 'yellow'){
//     console.log('slow down')
// }else if(lightColor.toLowerCase() === 'green'){
//     console.log('go respectively')
// }else{
//     console.log('select a valid color.')
// }

// let light = 'gray';
// let direction = '';

// switch (true) {
//     case light.toLowerCase() === 'red':
//         direction = 'stop'
//         break;
//     case light.toLowerCase() === 'yellow':
//         direction = 'slow down'
//         break;
//     case light.toLowerCase() === 'green':
//         direction = 'go respectively'
//         break;
//     default:
//         direction = 'please select a valid color.'
//         break;
// }
// console.log(direction);

// let goTo = (light.toLowerCase() === 'red') ? 'stop': ((light.toLowerCase() === 'yellow') ? 'slow down' : (light.toLowerCase() === 'green' ? 'go respectively' : 'please select a valid color.'));
// console.log(goTo);

/*
🎉No 7:  
Movie rating guide
Accept a letter grade representing a movie rating ( ‘G’, ‘PG’, ‘PG-13’, or ‘R’).
Log a short description of who is allowed to watch it.
Handle unknown rating codes gracefully.
*/

// let movieRate = 'G';

// if(movieRate === 'G'){
//     console.log('General spectetor.')
// }else if(movieRate === 'PG'){
//     console.log('Parental Guide must.')
// }else if(movieRate === 'PG-13'){
//     console.log('Age under 13 are allowed with parental guide')
// }else if(movieRate === 'R'){
//     console.log('Restricted! only adults are allowed.')
// }else{
//     console.log('No valid movie.')
// }

// let movie = 'G'
// let allow = '';
// switch (true) {
//     case (movie === 'G'):
//         allow = 'General spectetor.'
//         break;
//     case (movie === 'PG'):
//         allow = 'Parental Guide need.'
//         break;
//     case (movie === 'PG-13'):
//         allow = 'Age under 13 is allowed with parental guide.'
//         break;
//     case (movie === 'R'):
//         allow = 'Restricted movie.'
//         break;
//     default:
//         allow = 'Not a valid movie.'
//         break;
// }
// console.log(allow)

// let allowMovie = (movie === 'G') ? 'General spectetor.' 
//     : ((movie === 'PG') ? 'Parental Guide need.' 
//         : (movie === 'PG-13') ? 'Age under 13 is allowed with parental guide.' 
//             : (movie === 'R') ? 'Restricted' 
//                 : 'Not a valid movie.');
// console.log(allowMovie);


/*
🎉No 8:
Gym membership tier (switch case)
Accept a membership level number (1 for Bronze, 2 for Silver, 3 for Gold).
Log the specific perks for the tier.
Make sure that higher tiers automatically inherit (“fall through” intentionally into) the perks of the lower tiers.
*/

let tierNum = 13;
let perks = '';
switch (tierNum) {
    case 3: 
    console.log('gold star')

    case 2: 
    console.log('silver star')

    case 3: 
    console.log('bronze star')
    break;

    default:
        console.log('please select 1,2 or 3.')
        break;
}
