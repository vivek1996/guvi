var deleteNumber = () => {
  let num = prompt("enter the number");
  let del = Number(prompt("Enter the numbers to delete"));
  console.log(num, del);
  let arr = num.split("");
  let result;
  result = arr.splice(del);
  result = Number(result.join(""));
  console.log(result);
};
deleteNumber();
