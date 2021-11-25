function isEven(num) {
  if (num == 0) {
    return true;
  } else if (num == 1) {
    return false;
  } else {
    return isEven(num - 2);
  }
}

function isEvenFixed(num) {
  if (num == 0) {
    return true;
  } else if (num == 1) {
    return false;
  } else if (num > 0) {
    return isEvenFixed(num - 2);
  } else {
    return isEvenFixed(num + 2);
  }
}

console.log(isEvenFixed(50))
console.log(isEvenFixed(75))
console.log(isEvenFixed(-1))
console.log(isEvenFixed(-4))