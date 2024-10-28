
// Valores predefinidos para el usuario y contraseña
const usuarioPredefinido = "admin";
const contraseñaPredifinida = "1234";

// Función para  el inicio de sesión
function iniciarSesion() {
    let intentos = 0;

    while (intentos < 3) {
        const usuario = prompt("Ingrese su nombre de usuario:");
        const contrasena = prompt("Ingrese su contraseña:");

        if (usuario === usuarioPredefinido && contrasena === contraseñaPredifinida) {

            alert('Bienvenido' + ' ' + usuario);
            return true;

        } else {
            intentos++;
            alert('intento' + ' ' + intentos + ' ' + 'fallido. Quedan' + ' ' + (3 - intentos) + ' ' + 'intentos');


        }
    }

    alert("Demasiados intentos fallidos. El sistema se cerrará.");
    return false;
}
function capturarConsumo() {
    const consumos = [];
    let continuar = true;

    while (continuar) {
        const entrada = prompt("Ingrese el consumo de agua en m³ (o escriba 'ok' para finalizar):");

        // Verificar si se desea finalizar la captura
        if (entrada.toLowerCase() === 'ok') {
            continuar = false;
            break;
        }

        const consumo = Number(entrada); // Convertir la entrada a número

        // Comprobar si el consumo es un número válido y no negativo
        if (typeof consumo === 'number' && consumo >= 0) {
            consumos.push(consumo);
        } else {
            alert("Por favor, ingrese un número válido.");
        }
    }

    return consumos;
}

function calcularCostoAgua(consumo) {
    let costo = 0;

    if (consumo <= 15) {
        costo = consumo * 500;
    } else if (consumo <= 30) {
        costo = consumo * 700;
    } else {
        costo = consumo * 1000;
    }

    return costo;
}









function main() {
    if (iniciarSesion()) {
        const consumos = capturarConsumo();
        mostrarCostoTotal(consumos);
    } else {
        alert("Demasiados intentos fallidos. El sistema se cerrará.");
    }
}
main();



