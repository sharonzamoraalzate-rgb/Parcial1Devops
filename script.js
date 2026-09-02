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