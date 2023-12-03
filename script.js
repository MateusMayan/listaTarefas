// Elementos

const input = document.querySelector("#inputTxt")
const list = document.querySelector(".list")
let control = 0 // variável de controle do atributo #id da <li>

//Funções
keyUp = (e) => {
  if (e.key === "Enter") {
    const li = document.createElement("li")
    li.innerHTML = input.value
    li.classList.add(`itemList${control}`)
    li.setAttribute("onclick", `deletar('itemList${control}')`)
    list.appendChild(li);
    control++;
  }
}

deletar = (id) => {
  const remove = document.querySelector(`.${id}`)
  const confirma = confirm("Quer apagar esse elemento?")
  if (confirma) {
    remove.remove(remove)
  } else {
    alert("Item mantido")
  }
}

//Eventos

input.addEventListener("keyup", keyUp)
