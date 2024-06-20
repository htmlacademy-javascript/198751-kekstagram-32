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
