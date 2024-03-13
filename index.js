const form = document.querySelector(".form");
const box = document.querySelector(".box");
const inp = document.getElementById("inp");


let fizzbuss = [];
let fizz = [];
let buzz = [];

form.addEventListener("click", (e) => {
  e.preventDefault();
  let inpValue = +inp.value;

  if (inpValue % 3 === 0 && inpValue % 5 === 0) {
    fizzbuss.push(inpValue);
    updataUi();
  } else if (inpValue % 3 === 0) {
    fizz.push(inpValue);
    updataUi();
  } else if (inpValue % 5 === 0) {
    buzz.push(inpValue);
    updataUi();
  } else {
    console.log(inpValue);
  }
  form.reset();
});

function updataUi() {
  box.innerHTML = "";
  box.innerHTML += `
    <span class="box__child1">Fizzbuss: ${fizzbuss.length}</span>
    <span class="box__child2">fizz: ${fizz.length}</span>
    <span class="box__child3">buss: ${buzz.length}</span>
`;
}
updataUi();
