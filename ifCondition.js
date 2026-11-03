

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
// if(!isPremiurShow){
//     if(isMilitaryMember || age <= 5){
//         console.log('ticket for 0$.')
//     }else{
//         console.log('ticket for 10$.')
//     }
// }else{
//     console.log('tikcet for 10$.')
// }

// let ticketPrice = isPremiurShow ? 'ticket for 12$' : ((isMilitaryMember || age < 5) ? 'ticket for 0$.' : 'ticket for 10$.');
// console.log(ticketPrice);


/*
🎉No 20:
Credit Card Approval
A bank will issue you a credit card if your monthly income is greater than 50,000 TK AND your credit score is above 700.
However, if you have an active loan defaulter record with the bank, you will not be allowed to get a card under any circumstances. 
*/

// let hasActiveLoan = false;
// let creditScore = 700;
// let monthlyIncome = 44000;
// if(hasActiveLoan){
//     console.log('No credit card in any circumstances.')
// }else if(monthlyIncome >= 50000 && creditScore >= 700){
//     console.log('Issue credit card.')
// }else{
//     console.log('Can not issue credit card.')
// }

// let issueCard = hasActiveLoan ? 'No credit card in any circumstances.' : ((monthlyIncome >= 50000 && creditScore >= 700) ? 'Issue credit card.' : 'Can not issue credit card.');
// console.log(issueCard);


/*
🎉No 21:
Flight Boarding Eligibility
A passenger can board the plane if they have a valid passport AND a boarding pass.
However, if they are an enforcement officer (such as police/security personnel) on active duty, they can board the plane with just a passport, without needing a boarding pass. 
*/

// let isSecurityPerson = true;
// let hasValidPassport = true;
// let hasBoardingPass = false;
// let activeDuty = false;
// if(hasValidPassport){
//     if(isSecurityPerson && activeDuty){
//         console.log('You can board plane without boarding pass.')
//     }else if(hasBoardingPass){
//         console.log('you can board plane.')
//     }else{
//         console.log('Not allowed to board plane.')
//     }
// }else{
//     console.log('Not a valid passport.')
// }

// guard clause
// if(!hasValidPassport){
//     console.log('Oops! invalid passport.')
// }else if(isSecurityPerson && activeDuty){
//     console.log('Can board plane without boarding pass.')
// }else if(hasBoardingPass){
//     console.log('can board plane.')
// }else{
//     console.log('Not allowed to board plane.')
// }

// let boardingPlane = hasValidPassport ? ((isSecurityPerson && activeDuty) ? 'You can board plane without boarding pass.' : (hasBoardingPass ? 'You can board plane.':'Not allowed to board plane.')) : 'Not a valid passport.';
// console.log(boardingPlane)

// let planeBoard = !hasValidPassport ? 'Ops! invalid passport.' : ((isSecurityPerson && activeDuty) ? 'Can board plane without boarding pass.' : (hasBoardingPass ? 'can board plane.' : 'Not allowed to board plane.'));
// console.log(planeBoard);


/*
🎉No 22:
E-commerce Combo Offer
A shop will give you a discount if you buy at least 3 items OR if your total bill is greater than 5,000 TK.
However, if your cart contains any "Clearance Sale" items, this offer will not be applicable (meaning you will not receive any discount). 
*/

// let buyItems = 2;
// let billTotal = 3000;
// let isClearenceSale = false;
// if(isClearenceSale){
//     console.log('No discount.')
// }else if(buyItems > 3 || billTotal > 5000){
//     console.log('10% discount.')
// }else{
//     console.log('No discount.')
// }

// let discount = isClearenceSale ? 'No discount.' : ((buyItems > 3 || billTotal > 5000) ? '10% discount.' : 'No discount.')
// console.log(discount);


/*
🎉No 23:
Books from a library
A library allows you to borrow a book if you have a library card and you have no overdue fines.
However, if you are a teacher, you can borrow books instantly ( even without a card or fines).
*/

