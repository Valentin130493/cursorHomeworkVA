function getRandomArray (length, min, max){
 let newArray = [];
 for(let i = 0; i < length; i++){
     newArray.push(Math.round(Math.random() * (max-min) + min))
 }
 return newArray;
}
console.log(getRandomArray(7,15,45));

function getAverage(...numbers){
    let integerNumbers = numbers.filter((item,index) =>  Number.isInteger(item));
    let sumIntegers = integerNumbers.reduce((acc,item) => acc+item);
    let average = sumIntegers/integerNumbers.length;
return average;
}   
console.log(getAverage(7,15,45,8,9,10,22,12,25));

function countPositiveNumbers(...numbers){
    let integerNumbers = numbers.filter((item,index) =>  item > 0);
    return integerNumbers.length

}
console.log(countPositiveNumbers(1, -2, 3, -4, -5, 6));

function getDividedByFive(...numbers){
    for(let i = 0; i < numbers.length; i++) {
        if(numbers[i] % 5 === 0){
           return numbers[i];
        }
    }
}
console.log(getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));

function getModa(...numbers) {
    let integerNumbers = numbers.filter((item,index) =>  Number.isInteger(item));
    let max = { item: 0, count: 0 };
    for (let i = 0; i < integerNumbers.length; i++) {
        let arrOccurences = integerNumbers.filter(item => { return item === integerNumbers[i] }).length;
        if (arrOccurences > max.count) {
            max = { item: integerNumbers[i], count: integerNumbers.filter(item => { return item === integerNumbers[i] }).length };
        }
    }
    return max.item;
}
console.log(getModa(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));



function filterEvenNumbers(...numbers) {
    const numbersArray = [...numbers];
    let evenNumbers = numbersArray.filter(function (number) {
      return number % 2 !== 0;
    });
    return evenNumbers;
  }
  console.log(filterEvenNumbers(1, 2, 3, 4, 5, 6));