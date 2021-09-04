const inputLogin = document.querySelector('.trybewarts-input-login');
const inputSenha = document.querySelector('.trybewarts-input-senha');
const btn = document.querySelector('.btn');
const sendForm = document.querySelector('#submit-btn');
const checkbox = document.querySelector('#agreement');
const textArea = document.querySelector('#textarea');
const counter = document.querySelector('#counter');
const form = document.querySelector('#evaluation-form');

function agree() {
  if (checkbox.checked === true) {
    sendForm.disabled = false;
  } else {
    sendForm.disabled = true;
  }
}
checkbox.addEventListener('click', agree);

function loginVerification() {
  if (
    inputLogin.value === 'tryber@teste.com'
    && inputSenha.value === '123456'
  ) {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}
btn.addEventListener('click', loginVerification);

textArea.addEventListener('input', (e) => {
  counter.innerText = e.currentTarget.getAttribute('maxlength') - e.currentTarget.value.length;
});

function completedForm(label, value) {
  const p = document.createElement('p');
  p.innerText = `${label}: ${value}`;
  console.log(value);
  form.appendChild(p);
}

function submitForm(e) {
  e.preventDefault();
  const data = new FormData(form);
  form.innerHTML = '';
  const fullName = `${data.get('name')} ${data.get('lastname')}`;
  completedForm('Nome', fullName);
  completedForm('Email', data.get('email'));
  completedForm('Casa', data.get('house'));
  completedForm('Família', data.get('family'));
  completedForm('Matérias', data.getAll('content').join(', '));
  completedForm('Avaliação', data.get('rate'));
  completedForm('Observações', data.get('comment'));
}

sendForm.addEventListener('click', submitForm);
