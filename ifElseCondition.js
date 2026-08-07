

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

// let isBlocked = true;
// let isTrustedDevice = false;
// let isCorrectOTP = false;

// if (!isBlocked) {
//     if (isTrustedDevice || isCorrectOTP) {
//         console.log('log into app.')
//     }else{
//         console.log('wrong OTP or not trusted device.')
//     }
// }else{
//     console.log('sorry! you are blocked.')
// }

// ternary

// let logInApp = (!isBlocked) ? ((isTrustedDevice || isCorrectOTP) ? 'log in to app.' : 'wrong otp or unknown device.') : 'you are blocked.';
// console.log(logInApp);


/*
🎉No 16:
Free Shipping
An e-commerce website offers free shipping if the total order cost is greater than $50 AND the customer is a resident of the same city (Local).
Alternatively, if the customer is a Premium Member, they will receive free shipping regardless of the order cost. 
*/

// let orderCost = 60;  // $60
// let isLocal = false;
// let isPremiumMember = false;

// if (isPremiumMember) {
//     console.log('order cost 0tk.')
// }else if (orderCost > 50 && isLocal) {
//     console.log('order cost 0taka.')
// }else{
//     console.log('order cost 10$.')
// }

// ternary

// let shippingFee = (isPremiumMember) ? 'order cost 0$' : (orderCost > 50 && isLocal) ? 'order cost 0taka': 'order cost 10$';
// console.log(shippingFee);


/*
🎉No 17:
Blood Donation Eligibility
To donate blood, the age must be between 18 and 60 years AND the weight must be greater than 50 kg and last blood donation above 3 months.
However, if a tattoo has been gotten within the last 9 months, blood donation is not allowed. 
*/

// let age = 45;
// let weight = 55; 
// let lastBloodDonate = 4;
// let hasTattoo = 14; // less than 9 months

// if (hasTattoo > 9) {
//     if (age >= 18 && age <= 60) {
//         if (weight >= 50) {
//             if (lastBloodDonate > 3) {
//                 console.log('congratulations! can donate your blood.')
//             }else{
//                 console.log('your last blood donation is less than 3 months.')
//             }
//         }else{
//             console.log('you are under weight.')
//         }
//     }else{
//         console.log('your age is not 18 - 60')
//     }
// }else{
//     console.log('sorry! you have a tattoo less than 9 months.')
// }

// clean code using guard clause

// if (hasTattoo <=9) {
//     console.log('sorry you have a tattoo within 9 months.')
// }else if (age < 18 || age > 60) {
//     console.log('you must be 18 - 60.')
// }else if (weight < 50) {
//     console.log('you are under weight.')
// }else if (lastBloodDonate < 3) {
//     console.log('your last blood donate is less than 3 months.')
// }else{
//     console.log('congratulations. you can donate blood.')
// }


/*
🎉No 18:
ATM Withdrawal
To withdraw money from an ATM booth, the user must provide the correct PIN.
Next, the booth must have enough cash.
However, if the user is a VIP account holder, the bank will provide the money from another fund even if the booth's cash is low (meaning there is no need to check the booth's cash). 
*/

// let correctPin = true;
// let haveEnoughCash = false;
// let isVIP = true;

// if (correctPin) {
//     if (haveEnoughCash) {
//         console.log('withdraw your cash.')
//     }else if (isVIP) {
//         console.log('please withdraw your cash.')
//     }else{
//         console.log('not enough cash.')
//     }
// }else{
//     console.log('incorrect pin.')
// }

// guard clause

// if (!correctPin) {
//     console.log('Oops! incorrect pin.')
// }else if (haveEnoughCash) {
//     console.log('withdraw your cash.')
// }else if (isVIP) {
//     console.log('please cash your taka.')
// }else{
//     console.log('have not enough cash.')
// }


/*
🎉No 19:
Movie Ticket Pricing
The ticket price at a movie theater will be free ($0) if the viewer is a child aged 5 or under (Age <= 5) OR a military member.
However, if a "Special Screening" or premier show is running in the theater, ticket purchase is mandatory for everyone (no one gets it for free). 
*/

