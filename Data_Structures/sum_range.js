function range(start, end, step = 1) {
  let res = [];
  if(step > 0){
    for (let i = start; i <= end; i += step) {
      res.push(i);
    }
  } else {
    for (let i = start; i >= end; i += step) {
      res.push(i);
    }
  }
  return res;
}

function sum(numbers) {
  let res = 0;
  numbers.forEach((number) => (res += number));
  return res;
}

console.log(sum(range(1, 10)));
console.log(sum(range(1, 10, 2))); 
console.log(sum(range(5, 2, -1))); 
