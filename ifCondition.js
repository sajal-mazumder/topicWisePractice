

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

// let tierNum = 13;
// let perks = '';
// switch (tierNum) {
//     case 3: 
//     console.log('gold star')

//     case 2: 
//     console.log('silver star')

//     case 3: 
//     console.log('bronze star')
//     break;

//     default:
//         console.log('please select 1,2 or 3.')
//         break;
// }

// switch (tierNum) {
//     case 3:
//         perks = 'gold star'
//         break;
//     case 2:
//         perks = 'silver star'
//         break;
//     case 1:
//         perks = 'bronze star'
//         break;

//     default:
//         perks = 'please select a valid number.'
//         break;
// }
// console.log(perks)

/*
🎉No 9:
Fitness workout plans (switch case )
Accept a string for the current day of week.
Log “Cardio” for monday and wednesday, “Strength” for tuesday and thursday, “Yoga” for friday and “Rest Day” for the weekend.
Group the matching days together efficiently.
*/

// let days = 'saturday'
// let workDays = days.toLowerCase()
// let work = '';
// switch (true) {
//     case (workDays === 'monday' || workDays === 'wenesday'):
//         work = 'Cardio'
//         break;
//     case (workDays === 'tuesday' || workDays === 'thursday'):
//         work = 'Strength'
//         break;
//     case (workDays === 'friday'):
//         work = 'Yoga'
//         break;
//     case (workDays === 'saturday' || workDays === 'sunday'):
//         work = 'Rest day'
//         break;

//     default:
//         work = 'Please select a valid day'
//         break;
// }
// console.log(work)

// switch (workDays) {
//     case 'monday':
//     case 'wenesday':
//         work = 'Cardio'
//         break;
//     case 'tuesday':
//     case 'thursday':
//         work = 'Strength'
//         break;
//     case 'saturday':
//     case 'sunday':
//         work = 'Rest day'
//         break;
//     case 'friday':
//         work = 'Yoga'
//         break;

//     default:
//         work = 'Please select a valid day'
//         break;
// }
// console.log(work)

/*
🎉No 10:
The amusement park ride
A roller coaster requires a rider to be over 120 cm tall and accompanied by an adult, or they can ride alone if they are over 140 cm tall.
Your states:
You are 135 cm tall and you are alone.
Is the final scenario true or false for you being allowed to ride?
*/

// let tall = 145;
// let isAlone = true;
// if (tall >= 140) {
//     console.log('Ride alone')
// }else if(tall >= 120 && !isAlone){
//     console.log('Ride with accompany')
// }else{
//     console.log('Can not ride.')
// }

// if(tall >= 120 && !isAlone || tall >= 140){
//     console.log('Can ride')
// }else{
//     console.log('can not ride.')
// }

// let ride = (tall >= 120 && !isAlone) || tall >= 140 ? 'can ride' : 'can not ride.'
// console.log(ride)


/*
🎉No 11:
The online discount
A website gives a discount if a customer is a new user and has a promo code.
Alternatively, they get the discount if they are a VIP member ( regardless of the code or user age).
Your stats: You are a new user, you don’t have a promo code, and you are a VIP member.
Is the final scenario true or false for you getting the discount?
*/

// let newUser = true;
// let hasPromoCode = true;
// let VIPis = false;
// if (VIPis) {
//     console.log('get discount')
// }else if(newUser && hasPromoCode){
//     console.log('get discount also.')
// }else{
//     console.log('no discount available.')
// }

// let getDiscount = VIPis ? 'get discount' : ((newUser && hasPromoCode) ? 'get discount also' : 'no discount applied.');
// console.log(getDiscount)


/*
🎉No 12:
The automated greenhouse
The watering system turns on if the soil is dry and the temperature is above 25 degrees.
Current stats: the soil is wet, the temperature is 30 and it is 9:00 pm.
Is the final scenario true or false for the watering system turning on?
*/

// let isSoilDry = true;
// let temperature = 28;
// let isPeakHour = true;
// if(isSoilDry && temperature > 25 && !isPeakHour){
//     console.log('turn on watering system.')
// }else{
//     console.log('turn off watering system.')
// }

