const numberN = +prompt('Please, enter number N');
console.log(numberN);
if(Number.isInteger(numberN)) {
console.log("Whole number");
} else{ console.log("This number is not correct");
}

const numberM = +prompt('Please, enter number M');
console.log(numberM);
if(Number.isInteger(numberM)) {
console.log("Whole number");
} else{ alert("This number is not correct"); }

let scipEvenNumbers = confirm("Do you need to skip even numbers?");
let allSumNumbers = 0;

for(let i = numberN; i <= numberM; i++){
if(scipEvenNumbers){
  if(i% 2 !== 0){
    allSumNumbers += i;
  }
}else { allSumNumbers += i;
  }
}
console.log(allSumNumbers);