// let isTeacher = false;
// let isStudent = true;
// let hasLibraryCard = true;
// let hasOverDue = false;
// if(isTeacher){
//     console.log('Please take your book. No need a library card.')
// }else if(isStudent){
//     if(hasLibraryCard && !hasOverDue){
//         console.log('Can borrow book.')
//     }else{
//         console.log('library card issue or over due.')
//     }
// }else{
//     console.log('Sorry! you are not a student / teacher.')
// }

// let borrowBook = isTeacher ? 'Please take your book. No need a library card.' : (isStudent ? ((hasLibraryCard && !hasOverDue) ? 'Can borrow book.' : 'Library card issue or over due.'): 'Sorry! you are not a student / teacher.');
// console.log(borrowBook);

/*
🎉No 24:
The gym premium zone
A gym has a private VIP lounge.
A member can enter if they have a premium membership and their account is active ( not suspended ).
However, any gym instructor or stuff can enter the lounge anytime automatically, even if they don’t have a membership.
Your stats: You are a regular member, your account is active and you are not a staff member.
*/

// let isStuff = false;
// let isRegularMember = false;
// let isAccountActive = true;
// let isVIPmember = false;

// if(isStuff){
//     console.log('Entry access ok. you are a stuff.')
// }else if(isAccountActive){
//     if(isVIPmember){
//         console.log('Access granted. VIP member.')
//     }else if(isRegularMember){
//         console.log('General Lounge granted.')
//     }else{
//         console.log('Check your membership.')
//     }
// }else{
//     console.log('Access denied. Account postponed.')
// }


// if(isStuff){
//     console.log('Entry access ok. you are a stuff.')
// }else if(!isAccountActive){
//     console.log('Access denied. Account postponed.')
// }else if(isVIPmember){
//     console.log('Access granted. VIP member.')
// }else if(isRegularMember){
//     console.log('General lounge granted.')
// }else{
//     console.log('Please check your membership.')
// }

// let gymEntry = isStuff ? 'Entry access ok. you are a stuff.' : ((!isAccountActive) ? 'Access denied. Account postponed.' : (isVIPmember ? 'Access granted' : (isRegularMember ? 'General lounge granted.' : 'Please check your membership.')))
// console.log(gymEntry);


/*
🎉No 25:
The car rental
A car rental company will rent you a car if you are over 21 years old and have a valid drivers license.
However, if you are an international tourist, you can bypass the age limit but you absolutely must have an international drivers license.
Your stats: You are 19 years old, you are an international tourist, and you have an international driver's license.
*/

// let isIntTourist = false;
// let hasDrivingLicense = false;
// let hasIntDrivingLicense = false;
// let ages = 29;

// if(isIntTourist && hasIntDrivingLicense){
//     console.log('Can rent car. no need to age limit.')
// }else if(hasDrivingLicense && ages > 21){
//     console.log('Can rent car.')
// }else{
//     console.log('Not allowed.')
// }

// let carRent = (isIntTourist && hasIntDrivingLicense) ? 'Can rent car. no need to age limit.' : ((hasDrivingLicense && ages > 21) ? 'Can rent a car.' : 'Not allowed.')
// console.log(carRent);


/*
🎉No 26:
The job interview shortlist
A company automatically invites an applicant for an interview if they have a recommendation letter from the CEO.
For regular applicants, they must have a computer science degree and at least 2 years experience to get shortlisted.
Your stats: You do not have a recommendation letter, you have a CS degree and you have 5 years of experience.
*/

// let hasRecommendCEO = false;
// let isRegularApplicant = true;
// let hasComputerScDegree = true;
// let hasExperience = 1;
// if(hasRecommendCEO){
//     console.log('You are shortlisted by CEO recommendation.')
// }else if(isRegularApplicant){
//     if(hasComputerScDegree && hasExperience > 2){
//         console.log('You are shortlisted candidate.')
//     }else{
//         console.log('You do not have a CS degree or 2 years plus experience.')
//     }
// }else{
//     console.log('You are not eligible for interview.')
// }

