// Change these values to test.
let userString = "This is the test string.";
let userRotateBy = 155;

// Main function.
rotateString = (string, rotateBy) => {
    let rotatedString, fixedRotate = rotateBy;

    if (!Number(fixedRotate) && fixedRotate !== 0) {
        return ("Please enter a valid integer to rotate the string by.");
    } else if (fixedRotate > string.length) {
        fixedRotate = fixedRotate % string.length;
    }

    rotatedString = string.slice(fixedRotate, string.length) + string.slice(0, fixedRotate);


    return rotatedString;
}

// Function called.
console.log(rotateString(userString, userRotateBy));