// let watering = isSoilDry && temperature > 25 && !isPeakHour ? 'turn on watering system': 'turn off watering system.'
// console.log(watering)


/*
🎉No 13:
The exam eligibility 
To sit for an exam, a student must have paid their fees and have an attendance over 75%. However, if they have a medical waiver, they only need to have paid their fees.
Your stats: You paid your fees, your attendance is 65% and you do not have a medical waiver.
Is the final scenario true or false for you being eligible for the exam?
*/

// let feesPaid = false;
// let attendence = 55;
// let hasMedicalWaiver = true;
// if(feesPaid){
//     if(attendence >= 75 || hasMedicalWaiver){
//         console.log('eligible for exam')
//     }else{
//         console.log('not eligible for exam')
//     }
// }else{
//     console.log('first pay your fees.')
// }

// if(feesPaid && (attendence >= 75 || hasMedicalWaiver)){
//     console.log('allowed for exam')
// }else{
//     console.log('not allowed for exam.')
// }

// let eligibleForExam = !feesPaid ? 'first pay your fees' : (attendence >= 75 || hasMedicalWaiver ? 'allowed for exam' : 'not allowed for exam.')
// console.log(eligibleForExam)

// let allowForExam = feesPaid ? ((attendence >= 75 || hasMedicalWaiver) ? 'allowed for exam' : 'not allowed for exam') : 'first pay your fees.'
// console.log(allowForExam)


/*
🎉No 14:
The smartphone unlock
A phone will unlock if face ID matches or if the correct PIN is entered.
However, the phone will absolutely not unlock if the battery is completely dead, no matter what.
Current status: Face ID matches, the PIN is incorrect, and the battery is completely dead.
Is the final scenario true or false for the phone unlocking?
*/

// let isBatteryDead = true;
// let isFaceMatch = false;
// let isPinCorrect = false;

// if(!isBatteryDead){
//     if(isFaceMatch || isPinCorrect){
//         console.log('Unlock your phone.')
//     }else{
//         console.log('Please match your face id or enter correct pin.')
//     }
// }else{
//     console.log('Sorry! Your phone is dead.')
// }

// let unlockPhone = isBatteryDead ? 'Sorry! your phone is dead.': ((isFaceMatch || isPinCorrect) ? 'Unlock your phone.' : 'Please match your face id or enter correct pin.') 
// console.log(unlockPhone)

// let phoneUnlock = !isBatteryDead ? ((isFaceMatch || isPinCorrect) ? 'Unlock your phone.' : 'Please match your face id or enter correct pin.') : 'Sorry! your phone is dead.'
// console.log(phoneUnlock)


/*
🎉No 15:
OTP Verification
To log in to an app, the user must provide the correct OTP.
However, if the user is using a "Trusted Device", they can log in without an OTP.
But if the user is directly blocked, they will not be allowed to log in under any circumstances. 
*/

// let isCorrectOTP = false;
// let isTrustedDevice = false;
// let isBlocked = false;

// if(!isBlocked){
//     if (isCorrectOTP || isTrustedDevice) {
//         console.log('Log in to app.')
//     }else{
//         console.log('Please enter valid OTP or use trusted device.')
//     }
// }else{
//     console.log('Sorry! Your device is blocked.')
// }

// let logInApp = !isBlocked ? ((isCorrectOTP || isTrustedDevice) ? 'Log in to app.' : 'Please enter valid OTP or use trusted device.') : 'Sorry! Your device is blocked.'
// console.log(logInApp);

// let appLogin = isBlocked ? 'Sorry! Your device is blocked.' : ((isCorrectOTP || isTrustedDevice) ? 'Log in to app.' : 'Please enter valid OTP or use trusted device.')
// console.log(appLogin);


/*
🎉No 16:
Free Shipping
An e-commerce website offers free shipping if the total order cost is greater than $50 AND the customer is a resident of the same city (Local).
Alternatively, if the customer is a Premium Member, they will receive free shipping regardless of the order cost. 
*/

// let orderCosting = 40;
// let isLocal = false;
// let isPremium = false;

