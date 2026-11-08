export function sum(a, b) {
  return a + b;
}

export function average(numbers) {
  if (nmbers.length === 0) {
    return 0;
  }
  return nmbers.reduce(sum, 0) / numbers.length;
}
