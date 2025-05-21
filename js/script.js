


// Função para alternar entre tema claro e escuro
function alternarTema() {
const html = document.documentElement;
const temaAtual = html.getAttribute('data-bs-theme');
const novoTema = temaAtual === 'light' ? 'dark' : 'light';

// Definir o novo tema no atributo data-bs-theme
html.setAttribute('data-bs-theme', novoTema);

// Salvar a preferência no localStorage
localStorage.setItem('tema', novoTema);
}

// Verificar se existe uma preferência salva no localStorage
window.onload = () => {
const temaSalvo = localStorage.getItem('tema');

// Se houver preferência salva, aplica o tema correspondente
if (temaSalvo) {
    document.documentElement.setAttribute('data-bs-theme', temaSalvo);
} else {
    // Se não houver, mantém o tema escuro por padrão
    document.documentElement.setAttribute('data-bs-theme', 'dark');
}
};


const texto = "Desenvolvedor Web Front-End & UI/UX Designer";
  const el = document.getElementById("typewriter-text");
  let i = 0;

  function escrever() {
    if (i < texto.length) {
      el.innerHTML += texto.charAt(i);
      i++;
      setTimeout(escrever, 50);
    } else {
      piscarCursor();
    }
  }

  function piscarCursor() {
    const cursor = document.createElement("span");
    cursor.textContent = "|";
    cursor.style.animation = "blink 1s step-end infinite";
    el.appendChild(cursor);
  }

  window.onload = escrever;
  