let Num;

function CheckPandigital(Num) {
  let Str = Num.toString();
  for (let index = 0; index <= 9; index++) {
    if (Str.includes(index.toString()));
    else {
      return false;
      break;
    }
    if (index == 9) document.write("yes");
  }
}

document.write(CheckPandigital(12));