// let shortlisted = hasRecommendCEO ? 'You are shortlisted by CEO recommendation.' : ((isRegularApplicant) ? ((hasComputerScDegree && hasExperience > 2) ? 'You are shortlisted candidate.' : 'You do not have a CS degree or 2 years plus experience.'): 'You are not eligible for interview.');
// console.log(shortlisted);


/*
🎉No 27:
The automated warehouse drone
An automated shipping drone will launch to deliver a package if it has high priority tags.
For standard priority packages, the drone will only launch if the delivery distance is under 5 miles and the current weather status is clear.
*/

// let hasHighPriority = false;
// let hasStandardPriority = false;
// let distance = 6;
// let isClearSky = true;

// if(hasHighPriority){
//     console.log('Drone will launch at any distance.')
// }else if(hasStandardPriority){
//     if(distance <= 5 && isClearSky){
//         console.log('Drone will launch shipping.')
//     }else{
//         console.log('Long distance or bad sky.')
//     }
// }else{
//     console.log('Sorry! drone will not launch shipping.')
// }

// let droneLaunch = hasHighPriority ? 'Drone will launch at any distance.' : ((hasStandardPriority) ? ((distance <= 5 && isClearSky) ? 'Drone will launch shipping.' : 'Long distance or bad sky.') : 'Sorry! drone will not launch shipping.');
// console.log(droneLaunch);


/*
🎉No 28:
Credit card fraud alert
A bank’s security system automatically triggers a fraud alert if a transaction is flagged  as an international withdrawal.
For domestic transactions, an alert is triggered only if the transaction amount is over $500 and the user has never shopped at that store before.
*/

// let isIntTransaction = false;
// let isDomesticTransaction = true;
// let isAmount = 700;
// let hasNeverShopped = false;

// if(isIntTransaction){
//     console.log('Fraud alert. May be international hacker.')
// }else if(isDomesticTransaction){
//     if(isAmount > 500 && hasNeverShopped){
//         console.log('Fraud alert. May be domestic hacker.')
//     }else{
//         console.log('Safe transaction.')
//     }
// }else{
//     console.log('No access.')
// }


// let cashWithdraw = isIntTransaction ? 'Fraud alert. May be international hacker.' : ((isDomesticTransaction) ? ((isAmount > 500 && hasNeverShopped) ? 'Fraud alert. May be domestic hacker.' : 'Safe transaction.') : 'No access.');
// console.log(cashWithdraw);


/*
🎉No 29:
Flight boarding clearance
A passenger is allowed to board an airplane instantly if they have a first class ticket.
For economy passengers, they are allowed to board only if they have a valid passport and their carry-on luggage weights under 10kg.
*/

// let has1stClsTicket = false;
// let isEconmyPassenger = false;
// let hasValidPassport = true;
// let luggageWeight = 9;

// if(has1stClsTicket){
//     console.log('Board airplane without passport.')
// }else if(isEconmyPassenger){
//     if(hasValidPassport && luggageWeight <= 10){
//         console.log('Board airplane.')
//     }else{
//         console.log('Invalid passport or luggage weight over 10 kg.')
//     }
// }else{
//     console.log('No access.')
// }

// let boardingPlane = has1stClsTicket ? 'Board airplane without passport.' : ((isEconmyPassenger) ? ((hasValidPassport && luggageWeight <= 10) ? 'Board airplane.' : 'Invalid passport or luggage weight over 10 kg.'): 'No access.');
// console.log(boardingPlane);


/*
🎉No 30:
Autonomous car emergency braking
An autonomous car triggers its emergency brakes instantly if a Pedestrian is detected in its path.
For static obstacles ( like trash cans or cones ), the brakes are triggered only if the car’s current speed is over 30 mph and the road conditions are slippery.
*/

