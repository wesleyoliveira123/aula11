const formulario = document.querySelector("#formulario");
const nome = document.querySelector("#nome");
const senha = document.querySelector("#senha");
const telefone = document.querySelector("#telefone");
const nascimento = document.querySelector("#nascimento");
const email = document.querySelector("#email");
const lista = document.querySelector("#lista");
const btnLimpar = document.querySelector("#limpar");

formulario.addEventListener("submit", function (e) {
  e.preventDefault()

  if (
    nome.value.trim() === "" ||
    senha.value.trim() === "" ||
    telefone.value.trim() === "" ||
    nascimento.value.trim() === "" ||
    email.value.trim() === ""
  ) {
    console.error("Erro: Todos os campos são obrigatórios.")
    return
  }

  const item = document.createElement("div");
  item.classList.add("entrada");
  item.innerHTML = `
    <strong>Nome:</strong> ${nome.value}<br>
    <strong>Senha:</strong> ${senha.value}<br>
    <strong>Telefone:</strong> ${telefone.value}<br>
    <strong>Nascimento:</strong> ${nascimento.value}<br>
    <strong>Email:</strong> ${email.value}
  `;

  lista.appendChild(item);
  formulario.reset()
});

btnLimpar.addEventListener("click", function () {
  lista.innerHTML = "";
});
