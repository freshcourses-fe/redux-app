// function test() {
//   console.log(1);
//   console.log(2);
//   console.log(3);
//   console.log(4);
// }

// const result1 = test();
// console.log(result1);

function* generator() {
  try {
    while (true) {
      yield 1;
    }
  } catch (error) {
    console.log(error);
  }
}

const interator = generator();
console.log(interator.next());
console.log(interator.next());
console.log(interator.throw('error'));
console.log(interator.next());
console.log(interator.return('stop'));
console.log(interator.next());
console.log(interator.next());
console.log(interator.next());

// for (const item of interator) {
//   console.log(item);
// }
