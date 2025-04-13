const header = document.querySelector('header');
const contentArea = document.querySelector('.content-area');

// Definir altura do header como CSS custom property
function updateHeaderHeight() {
  const height = header.offsetHeight + 'px';
  contentArea.style.marginTop = height;
}
window.addEventListener('load', updateHeaderHeight);
window.addEventListener('resize', updateHeaderHeight);

// Toggle do aside
document.getElementById('toggle-aside').addEventListener('click', () => {
  document.getElementById('aside-content').classList.toggle('visible');
});

const teste = indexedDB.open("Produtos", 1);