// let isChild = false; // <5
// let isMilitaryMember = false;
// let isPremiurShow = false;

// if (isPremiurShow) {
//     console.log('ticket price $5.')
// }else if (isChild || isMilitaryMember) {
//     console.log('ticket price 0$.')
// }else{
//     console.log('ticket 5$.')
// }

// ternary

// let ticketPrice = (isPremiurShow) ? 'ticket price $5.' : (isChild || isMilitaryMember) ? 'ticket price 0$.' : 'ticket 5$.';
// console.log(ticketPrice);


/*
🎉No 20:
Credit Card Approval
A bank will issue you a credit card if your monthly income is greater than 50,000 TK AND your credit score is above 700.
However, if you have an active loan defaulter record with the bank, you will not be allowed to get a card under any circumstances. 
*/

// let haveActiveLoan = false;
// let monthlyIncome = 70000;
// let creditScore = 600;

// if (!haveActiveLoan) {
//     if (monthlyIncome > 50000 && creditScore > 700) {
//         console.log('can issue credit card.')
//     }else{
//         console.log('check monthly income range or credit score.')
//     }
// }else{
//     console.log('you have an active loan. can not issue card anyway.')
// }

// ternary

// let issueCard = (!haveActiveLoan) ? ((monthlyIncome > 50000 && creditScore > 700) ? 'can issue credit card.' : 'check monthly income range or credit score.') : 'you have an active loan. can not issue card anyway.';
// console.log(issueCard);


/*
🎉No 21:
Flight Boarding Eligibility
A passenger can board the plane if they have a valid passport AND a boarding pass.
However, if they are an enforcement officer (such as police/security personnel) on active duty, they can board the plane with just a passport, without needing a boarding pass. 
*/

// let hasValidPassport = true;
// let isEnforcementOfficer = false;
// let hasBoardingPass = true;

// if (hasValidPassport) {
//     if (isEnforcementOfficer) {
//         console.log('can boarding plane without boarding pass.')
//     }else if (hasBoardingPass) {
//         console.log('can boarding plane with your passport and boarding pass.')
//     }else{
//         console.log('please collect your boarding pass.')
//     }
// }else{
//     console.log('can not boarding plane. you do not have valid passport.')
// }

// guard clause

// if (!hasValidPassport) {
//     console.log('can not boarding plane. you do not have valid passport.')
// }else if (isEnforcementOfficer) {
//     console.log('can boarding plane without boarding pass.')
// }else if (hasBoardingPass) {
//     console.log('can boarding plane with your passport and boarding pass.')
// }else{
//     console.log('please collect boarding pass.')
// }



/*
🎉No 22:
E-commerce Combo Offer
A shop will give you a discount if you buy at least 3 items OR if your total bill is greater than 5,000 TK.
However, if your cart contains any "Clearance Sale" items, this offer will not be applicable (meaning you will not receive any discount). 
*/

// let itemsBuy = 2;
// let totalBill = 2000;
// let isClearenceSale = false;

// if (isClearenceSale) {
//     console.log('No discount applicable.')
// }else if (itemsBuy > 3 || totalBill > 5000) {
//     console.log('You will get 10% discount on your cart.')
// }else{
//     console.log('No discount available.')
// }

// ternary

// let discountGet = (isClearenceSale) ? 'No discount applicable.' : ((itemsBuy > 3 || totalBill > 5000) ? 'You will get 10% discount on your cart.' : 'No discount available.');
// console.log(discountGet);


/*
🎉No 23:
Books from a library
A library allows you to borrow a book if you have a library card and you have no overdue fines.
However, if you are a teacher, you can borrow books instantly ( even without a card or fines).
*/

// let isTeacher = false;
// let hasLibraryCard = true;
// let hasOverDue = false;

