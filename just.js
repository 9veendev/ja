let text = "abcdefghijklmuSSSSnopqrstuvwxyz";
let text1 ="Hello";
let text2 ="Naveen";
let some ="Naveen, ssriSnath";
let text4 = "      abcdefghijklmuSSSSnopqrstuvwxyz        ";
console.log(text.length);
console.log(text.charAt(5));
console.log(text.indexOf("k"));
console.log(text.lastIndexOf("u"));
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.replaceAll("S", "K"));
console.log(text.replace("S", "s"));
console.log(text.slice(1, 10));

let text3 = text1.concat(" ", text2);
console.log(text3);
console.log(text4.trim());
console.log(text4.trimStart());
console.log(text4.trimEnd());

let text6 = "5";
text6 = text6.padStart(6,"0");
console.log(text6);

console.log(text.split(""));
console.log(some.replaceAll("s", "S"));




var capStr = "hello, sriNath";
// var splitCapstr = capStr.split(' ');
// var getValue = splitCapstr.toUpperCase(0);
// console.log(splitCapstr);
console.log(capStr.replace("s","S"));
console.log(capStr.replace("N", "n"));