// let isPedestrianDetected = false;
// let isStaticObstacles = true;
// let currentSpeed = 23;
// let isRoadSlip = true;

// if(isPedestrianDetected){
//     console.log('Hydrolic brak need.')
// }else if(isStaticObstacles){
//     if(currentSpeed > 30 && isRoadSlip){
//         console.log('Hard brak need.')
//     }else{
//         console.log('No need to brak.')
//     }
// }else{
//     console.log('Ride on normal speed.')
// }

// let brak = isPedestrianDetected ? 'Hydrolic brak need.' : ((isStaticObstacles) ? ((currentSpeed > 30 && isRoadSlip) ? 'Hard brak need.' : 'No need to brak.') : 'Ride on normal speed.');
// console.log(brak);


/*
🎉No 31:
University scholarship qualification
A university automatically awards a full scholarship if the student is a valedictorian of their high school.
For all other students, they qualify only if they have an SAT score above 1450 and family income is below $40000.
*/

// let isValedictorian = false;
// let isRegularApplicant = true;
// let satScore = 1700;
// let familyIncome = 55000;

// if(isValedictorian){
//     console.log('Auto selected for scholarship.')
// }else if(isRegularApplicant){
//     if(satScore >= 1450 && familyIncome <= 40000){
//         console.log('Selected for scholarship.')
//     }else{
//         console.log('check SAT score or family income.')
//     }
// }else{
//     console.log('Not selected for scholarship.')
// }

// let getScholarship = isValedictorian ? 'Auto selected for scholarship.' : ((isRegularApplicant) ? ((satScore >= 1450 && familyIncome <= 40000) ? 'Selected for scholarship' : 'Check SAT score or family income.') : 'Not selected for scholarship.');
// console.log(getScholarship);


/*
🎉No 32: 
Movie ticket pricing system 
A theater decides ticket prices based on age and whether the customer is a student.
Outer condition: First check if the person is an adult ( age 18 or above ) or a child ( under 18 ).
Inner condition ( for adults ): If they are a student, the ticket is $10.
If they are not students, the ticket is $15.
Inner condition ( for children ): All children’s tickets are $5 ( no student check needed ).
*/

// let manAge = 27;
// let isStudent = false;
// if(manAge < 18){
//     console.log('Ticket price $5.')
// }else if(isStudent){
//     console.log('Ticket price 10$.')
// }else{
//     console.log('Ticket price 15$.')
// }

// let ticketPrice = manAge < 18 ? 'Ticket price $5.' : (isStudent ? 'Ticket price $10' : 'Ticket price $15.');
// console.log(ticketPrice);

/*
🎉No 33:
E-commerce premium shipping
An online shop calculates shipping costs based on the total order amount and VIP membership status.
Order conditions: First check if the order amount is $100 or more.
Inner condition ( for $100+ orders ): If the customer is a VIP, shipping is free.
If they are not VIPs, shipping costs $5.
Inner conditions ( for under 100 orders ): if they are a VIP shipping costs $10, otherwise shipping costs $20.
*/

// let isVIpCustomer = false;
// let orderAmount = 20;

// if(orderAmount >= 100){
//     if(isVIpCustomer){
//         console.log('Shipping cost $0.')
//     }else{
//         console.log('Shipping cost $5. ')
//     }
// }else if(isVIpCustomer){
//     console.log('Shipping cost $10')
// }else{
//     console.log('Shipping cost $20.')
// }

// let shippingCost = orderAmount >= 100 ? ((isVIpCustomer) ? 'Shipping cost $0.' : 'Shipping cost $5.') : ((isVIpCustomer) ? 'Shipping cost $10' : 'Shipping cost $20.');
// console.log(shippingCost);


