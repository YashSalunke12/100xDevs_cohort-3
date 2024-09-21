function setTimeoutPromisified(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms);
  });
}

setTimeoutPromisified(2000).then(() => console.log("hello"));
