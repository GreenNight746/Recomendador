let campoIdade;
let campoCarros;
let campoAcäo;

function setup() {
  createCanvas(800, 400);
  createElement("h2", "Recomendador de filmes");
  createSpan("Sua idade:");
  campoIdade = createInput("5");
  campoAção = createCheckbox("Gosta de ação?");
  campoCarros = createCheckbox("Gosta  de carros?");
}

function draw() {
  background("orange");
  let idade = campoIdade.value();
  let gostaDeAcao = campoCarros.checked();
  let gostaDeCarros = campoCarros.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeCarros, gostaDeAcao);

  fill(color(76, 0, 115));
  textAlign(CENTER, CENTER);
  textSize(38);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeCarros, gostaDeAcao) {
  if (idade >= 10) {
    if (idade >= 14) {
      return "Need For Speed";
    } else {
      if (idade >= 12) {
        if (gostaDeCarros || gostaDeAcao) {
          return "Homem aranha: no aranhaverso";
        } else {
          return "Deadpool";
        }
      } else {
        if (gostaDeCarros) {
          return "Gran Turismo";
        } else {
          return "007";
        }
      }
    }
  } else {
    if (gostaDeAcao) {
      return "Vingadores Ultimato";
    } else {
      return "Velozes e Furiosos";
    }
  }
}