// if(isPremium){
//     console.log('free shipping.')
// }else if(orderCosting > 50 && isLocal){
//     console.log('free shipping.')
// }else{
//     console.log('shipping charge added.')
// }

// if(isPremium || isLocal && orderCosting > 50){
//     console.log('free shipping.')
// }else{
//     console.log('shipping charge added.')
// }

// let shippingCharge = isPremium || (isLocal && orderCosting > 50) ? 'free shipping.' : 'shipping charge added.';
// console.log(shippingCharge);

/*
🎉No 17:
Blood Donation Eligibility
To donate blood, the age must be between 18 and 60 years AND the weight must be greater than 50 kg and last blood donation above 3 months.
However, if a tattoo has been gotten within the last 9 months, blood donation is not allowed. 
*/

// let age = 45;
// let weight = 55;
// let lastBloodDonate = 4;
// let hasTattoo = 10;

// if(hasTattoo >= 9){
//     if(age >= 18 && age <= 60){
//         if(weight >= 50){
//             if(lastBloodDonate > 3){
//                 console.log('eligible for blood donate.')
//             }else{
//                 console.log('Last blood donate must be over 3 months.')
//             }
//         }else{
//             console.log('You are underweight or overweight.')
//         }
//     }else{
//         console.log('You are under 18 or over 60.')
//     }
// }else{
//     console.log('Sorry! Your tattoo does not exceed 9 months. Not eligible for blood donate.')
// }


// // guard clause
// if(hasTattoo <= 9){
//     console.log('Sorry! your tattoo does not cross 9 months.')
// }else if(age < 18 || age > 60){
//     console.log('You must be 18 - 60.')
// }else if(weight < 50){
//     console.log('You must be over 50kg.')
// }else if(lastBloodDonate < 3){
//     console.log('Last blood donate must be over 3 months.')
// }else{
//     console.log('Congratulations! Eligible for blood donate.')
// }


// let bloodDonate = hasTattoo <= 9 ? 'Sorry! your tattoo does not cross 9 months.' : ((age < 18 || age > 60 ? 'age must be 18 - 60' :(weight < 50) ? 'underweight.' : (lastBloodDonate < 3 ? 'Last blood donate must be over 3 months.' : 'Congratulations! Eligible for blood donate.')))
// console.log(bloodDonate);

/*
🎉No 18:
ATM Withdrawal
To withdraw money from an ATM booth, the user must provide the correct PIN.
Next, the booth must have enough cash.
However, if the user is a VIP account holder, the bank will provide the money from another fund even if the booth's cash is low (meaning there is no need to check the booth's cash). 
*/

// let isVIPs = true;
// let cashAmount = 500;
// let isCorrectPin = true;
// if(isCorrectPin){
//     if(isVIPs){
//         console.log('Can withdraw any amount.')
//     }else if(cashAmount >= 1000){
//         console.log('can withdraw your desired amount.')
//     }else{
//         console.log('balance is very low.')
//     }
// }else{
//     console.log('Please enter correct pin.')
// }

// let cashWithdraw = isCorrectPin ? (isVIPs ? 'can withdraw any amount.' : (cashAmount >= 1000 ? 'can withdraw your desired amount.' : 'balance is very low')) : 'Please enter correct pin.';
// console.log(cashWithdraw);

// guard clause

// if(!isCorrectPin){
//     console.log('Oops! incorrect pin.')
// }else if(isVIPs){
//     console.log('can withdraw any amount.')
// }else if(cashAmount < 1000){
//     console.log('low balance.')
// }else{
//     console.log('can withdraw your desired amount.')
// }


/*
🎉No 19:
Movie Ticket Pricing
The ticket price at a movie theater will be free ($0) if the viewer is a child aged 5 or under (Age <= 5) OR a military member.
However, if a "Special Screening" or premier show is running in the theater, ticket purchase is mandatory for everyone (no one gets it for free). 
*/
let isPremiurShow = false;
let isMilitaryMember = true;
let age = 34;
if(!isPremiurShow){
    if(isMilitaryMember || age <= 5){
        console.log('ticket for 0$.')
    }else{
        console.log('ticket for 10$.')
    }
}else{
    console.log('tikcet for 10$.')
}
