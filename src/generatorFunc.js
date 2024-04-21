export function* range(start, end, steps) {
  let curr = start;
  while (curr <= end) {
    yield curr;
    curr += steps;
  }
}
for (const num of range(1, 10, 2)) {
  console.log(num);
}
console.log([...range(1, 10, 3)]);
