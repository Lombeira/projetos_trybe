// Desafio 10
function techList(techs, nome) {
  let array = [];
  for (let index of techs.sort()) {
    let object = {
      tech: index,
      name: nome,
    };
    array.push(object);
  }
  return array.length === 0 ? 'Vazio!' : array;
}

// Desafio 11
function hasElevenDigits(numbers) {
  return numbers.length === 11;
}

function repCount(numbers) {
  let obj = {};
  let arr = [];
  numbers.forEach((number) => {
    obj[number] = (obj[number] || 0) + 1;
    arr.push(obj[number]);
  });
  return arr.some((value) => value >= 3);
}

function betweenZeroAndNine(numbers) {
  for (let number of numbers) {
    if (number < 0 || number > 9) {
      return true;
    }
  }
}

function generatePhoneNumber(numbers) {
  if (!hasElevenDigits(numbers)) {
    return 'Array com tamanho incorreto.';
  }
  if (betweenZeroAndNine(numbers) || repCount(numbers)) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  let ddd = `(${numbers[0]}${numbers[1]}) `;
  let randomNumber = `${numbers[2]}${numbers[3]}${numbers[4]}${numbers[5]}${numbers[6]}-`;
  let randomNumber2 = `${numbers[7]}${numbers[8]}${numbers[9]}${numbers[10]}`;
  return `${ddd}${randomNumber}${randomNumber2}`;
}

// Desafio 12
function hasLessThanSum(x, y, z) {
  let abs = Math.abs(y - z);
  return x < y + z && x > abs;
}

function triangleCheck(lineX, lineY, lineZ) {
  return (
    hasLessThanSum(lineX, lineY, lineZ)
    && hasLessThanSum(lineY, lineX, lineZ)
    && hasLessThanSum(lineZ, lineX, lineY)
  );
}

// Desafio 13
function hydrate(text) {
  let n = text.match(/\d+/g);
  const total = n.reduce(
    (currentTotal, item) => parseInt(item, 10) + currentTotal, 0,
  );
  return total > 1 ? `${total} copos de água` : `${total} copo de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
