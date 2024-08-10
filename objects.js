const person = {
    firstName: 'john',
    lastName: 'Doe',
    age: '30',
    hobbies : ['music','movies','sports'],
    address: {
        street:'50 main st',
        city : 'boston',
        state: 'MA'
    }
}

// const {firstName,lastName, address:{city}} = person;
// console.log(city); 

person.email ='john@gmail.com' 
console.log (person);