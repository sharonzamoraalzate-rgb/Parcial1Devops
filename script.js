// Función de tu compañero: mostrar nombres
document.getElementById("btnNombres").addEventListener("click", function () {
  document.getElementById("nombres").textContent = "Juan José Agudelo\nSharon Zamora";
});

// Tu función: cambiar color de fondo
const colores = ["#f4a261", "#2a9d8f", "#e76f51", "#264653", "#e9c46a"];

document.getElementById("btnColor").addEventListener("click", function () {
  const colorRandom = colores[Math.floor(Math.random() * colores.length)];
  document.body.style.backgroundColor = colorRandom;
});
// Tu función nueva: cambiar el color del texto de los nombres
const coloresTexto = ["#e63946", "#2a9d8f", "#f4a261", "#1d3557", "#6a0572"];

document.getElementById("btnColorTexto").addEventListener("click", function () {
  const colorTextoRandom = coloresTexto[Math.floor(Math.random() * coloresTexto.length)];
  document.getElementById("nombres").style.color = colorTextoRandom;
});
