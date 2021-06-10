function insertar(num) {
    document.formulario.pantalla.value = document.formulario.pantalla.value + num;

}
// funcion mole
function resultado() {
    var datos = document.formulario.pantalla.value;

    if (datos) {
        document.formulario.pantalla.value = eval(datos);
    }
}

function limpiar() {
    document.formulario.pantalla.value = "";
}

function borrar() {
    var datos = document.formulario.pantalla.value;
    document.formulario.pantalla.value = datos.substring(0, (datos.length - 1));
}

function soloNumeros(e) {
    var key = window.Event ? e.which : e.keyCode
    return (key >= 42 && key <= 57 && key != 44) //0 - 9 y + - * / .
}