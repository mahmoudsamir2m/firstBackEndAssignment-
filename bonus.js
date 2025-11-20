
const createCounter = (init) => {
  let current = init;
  return {
    increment: () => ++current,
    decrement: () => --current,
    reset: () => (current = init),
  };
};

const counter = createCounter(4)

console.log(counter.increment());
console.log(counter.reset());
console.log(counter.decrement());

