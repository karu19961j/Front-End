"use strict"
let checkPrimeBtn = document.getElementById("checkprime");
let reverseNumberBtn = document.getElementById("reversenumber");
let sumOfDigitsBtn = document.getElementById("sumofdigits");
let inputNumberField = document.getElementById("numberinput");
let outputField = document.getElementById("numberoutput");

//checks for prime-number
let checkPrimeFun = (number) => {
  for(let i = 2; i<number; i++)
    if(number%i === 0)
      return false;
  return true;
}
checkPrimeBtn.onclick = () => {
  if(checkPrimeFun(inputNumberField.value)){
    outputField.value = "Number is prime";
  }
  else{
    outputField.value = "Number is not prime";
  }
}

//reverse's the number
let reverseNumberFun = (number) => {
  //two methods
  //1st
  let reverseNumber = number.split("").reverse().join("");
  //2nd
  // let reverseNumber = 0;
  // let remainder;
  // while(number>0){
  //   remainder = number%10;
  //   reverseNumber = reverseNumber*10 + remainder;
  //   number = Math.floor(number/10);
  // }
  outputField.value = reverseNumber;
}
reverseNumberBtn.onclick = () => reverseNumberFun(inputNumberField.value);


//sums up the digits
let sumOfDigitsFun = (number) => {
  let sumArray = number.split('');
  let sumOfDigits = 0;
  for (let pos in sumArray){
    sumOfDigits += parseInt(sumArray[pos]);
  }
  outputField.value = sumOfDigits;
}
sumOfDigitsBtn.onclick = () => sumOfDigitsFun(inputNumberField.value);
