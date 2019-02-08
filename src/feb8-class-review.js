// JSON.stringify(objectToStringify)
// This is useful to convert a JavaScript object into a string.
// This is a common operation used when we want to export some data
// from JavaScript. For example, if we want to take JavaScript data
// and put it into localStorage. Or if we want to take JavaScript data
// and save it to a file.
const obj = {
    name: 'ryan'
};
const json = JSON.stringify(obj);
console.log(json);

const numbers = [1, 2, 3, 4, 5];
const jsonNumbers = JSON.stringify(numbers);
console.log(jsonNumbers);

// JSON.parse(stringToObjectify)
// This is useful to convert a string into a JavaScript object.
// This is a common operation when we want to import some data
// into JavaScript. For example, if we want to take a value from
// localStorage and use it in JavaScript.

const mySelf = JSON.parse('{"name": "ryan"}');
console.log(mySelf);

// window.localStorage
// localStorage is a place for our webpages to persist data.
// The data stored in localStorage is stored as key/value pairs,
// where both the key and value is a string. Once stored, the data
// is located (looked up) by its key. Think dictionaries.

// window.localStorage.setItem(key, value)
// window.localStorage.setItem allows us to create or updated an entry
// in localStorage.
// const writableMySelf = JSON.stringify(mySelf)
// window.localStorage.setItem('ryan', writableMySelf);
window.localStorage.setItem('ryan', JSON.stringify(mySelf));
window.localStorage.setItem('numbers', JSON.stringify([1, 2, 3, 4, 5]));

// window.localStorage.getItem(key)
// window.localStorage.getItem allows us to retrieve an entry from
// localStorage.
const ryanObject = window.localStorage.getItem('ryan');
const ryan = JSON.parse(ryanObject);
console.log(ryan.name);

// window.localStorage.removeItem(key)
// window.localStorage.removeItem allows us to destroy or delete an
// entry from localStorage.
window.localStorage.removeItem('ryan');

// window.localStorage.clear()
// window.localStorage.clear removes all entries from localStorage.
window.localStorage.clear();

// CRUD

// Array .push
// .push(item) puts "item" at the end of an array and returns the new
// length of the array

const largeNumbers = [100, 101, 102, 103];
for(let num = 1000; num < 10000; num++) {
    largeNumbers.push(num);
}

console.log(largeNumbers);

// window.location
// window.location gives us access to the current value in the URL bar.
// window.location can also be used to change the current value of the
// URL bar.

console.log(window.location);
console.log(window.location.pathname);
console.log(window.location.hostname);
console.log(window.location.search);

// URLSearchParams makes working with a query string more convenient.
// Like localStorage, query strings are also key/value pairs, and
// URLSearchParams gives us similar methods to "get" and "set" the
// key/value pairs of a query string

// new URLSearchParams('?name=ryan')
const searchParams = new URLSearchParams('?name=ryan&anotherName=ryan2');
// console.log(searchParams);
console.log(searchParams.get('name'));
// console.log(searchParams.getAll('name'));
