var longestSubstring = () => {
  let test = [];
  let length = prompt("Enter the length");
  for (let i = 1; i <= length; i++) {
    let temp = prompt("enter the strings");
    test.push(temp);
  }
  function sharedStart(array) {
    var A = array.concat().sort(),
      a1 = A[0],
      a2 = A[A.length - 1],
      L = a1.length,
      i = 0;
    while (i < L && a1.charAt(i) === a2.charAt(i)) i++;
    return a1.substring(0, i);
  }

  console.log(sharedStart(test));
};

longestSubstring();
