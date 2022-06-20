let nomes = ["explodyparrot.gif", "bobrossparrot.gif", "fiestaparrot.gif",
  "metalparrot.gif", "revertitparrot.gif", "tripletsparrot.gif", "unicornparrot.gif"]


let doisselecionados = []
let ncartas = prompt("Quantas Cartas?")
let e;

function comparador() {
  return Math.random() - 0.5;
}

while (ncartas < 4 || ncartas > 14 || ncartas % 2 != 0) {
  ncartas = prompt("Números de cartas entre 4 e 14:")
}


///apresentarCartas()
//function apresentarCartas() {
//document.querySelector("ul").innerHTML = ""
// for (e = 0; e < ncartas; e++) {
//const templateimgx =
//`<li class="card">

// <div class="front-face face caixacarta">
//<img class="imgx" src="./imagens/front.png">
//</div>
//</li>`;

//document.querySelector(".blococartas").innerHTML += templateimgx

//}
//}

let c = 0;
function spoiler(elemento) {

  c = c + 1;
  if (c == 2) {
    comff = document.querySelectorAll("ul .front-face")
    for (let i = 0; i < comff.length; i++) {
      comff[i].classList.remove("front-face")
      comff[i].classList.add("back-face")
    }
    combf = document.querySelectorAll("ul .back-face")
    for (let i = 0; i < combf.length; i++) {
      combf[i].classList.remove("back-face")
      combf[i].classList.add("front-face")
    }

    setTimeout(comecarJogo, 4000)
  }
}
const cartas = []
for (e = 0; e < ncartas / 2; e++) {
  cartas.push(nomes[e])
  cartas.push(nomes[e])
}
cartas.sort(comparador);

function comecarJogo() {
  document.querySelector("ul").innerHTML = ""
  for (e = 0; e < cartas.length; e++) {
    const templateimgx =
      `<li onclick="cardClicado(this)" class="card">
      <div  class="back-face escondido">
      <img class="imgx" src="./imagens/${cartas[e]}">
      </div>
      <div class="front-face">
      <img class="imgx" src="./imagens/front.png">
      </div>
    </li>`;

    document.querySelector(".blococartas").innerHTML += templateimgx

  }
}

function cardClicado(elemento) {
  if (elemento.classList.contains("selecionada")) {
    return
  }
  c = c + 1;

  //primeira carta clicada
  if (c % 2 != 0) {
    elemento.classList.add("selecionada", "primeira")
    elemento.querySelector(".back-face").classList.remove("escondido")
    elemento.querySelector(".front-face").classList.add("escondido")
  }
  //segunda carta clicada
  else {
    elemento.classList.add("selecionada")
    elemento.querySelector(".back-face").classList.remove("escondido")
    elemento.querySelector(".front-face").classList.add("escondido")
    console.log(document.querySelector(".primeira").querySelector(".back-face"))
    console.log(elemento.querySelector(".back-face"))
    //usuário acertou
    if (document.querySelector(".primeira").querySelector(".back-face").querySelector("img").src == elemento.querySelector(".back-face").querySelector("img").src) {
      console.log("acertou")
      document.querySelector(".primeira").classList.remove("primeira")
    }
    //usuário errou
    else {
      setTimeout(function () {
        console.log("errou")
        document.querySelector(".primeira").querySelector(".front-face").classList.remove("escondido")
        document.querySelector(".primeira").querySelector(".back-face").classList.add("escondido")
        document.querySelector(".primeira").classList.remove("selecionada", "primeira")

        elemento.classList.remove("selecionada")
        elemento.querySelector(".back-face").classList.add("escondido")
        elemento.querySelector(".front-face").classList.remove("escondido")
      }, 2000)

    }
  }
}

//if (doisselecionados[0] == doisselecionados[1]) {
// console.log("são iguais")
//}
comecarJogo()






