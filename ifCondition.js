

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

let pass = 'as%ll3'
let hasNumber = /\d/.test(pass)
let hasCharacter = /[A-Za-z0-9]/.test(pass);
if(pass.length < 8){
    console.log('too short')
}else if( hasNumber && hasCharacter){
    console.log('strong password.')
}else{
    console.log('week password.')
}

let password = (pass.length < 8) ? 'too short' : ((hasCharacter && hasNumber) ? 'strong' : 'week');
console.log(password)