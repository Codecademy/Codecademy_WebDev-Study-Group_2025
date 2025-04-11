let count = 0;

const button = document.getElementsById("countBtn");

button.addEventListener('click', () => {
  count += 1;
  button.innerHtml = `Clicked ${count} times`;
});
