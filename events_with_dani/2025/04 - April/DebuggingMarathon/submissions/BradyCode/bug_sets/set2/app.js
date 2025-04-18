let count = 0;

const button = document.getElementById("countBtn");

button.addEventListener("click", () => {
  count += 1;
  button.innerHTML = `Clicked ${count} times`;
});