/*
🎉No 34:
ATM cash withdrawal security
An ATM checks a bank account before dispensing cash.
Outer condition: First check if the entered PIN is correct. If it is wrong, print “Wrong Pin”.
Inner condition ( if pin is correct ); Check if the account has enough balance for the requested withdrawal amount.
If yes, print “cash dispensed”
If not, print “ Insufficient balance”.
*/

// let isPinCorrect = true;
// let cashAmount = 1500;

// if(isPinCorrect){
//     if(cashAmount > 1000){
//         console.log('Dispense your cash.')
//     }else{
//         console.log('Low balance.')
//     }
// }else{
//     console.log('incorrect pin.')
// }

// // guard

// if(!isPinCorrect){
//     console.log('incorrect pin')
// }else if(cashAmount > 1000){
//     console.log('Dispense your cash.')
// }else{
//     console.log('Low balance.')
// }

// let dispenseCash = isPinCorrect ? ((cashAmount > 1000) ? 'Dispense your cash.' : 'Low balance.') : 'incorrect pin.';
// console.log(dispenseCash);

// let cashDispense = !isPinCorrect ? 'incorrect pin' : ((cashAmount > 1000 ) ? 'Dispense your cash.' : 'Low balance.');
// console.log(cashDispense);


/*
🎉No 35:
Website admin panel access
A security portal controls access to a sensitive dashboard.
Outer condition: First check if the user is Logged in. If not, print “Please log in first”.
Inner condition ( if logged in ) : Check the user’s role.
If their role is “admin”, print “Welcome to admin dashboard”.
If their role is anything else, print “Access denied: Admins are allowed only”.
*/

// let isLoggedIn = true;
// let isAdmin = false;

// if(isLoggedIn){
//     if(isAdmin){
//         console.log('Welcome to Admin panel.')
//     }else{
//         console.log('Access denied. Only admins are allowed.')
//     }
// }else{
//     console.log('Please log in first.')
// }

// if(!isLoggedIn){
//     console.log('Please log in first.')
// }else if(isAdmin){
//     console.log('Welcome to admin panel.')
// }else{
//     console.log('Access denied. Only admins are allowed.')
// }

// let websiteLogin = isLoggedIn ? (isAdmin ? 'Welcome to admin panel.' : 'Access denied. Only admins are allowed.') : 'Please log in first.';
// console.log(websiteLogin);

// let webLogin = !isLoggedIn ? 'Please log in first.' :(isAdmin ? 'Welcome to admin panel.' : 'Access denied. Only admins are allowed.');
// console.log(webLogin);


/*
🎉No 36: 
Smart thermostat home climate control
A smart home system decides whether to turn on the AC or Heater based on temperature and humidity.
Outer condition: First check if the temperature is above 30 degrees.
Inner condition ( if above 30 ): If humidity is above 70%, print “Turn on AC ( high power)”. Otherwise print “Turn on AC (normal power)”.
Inner condition ( if below 30): print “ Turn on Heater”.
*/

// let temp = 32;
// let humidity = 70;

// if(temp >= 30){
//     if(humidity >= 70){
//         console.log('Turn on AC: High power.')
//     }else{
//         console.log('Turn on AC: Normal power.')
//     }
// }else{
//     console.log('Turn on Heater.')
// }

// if(temp < 30){
//     console.log('Turn on Heater.')
// }else if(humidity >= 70){
//     console.log('Turn on AC: High power.')
// }else{
//     console.log('Turn on AC: Normal power.')
// }

// let turnAcOrHeater = temp >= 30 ? (humidity >= 70 ? 'Turn on AC: high power.' : 'Turn on AC: Normal power.') : 'Turn on heater.';
// console.log(turnAcOrHeater)

// let acOrHeaterTurnOn = temp < 30 ? 'Turn on Heater.' : (humidity >= 70 ? 'Turn on AC: high power.' : 'Turn on AC: Normal power.');
// console.log(acOrHeaterTurnOn)


