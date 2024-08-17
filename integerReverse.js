//integer input = 123
//expected output = 321

//Take input.
//check if input is negative
//run input as absolute value
//pull out last digit
//put digit into empty output
//repeat as long as input isn't 0
//if original input is negative, turn output into negative

// multiplying and dividing by 10 moves digits, so use that?
// since it's being divided by 10, to get the actual number, i need the remainder.
let input1 = 123;
let input2 = -654;
//If the ouput is initalized here, it adds the outputs together
//let output = 0;

function reverseDigits(input) {
    let output = 0;
    let negativeCheck = false;
    if (input < 0) {
        negativeCheck = true;
    }
    input = Math.abs(input)
    while (input !== 0) {
        let digit = input % 10;
        output = output * 10 + digit
        // need to use Math.floor to disregard remainder for new inputs, otherwise it ends in infinity
        input = Math.floor(input / 10);
        // version that doesn't work
        //input = input / 10;
    }

    if (negativeCheck === true) {
        output = output * -1;
    }

    console.log(output);
}

reverseDigits(input1)
reverseDigits(input2)