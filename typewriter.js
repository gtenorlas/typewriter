const sentence = "hello there from lighthouse labs";

setTimeout(() => {
  let delayTime = 0;
  for (const char of sentence) {
    setTimeout(() => {
      process.stdout.write(char);
    }, delayTime * 50);
    delayTime++;
  }
  setTimeout(() => {
    console.log("");
  }, delayTime * 50);
}, 3000);