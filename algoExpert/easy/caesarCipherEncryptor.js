function caesarCipherEncryptor(input, key) {
  // Write your code here.
  let i = 0;
  let result = "";
  key = key % 26;
  while (input.length > i) {
    let unicode = input.charCodeAt(i);
    let nextChar = unicode + key;

    if (nextChar <= 122) {
      result += String.fromCharCode(nextChar);
    } else {
      result += String.fromCharCode(96 + (nextChar % 122));
    }

    i++;
  }

  // 97-122
  return result;
}

console.log(caesarCipherEncryptor("abc", 52));

console.log(caesarCipherEncryptor("xyz", 2));
