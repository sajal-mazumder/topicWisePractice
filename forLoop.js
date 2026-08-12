// console.log('for loop')


// 01

// let sum = 0;
// for( let i = 0; i <= 10; i++){
//     // console.log(i);
//     // console.log(sum + ' + ' + i + ' = ' + (sum + i))
//     sum += i;
// }
// console.log(sum);  // when comment inner console than sum prints for one time.

// 02

// for( let i = 10; i >= 1; i--){
//     console.log(i);
// }


// 03

/*
 Imagine you are building a system for a gym. Only people who are 18 years or older can enter. Let's look at how we can use a loop to check multiple ages automatically:
*/

// let age = 15;

// for( let i = 0; i < age; i++){
//     if (age >= 18) {
//         console.log('Open gym for you.')
//     }else{
//         console.log('Access denied. Too young for gym.')
//     }
    
// }

// result stored in a variable.

// let result = '';

// for (let age = 15; age <= 20; age++) {
//     if (age >= 18) {
//         result += 'age' + age + ': Access Granted! ✅\n'
//     } else {
//         result += 'age' + age + ': Access Denied! ❌ too young.\n'
//     }
// }
// console.log(result);

// easy lebel for loop question

/*
NO 01: Print 1 to 10: Write a program to display the first 10 natural numbers (1, 2, 3... 10)
*/

// let iResult = '';

// for( let i = 1; i <= 10; i++){
//     // console.log( i + ' ) ' + ' number is' + ' = ' + i + '\n' );
//     iResult += i + ' ) ' + ' number is' + ' = ' + i + '\n';
// }
// console.log(iResult);

/*
No 2: Even Numbers only: Write a loop that prints only the even numbers from 2 to 20 
*/

// let evenNum = '';

// for( let i = 2; i <= 20; i++){
//     // if (i % 2 === 0) {
//     //     evenNum += 'Even number is ' + ' = ' + i + '\n';
//     // }
//     if ( i % 2 !== 1)  {
//         evenNum += 'Even number is ' + ' = ' + i + '\n';
//     }
// }
// console.log(evenNum);

/*
No 3: Count Down: Create a countdown loop that starts from 10 and prints each number until it reaches 1
*/

// let decrease = '';
// for( let i = 10; i >=1; i--){
//     // console.log(i);
//     decrease += i + ' ) ' + 'decrease is ' + ' = ' + i + '\n';
// }
// console.log(decrease);

/*
No 4: Multiplication Table: Pick a number (like 5) and print its multiplication table up to 10 (e.g., 5, 10, 15... 50)
*/

// let num = 5;
// let result = '';
// for( let i = 0; i <= 10; i++){
//     result += i + ' ) ' + 'Result is ' + ' = ' + ( i * num) + '\n';
// }
// console.log(result);

/*
No 5: Sum of Numbers: Calculate the total sum of all numbers from 1 to 10 and print only the final result
*/

// let sum = 0;
// for( let i = 1; i <= 10; i++){
//     sum += i;
// }
// console.log('Sum is ' + ' = ' + sum);

/*
No 6: Skip a Number: Write a loop that prints numbers from 1 to 10, but skips the number 5 using a continue statement
*/

// let skipResult = '';
// let serials = 1;

// for( let i = 1; i <= 10; i++){
//     if (i == 5) {
//         continue;
//     }
//     // console.log(i);
//     skipResult += serials + ' ) ' + 'Skip 5 result is ' + ' = ' + i + '\n';
//     serials++;
// }
// console.log(skipResult);

/*
No 7: Reverse Count by 2: Write a loop that starts at 20 and counts down to 0, decreasing by 2 each time (20, 18, 16... 0)
*/

// let decreaseResult = '';
// let serial = 1;

// for( let i = 20; i >= 0; i -= 2){
//     // console.log(i)
//     decreaseResult += serial + ' ) ' + 'Decrease result is ' + ' = ' + i + '\n';
//     serial++;
// }
// console.log(decreaseResult);


/*
No 8: Square of Numbers: Print the square of each number from 1 to 5 (e.g., 1, 4, 9, 16, 25)
*/

// let sqrResult = '';
// let sqrSerial = 1;
// let cubeResult = ''

// for( let i = 1; i <= 5; i++){
//     // console.log(i * i);
//     sqrResult += sqrSerial + ' ) ' + ' Square Result of ' + i + ' is  = ' + (i*i) + '\n';

//     cubeResult += sqrSerial + ' ) ' + 'Cube result of' + i + ' is = ' + (i*i*i) + '\n';
//     sqrSerial++;
// }
// console.log(sqrResult, cubeResult);


/*
Array Iteration: Given an array of fruits ['apple', 'banana', 'cherry'], use a for loop to print each fruit's name
*/

// let fruitArr = ['apple', 'banana', 'cherry'];
// let arrResult = '';
// let arrSerial = 1;
// for( let i = 0; i < fruitArr.length; i++){
//     // console.log(fruitArr[i]);
//     arrResult += arrSerial + ' ) ' + 'Result of Fruit array is ' + ' = ' + fruitArr[i] + '\n';
//     arrSerial++;
// }
// console.log(arrResult);