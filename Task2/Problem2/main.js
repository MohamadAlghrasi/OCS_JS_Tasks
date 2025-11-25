let j = 1;
for (let i = 1; i < 5; i++) {
  let t = j;
  for (j; j < t + i; j++) {
    document.write(j);
  }
  document.write("</br>");
}

let num = 1;
for (let row = 1; row <= 4; row++) {
  let line = "";
  for (let col = 1; col <= row; col++) {
    line += num + " ";
    num++;
  }
  console.log(line);
}
