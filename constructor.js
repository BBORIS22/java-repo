function Man(firstName , lastName, dob) {
this.firstName = firstName;
this.lastName = lastName;
this.dob = new Date(dob);
this.getBirthYear = function() {
    return this.dob.getFullYear();
}
this.getFullName = function() {
    return `${this.firstName}  ${this.lastName}`;
}
}

// instantiate object
const MyMan1 = new Man('john','doe','2-12-1945');
const MyMan2 = new Man('boris','kat','2-8-1970');

console.log(MyMan1);
// console.log(MyMan2.getBirthYear());