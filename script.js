// Variaveis Globais
const btnEntrar = document.querySelector('.btn-entrar');
const textArea = document.querySelector('#textarea');
const divCounter = document.querySelector('#counter');
const btnEnviar = document.querySelector('#agreement');

// Funcoes

function verificaEmailSenha(event) {
  event.preventDefault();
  const email = document.querySelector('#email');
  const senha = document.querySelector('#senha');

  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

function contador(event) {
  let counter = 500;
  const numCarateres = event.target.value.length;
  counter -= numCarateres;
  divCounter.innerText = counter;
}

// function criaBaseDados() {

//   let dados ={};
//   const nomeSobrenome = document.querySelector('#input-name').value + document.querySelector('#input-lastname').value;
//   const email = document.querySelector('#input-email').value;
//   const casa = document.querySelector('#house').value;
//   const familia = 

// }


// function fixaInformacao(event) {
//   event.preventDefault();
//   const formulario = document.querySelector('#evaluation-form');
//   const inputs = document.querySelectorAll("input")
//   const info = document.createElement('p');
//   const infoGeral = document.createElement('div');

// }

// Eventos

btnEntrar.addEventListener('click', verificaEmailSenha);
textArea.addEventListener('keyup', contador);
// btnEnviar.addEventListener('click', fixaInformacao);
