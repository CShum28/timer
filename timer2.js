const stdin = process.stdin;

stdin.setRawMode(true);
stdin.setEncoding("utf8");

const beep = () => {
  process.stdout.write("\x07");
  console.log("beep!");
};

stdin.on("data", (key) => {
  const timeDelay = key * 1000;
  const isPositive = key > 0;
  const isNum = Number.isInteger(key);
  const isRange = key >= 1 && key <= 9;

  if (isPositive && isNum && isRange) {
    console.log(`Setting timer for ${key} seconds...`);
    setTimeout(() => beep(), timeDelay);
  }

  if (key === "b") beep();

  if (key === "\u0003") {
    console.log("Thanks for using me, ciao!");
    process.exit();
  }
});
