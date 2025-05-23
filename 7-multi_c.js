const arg = process.argv[2]
if (isNaN(numOccurences)||numOccurences <= 0) {
  console.log("Missing number of occurrences")
} else {
  let outputString = "";
}for(let i = 0; i< numOccurences; i++) {
  outputString += "C is fun\n";
}console.log(outputString.trimEnd());