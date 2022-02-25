// Variaveis Globais
const btnEntrar = document.querySelector('.btn-entrar');
// const textArea = document.querySelector('#textarea');

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

// function contador(event) {
//   const divCounter = document.querySelector("#counter");
//   let counter = 500;
//   const numCarateres = event.target.value.length;
//   counter -= numCarateres;
// }

// Eventos

btnEntrar.addEventListener('click', verificaEmailSenha);
// textArea.addEventListener('keyup', contador);