// if (isTeacher) {
//     console.log('You can borrow book without card.')
// }else if (!hasLibraryCard) {
//     console.log('Please entry your valid library card.')
// }else if (hasOverDue) {
//     console.log('Please pay your due.')
// }
// else{
//     console.log('You can borrow book from library for 7 days.')
// }

// ternary

// let canBorrowBook = (isTeacher) ? 'You can borrow book without card.' : ((!hasLibraryCard) ? 'Please entry your valid library card.' : ((hasOverDue) ? 'Please pay your due.' : 'You can borrow book from library for 7 days.'));
// console.log(canBorrowBook);


/*
🎉No 24:
The gym premium zone
A gym has a private VIP lounge.
A member can enter if they have a premium membership and their account is active ( not suspended ).
However, any gym instructor or stuff can enter the lounge anytime automatically, even if they don’t have a membership.
Your stats: You are a regular member, your account is active and you are not a staff member.
*/

// let isStaff = false;
// let isAccountActive = true;
// let isPremiumMember = false;
// let isRegularMember = false;

// if (isStaff) {
//     console.log('You are an honorable stuff. please enter VIP lounge.')   
// }else if (isAccountActive) {
//     if (isPremiumMember) {
//         console.log('You are a VIP member. VIP lounge allowed.')
//     }else if (isRegularMember) {
//         console.log('You are a regular member. VIP lounge not allowed.')
//     }else{
//         console.log('Access Denied. Your membership tier does not have VIP lounge access.')
//     }
// }
// else{
//     console.log('Sorry! Your account is inactive.')
// }

// ternary

// let loungePass = (isStaff) ? 'You are an honorable stuff. please enter VIP lounge' : (((isAccountActive) ? (isPremiumMember) ? 'You are a VIP member. VIP lounge allowed.' : ((isRegularMember) ? 'You are a regular member. VIP lounge not allowed.' : 'Access denied. Your membership tier does not have VIP lounge access.') : 'Sorry! Your account is inactive.' ));
// console.log(loungePass);

// guard clause

// if (isStaff) {
//     console.log('You are an honorable instructor. allowed VIP lounge.')
// }else if (!isAccountActive) {
//     console.log('Sorry! Your account is inactive.')
// }else if (isPremiumMember) {
//     console.log('You are a VIP member. VIP lounge allowed.')
// }else if (isRegularMember) {
//     console.log('You are a regular member. VIP lounge not allowed.')
// }else{
//     console.log('Access Denied. Your membership tier does not have VIP lounge access.')
// }


/*
🎉No 25:
The car rental
A car rental company will rent you a car if you are over 21 years old and have a valid drivers license.
However, if you are an international tourist, you can bypass the age limit but you absolutely must have an international drivers license.
Your stats: You are 19 years old, you are an international tourist, and you have an international driver's license.
*/

// let age = 19;
// let hasDriverLicense = false;
// let isIntTourist = false;
// let hasIntDriverLicense = false;

// if (isIntTourist) {
//     if (hasIntDriverLicense) {
//         console.log('Can rent a BMW car.')
//     }else{
//         console.log('You do not have an International Driving License.')
//     }
// }else if (age > 21) {
//     if (hasDriverLicense) {
//         console.log('Can rent Toyota car.')
//     }else{
//         console.log('You do not have a Driving License.')
//     }
// }else{
//     console.log('You are under age 21.')
// }

// ternary

// let rentCar = (isIntTourist) ? 
// ((hasIntDriverLicense) ? 'Can rent a BMW car.': 'You do not have an Intenational Driving License.')
// : ((age > 21) ? 
//     ((hasDriverLicense) ? 'Can rent a Toyota car.' : 'You do not have a Driving License.')
//      : 'You are under age 21.');
// console.log(rentCar);


/*
🎉No 26:
The job interview shortlist
A company automatically invites an applicant for an interview if they have a recommendation letter from the CEO.
For regular applicants, they must have a computer science degree and at least 2 years experience to get shortlisted.
Your stats: You do not have a recommendation letter, you have a CS degree and you have 5 years of experience.
*/

