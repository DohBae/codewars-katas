/*
This time we want to write calculations using functions and get the results. Let's have a look at some examples:

seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3

Requirements:

There must be a function for each number from 0 ("zero") to 9 ("nine")
There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
Each calculation consist of exactly one operation and two numbers
The most outer function represents the left operand, the most inner function represents the right operand
Division should be integer division. For example, this should return 2, not 2.666666...:
eight(dividedBy(three()));
*/

const make = (f, n) => f ? f(n) : n;
const zero = f => make(f, 0);
const one = f => make(f, 1);
const two = f => make(f, 2);
const three = f => make(f, 3);
const four = f => make(f, 4);
const five = f => make(f, 5);
const six = f => make(f, 6);
const seven = f => make(f, 7);
const eight = f => make(f, 8);
const nine = f => make(f, 9);
const ten = f => make(f, 10);

const plus = a => b => b + a;
const minus = a => b => b - a;
const times = a => b => b * a;
const dividedBy = a => b => Math.floor(b / a);

seven(times(five())); //35
four(plus(nine())); //13
eight(minus(three())); //5
six(dividedBy(two())); //3

/*
Similar code for reference:

const n = (d) => (f) => f ? f(d) : d
const zero = n(0)
const one = n(1)
const two = n(2)
const three = n(3)
const four = n(4)
const five = n(5)
const six = n(6)
const seven = n(7)
const eight = n(8)
const nine = n(9)

const plus = (f)=>n => n + f
const minus = (f)=>n => n - f
const times = (f)=>n => n * f
const dividedBy = (f)=>n => Math.floor(n / f)
*/