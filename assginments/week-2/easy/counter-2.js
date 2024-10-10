let counter = 0;

const updateCounter = () => {
  console.clear();
  counter++;
  console.log(counter);
  setTimeout(updateCounter, 1000);
};

updateCounter();