// let hasRecommendCEO = false;
// let isRegular = true;
// let hasComputerScDegree = false;
// let hasExperience = 1;

// if (hasRecommendCEO) {
//     console.log('You are shortlisted for interview by the recommendation of honorable CEO.')
// }else if (isRegular) {
//     if (hasComputerScDegree && hasExperience >= 2) {
//         console.log('You are shortlisted for interview. Please submit your valid papers.')
//     }else{
//         console.log('Sorry! You do not have computer science degree or job experience more than 2 years.')
//     }
// }else{
//     console.log('You are not a candidate at all.')
// }

// ternary

// let jobInterview = (hasRecommendCEO) ? 
// 'You are shortlisted for interview by the recommendation of honorable CEO.' 
//     : ((isRegular) ? ((hasComputerScDegree && hasExperience >= 2) 
//         ? 'You are shortlisted for interview. Please submit your valid papers.' 
//             : 'Sorry! You do not have computer science degree or job experience more than 2 years.') 
//                 : 'You are not a candidate at all.');
// console.log(jobInterview);


/*
🎉No 27:
The automated warehouse drone
An automated shipping drone will launch to deliver a package if it has high priority tags.
For standard priority packages, the drone will only launch if the delivery distance is under 5 miles and the current weather status is clear.
*/

// let isHighPriority = false;
// let isStandardPriority = false;
// let distance = 3;
// let isWeatherClear = false;

// if (isHighPriority) {
//     console.log('Drone will Launch any distance.')
// }else if (isStandardPriority) {
//     if (distance <= 5 && isWeatherClear) {
//         console.log('Drone will Launch.')
//     }else{
//         console.log('Distance is more than 5 miles or weather is bad.')
//     }
// }else{
//     console.log('Has no priority. Drone will not launch.')
// }

// ternary

// let droneLaunch = (isHighPriority) ? 
// 'Drone will launch any distance.' 
//     : (((isStandardPriority) ? ((distance <= 5 && isWeatherClear) ? 'Drone will launch.' 
//         : 'Distance is more than 5 miles or weather is bad.') 
//             : 'Has no priority. Drone will not launch.'));
// console.log(droneLaunch);



/*
🎉No 28:
Credit card fraud alert
A bank’s security system automatically triggers a fraud alert if a transaction is flagged  as an international withdrawal.
For domestic transactions, an alert is triggered only if the transaction amount is over $500 and the user has never shopped at that store before.
*/

// let isInternationalWithdraw = false;
// let transactionAmount = 600;
// let  hasNeverShopped = false;

// if (isInternationalWithdraw) {
//     console.log('Fraud Alert Triggered: International withdrawal detected. Transaction blocked.')
// }else if (transactionAmount > 500 && hasNeverShopped) {
//     console.log('Fraud Alert Triggered: High-value domestic transaction at an unfamiliar store.')
// }else{
//     console.log('Transaction Successful! Welcome to our secure banking partner.')
// }

// let fraudTrigger = (isInternationalWithdraw) 
// ? 'Fraud Alert Triggered:- International withdrawal detected. Transaction blocked.'
//     : ((transactionAmount > 500 && hasNeverShopped) ? 'Fraud Alert Triggered:- High-value domestic          transaction at an unfamiliar store.' 
//         : 'Transaction Successful! Welcome to our secure banking partner.');
// console.log(fraudTrigger);


/*
🎉No 29:
Flight boarding clearance
A passenger is allowed to board an airplane instantly if they have a first class ticket.
For economy passengers, they are allowed to board only if they have a valid passport and their carry-on luggage weights under 10kg.
*/

// let hasFirstClassTicket = false;
// let isEconmyPassenger = false;
// let hasValidPassport = false;
// let luggageWeight = 9;

// if (hasFirstClassTicket) {
//     console.log('You are a First Class Passenger. Boarding allowed instantly.')
// }else if (isEconmyPassenger) {
//     if (hasValidPassport && luggageWeight < 10) {
//         console.log('You are a economy class passenger. Boarding allowed.')
//     }else{
//         console.log('Invalid Passport or luggage weight more than 10 kg.')
//     }
// }else{
//     console.log('You are not eligible for boarding plane anyhow.')
// }

