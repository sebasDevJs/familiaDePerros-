//---VARIABLES---
const numFam = document.getElementById("numFam");
const rolesFam = document.getElementById("rolesFam");
const hiddenElements = document.getElementsByClassName("hidden");

Array.from(hiddenElements).forEach((element) => {
  element.addEventListener("click", prueba);
});
// console.log(hidden[0]);

const roles = [
  "mi nombre",
  "mamá",
  "papá",
  "hemano 1",
  "hermano 2",
  "hermana 1",
  "hermana 2",
  "tio",
  "tia",
  "primo 1",
  "primo 2",
  "prima 1",
  "prima 2",
  "sobrino",
  "sobrina",
];

let dataUser = {
  numfam: "",
  nameFam: {},
};

//---EVENTOS---
numFam.addEventListener("change", (e) => getParamas(e));

//-----FUNCIONES---
function prueba() {
  alert("hola");
  hidden[0].classlist = "display: block";
}

function getParamas(params) {
  console.log(params);
  const value = params.target.value;
  dataUser.numfam = value;
  console.log(dataUser);
  createElemets(value);
  count(value);
  hiddenElements[0].style.display = "block";
  return value;
}

function createElemets(number) {
  rolesFam.innerHTML = "";
  let i = -1;
  roles.map(() => {
    let id = ++i;
    const element = document.createElement("input");
    element.type = "checkbox";
    element.id = `checkbox${id}`;
    element.addEventListener("change", () => handleCheckBoxChange(number));

    const label = document.createElement("label");
    label.htmlFor = `checkbox${id}`;
    label.textContent = roles[i];

    rolesFam.appendChild(label);
    rolesFam.appendChild(element);
  });
}
function handleCheckBoxChange(maxSelections) {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  const selected = Array.from(checkboxes).filter(
    (checkbox) => checkbox.checked
  );

  // Si se alcanza el límite, deshabilitar los checkboxes no seleccionados
  if (selected.length >= maxSelections) {
    checkboxes.forEach((checkbox) => {
      if (!checkbox.checked) {
        checkbox.disabled = true;
      }
    });
  } else {
    // Si no se ha alcanzado el límite, habilitar todos los checkboxes
    checkboxes.forEach((checkbox) => {
      checkbox.disabled = false;
    });
  }
}

function count(number) {

  for (let i = number; i <= 0; i--) {
    console.log("te quea ", i, "elecciones");
    
    
  }
}
