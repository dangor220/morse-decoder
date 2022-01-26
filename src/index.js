const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

 function decode(expr) {

//     Terrible decision, not my day.
//     I'll take a look at better work. Let it be for now.

  let strArr = expr.split("");
  let strLength = strArr.length / 10;
  let symArr = [];

  for (let i = 0; i < strLength; i++) {
    let numberArr = [];
    for (let j = 0; j < 10; j++) {
      numberArr.push(strArr.shift([j]));
    }
    symArr.push(numberArr);
  }

  let arrTwo = symArr.map((item) => {
    return item.join("");
  });

  let final = [];

  arrTwo.forEach((item) => {
    let newArr = item.split("");
    let sss = [];
    for (let i = 0; i < 5; i++) {
      let numberArr = [];
      for (let j = 0; j < 2; j++) {
        numberArr.push(newArr.shift([j]));
      }
      sss.push(numberArr.join(""));
    }
    final.push(sss);
  });

  final.forEach((item) => {
    for (let i = 0; i < item.length; i++) {
      if (item[i] === "00") {
        item[i] = "";
      }
    }
  });

  for (let item of final) {
    for (let i = 0; i < item.length; i++) {
      if (item[i] === "11") {
        item[i] = "-";
      }
      if (item[i] === "10") {
        item[i] = ".";
      }
    }
  }

  final = final.map((item) => item.join(""));
  let result = [];
  for (let i of final) {
    for (let [key, value] of Object.entries(MORSE_TABLE)) {
      if (i === key) {
        result.push(value);
      }
      if (i === "**********") {
        result.push(" ");
        break;
      }
    }
  }
  return result.join("");
}

module.exports = {
  decode,
};
