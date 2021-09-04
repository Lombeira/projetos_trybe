// Desafio 1
function compareTrue(param1, param2) {
  if (param1 === true && param2 === true) return true;
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let calc = (base * height) / 2;
  return calc;
}

// Desafio 3
function splitSentence(str) {
  let arrayOfStrings = str.split(' ');
  return arrayOfStrings;
}

// Desafio 4
function concatName(array) {
  let comma = ', ';
  return array[array.length - 1] + comma + array[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  wins *= 3;
  return wins + ties;
}

// Desafio 6
function highestCount(array) {
  let count = 0;
  let maior = Math.max(...array);
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === maior) count += 1;
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  const a = Math.abs(cat1 - mouse);
  const b = Math.abs(cat2 - mouse);
  if (a < b) return 'cat1';
  if (a > b) return 'cat2';
  if (a === b) return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(numeros) {
  const result = numeros.map((numero) => {
    if (numero % 3 === 0 && numero % 5 === 0) return 'fizzBuzz';
    if (numero % 3 === 0) return 'fizz';
    if (numero % 5 === 0) return 'buzz';
    return 'bug!';
  });
  return result;
}

// Desafio 9
function encode(str) {
  let subList = {
    a: '1',
    e: '2',
    i: '3',
    o: '4',
    u: '5',
  };
  let listEncoded = str.replace(/a|e|i|o|u/gi, (item) => {
    let it = subList[item];
    let listItem = it.replace(/(?:^|\s)\S/g, (elemento) => elemento);
    return listItem;
  });
  return listEncoded;
}

function decode(str2) {
  let subList = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  let listEncoded = str2.replace(/1|2|3|4|5/gi, (item) => {
    let itt = subList[item];
    let listItem = itt.replace(/(?:^|\s)\S/g, function (elemento) {
      return elemento;
    });
    return listItem;
  });
  return listEncoded;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
