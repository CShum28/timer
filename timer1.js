let arg = process.argv.slice(2);

arg.forEach((str) => {
  const num = Number(str);
  if (num >= 0 && typeof num === "number") {
    setTimeout(() => {
      process.stdout.write("\x07");
    }, num * 1000);
  }
});

// const stdin = process.stdin;
// // don't worry about these next two lines of setup work.
// stdin.setRawMode(true);
// stdin.setEncoding("utf8");

// ////////////
// // Event Handling for User Input
// ////////////

// // on any input from stdin (standard input), output a "." to stdout
// stdin.on("data", (key) => {
//   process.stdout.write(".");
//   if (key === "\u0003") {
//     process.exit();
//   }
// });

// console.log("after callback");

// // \u0003 maps to ctrl+c input
