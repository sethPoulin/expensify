// const person = {
//   name: 'Andrew',
//   age: 26,
//   location: {
//     city: 'Toronto',
//     temp: 92
//   }
// };

// const { name = 'anonymous', age } = person;

// console.log(`${name} is ${age}.`);

// const { city, temp: temperature } = person.location;

// console.log(`${city} is ${temperature}.`);

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// };

// const { name: publisherName = 'Self-Published'} = book.publisher;

// console.log(publisherName);

//ARRAY DESTRUCTURING

// const address = [, 'Philedelphia', 'California', '19147'];

// const [street = 'potato drive', city, state, zip] = address

// console.log(street) //284 St. Helens Ave.

const item = ['coffee (iced)', '2.00', '8.50', '2.75'];

const [drink,,medPrice ] = item;

console.log(`A medium ${drink} costs ${medPrice}`);