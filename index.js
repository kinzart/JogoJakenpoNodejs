const readline = require('readline');


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question('Qual sua jogada, pedra, papel ou tesoura? ', (res) => {


    const opcoes = {
        pedra: 1,
        papel: 2,
        tesoura: 3,
       

      };

      
      const escolhaDoUsuario = opcoes[res];
      const escolhaDoComputador = Math.round(Math.random() * 2) + 1;
      

  if (escolhaDoUsuario === 1 && escolhaDoComputador === 3) {
    console.log('cpu: tesoura', ' Você ganhou!');
  } else if (escolhaDoUsuario === 1 && escolhaDoComputador === 2) {
    console.log('cpu: papel', ' Você perdeu!');
  } else if (escolhaDoUsuario === 1 && escolhaDoComputador === 1) {
    console.log('cpu: pedra', ' Empatou!');
  }

  if (escolhaDoUsuario === 2 && escolhaDoComputador === 1) {
    console.log('cpu: pedra', ' Você ganhou!');
  } else if (escolhaDoUsuario === 2 && escolhaDoComputador === 3) {
    console.log('cpu: tesoura', ' Você perdeu!');
  } else if (escolhaDoUsuario === 2 && escolhaDoComputador === 2) {
    console.log('cpu: papel', ' Empatou!');
  }

  if (escolhaDoUsuario === 3 && escolhaDoComputador === 2) {
    console.log('cpu: papel', ' Você ganhou!');
  } else if (escolhaDoUsuario === 3 && escolhaDoComputador === 1) {
    console.log('cpu: pedra', ' Você perdeu!');
  } else if (escolhaDoUsuario === 3 && escolhaDoComputador === 3) {
    console.log('cpu: tesoura', ' Empatou!');
  }
  else if (escolhaDoUsuario == 0 || escolhaDoUsuario == '' 
  ){
      console.log('Eita, digita ai ne ... quer jogar ou nao? aff')
  }
  else {
      console.log(`${res}??? Que que isso? Nao sabe jogar Jakenpo? Jogue de novo, escreva corretamente tbm po!`)
  }
    rl.close();
  });
  