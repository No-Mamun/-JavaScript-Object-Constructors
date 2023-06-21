
// JavaScript Object Constructors

// No:1

function Person(first,last,age) {

              this.firstName = first;

              this.lastName = last;

              this.age = age;

              this.fullName = function(){

              return this.firstName + ' ' + this.lastName

              }

}

const sumit = new Person ('sumit','saha',35);

const jasim = new Person ('jasim','uddin',30);

const rohim = new Person ('rohim','islam',32);

// console.log(sumit);

// console.log(sumit.fullName());

// console.log(rohim.fullName());

// sumit.country = 'Bangladesh';

// console.log(sumit);

// sumit.country = 'Bangladesh';

// console.log(jasim);

console.log(Person);
