// LabFour

/* PRACTICE
// Print function
function print(title = "Result =", value = undefined) {
    console.log(title, value);
}

// Add function
function add(a, b) {
    return a + b;
}

// Call and print of function
print("Add =", add(2,3));

// Sub Function
function sub(x, y) {
    return x - y;
}

// Call and print of function
print("Sub =", sub(4,3));

function example(a, b, c=3, d) {
    return a;
}

//Finding the .legth of a function
print("Example Funtion Length:", example.length);
print(undefined, example.length == 1);


if (example.length == 4) {
    print("if result:", example(1,3,4,6));
} else {
    print("try again", "");
}

function hello(x, y=2, z) {
    console.log(hello.length);
}

hello(2,3,4);

function foo(x,y,z, ... args) {
    console.log(x,y,z, args);
}

foo(1,2,3, 4) */

//-------------------------------------------------------------------------

// LAB FOUR

/* binary(1) ➞ "1"
// 1*1 = 1

binary(5) ➞ "101"
// 1*1 + 1*4 = 5

binary(10) ➞ "1010"
// 1*2 + 1*8 = 10 */

function binary(num) {
    console.log(num.toString(2)); // Takes number and prints its base 2 binary
}

// Prints test functions
binary(1);
binary(5);
binary(10);