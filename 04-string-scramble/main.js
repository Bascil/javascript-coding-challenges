function StringScramble(str1, str2) {
  // iterate over every character in str2
  for (let i = 0; i < str2.length; i++) {
    // get current character
    let character = str2[i];

    // find the index of character in str1
    let index = str1.indexOf(character);

    console.log(index);
  }
}
