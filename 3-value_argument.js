const firstArgument = process.argv[2];

if (firstArgument === undefined) {
  console.log("No Argument");
} else {
  console.log(firstArgument);
}