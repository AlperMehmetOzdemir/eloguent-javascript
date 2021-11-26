function arrayToList(arr) {
  let list = {};
  arrayToListHelper(list, arr);
  return list;
}

function arrayToListHelper(list, arr) {
  list.value = arr[0];
  let rest = {};
  if (arr.length > 0) {
    list.rest = arrayToListHelper(rest, arr.slice(1));
  } else {
    return null;
  }
  return list;
}

function listToArray(list) {
  let arr = [];
  listToArrayHelper(arr, list);
  return arr;
}

function listToArrayHelper(arr, list) {
  arr.push(list.value);
  if (list.rest == null) {
    return;
  } else {
    listToArrayHelper(arr, list.rest);
  }
}

function prepend(element, list) {
  return {
    value: element,
    rest: list,
  };
}

function getNthFromList(list, n) {
  if (n == 0){
    return list.value
  } else {
    return getNthFromList(list.rest, n-1);
  }
}

let arr = [1, 2, 3, 4, 5];
let list = arrayToList(arr);

console.log(list);
console.log(listToArray(list));

let newList = prepend(99, list);
console.log(newList);

console.log(getNthFromList(newList, 2));
console.log(getNthFromList(newList, 4));
console.log(getNthFromList(newList, 0));
