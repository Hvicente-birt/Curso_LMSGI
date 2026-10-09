// Dia de nacimiento de la web
var fechaAniver = "2025-10-09";

// Capturamos la fecha actual
var hoy = new Date();

//Obtenemos la fecha de nacimiento
var nacimiento = new Date(fechaAniver + "T00:00:00");

// Comprobamos si hoy es el aniversario
if (
    hoy.getDate() === nacimiento.getDate() &&
    hoy.getMonth() === nacimiento.getMonth() &&
    hoy.getFullYear() === nacimiento.getFullYear() + 1
) {
    alert("¡¡¡¡¡ 1er. aniversario de la web !!!!");
}

// Capturamos la caja del correo electrónico
var correo = document.getElementById("email");

// Capturamos el elemento donde mostraremos el mensaje
var mensaje = document.getElementById("errorCorreo");

// Comprobamos el correo cuando el usuario sale de la caja
correo.addEventListener("blur", function() {

    // Comprobamos si el correo contiene @
    if (correo.value.includes("@")) {
        mensaje.textContent = "";
    } else {
        mensaje.textContent = "correo erróneo";
    }

});