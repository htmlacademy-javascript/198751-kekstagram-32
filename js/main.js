function checkLengthString(scring, length) {
  return scring.length <= length;
}

// Строка короче 20 символов
checkLengthString('проверяемая строка', 20); // true
// Длина строки ровно 18 символов
checkLengthString('проверяемая строка', 18); // true
// Строка длиннее 10 символов
checkLengthString('проверяемая строка', 10); // false

function checkPalindrome(string) {
  let newString = '';

  string = string.replaceAll(' ', '').toLowerCase();

  for (let i = string.length - 1; i >= 0; i--) {
    newString += string[i];
  }

  return newString === string;
}

// Строка является палиндромом
checkPalindrome('топот'); // true
// Несмотря на разный регистр, тоже палиндром
checkPalindrome('ДовОд'); // true
// Это не палиндром
checkPalindrome('Кекс'); // false
// Это палиндром
checkPalindrome('Лёша на полке клопа нашёл '); // true

function getNumber(string) {
  string = string.toString();
  let number = '';

  for (let i = 0; i < string.length; i++) {
    let charset = string[i];

    charset = parseInt(charset, 10);

    number += !isNaN(charset) ? charset : '';
  }

  return parseInt(number, 10);
}

getNumber('2023 год'); // 2023
getNumber('ECMAScript 2022'); // 2022
getNumber('1 кефир, 0.5 батона'); // 105
getNumber('агент 007'); // 7
getNumber('а я томат'); // NaN
