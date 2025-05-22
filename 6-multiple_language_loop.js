const languages = [
  "C is fun"
  "Python is cool"
  "Javascript is amazing"
];
let outputString = "";
for (const line of languages){
  outputString += line + "\n";
}
console.log(outputString.trimEnd());