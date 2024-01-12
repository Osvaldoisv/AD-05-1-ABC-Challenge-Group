function CambiarColores(){
  const letters = '0123456789ABCDEF';
  let color = '#';
  for(let i = 0; i < 6; i++ ){
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
function applyRandomColors() {
  const h5Element = document.querySelector('h5');
  h5Element.style.color = CambiarColores();
  h5Element.style.backgroundColor = CambiarColores();
  h5Element.style.borderBottom = `2px solid ${CambiarColores()}`;
}

// Llamamos a la función para que se aplique al cargar la página
applyRandomColors();
