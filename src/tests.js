const test = QUnit.test;

function add(a, b) {
  // return 3;
  // return a + 2;
    return a + b;
}

test('the sum of 1 and 2', function(assert) {
    const total = add(1, 2);
    assert.equal(total, 3);
});

test('the sum of 3 and 2', function(assert) {
    const total = add(3, 2);
    assert.equal(total, 5);
});

test('the sum of 3 and 5', function(assert) {
    const total = add(3, 5);
    assert.equal(total, 8);
});

function pow(n, e) {
  // return Math.pow(n, e);
    return n ** e;
}

test('2 to the power of 2', function(assert) {
    const total = pow(2, 2);
    assert.equal(total, 4);
});

test('3 to the power of 2', function(assert) {
    const total = pow(3, 2);
    assert.equal(total, 9);
});

test('2 to the power of 3', function(assert) {
    const result = pow(2, 3);
    assert.equal(result, 8);
});

// if divisible by 3 fizz
// if divisible by 5 buzz
// if divisible by 15 fizzbuzz
function fizzBuzz(number) {
    if(number % 3 === 0 && number % 5 === 0) {
        return 'fizzbuzz';
    } else if(number % 3 === 0) {
        return 'fizz';
    } else if(number % 5 === 0) {
        return 'buzz';
    } else {
        return number;
    }
}

test('returns fizz if divisible by 3', function(assert) {
    const result = fizzBuzz(9);
    assert.equal(result, 'fizz');
});

test('returns buzz if divisible by 5', function(assert) {
    const result = fizzBuzz(10);
    assert.equal(result, 'buzz');
});

test('returns fizzbuzz if divisible by 15', function(assert) {
    const result = fizzBuzz(30);
    assert.equal(result, 'fizzbuzz');
});

test('returns the input if not divisible by 3 or 5', function(assert) {
    const result = fizzBuzz(7);
    assert.equal(result, 7);
});

// accessing objects
test('i know how to get a property from an object', function(assert) {
    const dog = {
        name: 'rover',
        age: 1,
        weight: '10lbs'
    };

    const keyIWantToAccess = 'name';

    assert.equal(dog.name, dog['name']);
    assert.equal(dog[keyIWantToAccess], 'rover');
    assert.equal(dog['age'], 1);
    assert.equal(dog.weight, '10lbs');
  // you can add strings together
  // 'hi' + ' ' + 'there' === 'hi there'
    assert.equal(dog.name + ' is ' + dog.age, 'rover is 1');
});

test('i can create an object', function(assert) {
    const cat = {
    // what do i add here?
        name: 'fluffy',
        age: 15,
        legs: 4
    };

    assert.equal(cat['age'], cat.age);
    assert.equal(cat.name, 'fluffy');
    assert.equal(cat.age, 15);
    assert.equal(cat.legs, 4);
});

test('i can access an array', function(assert) {
  // arrays are 0 indexed
    const numbers = [1, 2, 3, 4, 5];

    assert.equal(numbers[3], 4);
    assert.equal(numbers[1], 2);
    assert.equal(numbers[0], 1);

  // break
    numbers.push(6);
    assert.equal(numbers[5], 6);
});

test('more access of array', function(assert) {
    const names = ['rover', 'fluffy', 'bingo', 'spot', 'bear'];

    assert.equal(names[2], 'bingo');
    assert.equal(names[4], 'bear');

  // how do i get the last item in an array
  // names.push('last One');

  // always last
    assert.equal(names[names.length - 1], 'bear');

  //always first
    assert.equal(names[0], 'rover');
});

test('objectGetter gets a value by key', function(assert) {
    const dog = {
        name: 'rover',
        age: 1
    };

    const result = objectGetter(dog, 'name');
    assert.equal(result, 'rover');

  // obj is dog
  // key is 'age'
  // dog['age']
    const ageResult = objectGetter(dog, 'age');
    assert.equal(ageResult, 1);
});

function objectGetter(obj, key) {
  // obj is dog
  // key is 'name'
  // dog['name']
    return obj[key];
}

test('objectGetter gets other values again', function(assert) {
    const cat = {
        name: 'fluffy',
        age: 15,
        legs: 4
    };

  // obj is cat
  // key is 'name'
  // cat['name']
    const result = objectGetter(cat, 'name');

    assert.equal(result, 'fluffy');
  // obj is cat
  // key is 'age'
  // cat['age']
    assert.equal(objectGetter(cat, 'age'), 15);

  // obj is cat
  // key is 'legs'
  // cat['legs']
    assert.equal(objectGetter(cat, 'legs'), 4);
});

test('add key/values to object', function(assert) {
    const cat = {
        name: 'fluffy',
    // age: 15
    };

    cat.age = 15;

    assert.equal(cat.age, 15);

    cat.legs = 4;
    assert.equal(cat.legs, 4);

  // cat.color = 'red';
    cat['color'] = 'red';
    assert.equal(cat.color, 'red');
});

// 2 ways to get values from an object
// dot notation cat.name
// bracket notation cat['name']

// 2 ways to set values in an object
// dot notation cat.name = 'fluffy'
// bracket notation cat['name'] = 'fluffy'
