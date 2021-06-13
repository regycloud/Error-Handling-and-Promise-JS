// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

const example = [4,5,5,6,7,3,7,5,8,6,8,9,9,8,5,5];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];


// Add your functions below:
// Using Luhn Algorithm
const validateCred = array => {
// Do looping, this including drop the last digit and reverse the sequence.
  let sum = 0;
  let reverseArray = [];
  let operated = [];
  for (let i = array.length - 1; i >= 0; i--) {
    let value = array[i];
    // Check for the odd position, if yes multiply by 2 and if the sum of multiplication is higher than 9 subtract by 9.
    reverseArray.push(value);
    if (i % 2 == 0 || i == 0) {
      value *= 2;
      // console.log(i + ' -> ' + value);
      if (value > 9) {
        value -=  9;
      }
    }
    // Add all the number together
    operated.push(value);
    sum += value;
  }
  // console.log(`Reversed ${reverseArray}`);
  // console.log(`Operated ${operated}`);
  // console.log(`Result__ ${array}`)
  let a = operated.reduce((total, number) => {
    return total + number
  });
    // Check if the modulo of sum is equal to 0, the card number is valid. Otherwise, it's invalid.
    if (a % 10 == 0) {
      return true;
    }
}



const findInvalidCards = arrays => {
  let invalid = [];
  for (array of arrays) {
    // console.log(array);
    if (!validateCred(array)) {
      invalid.push(array);
    }
  }
  // console.log(invalid);
}


validateCred(valid1);
// findInvalidCards(batch);






// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

const example = [4,5,5,6,7,3,7,5,8,6,8,9,9,8,5,5];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];


// Add your functions below:
// Using Luhn Algorithm
const validateCred = array => {
// Do looping, this including drop the last digit and reverse the sequence.
  let sum = 0;
  let reverseArray = [];
  let operated = [];
  for (let i = array.length - 1; i >= 0; i--) {
    let value = array[i];
    // Check for the odd position, if yes multiply by 2 and if the sum of multiplication is higher than 9 subtract by 9.
    reverseArray.push(value);
    if (i % 2 == 0 || i == 0) {
      value *= 2;
      // console.log(i + ' -> ' + value);
      if (value > 9) {
        value -=  9;
      }
    }
    // Add all the number together
    operated.push(value);
    sum += value;
  }
  // console.log(`Reversed ${reverseArray}`);
  // console.log(`Operated ${operated}`);
  // console.log(`Result__ ${array}`)
  let a = operated.reduce((total, number) => {
    return total + number
  });
    // Check if the modulo of sum is equal to 0, the card number is valid. Otherwise, it's invalid.
    if (a % 10 == 0) {
      return true;
    }
}



const findInvalidCards = arrays => {
  let invalid = [];
  for (array of arrays) {
    // console.log(array);
    if (!validateCred(array)) {
      invalid.push(array);
    }
  }
  return invalid;
  // console.log(invalid);
}

const idInvalidCardCompanies = arrays => {
  const output = [];
  console.log(`The total of invalid card number is: ${arrays.length}`);
  // Categorize the invalid number by the first digit and company.
  for (let i = 0; i < arrays.length; i++ ) {
    if (arrays[i][0] == 3) {
      output.push('Amex (American Express)');
    } else if (arrays[i][0] == 4) {
      output.push('Visa');
    } else if (arrays[i][0] == 5) {
      output.push('Mastercard');
    } else if (arrays[i][0] == 6) {
      output.push('Discover');
    } else {
      console.log('Company not found');
    }
  }
  // Remove the duplicate in array output
  let unique = [...new Set(output)];
  console.log(unique);


}


validateCred(valid1);
const invalid = findInvalidCards(batch);
idInvalidCardCompanies(invalid);