// let boardingPlane = (hasFirstClassTicket) 
// ? 'You are a First Class Passenger. Boarding allowed instantly.' 
//     : ((isEconmyPassenger) ? ((hasValidPassport && luggageWeight < 10) ? 'You are a economy class passenger. Boarding allowed.' 
//         : 'Invalid Passport or luggage weight more than 10 kg.') 
//             : 'You are not eligible for boarding plane anyhow.');
// console.log(boardingPlane);


/*
🎉No 30:
Autonomous car emergency braking
An autonomous car triggers its emergency brakes instantly if a Pedestrian is detected in its path.
For static obstacles ( like trash cans or cones ), the brakes are triggered only if the car’s current speed is over 30 mph and the road conditions are slippery.
*/

// let isPedestrianDetected = false;
// let isTrashCans = false;
// let currentSpeed = 20;
// let roadCondition = 'slipperyNot';

// if (isPedestrianDetected) {
//     console.log('Brake car instantly. Wait for pedestrian cross the road.')
// }else if (isTrashCans) {
//     if (currentSpeed > 30 && roadCondition === 'slippery') {
//         console.log('Brake car for road bad situation.')
//     }else{
//         console.log('No need to brake. Speed below 30 mph or road is not slippery.')
//     }
// }else{
//     console.log('Keep on running car. Road condition is good.')
// }

// ternary

// let carRunning = (isPedestrianDetected) 
// ? 'Brake car instantly. Wait for pedestrian cross the road.' 
//     : ((isTrashCans) ? ((currentSpeed > 30 && roadCondition === 'slippery') ? 'Brake car for road bad situation.' 
//         : 'No need to brake. Speed below 30 mph or road is not slippery.') 
//             : 'Keep on running car. Road condition is good.');
// console.log(carRunning);


/*
🎉No 31:
University scholarship qualification
A university automatically awards a full scholarship if the student is a valedictorian of their high school.
For all other students, they qualify only if they have an SAT score above 1450 and family income is below $40000.
*/

// let isValedictorian = false;
// let satScore = 1500;
// let familyIncome = 25000;

// if (isValedictorian) {
//     console.log('Congrates! You are automatically selected for Scholarship.')
// }else if (satScore > 1450 && familyIncome < 30000) {
//     console.log('You are selected for our Scholarship.')
// }else {
//     console.log('Not eligible for Scholarship. Your sat score is less than 1450 or family income more than $30000')
// }

// ternary

// let scholarship = (isValedictorian) 
// ? 'Congrates! You are automatically selected for Scholarship.' 
//     : ((satScore > 1450 && familyIncome < 30000) ? 'You are selected for our Scholarship.' 
//         : 'Not eligible for Scholarship. Your sat score is less than 1450 or family income more than $30000');
// console.log(scholarship);

/*

🎉No 32: 
Movie ticket pricing system 
A theater decides ticket prices based on age and whether the customer is a student.
Outer condition: First check if the person is an adult ( age 18 or above ) or a child ( under 18 ).
Inner condition ( for adults ): If they are a student, the ticket is $10.
If they are not students, the ticket is $15.
Inner condition ( for children ): All children’s tickets are $5 ( no student check needed ).
*/

// let age = 10;
// let isStudent = false;

// if (age < 18) {
//     console.log('Ticket price $5.')
// }else if (isStudent) {
//     console.log('Ticket price $10.')
// }else{
//     console.log('Ticket price $15.')
// }

// ternary

// let ticketPrice = (age < 18) ? 'Ticket price $5.' : (isStudent ? 'Ticket price $10.' : 'Ticket price $15.');
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

// let orderAmount = 20;
// let isVIP = false;

