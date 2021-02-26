function getMaxDigit(number) {
    const maxDigit = String(number);
    return Math.max.apply(Math, maxDigit.split(''));
  }

  function formattingUserName(name) {
    const userName = String(name);
    return userName.charAt(0).toUpperCase() + userName.slice(1).toLowerCase();
  }
  

  function getTaxSalary(salary) {
    const tax = 18 + 1.5;
    return salary - ((salary * tax) / 100);
  }
  
  
  function getRandomNumber(numberN, numberM) {
    numberN = Math.ceil(numberN);
    numberM = Math.floor(numberM);
    return Math.floor(Math.random() * (numberM - numberN)) + numberN;
  }
  
  function countLetter(letter, word) {
      let count = 0;
    for(let i = 0; i < word.length; i++){
      if(word[i]===letter) count++;
    }
    return count;
  }
  
  function generateRandomPassword() { 
    let pass = ''; 
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789' +  
            'abcdefghijklmnopqrstuvwxyz0123456789@#$'; 
      
    for (i = 1; i <= 8; i++) { 
        let char = Math.floor(Math.random() 
                    * str.length + 1); 
          
        pass += str.charAt(char) 
    }   
    return pass; 
} 

  
  document.writeln(`The max digit is : ${getMaxDigit(1545784229)} <br>`);
  document.writeln(`User name is: ${formattingUserName('VaLEnTyn')} <br>`);
  document.writeln(`The salary after payment of taxes will be: ${getTaxSalary(1500)} <br>`);
  document.writeln(`Your random number is: ${getRandomNumber(1, 10)} <br>`);
  document.writeln(`Count letter: ${countLetter("o", "Around the world and return home")} <br>`);
  document.writeln(`Your random password is: ${generateRandomPassword()} <br>`);
  