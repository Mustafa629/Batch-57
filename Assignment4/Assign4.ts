let greeting:string='Hello World'; // Hello Variable
console.log(greeting);
let num1:number=75, num2:number=10; // Basic Math
console.log("Addition",num1+num2);
console.log("Subtraction",num1-num2);
console.log("Division",num1/num2);
console.log("Multiplication",num1*num2);
console.log("Power",num1**num2);
console.log("%",num1%num2);

let a = 1,
  b = 2; // Swaping
  console.log("A=",a); 
  console.log("B=",b);
  [ a,b]=[b,a];
  console.log("Now A=",a); 
  console.log("Now B=",b); 
  let counter = 0; // Increment 
  console.log(counter==counter+1);
  console.log(counter+=1);
  let c = true,
  d = false,
  f = true; // Logical Gates.
  console.log(c||d);
  console.log(c&&d);
  console.log(!(c));
  let num = 10; // Use +=, -=, *=, and /= on this variable.
  console.log(num+=1);
  console.log(num-=1);
  console.log(num*=2);
  console.log(num/=2);
  let num3=9; // Determine if this is even or odd.
if (num3%2==0){console.log("Even")}
else {console.log("ODD")}
let age=17; // Check if age is 18 or older to determine voting eligibility.
if (age>=18)
{
console.log("Eligible")
}
else
{
    console.log("Not Eligible")
}

let score=90; // Use conditionals to assign and print grades A, B, C, D, or F.
if (score>=90)
  {
    console.log("A+");

  }
  else if(score>=85 && score<90)
  {
console.log("A");
  }
  let x=100, y=200, z=300; // Determine the largest among these.
  console.log(Math.max(x,y,x));
  let year=2024
  ; // Determine if this is a leap year.
  if (year % 400 == 0) {
    console.log("This is a leap year.", year);
 }
 // not a leap year if divisible by 100
 // but not divisible by 400
 else if (year % 100 == 0) {
    console.log("this is not a leap year.", year);
 }
 // leap year if not divisible by 100
 // but divisible by 4
 else if (year % 4 == 0) {
    console.log("this is a leap year.", year);
 }
 // all other years are not leap years
 else {
    console.log("This is not a leap year.", year);
 }

  let fahrenheit=50;
  console.log("Celsius is :",(fahrenheit-32)*(5/9)); // Convert this to Celsius and print the result.



