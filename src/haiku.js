const prefixes = [
  "ante",
  "anti",
  "circum",
  "co",
  "de",
  "dis",
  "em",
  "en",
  "epi",
  "ex",
  "extra",
  "fore",
  "homo",
  "hyper",
  "il",
  "im",
  "in",
  "ir",
  "infra",
  "inter",
  "intra",
  "macro",
  "micro",
  "mid",
  "mis",
  "mono",
  "non",
  "omni",
  "para",
  "post",
  "pre",
  "re",
  "semi",
  "sub",
  "super",
  "therm",
  "trans",
  "tri",
  "un",
  "uni"
].sort(function(a, b) {
  return b.length - a.length;
});

const suffixes = [
  "acy",
  "al",
  "ance",
  "ence",
  "dom",
  "er",
  "or",
  "ism",
  "ist",
  "ity",
  "ty",
  "ment",
  "ness",
  "ship",
  "sion",
  "tion",
  "ate",
  "en",
  "ify",
  "fy",
  "ise",
  "ize",
  "able",
  "ible",
  "al",
  "esque",
  "ful",
  "ic",
  "ical",
  "ious",
  "ous",
  "ish",
  "ive",
  "less",
  "y",
  "ly",
  "ward",
  "wards",
  "wise"
].sort(function(a, b) {
  return b.length - a.length;
});

const twoConsonantsException = [
  "ght",
  "th",
  "sh",
  "ph",
  "th",
  "ch",
  "wh",
  "gh"
]; //if next letter is h then do nothing
const vowelsList = ["a", "e", "i", "o", "u"]; //ignore y for now

export class Haiku {
  constructor(inputPoem) {
    this.poem = inputPoem;
  }

  correctLineNumber() {
    let lineArr = this.poem.split("\n");
    if (lineArr.length != 3) {
      return false;
    }
    return true;
  }
  separatePrefix(word) {
    let newWord = word;
    prefixes.forEach(function(prefix) {
      if (newWord !== word) return false;
      let regex = new RegExp(prefix, "g");
      if (regex.test(word) == true) {
        newWord =
          word.substring(0, regex.lastIndex) +
          "-" +
          word.substring(regex.lastIndex);
        return false;
      }
    });
    return newWord;
  }
  //endless
  separateSuffix(word) {
    let newWord = word;
    suffixes.forEach(function(suffix) {
      if (newWord !== word) return false;
      let regex = new RegExp(suffix + "$", "g");
      if (regex.test(word) == true) {
        newWord =
          word.substring(0, regex.lastIndex - suffix.length) + "-" + suffix;
        console.log(newWord);
        return false;
      }
    });
    return newWord;
  }

  splitTwoConsonants(word) {
    let newWord = word;
    twoConsonantsException.forEach(function(exception) {
      let matchingSubstrings = word.match(new RegExp(exception, "g"));
    });
    for (let i = 0; i < word.length - 1; i++) {
      if (
        twoConsonantsException.includes(word.substring(i, i + 2)) &&
        word[i + 1] == "h"
      ) {
        continue;
      } else if (
        twoConsonantsException.includes(word[i]) &&
        !vowelsList.includes(word[i + 1])
      ) {
        //split
        newWord = word.substring(0, i + 1) + "-" + word.substring(i + 1);
      }
      // if the consonant does not belong to the exceptions list and if they are vowels
      else if (
        !vowelsList.includes(word[i]) &&
        !vowelsList.includes(word[i + 1])
      ) {
        newWord = word.substring(0, i + 1) + "-" + word.substring(i + 1);
      } else {
      }
    }
  }
  //spec 3
  splitConsonantSurroudedByVowels(
    word //it does not matter if the vowels have long or short sound for the purpose of this program.
  ) {
    let newWord = word;
    for (let i = 1; i < word.length - 1; i++) {
      if (
        !vowelsList.includes(word[i]) &&
        vowelsList.includes(word[i - 1]) &&
        vowelsList.includes(word[i + 1])
      ) {
        //check to see if consonant is surrounded by vowels
        word.replace(
          word.substring(i - 1, i + 2),
          word[i - 1] + "-" + word.substring(i, i + 2)
        );
      }
      return newWord;
    }
  }
  //spec 4
  splitBeforeCkle(word) {
    let newWord = word;
    if (word.endsWith("ckle")) {
      word.replace("ckle", "ck-le");
    }
    return newWord;
  }

  //spec 5
  splitBeforeLe(word) {
    let newWord = word;
    if (word.endsWith("le") && !vowelsList.includes(word[word.length - 3])) {
      word.replace(
        word.substring(word.length - 3),
        "-" + word.substring(word.length - 3)
      );
    }
    return newWord;
  }
}
