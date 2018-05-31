var removeDuplicate = (arrArg) => {
    return arrArg.filter((elem, pos, arr) => {
      return arr.indexOf(elem) == pos;
    });
  };

  let test = [2,3,5,3,2,7];
  removeDuplicate(test);

