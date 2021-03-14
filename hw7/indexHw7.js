
const ukraine = { name: 'Ukraine', tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { name: 'Latvia', tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { name: 'Litva', tax: 0.15, middleSalary: 1509, vacancies: 1114 };


function getMyTaxes(salary) {
    return this.tax * salary;
}
console.log(`Tax from your salary in ${ukraine.name} is:`, getMyTaxes.call(ukraine, 1200));

function getMiddleTaxes(country) {
    return +((this.tax * this.middleSalary).toFixed(2));
}
console.log(`Middle salary tax in ${ukraine.name}:`, getMiddleTaxes.call(ukraine));
console.log(`Middle salary tax in ${latvia.name}:`, getMiddleTaxes.call(latvia));
console.log(`Middle salary tax in ${litva.name}:`, getMiddleTaxes.call(litva));


function getTotalTaxes(country) {
    return Math.floor(this.tax * this.middleSalary * this.vacancies);
}
console.log(`The total middle salary tax in ${ukraine.name}:`, getTotalTaxes.call(ukraine));
console.log(`The total middle salary tax in ${latvia.name}:`, getTotalTaxes.call(latvia));
console.log(`The total middle salary tax in ${litva.name}:`, getTotalTaxes.call(litva));


function getMySalary(country) {
    setInterval(() => {
        let mySalary = {};
        mySalary.randomSalary = Math.floor(Math.random() * (2000 - 1500) + 1500);
        mySalary.taxes = +((country.tax * mySalary.randomSalary).toFixed(2));
        mySalary.profit = +((mySalary.randomSalary - mySalary.taxes).toFixed(2));
        console.log(`My object with data for ${ukraine.name}:`, mySalary);
    }, 10000)
}
getMySalary(ukraine);
