function generateDocument(characters, document) {
  // Write your code here.
  const charMap = {},
    docMap = {};
  for (let i = 0; i < characters.length; i++) {
    if (!charMap[characters[i]]) {
      charMap[characters[i]] = 0;
    }

    charMap[characters[i]] += 1;
  }

  for (let i = 0; i < document.length; i++) {
    if (!charMap[document[i]] || charMap[document[i]] <= 0) {
      return false;
    } else {
      charMap[document[i]] -= 1;
    }
  }

  return true;
}

let characters = "Bste!hetsi ogEAxpelrt x ",
  document = "AlgoExpert is the Best!";
console.log(generateDocument(characters, document));
console.log(generateDocument("aheaollabbhb", "hello"));
