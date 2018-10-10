const prefixes = ["ante", "anti", "circum", "co", "de", "dis", "em", "en", "epi", "ex", "extra", "fore", "homo", "hyper", "il", "im", "in", "ir", "infra", "inter", "intra", "macro", "micro", "mid", "mis", "mono", "non", "omni", "para", "post", "pre", "re", "semi", "sub", "super", "therm", "trans", "tri", "un", "uni"].sort(function(a, b) {return b.length-a.length});

const suffixes = ["acy", "al", "ance", "ence", "dom", "er", "or", "ism", "ist", "ity", "ty", "ment", "ness", "ship", "sion", "tion", "ate", "en", "ify", "fy", "ise", "ize", "able", "ible", "al", "esque", "ful", "ic", "ical", "ious", "ous", "ish", "ive", "less", "y", "ly", "ward", "wards", "wise"].sort(function(a, b) {return b.length-a.length});

export class Haiku {
  constructor(inputPoem) {
    this.poem = inputPoem;
  }

  correctLineNumber() {
    let lineArr = this.poem.split('\n');
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
        newWord = word.substring(0, regex.lastIndex)+"-"+word.substring(regex.lastIndex);
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
      let regex = new RegExp(suffix+"$", "g");
      if (regex.test(word) == true) {
        newWord = word.substring(0, regex.lastIndex-suffix.length)+"-"+suffix;
        console.log(newWord);
        return false;
      }
    });
    return newWord;
  }
}
