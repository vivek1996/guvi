var removeDuplicate = () => {
  let test = [];
  let length = prompt("Enter the length");
  length = Number(length);
  for (let i = 1; i <= length; i++) {
    let temp = prompt("enter the numbers");
    test.push(temp);
  }
  let arr = test.filter((elem, pos, arr) => {
    return arr.indexOf(elem) == pos;
  });
  arr.sort();
  console.log(arr);
};

removeDuplicate();
