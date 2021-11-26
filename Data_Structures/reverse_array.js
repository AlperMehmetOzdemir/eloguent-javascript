function reverseArray(arr) {
  let newArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }
  return newArr;
}

function reverseArrayInPlace(arr) {
  let temp;
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
  }
  return arr
}

let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

arr2 = reverseArray(arr1);

console.log("arr1", arr1);
console.log("arr2", arr2);

reverseArrayInPlace(arr1);
console.log("arr1 reversed", arr1);
