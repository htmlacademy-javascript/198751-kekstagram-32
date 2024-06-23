// Функция для проверки длины строки.Она принимает строку, которую нужно проверить, и максимальную длину и возвращает true, если строка меньше или равна указанной длине, и false, если строка длиннее.Эта функция нам пригодится для валидации формы.

const checkLengthString = (scring, length) => scring.length <= length;

// Строка короче 20 символов
checkLengthString('проверяемая строка', 20); // true
// Длина строки ровно 18 символов
checkLengthString('проверяемая строка', 18); // true
// Строка длиннее 10 символов
checkLengthString('проверяемая строка', 10); // false

// Функция для проверки, является ли строка палиндромом. Палиндром— это слово или фраза, которые одинаково читаются и слева направо и справа налево.

const checkPalindrome = string => {
  string = string.replaceAll(' ', '').toLowerCase();

  return string.split('').reverse().join('') === string;
}

// Строка является палиндромом
checkPalindrome('топот'); // true
// Несмотря на разный регистр, тоже палиндром
checkPalindrome('ДовОд'); // true
// Это не палиндром
checkPalindrome('Кекс'); // false
// Это палиндром
checkPalindrome('Лёша на полке клопа нашёл '); // true

// Функция принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа.Если в строке нет ни одной цифры, функция должна вернуть NaN

const getNumber = string => {
  string = string.toString();
  let number = '';

  for (let i = 0; i < string.length; i++) {
    number += !Number.isNaN(parseInt(string[i], 10)) ? string[i] : '';
  }

  return parseInt(number, 10);
}

getNumber('2023 год'); // 2023
getNumber('ECMAScript 2022'); // 2022
getNumber('1 кефир, 0.5 батона'); // 105
getNumber('агент 007'); // 7
getNumber('а я томат'); // NaN
