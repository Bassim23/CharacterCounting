function countLetters(letters) {
  var output = {};

  for (var i = 0; i < letters.length; i++) {
    var character = letters[i];

    if (character in output) {
      output[character] = output[character] + 1;
    } else if(character != ' ') {
      output[character] = 1;
    }
  }
    return output;
}
console.log(countLetters("loopy lighthouse"));