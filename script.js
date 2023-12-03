// Elementos

const input = document.querySelector("#inputTxt");
const list = document.querySelector(".list");
let control = 0; // variável de controle do atributo #id da <li>
var arr = []; // Array Para LocalStorage
//Funções

keyUp = (e) => {
  if (e.key === "Enter") {
    const li = document.createElement("li");
    li.innerHTML = input.value;
    li.classList.add(`itemList${control}`);
    li.setAttribute("onclick", `completar('itemList${control}')`);
    list.appendChild(li);
    control++;
    input.value = "";
    //Local Storage Add
    if (localStorage.meuArr) {
      arr = JSON.parse(localStorage.getItem("meuArr")); // Converte para array a string 
    }
    arr.push(li.innerHTML);
    localStorage.meuArr = JSON.stringify(arr); //Transforma minha array em String
  }
};

completar = (id) => {
  const confirma = confirm("Você completou essa tarefa?");
  if (confirma) {
    document.body.querySelector(`.${id}`).style.textDecoration = "line-through";
  } else {
    alert("Item não concluído");
    document.body.querySelector(`.${id}`).style.textDecoration = "none";
  }
};

exibirTarefasSalvas = () => {
  list.innerHTML = "";
  if (localStorage.meuArr) {
    arr = JSON.parse(localStorage.getItem("meuArr"));
  }
  for (var i in arr) {
    let li = document.createElement("li");
    li.innerHTML = arr[i];
    list.append(li);
    li.classList.add(`itemList${control}`);
    li.setAttribute("onclick", `completar('itemList${control}')`);
  }
};

limparTarefasSalvas = () => {
  arr = [];
  localStorage.meuArr = JSON.stringify(arr);
  list.innerHTML = "";
  control++;
};

//Eventos

input.addEventListener("keyup", keyUp);
