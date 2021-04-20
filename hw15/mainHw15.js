function* createIdGenerator(){
    let index = 1;
    while(true)
    yield index++;
}



const idGenerator = createIdGenerator();

console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);

