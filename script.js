// Variaveis Globais
const btnEntrar = document.querySelector('.btn-entrar');
const agreement = document.querySelector('#agreement');
const submitBtn = document.querySelector('#submit-btn');
const textArea = document.querySelector('#textarea');
const divCounter = document.querySelector('#counter');
const takeForm = document.querySelectorAll('.take');
const checkbox = document.querySelectorAll('.subject');
const familyName = document.querySelectorAll('.family-name');
const avaliation = document.querySelectorAll('.avaliation');

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

// verifica se o agreement esta marcado com check <===
function submit() {
  if (agreement.checked === true) {
    submitBtn.removeAttribute('disabled');
  } else {
    submitBtn.disabled = true;
  }
}
agreement.addEventListener('click', submit);

// adiciona as observações <===
function textareaValue() {
  const textValue = textArea.value;
  textArea.value = '';
  textArea.innerHTML = '';
  return textValue;
}

// retorna avaliação <===
function avaliationValue() {
  for (let i = 0; i < avaliation.length; i += 1) {
    if (avaliation[i].checked === true) {
      return avaliation[i].value;
    }
  }
}

// adiciona a família selecionada <===
function familyValue() {
  for (let i = 0; i < familyName.length; i += 1) {
    if (familyName[i].checked === true) {
      return familyName[i].value;
    }
  }
}

// retorna as checkbox que estao selecionadas(matérias) <===
function checkboxValue() {
  let val = '';
  for (let i = 0; i < checkbox.length; i += 1) {
    if (checkbox[i].checked === true) {
      if (val === '') {
        val += `${checkbox[i].value}`;
      } else {
        val += `, ${checkbox[i].value}`;
      }
    }
  }
  return val;
}

// adiciona dados a textarea <===
function formContentGenerator(event) {
  event.preventDefault();
  const obsValue = textareaValue();
  textArea.value = `Nome: ${takeForm[0].value} ${takeForm[1].value}`;
  textArea.value += `  Email: ${takeForm[2].value}`;
  textArea.value += `  Casa: ${takeForm[3].value}`;
  textArea.value += `  Família: ${familyValue()}`;
  textArea.value += `  Matérias: ${checkboxValue()}`;
  textArea.value += `  Avaliação: ${avaliationValue()}`;
  textArea.value += `  Observações: ${obsValue}`;
  textArea.innerHTML = textArea.value;
}

submitBtn.addEventListener('click', formContentGenerator);
