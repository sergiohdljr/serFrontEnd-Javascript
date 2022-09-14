const fullName = "203456523388965";
const last4Digits = fullName.slice(-4);
const maskedNumber = last4Digits.padStart(fullName.length, '*')

console.log(maskedNumber)

const cpfNumber = '234.167.398-84'
const last2Numbers = cpfNumber.slice(-7)
const cpfMasked = last2Numbers.padStart(cpfNumber.length, '*')
console.log(cpfMasked)