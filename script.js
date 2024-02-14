const btnOpenElement = document.querySelector('#open');
const btnCloseElement = document.querySelector('#close');
const paperElement = document.querySelector('.paper');

// Deshabilitar el botón "Cerrar" al inicio
btnCloseElement.disabled = true;

// Agrega este código para agregar el texto al elemento paper
const textoCompleto = `
No te amo como si fueras rosa de sal, topacio
o flecha de claveles que propagan el fuego:
te amo como se aman ciertas cosas oscuras,
secretamente, entre la sombra y el alma.

Te amo como la planta que no florece y lleva
dentro de sí, escondida, la luz de aquellas flores,
y gracias a tu amor vive oscuro en mi cuerpo
el apretado aroma que ascendió de la tierra.

Te amo sin saber cómo, ni cuándo, ni de dónde,
te amo directamente sin problemas ni orgullo:
así te amo porque no sé amar de otra manera,

sino así de este modo en que no soy ni eres,
tan cerca que tu mano sobre mi pecho es mía,
tan cerca que se cierran tus ojos con mi sueño.`;

// Función para abrir la carta y ajustar la posición de los botones
function abrirCarta() {
  btnOpenElement.disabled = true;
  btnCloseElement.disabled = false;

  const coverElement = document.querySelector('.cover');
  coverElement.classList.add('open-cover');

  setTimeout(() => {
    coverElement.style.zIndex = -1;
    paperElement.style.zIndex = 1; // Ajustar el índice z del elemento paper
    paperElement.classList.remove('close-paper');
    paperElement.classList.add('open-paper');
    paperElement.textContent = textoCompleto; // Agregar el texto completo al elemento paper
    paperElement.style.visibility = 'visible';
    const heartElement = document.querySelector('.heart');
    heartElement.style.display = 'block';
    ajustarTamañoPapel();

    // Agregar la clase .open para desplazar los botones con animación
    const optionsElement = document.querySelector('.options');
    optionsElement.classList.add('open');
  }, 500);
}

// Función para cerrar la carta y restaurar la posición de los botones
function cerrarCarta() {
  btnOpenElement.disabled = false;
  btnCloseElement.disabled = true;

  const coverElement = document.querySelector('.cover');
  paperElement.classList.remove('open-paper');
  paperElement.classList.add('close-paper');

  setTimeout(() => {
    coverElement.style.zIndex = 0;
    coverElement.classList.remove('open-cover');
    paperElement.style.visibility = 'hidden';
    const heartElement = document.querySelector('.heart');
    heartElement.style.display = 'none';
    paperElement.style.zIndex = 0; // Restaurar el índice z del elemento paper

    // Restaurar la posición original de los botones
    const optionsElement = document.querySelector('.options');
    optionsElement.classList.remove('open');
  }, 500);
}

btnOpenElement.addEventListener('click', abrirCarta);
btnCloseElement.addEventListener('click', cerrarCarta);

// Función para ajustar el tamaño del papel según el contenido
function ajustarTamañoPapel() {
  // Obtener la altura del texto agregado
  const textoAltura = paperElement.scrollHeight;
  
  // Ajustar la altura del papel para mostrar todo el texto
  paperElement.style.height = textoAltura + 'px';
}
