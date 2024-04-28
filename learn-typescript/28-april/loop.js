//do while (condition) 1 dafa run karega, condition ko bad maeen check karega
// for(exp1;exp2;exp3) {}
console.log("Hello, World");
var temprature = 15;
if (temprature < 20) {
    console.log("It is cold");
}
var x = 10, y = 3;
console.log("Apple Left=", x - y);
var firstName = "Ghulam";
var SecondName = "Mustafa";
var FullName = "".concat(firstName, " ").concat(SecondName);
console.log(FullName);
var num = 5;
if (num > 3) {
    console.log("Yes");
}
else {
    console.log("NO");
}
function CalculateArea(rad) {
    console.log(Math.PI * rad * rad);
}
CalculateArea(10);
for (x = 1; x <= 50; x++) {
    if (x % 3 === 0) {
        console.log("Fizz");
    }
    else if (x % 5 === 0) {
        console.log("Buzz");
    }
}
