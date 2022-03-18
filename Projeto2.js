//Necessário instalar a biblioteca prompt (npm i prompt-sync) e também a biblioteca chalk(npm i chalk@3.0.0)
console.clear();
const prompt = require("prompt-sync")();
const chalk = require("chalk");

let jogador = "";
let pc = 0;
let jogada = ["pedra", "papel", "tesoura"];
const fim = chalk.bold.cyanBright;
const pontojogador = chalk.bold.green;
const pontopc = chalk.bold.red;
const warning = chalk.bold.keyword("orange");
const empate = chalk.bold.yellowBright;
let continuar = "";
console.log(
  "Vamos jogar um jogo chamado pedra, papel e tesoura. As regras são simples, você escolhe sua jogada dentre 3 opções, Pedra, Papel e Tesoura, onde pedra ganha da tesoura, mas perde para o papel, a tesoura ganha do papel, mas perde para a pedra e papel ganha da pedra, mas perde para a tesoura. Vamos lá? Primeiramente você irá decidir a quantidade de rodadas que deseja jogar. Após isso você irá decidir qual será sua jogada."
);
while (continuar == "") {
  let rodadas = +prompt("Quantas rodadas deseja jogar?");

  while (rodadas <= 0 || isNaN(rodadas)) {
    rodadas = +prompt(
      warning(
        "Digite um numero válido para a quantidade de rodadas. Quantas rodadas deseja jogar?"
      )
    );
  }
  let contadorpc = 0;
  let contadorjogador = 0;
  let contadorempate = 0;
  for (let i = 1; i < rodadas + 1; i++) {
    pc = Math.floor(Math.random() * 3);
    pc = jogada[pc];
    console.log(`Digite sua jogada, da ${i}ª rodada onde:
    0 ----------------pedra
    1 ----------------papel
    2 ----------------tesoura \n `);
    jogador = +prompt();
    while (jogador !== 0 && jogador !== 1 && jogador !== 2) {
      console.log(
        warning(`Digite apenas 0, 1 ou 2 para sua jogada.
    Digite sua jogada, da ${i}ª rodada onde:
    0 ----------------pedra
    1 ----------------papel
    2 ----------------tesoura \n `)
      );
      jogador = +prompt();
    }

    console.log("");
    jogador = jogada[jogador];
    console.log(`
    ${i}ª rodada:\n 
    PC = ${pc} \n 
    Jogador = ${jogador}`);

    if (jogador === pc) {
      console.log("");
      console.log(empate("Empate"));
      contadorempate++;
    }
    if (jogador == "pedra" && pc == "papel") {
      console.log("");
      console.log(pontopc("O computador ganhou essa rodada!"));
      contadorpc++;
    }
    if (jogador == "pedra" && pc == "tesoura") {
      console.log("");
      console.log(pontojogador("Você ganhou essa rodada!"));
      contadorjogador++;
    }
    if (pc == "pedra" && jogador == "papel") {
      console.log("");
      console.log(pontojogador("Você ganhou essa rodada!"));
      contadorjogador++;
    }
    if (pc == "tesoura" && jogador == "papel") {
      console.log("");
      console.log(pontopc("O computador ganhou essa rodada!"));
      contadorpc++;
    }
    if (jogador == "tesoura" && pc == "papel") {
      console.log("");
      console.log(pontojogador("Você ganhou essa rodada!"));
      contadorjogador++;
    }
    if (jogador == "tesoura" && pc == "pedra") {
      console.log("");
      console.log(pontopc("O computador ganhou essa rodada!"));
      contadorpc++;
    }
    console.log(`Placar atual:
    Jogador: ${contadorjogador} ponto(s)
    PC: ${contadorpc} ponto(s)
    Empates: ${contadorempate} `);
  }
  console.log("");
  console.log(
    `O computador venceu ${contadorpc} rodada(s) e você venceu ${contadorjogador} rodada(s)`
  );
  console.log("");
  if (contadorjogador > contadorpc) {
    console.log(
      pontojogador(
        `O grande vencedor foi você, com ${contadorjogador} ponto(s)`
      )
    );
  } else if (contadorpc > contadorjogador) {
    console.log(
      pontopc(`O grande vencedor foi o computador, com ${contadorpc} ponto(s)`)
    );
  } else {
    console.log(
      empate(`Temos um empate aqui, ambos fizeram ${contadorjogador} ponto(s)`)
    );
  }
  continuar = prompt(
    "Para continuar a jogar aperte enter ou digite qualquer outra coisa para sair: "
  );
}
console.log("");
console.log(fim("Foi bom jogar com você, volte sempre! :)"));
