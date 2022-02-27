// Variaveis Globais
const btnEntrar = document.querySelector('.btn-entrar');
const agreement = document.querySelector('#agreement');
const submitBtn = document.querySelector('#submit-btn');
const textArea = document.querySelector('#textarea');
const divCounter = document.querySelector('#counter');
const takeForm = document.querySelectorAll('.take');
const checkbox = document.querySelectorAll('.subject');

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

// Eventos

btnEntrar.addEventListener('click', verificaEmailSenha);
textArea.addEventListener('keyup', contador);

// verifica se o agreement esta marcado com check
function submit() {
  if (agreement.checked === true) {
    submitBtn.removeAttribute('disabled');
  } else {
    submitBtn.disabled = true;
  }
}
agreement.addEventListener('click', submit);

function checkboxValue() {
  let val = '';
  for (let i = 0; i < checkbox.length; i += 1) {
    if (checkbox[i].checked === true) {
      val += ` ${checkbox[i].value}`;
    }
  }
  return val;
}

function formContentGenerator(event) {
  event.preventDefault();
  textArea.innerHTML = `Nome: ${takeForm[0].value} ${takeForm[1].value}`;
  textArea.innerHTML += `  Email: ${takeForm[2].value}`;
  textArea.innerHTML += `  Casa: ${takeForm[3].value}`;
  textArea.innerHTML += `  Matérias:${checkboxValue()}`;
}

submitBtn.addEventListener('click', formContentGenerator);
