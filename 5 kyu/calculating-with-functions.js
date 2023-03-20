// DESCRIPTION:
// This time we want to write calculations using functions and get the results. Let's have a look at some examples:

// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3
// Requirements:

// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand
// Division should be integer division. For example, this should return 2, not 2.666666...:
// eight(dividedBy(three()));

function zero(calc) { return calc ? calc(0) : 0 }
function one(calc) { return calc ? calc(1) : 1 }
function two(calc) { return calc ? calc(2) : 2 }
function three(calc) { return calc ? calc(3) : 3 }
function four(calc) { return calc ? calc(4) : 4 }
function five(calc) { return calc ? calc(5) : 5 }
function six(calc) { return calc ? calc(6) : 6 }
function seven(calc) { return calc ? calc(7) : 7 }
function eight(calc) { return calc ? calc(8) : 8 }
function nine(calc) { return calc ? calc(9) : 9 }

function plus(val2) { return (val1) => val1 + val2 }
function minus(val2) { return (val1) => val1 - val2 }
function times(val2) { return (val1) => val1 * val2 }
function dividedBy(val2) { return (val1) => (val1 / val2) | 0 }


// SOLUTIONS # 2
// function zero(arr) {
//     if(arr) return calc(0, ...arr)
//     return 0
// }
// function one(arr) {
//     if(arr) return calc(1, ...arr)
//     return 1
// }
// function two(arr) {
//     if(arr) return calc(2, ...arr)
//     return 2
// }
// function three(arr) {
//     if(arr) return calc(3, ...arr)
//     return 3
// }
// function four(arr) {
//     if(arr) return calc(4, ...arr)
//     return 4
// }
// function five(arr) {
//     if(arr) return calc(5, ...arr)
//     return 5
// }
// function six(arr) {
//     if(arr) return calc(6, ...arr)
//     return 6
// }
// function seven(arr) {
//     if(arr) return calc(7, ...arr)
//     return 7
// }
// function eight(arr) {
//     if(arr) return calc(8, ...arr)
//     return 8
// }
// function nine(arr) {
//     if(arr) return calc(9, ...arr)
//     return 9
// }

// function plus(val2) { if(typeof val2 === 'number') return [val2, '+'] }
// function minus(val2) { if(typeof val2 === 'number') return [val2, '-'] }
// function times(val2) { if(typeof val2 === 'number') return [val2, '*'] }
// function dividedBy(val2) { if(typeof val2 === 'number') return [val2, '/'] }

// function calc(val1, val2, op) {
//   switch(op) {
//       case '+':
//       return val1 + val2
      
//       case '-':
//       return val1 - val2
      
//       case '*':
//       return val1 * val2
      
//       case '/':
//       return (val1 / val2) | 0
//   }
// }