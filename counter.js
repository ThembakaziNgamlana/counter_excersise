
// add counter 1 and counter 2

const counter1 = Counter();
const counter2 = Counter();

counter1.increment();
counter1.increment();
counter1.increment();

counter2.increment();
counter2.increment();

// prints 3 
console.log(counter1.count);

//prints 2
console.log(counter2.count);