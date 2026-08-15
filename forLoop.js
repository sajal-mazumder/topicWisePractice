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
    // console.log( i + ' ) ' + ' number is' + ' = ' + i + '\n' );
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
No 9: Array Iteration: Given an array of fruits ['apple', 'banana', 'cherry'], use a for loop to print each fruit's name
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


/*
No 10: Odd Positions: Create a loop that prints numbers from 1 to 15, but only displays those that are at odd positions (1, 3, 5... 15)
*/

// let oddNum = '';
// let oddSerial = 1;
// for( let i = 1; i <= 15; i++){
//     if (i % 2 === 1) {
//         // console.log(i)
//         oddNum += oddSerial + ' ) ' + 'Odd number is ' + ' = ' + i + '\n';
//         oddSerial++;
//     }
// }
// console.log(oddNum);


/*
The Even Skipper
Print all even numbers from 2 to 20, but skip the number 12.
*/

// let evenSkip = '';
// let serialEven = 1;

// for( let i = 0; i <= 20; i++){
//     if (i % 2 === 0) {
//         // console.log(i)
//         if (i === 12) {
//             continue;
//         }
//         // console.log(i)
//         evenSkip += serialEven + ' ) skip 12 number is' + ' = ' + i + '\n';
//         serialEven++;
//     }
// }
// console.log(evenSkip)


/*
The Countdown Rocket
Count down from 10 to 1 and then print the word "Blastoff!" at the very end.
*/

// for( let i = 10; i >= 1; i--){
   
//     console.log(i)
// }
// console.log('Blastoff!')


/*
Multiplication Table
Take a number (e.g., 5) and print its multiplication table up to 10 (e.g., 5 × 1 = 5, 5 × 2 = 10, etc.)
*/

// let num = 5;
// for( let i = 1; i <= 10; i++){
//     // console.log(num * i)
//     console.log(`${num} x ${i} = ${num * i}`);
// }


/*
Character Spaced Out
Take a fixed string word (like "HELLO") and print each letter on a new line with a hyphen - before it.
*/

// let hello = 'Bangladesh';
// for( let i = 0; i < hello.length; i++){
//     // console.log(hello[i])
//     console.log(`- ${hello[i]}`);
// }


/*
Sum of First N Numbers
Calculate and print the total sum of all numbers from 1 to 50.
*/

// let sum = 0;
// for( let i = 1; i <= 50; i++){
//     sum += i;
// }
// console.log(sum)


/*
The Right-Angled Triangle
Print a right-angled triangle of asterisks (*) with 5 rows (Row 1 has 1 star, Row 2 has 2 stars, up to Row 5).
*/

// for( let i = 1; i <= 5; i++){
//     let result = '';
//     for( let j = 1; j <= i; j++){
//         result += ' * '
//     }
//     console.log(result);
// }

// for( let i = 1; i <= 5; i++){
//     let result = '';
//     for( let j = 1; j <= 5; j++){   // square pattern
//         result += ' * '
//     }
//     console.log(result);
// }


/*
Array Element Doubler
Given a list of numbers (e.g., [1, 2, 3, 4, 5]), use a loop to print double the value of each number.
*/

// let numArr = [2, 4, 33, 55, 4]

// for( let i = 0; i < numArr.length ; i++){
//     console.log(numArr[i] * 2)
// }


/*
Factorial Finder
Find the factorial of 5 (multiply 1 × 2 × 3 × 4 × 5) and print the final result.
*/

// let factorial = 1; 
// for( let i = 1; i <= 7; i++){
//     factorial *= i;
// }
// console.log(factorial)


/*
Count the Vowels
Loop through a given sentence or word and count how many total vowels (a, e, i, o, u) it contains.
*/

// let sentence = 'I am bangladeshi. I love bangladesh.';
// let vowels = 'aeiou';
// let count = 0;

// for( let i = 0; i < sentence.length; i++){
//     // console.log(sentence[i].toLowerCase());
//     let char = sentence[i].toLowerCase();
//     if (vowels.includes(char)) {
//         console.log(char)  // prints only vowels 
//         count++;
//     }
// }
// console.log(count)

// for( let i = 0; i < sentence.length; i++){
//     // console.log(sentence[i].toLowerCase());
//     let char = sentence[i].toLowerCase();
//     if (!vowels.includes(char) && char >= 'a' && char <= 'z') {
//         console.log(char)  // prints ony consonants
//         count++;
//     }
// }
// console.log(count)


/*
The Number Grid
Print a square grid of numbers from 1 to 3 repeated across 3 rows.
(Output should look like 123 on line one, 123 on line two, and 123 on line three). 
*/

// for( let i = 1; i <= 5; i++){
//     let result = '';
//     for( let j = 1; j <= 5; j++){
//         result += j + ' ';
//     }
//     console.log(result)
// }



/*
 The Alternating Grid (পর্যায়ক্রমিক গ্রিড)৩টি লাইনের (Rows) একটি গ্রিড বা চারকোনা বক্স তৈরি করুন, যেখানে প্রথম লাইনে শুধু 1, দ্বিতীয় লাইনে শুধু 2, এবং তৃতীয় লাইনে শুধু 3 প্রিন্ট হবে। প্রতিটি সংখ্যা ৩ বার করে বসবে এবং মাঝখানে স্পেস থাকবে।
 */


// for( let i = 1; i <= 3; i++){
//     let result = '';
//     for( let j = 1; j <= 3; j++){
//         result += i + ' ';
//     }
//     console.log(result)
// }


