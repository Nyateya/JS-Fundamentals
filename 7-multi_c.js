const arg = process.argv;
const numOccurences = Number(arg);

if (isNaN(numOccurences)){
  console.log("Missing number of occurrences");
} else {
for(let i = 0; i< numOccurences; i++) {
  console.log('C is fun');
  }
} 