/*
🎉No 37:
Space rocket launch command
A space agency launches a rocket based on weather, mechanical readiness and countdown status.
Outer condition: First check if the weather is clear and the wind speed is under 20 mph.
If not, print “ Launch aborted: Bad weather.”
Inner condition: If the weather is good, check the mechanical system.
If isFuelFull is true and isEngineReady is true, print “Rocket launched successfully”. Otherwise print “ launched aborted, system failure”.
*/

// let isWeatherClear = true;
// let windSpeed = 19;
// let isFuelFull = true;
// let isEngineReady = true;

// if(isWeatherClear && windSpeed < 20){
//     if(isFuelFull && isEngineReady){
//         console.log('Rocket launched successfully.')
//     }else{
//         console.log('Launch aborted. System failure.')
//     }
// }else{
//     console.log('Launched aborted. Bad weather.')
// }

// if(!isWeatherClear || windSpeed > 20){
//     console.log('Launch aborted. Bad weather.')
// }else if(isFuelFull && isEngineReady){
//     console.log('Rocket launched successfully.')
// }else{
//     console.log('Launch aborted. System failure.')
// }

// let rocketLaunch = (isWeatherClear && windSpeed <= 20) ? ((isFuelFull && isEngineReady) ? 'Rocket launched successfully.' : 'Launch aborted. System failure.') : 'Launch aborted. Bad weather.';
// console.log(rocketLaunch);

// let launchRocket = (!isWeatherClear && windSpeed > 20) ? 'Launch aborted. Bad wether.' : ((isEngineReady && isFuelFull) ? 'Rocket launched successfully.' : 'Launch aborted. System failure.');
// console.log(launchRocket);


/*
🎉No 38:
E-sports tournament eligibility
A gaming tournament checks if a player can enter the Pro Division or the Amateur Division.
Outer condition: First check if the player’s age is 16 or older.
If they are under 16, print “ Too young to compete”.
Inner condition: If they are old enough, check their game rank score. If their score is above 2500 or they have a Pro license, print “ Welcome to Pro Division”. Otherwise, print “ Welcome to Amateur division”.
*/

// let playersAge = 10;
// let gameScore = 2600;
// let hasProLicense = true;

// if(playersAge >= 18){
//     if(gameScore >= 2500 && hasProLicense){
//         console.log('Welcome to Pro division.')
//     }else{
//         console.log('Welcome to Ametuer division.')
//     }
// }else{
//     console.log('Too young to compete.')
// }

// if(playersAge < 18){
//     console.log('Too young to compete.')
// }else if(gameScore >= 2500 & hasProLicense){
//     console.log('Welcome to Pro division.')
// }else{
//     console.log('Welcome to Ametuer division.')
// }

// let gameEntry = playersAge >= 18 ? ((gameScore >= 2500 && hasProLicense) ? 'Welcome to Pro division.' : 'Welcome to Ameteur division.') : 'Too young to compete.';
// console.log(gameEntry);


/*
🎉No 39:
Hospital emergency room triage
An automated hospital system prioritizes patients when they arrive at the emergency room.
Outer condition: First check, if the patient has a Life - Threatening emergency ( isCritical === true ), if true, print “ Admit immediately to ICU”.
Inner condition: If they are not critical, check their fever temperature.
If the temperature is above 38 degrees ( 100.4 F ) and they have a cough, print “ Direct to fever clinic”.
Otherwise print, “ Please wait in the regular waiting room”.
*/

let isCritical = true;
let temprature = 37;
let hasCough = true;

if(isCritical){
    console.log('Admit immediately to ICU.')
}else if(temprature > 36 && hasCough){
    console.log('Admit to fever unit.')
}else{
    console.log('Please wait in the regular waiting room, take primary treatment.')
}

let admitHospital = isCritical ? 'Admit immidiately to ICU.' : ((temprature > 36 && hasCough) ? 'Admit to fever unit.' : 'Please wait in the regular waiting room, take primary treatment.');
console.log(admitHospital);