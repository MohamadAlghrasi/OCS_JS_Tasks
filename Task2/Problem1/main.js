let ReadMonth = prompt("Please enter your birthdate month from 1 to 12 ");
// prompt return string...
switch (ReadMonth) {
  case "1": // so the correct is: case "1", the wrong is case 1
    document.write("Your month is January");
    break;
  case "2":
    document.write("Your month is February");
    break;
  case "3":
    document.write("Your month is March");
    break;
  case "4":
    document.write("Your month is April");
    break;
  case "5":
    document.write("Your month is May");
    break;
  case "6":
    document.write("Your month is June");
    break;
  case "7":
    document.write("Your month is July");
    break;
  case "8":
    document.write("Your month is August");
    break;
  case "9":
    document.write("Your month is September");
    break;
  case "10":
    document.write("Your month is 7 October");
    break;
  case "11":
    document.write("Your month is November ");
    break;
  case "12":
    document.write("Your month is December");
    break;
  default:
    document.write("Your month is 7 October");
    break;
}
