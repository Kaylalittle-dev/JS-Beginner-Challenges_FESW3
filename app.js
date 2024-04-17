
// QUESTION 1 Add Numbers Together

function addition(num1, num2) {
    return num1 + num2
}

console.log(addition(3,2))
console.log(addition(-3,-6))
console.log(addition(7,3))

// Question 2 Convert Hours To Seconds

function hoursToSeconds(hours){
    return hours * 3600
}

console.log(hoursToSeconds(2))
console.log(hoursToSeconds(10))
console.log(hoursToSeconds(24))

// Question 3 Calculate Perimeter

function calcPerimeter (length, width){
    return (length * 2) + (width * 2)
}

console.log(calcPerimeter(6,7))
console.log(calcPerimeter(20,10))
console.log(calcPerimeter(2,9))

// Question 4 Calculate Triangle Area

function calcTriangleArea(base, height) {
    return (base * height) / 2
}

console.log(calcTriangleArea(3,2))
console.log(calcTriangleArea(10,10))
console.log(calcTriangleArea(20,20))

// Question 5 Extend A String

function appendFrontend(string) {
    return string + 'Frontend'
}

console.log(appendFrontend('Apple'))
console.log(appendFrontend('Banana'))
console.log(appendFrontend('Orange'))
// to make something is a number add + in front of number i.e. +num



// Question 6 Greater Than 100?

// function sumGreaterThan100(num1, num2) {
//     if (num1 + num2 > 100) {
//         return true
//     } else {
//         return false
//     }
// }
// // not most ideal solution ^^^^

// function sumGreaterThan100(num1, num2) {
//     if (num1 + num2 > 100) {
//         return true
//     } 
//     return false
// } ***got rid of one line of code, slightly cleaner

function sumGreaterThan100(num1, num2) {
    return num1 + num2 > 100
}
//when using > 0r < will automatically return boolean, cleanest code

console.log(sumGreaterThan100(20,10))
console.log(sumGreaterThan100(50,60))
console.log(sumGreaterThan100(100,-50))



// Question 7 Less than or Equal to Zero

function lessThanOrEqualToZero(num) {
    return num <= 0
}

console.log(lessThanOrEqualToZero(3))
console.log(lessThanOrEqualToZero(0))
console.log(lessThanOrEqualToZero(-2))

// Question 8 Opposite Boolean

function oppositeBoolean(boolean) {
    return !boolean
}

console.log(oppositeBoolean(true))
console.log(oppositeBoolean(false))

// Question 9 Is Not The Number 0

function isNotZero(value) {
    return !(value === 0) //could have done return value !==0 smh lol
}

console.log(isNotZero(5))
console.log(isNotZero(0))
console.log(isNotZero(null))

// Question 10 Calculate Remainder 

function 