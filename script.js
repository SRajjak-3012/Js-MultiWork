//  Assignment-14 ========================>

console.log("Number Analysis Program");

function NumberAnalysis(n) {

    let original = n;

    // 1. Sum of digits
    let sum = 0;

    while (n > 0) {
        let digit = n % 10;
        sum = sum + digit;
        n = Math.floor(n / 10);
    }

    console.log("Given Number :", original);
    console.log("Sum of its digits :", sum);


    // 2. Armstrong Number
    let temp = original;
    let armSum = 0;
    let power = String(original).length;

    while (temp > 0) {
        let digit = temp % 10;
        armSum = armSum + (digit ** power);
        temp = Math.floor(temp / 10);
    }

    if (armSum == original) {
        console.log("Its an Armstrong number");
    } else {
        console.log("Its not an Armstrong number");
    }


    // 3. Prime Number
    let count = 0;

    for (let i = 1; i <= original; i++) {
        if (original % i == 0) {
            count++;
        }
    }

    if (count == 2) {
        console.log("Its a prime number");
    } else {
        console.log("Its not a prime number");
    }


    // 4. Factors
    let factors = [];

    for (let i = 1; i <= original; i++) {
        if (original % i == 0) {
            factors.push(i);
        }
    }

    console.log("Factors :", factors.join(", "));
    }

    NumberAnalysis(153);
    NumberAnalysis(896);
