function countBs(input) {
  let count = 0;
  for (let i = 0; i < input.length; i++) {
    input[i] == "B" && count++;
  }
  return count;
}

function countChar(input, char) {
  let count = 0;
  for (let i = 0; i < input.length; i++) {
    input[i] == char && count++;
  }
  return count;
}

function countBsRefactored(input) {
  return countChar(input, "B");
}