/*
The Odd Sum Stop (বিজোড় সংখ্যার যোগফল)১ থেকে শুরু করে ২৫ পর্যন্ত সব বিজোড় (Odd) সংখ্যাগুলোর যোগফল বের করুন। তবে লুপের ভেতরে একটি শর্ত থাকবে—যদি যোগফল কোনো কারণে ৫০ পার হয়ে যায় (sum > 50), তবে লুপটি সঙ্গে সঙ্গে বন্ধ (break) হয়ে যাবে এবং তখনকার চূড়ান্ত যোগফলটি প্রিন্ট করবে।ইঙ্গিত: লুপের ভেতরে if কন্ডিশন এবং break কীওয়ার্ড ব্যবহার করতে হবে।
*/

let oddSum = 0;
for( let i = 1; i <= 25; i += 2){
    oddSum += i;
    if (oddSum > 50) {
        break;
    }
}
console.log(oddSum);


// new challange

/*
challange 1: . Search and Destroy (Intermediate)Goal: Write a loop that prints numbers from 1 to 10. 
However, if the loop hits the number 7, it must stop completely and print nothing else after it.Hint: Use the break; statement inside an if block.
*/

// let breakResult = '';
// let breakSerial = 1;
// for( let i = 1; i <= 10; i++){
//     if (i === 7) {
//         break;
//     }
//     // console.log(i);
//     breakResult += breakSerial + ' ) ' + ' Break result of 7 is ' + ' = ' + i + '\n';
//     breakSerial++;
// }
// console.log(breakResult);


/*
challange 2: . The Price Filter (Array Challenge)Goal: You are given an array of prices: let prices = [10, 45, 60, 12, 85, 30];. 
Use a loop to print only the prices that are greater than 40.
Hint: Combine your array loop knowledge (prices[i]) with an if condition.
*/

// let priceArr = [10, 45, 60, 12, 85, 30];
// let priceArrRslt = '';
// for( let i = 0; i < priceArr.length; i++){
//     if (priceArr[i] > 40) {
//         // console.log(priceArr[i])
//         priceArrRslt += priceArr[i] + '\n';
//     }
// }
// console.log(priceArrRslt);


// mid lebel problems

/*
No 1: The Narcissistic Number Search
Find all 3-digit numbers where the sum of each digit raised to the power of 3 equals the number itself (e.g., 1³ + 5³ + 3³ = 153).
*/

// for( let i = 100; i <= 999; i++){
//     let temp = i;

//     let digit3 = temp % 10;
//     temp = Math.floor(temp / 10);

//     let digit2 = temp % 10;
//     temp = Math.floor(temp / 10);

//     let digit1 = temp %10;

//     let sumOfCubes = Math.pow(digit1, 3) + Math.pow(digit2, 3) + Math.pow(digit3, 3);

//     if (sumOfCubes === i) {
//         console.log(i)
//     }
// }


// for(let i = 10; i <= 99; i++){
//     let temp = i;

//     let digit2 = temp % 10;
//     temp = Math.floor(temp / 10);

//     let digit1 = temp % 10;

//     let sumOfSqr = Math.pow(digit1, 2) + Math.pow(digit2, 2);

//     if (sumOfSqr === i) {
//         console.log(i)
//     }
    
// }
// console.log('No Narcissistic Number found.')

// for( let num = 1000; num <= 9999; num++){
//     let temp = num;

//     let digit4 = temp % 10;
//     temp = Math.floor(temp / 10);

//     let digit3 = temp % 10;
//     temp = Math.floor(temp / 10);

//     let digit2 = temp % 10;
//     temp = Math.floor(temp / 10);

//     let digit1 = temp % 10;

//     let sumOfQuardrats = Math.pow(digit1, 4) + Math.pow(digit2, 4) + Math.pow(digit3, 4) + Math.pow(digit4, 4);

//     if (sumOfQuardrats === num) {
//         console.log(num);
//     }
// }
// console.log('No Narcissistic Number found.')


/*
No 2: The Collatz Conjecture Sequence
Given any positive integer, print its Collatz sequence using a loop. If even, divide by 2; if odd, multiply by 3 and add 1. Stop when it hits 1.
*/

// let num = 7;
// for( let i = num; i >1;){
//     if (i % 2 === 0) {
//         i = i / 2;
//     }
//     else{
//         i = i * 3 + 1;
//     }
    
//     console.log(i);
// }

// using while loop

// while (num > 1) {
//     if (num % 2 === 0) {
//         num = num / 2
//     }
//     else{
//         num = num * 3 + 1;
//     }
//     console.log(num);
// }


/*
No 3: Diamond Pattern Generator
Print a perfect diamond shape made of asterisks (*) based on an odd number of maximum rows provided by the user.
*/

// let n4 = 8;
// for(let i = 1; i <= n4; i++){
//     let result = '';
//     for( let j = 1; j <= i; j++){
//         result += '* '
//         let result1 = '';
//         for(let k = 1; k <= j; k++){
//             result1 += '# '
//         }
//         // console.log(result1);
//     }
//     console.log(result);
// }

// let n4 = 8;

// for (let i = 1; i <= n4; i++) {
//     let result = '';
    
//     // Pick the character based on odd or even line number
//     let charToPrint = (i % 2 !== 0) ? '* ' : '# ';
    
//     // Build the line with the chosen character
//     for (let j = 1; j <= i; j++) {
//         result += charToPrint;
//     }
    
//     console.log(result);
// }


