let arg = process.argv.slice(2);

arg.forEach((str) => {
  const num = Number(str);
  if (num >= 0 && typeof num === "number") {
    setTimeout(() => {
      process.stdout.write("\x07");
    }, num * 1000);
  }
});