// if (orderAmount >= 100) {
//     if (isVIP) {
//         console.log('You are a VIP customer. Shipping charge free, You ordered more than 100$.')
//     }else{
//         console.log('You are not a VIP customer and ordered more than 100$. Shipping charge $5.')
//     }
// }else{
//     if (isVIP) {
//         console.log('You are a VIP customer and ordered less than 100$. Shipping charge $10.')
//     }else{
//         console.log('You are not VIP customer and ordered less than 100$. Shipping charge 20$.')
//     }
// }

// ternary

// let shippingCharge = (orderAmount >=100) 
// ? ((isVIP) ? 'You are a VIP customer. Shipping charge free, You ordered more than 100$.' 
//     :  'You are not a VIP customer and ordered more than 100$. Shipping charge $5.') 
//         : ((isVIP) ? 'You are a VIP customer and ordered less than 100$. Shipping charge $10.' 
//             : 'You are not VIP customer and ordered less than 100$. Shipping charge 20$.');
// console.log(shippingCharge);


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
// let withdrawalBalance = 1000;
// let accountBalance = 5000;

// if (!isPinCorrect) {
//     console.log('Sorry! Incorrect pin. Try again.')
// }else if (accountBalance >= withdrawalBalance) {
//     console.log('Cash dispensed.')
// }else{
//     console.log('Insufficient balance.')
// }

// ternary

// let cashDispense = (!isPinCorrect) 
// ? 'Sorry! Incorrect pin. Try again.' 
//     : ((accountBalance >= withdrawalBalance) ? 'Cash dispensed.' 
//         : 'Insufficient balance.');
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

// let isLoggedIn = false;
// let isAdmin = false;

// if (!isLoggedIn) {
//     console.log('Please log in first.')
// }else if (isAdmin) {
//     console.log('Welcome to admin dashboard.')
// }else{
//     console.log('Access denied: Admins are allowed only.')
// }

// ternary

// let adminDashboard = (!isLoggedIn) 
// ? 'Please log in first.' 
//     : ((isAdmin) ? 'Welcome to admin dashboard.' 
//         : 'Access denied. Admin are allowed only.');
// console.log(adminDashboard);


/*
🎉No 36: 
Smart thermostat home climate control
A smart home system decides whether to turn on the AC or Heater based on temperature and humidity.
Outer condition: First check if the temperature is above 30 degrees.
Inner condition ( if above 30 ): If humidity is above 70%, print “Turn on AC ( high power)”. Otherwise print “Turn on AC (normal power)”.
Inner condition ( if below 30): print “ Turn on Heater”.
*/

// let temperature = 24; // 30 degree
// let humidity = 55; // above 70%

// if (temperature > 30) {
//     if (humidity > 70) {
//         console.log('Turn on AC. High power.')
//     }else{
//         console.log('Turn on AC. Normal power.')
//     }
// }else{
//     console.log('Turn on Heater.')
// }

// ternary

// let turnAc = (temperature > 30) 
// ? ((humidity > 70) ? 'Turn on AC. High power.' 
//     : 'Turn on AC. Normal power.') 
//         : 'Turn on Heater.';
// console.log(turnAc);


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
// let windSpeed = 25;  // < 20mph
// let isFuelFull = true;
// let isEngineReady = true;

// if (isWeatherClear && windSpeed < 20) {
//     if (isFuelFull && isEngineReady) {
//         console.log('Rocket launched successfully.')
//     }else{
//         console.log('Launch aborted. System failured.')
//     }
// }else{
//     console.log('Launch aborted: Bad wether.')
// }

// guard

// if (!isWeatherClear || windSpeed >= 20) {
//     console.log('Launch aborted: Bad wether.')
// }else if (isFuelFull && isEngineReady) {
//     console.log('Rocket launched successfully.')
// }else{
//     console.log('Launch aborted. System failured.')
// }

// ternary 

// let rocketLaunch = (!isWeatherClear || windSpeed >= 20) 
// ? 'Launch aborted: Bad wether.' 
//     : ((isFuelFull && isEngineReady) ? 'Rocket launched successfully. ' 
//         : 'Launch aborted. System failured.');
// console.log(rocketLaunch);


