let numberN = +prompt('Please, enter number N');
console.log(numberN);
if(Number.isInteger(numberN)) {
} else{ while  ( numberN % 1 !== 0 ) {
  numberN  =  +prompt("Wrong! You need enter an integer number");
}
}
let numberM = +prompt('Please, enter number M');
console.log(numberM);
if(Number.isInteger(numberM)) {
} else{while  ( numberM % 1 !== 0 ) {
  numberM = +prompt ("Wrong! You need enter an integer number");
}
}

while  (  numberN >= numberM ) {
  numberM = +prompt( "The second number must be greater than first" );
}

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