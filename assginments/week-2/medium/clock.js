let time;
setInterval(() => {
  console.clear();
  time = new Date().toLocaleTimeString();
  console.log(time);
}, 1000);