/*
🎉No 38:
E-sports tournament eligibility
A gaming tournament checks if a player can enter the Pro Division or the Amateur Division.
Outer condition: First check if the player’s age is 16 or older.
If they are under 16, print “ Too young to compete”.
Inner condition: If they are old enough, check their game rank score. If their score is above 2500 or they have a Pro license, print “ Welcome to Pro Division”. Otherwise, print “ Welcome to Amateur division”.
*/


// let playersAge = 20;
// let gameScore = 2400;
// let hasProLicense = false;

// if (playersAge < 16) {
//     console.log('Too young to compete.')
// }else if (gameScore > 2500 || hasProLicense) {
//     console.log('Welcome to Pro Division.')
// }else{
//     console.log('Welcome to Amateur Division.')
// }

// ternary

// let tournamentEligible = (playersAge < 16) 
// ? 'Too young to compete.' 
//     : ((gameScore > 2500 || hasProLicense) ? 'Welcome to Pro Division.' 
//         : 'Welcome to Amateur Division.');
// console.log(tournamentEligible);


/*
🎉No 39:
Hospital emergency room triage
An automated hospital system prioritizes patients when they arrive at the emergency room.
Outer condition: First check, if the patient has a Life - Threatening emergency ( isCritical === true ), if true, print “ Admit immediately to ICU”.
Inner condition: If they are not critical, check their fever temperature.
If the temperature is above 38 degrees ( 100.4 F ) and they have a cough, print “ Direct to fever clinic”.
Otherwise print, “ Please wait in the regular waiting room”.
*/

// let isCritical = false;
// let feverTemp = 37;
// let hasCough = true;

// if (isCritical) {
//     console.log('Admit immediately to ICU.')
// }else if (feverTemp > 38 && hasCough) {
//     console.log('Refer to fever clinic.')
// }else{
//     console.log('Please wait in the regular waiting room and take primary treatment.')
// }

// ternary

// let admitHospital = (isCritical) 
// ? 'Admit immediately to ICU.' 
//     : ((feverTemp > 38 && hasCough) ? 'Refer to fever clinic.' 
//         : 'Please wait in the regular waiting room and take primary treatement.');
// console.log(admitHospital);


/*
🎉No 40: My own created problems
BCS application eligibility
For BCS exam application an examiner must be Bangladeshi and age less than 30 years old.
For special quota age consider upto 32.
The examiner must complete honors 4th year exam in the circulation given last date of application.
No 3rd class result accepted in the education ssc, hsc.
*/

let isBangladeshi = true;
let applicantAge = 30;
let hasQuata = false;
let maxAge = hasQuata ? 32: 30;
let hasCompleteHonors4ht = true;
let sscResult = 1;  // No 3rd class allowed (GPA below 2.0)
let hscResult = 2;  // No 3rd class allowed (GPA below 2.0)

if (isBangladeshi) {
    if (applicantAge <= maxAge) {
        if (hasCompleteHonors4ht) {
            if (sscResult >= 2 && hscResult >= 2) {
                console.log('Congratulations! You are eligible for BCS exam.')
            }else{
                console.log('No 3rd class accepted in ssc and hsc result.')
            }
        }else{
            console.log('You do not completed honors 4th year in application deadline.')
        }
    }else{
        console.log('Exceeded maximum age limit.')
    }
}else{
    console.log('Sorry! You are not a Bangladeshi. Not allowed for BCS exam.')
}


// guard

if (!isBangladeshi) {
    console.log('Sorry! You are not a Bangladeshi. Not allowed for BCS exam.')
}else if (applicantAge > maxAge) {
    console.log('Exceeded age limit.')
}else if (!hasCompleteHonors4ht) {
    console.log('You do not completed honors 4th year in application deadline.')
}else if (sscResult < 2 || hscResult < 2) {
    console.log('No 3rd class accepted in ssc and hsc result.')
}else{
    console.log('Congratulations! You are eligible for BCS exam.')
}