function CambiarColores() {
  const tituloH5 = document.querySelector(`h5`);

  let numeroAleatorio = Math.random();
  let numeroEntre1y3 = Math.floor(numeroAleatorio * 3) + 1;
  let colores = ["red", "blue", "green"];

  tituloH5.style.color = colores[numeroEntre1y3 - 1];
}
