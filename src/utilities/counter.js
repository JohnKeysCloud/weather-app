export const createCounter = () => {
  let count = 0;
  return {
    increment: () => (count += 1),
    decrement: () => (count -= 1),
    getCount: () => count,
    reset: () => count = 0
  };
};