async function getRandomChinese(length){
let myWord = '';
let i = 0;
while(i < length){
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
        const ourTimeToString = String(Date.now());
        const ourFiveSymbols = ourTimeToString.substr(-5);
        const chineseLetter = String.fromCharCode(ourFiveSymbols);
        resolve(chineseLetter);
        }, 50);
      });
      
     await promise.then((value) => {
        myWord += value;
      });
      i++;
}
console.log(myWord);
}

getRandomChinese(4);

