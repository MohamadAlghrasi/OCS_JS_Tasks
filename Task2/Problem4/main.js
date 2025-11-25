let FirstNum, SecNum;
function FindMulti(FirstNum, SecNum) {
  let Result = 0;
  for (let index = 0; index < SecNum; index++) {
    Result += FirstNum;
  }
  document.write(Result);
}

FindMulti(5, 9);
