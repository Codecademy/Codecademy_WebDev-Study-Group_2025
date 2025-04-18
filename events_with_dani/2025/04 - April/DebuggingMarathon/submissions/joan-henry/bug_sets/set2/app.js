let count = 0;

let button = document.getElementById("countBtn");
console.log(button)

button.addEventListener('click', () => {
  count += 1;
  console.log(count)
  button.innerText = `Clicked ${count} times`;
});