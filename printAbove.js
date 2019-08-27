// Change these values to test.
let userArr = [-5, -4.5, -4, -3.5, -3, -2.5, -2, -1.5, -1, -0.5, 0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5];
let userCheckAboveVal = 0;

// Main function.
printAbove = (arr, aboveVal) => {
    let itemsAbove = [];

    if (!Number(aboveVal) && aboveVal !== 0) {
        return("Value to check against is not a number. Please enter a valid number.");
    }

    for (item in arr) {
        if (arr[item] === 0) {
            if (arr[item] > aboveVal) {
                itemsAbove.push(arr[item]);
            }
        } else {
            if (Number(arr[item]) && arr[item] > aboveVal) {
                itemsAbove.push(arr[item]);
            } else if (!Number(arr[item])) {
                console.log(`Array contains non-number item: "${arr[item]}" at position: ${item}. `)
            }
        }
        
    }

    return itemsAbove.sort((a, b) => {return a-b});
}

// Function called.
console.log(printAbove(userArr, userCheckAboveVal));