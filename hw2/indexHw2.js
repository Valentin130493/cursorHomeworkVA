let numberN = +prompt('Please, enter number N');
if(Number.isInteger(numberN)) {
} else{ while ( !Number.isInteger(numberN) || numberN === 0 ) {
  numberN = +prompt("Wrong! You need enter an integer number");
}
}
console.log("You numder N = " + numberN);
let numberM = +prompt('Please, enter number M');
if(Number.isInteger(numberM)) {
} else{while ( !Number.isInteger(numberM) || numberM === 0 ) {
  numberM = +prompt("Wrong! You need enter an integer number");
}
}
console.log("You numder M = " + numberM);
while  (  numberN >= numberM ) {
  numberM = +prompt( "The second number must be greater than first" );
}
console.log(numberM)

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
console.log('Total sum:' + allSumNumbers);