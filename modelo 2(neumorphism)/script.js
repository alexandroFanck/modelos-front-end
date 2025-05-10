function setTemaClaro() {
  const root = document.documentElement;
  root.style.setProperty('--bg', '#e0e0e0');
  root.style.setProperty('--text', '#222');
  root.style.setProperty('--shadow-light', '#ffffff');
  root.style.setProperty('--shadow-dark', '#bebebe');
}

function setTemaEscuro() {
  const root = document.documentElement;
  root.style.setProperty('--bg', '#1e1e1e');
  root.style.setProperty('--text', '#eee');
  root.style.setProperty('--shadow-light', '#2a2a2a');
  root.style.setProperty('--shadow-dark', '#141414');
}

function ajustarTopoDoMain() {
  const header = document.querySelector("header");
  const main = document.querySelector("main");

  const alturaHeader = header.offsetHeight;
  main.style.marginTop = `${alturaHeader}px`;
}

window.addEventListener("load", ajustarTopoDoMain);
window.addEventListener("resize", ajustarTopoDoMain);

ajustarTopoDoMain()