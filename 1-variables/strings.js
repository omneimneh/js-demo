var aString = "abcde";
var anotherString = 'f';
var stringWithQuotesInside = "'different quote can be typed just like that', \"same quotes have to be typed like that\"";
var whatIfIWantIBackSlash = "this is how you do it \\";

var firstLetter = aString[0];
var thisIsUndefined = aString[5];
var alsoIsUndefined = aString[-1];
var concatResult = aString + anotherString;
var substring = aString.substr(1, 2); // from pos, length
var substringLong = aString.substr(1, 10); // from pos, length


console.log("aString", aString);
console.log("firstLetter", firstLetter);
console.log("stringWithQuotesInside", stringWithQuotesInside);
console.log("whatIfIWantIBackSlash", whatIfIWantIBackSlash);
console.log("thisIsUndefined", thisIsUndefined);
console.log("alsoIsUndefined", alsoIsUndefined);
console.log("concatResult", concatResult);
console.log("substring", substring);
console.log("substringLong", substringLong);