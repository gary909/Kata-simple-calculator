function calculator(a, b, sign) {
    if (isNaN(a) || isNaN(b)) {
        return "unknown value";
    } else if (sign == "+") {
        return a + b;
    } else if (sign == "-") {
        return a - b;
    } else if (sign == "*") {
        return a * b;
    } else if (sign == "/") {
        return a / b;
    } else {
        return "unknown value";
    }
}



console.log(calculator(1, 2, "+")); // 3
console.log(calculator(1, 2, "-")); // -1
console.log(calculator(3, 5, "*")); // 15
console.log(calculator(6, 2, "/")); // 3
console.log(calculator(6, 2, "$")); // "unknown value"
console.log(calculator(6, "h", "*")); // "unknown value"