// 1. removeDuplicate
var someStr = "Hello Naveen";

var splitStr = someStr.split('');
var removeDuplicate = [...new Set(splitStr)];
console.log(removeDuplicate);

// 2. find the largest word

var someWord = "How are you, Welcome to javascript";

var splitWord = someWord.split(' ');

var findLength = splitWord.filter((a, b) => a.length < b.length)
console.log(findLength);


function longer(champ, contender) {
    return (contender.length > champ.length) ? contender : champ;
  }
  
  function longestWord(str) {
    var words = str.split(' ');
    return words.reduce(longer);
  }
  
  console.log(longestWord("The quick brown fox jumped over the lazy dogs"));