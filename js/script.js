function sumar() {
    const formulario = document.getElementById('formulario');
    let numA = formulario['numA'];
    let numB = formulario['numB'];
    let resultado = parseInt(numA.value) + parseInt(numB.value);
    if (isNaN(resultado))
        resultado = 'La operación no incluye números.';
    document.getElementById('resultado').innerHTML = `Resultado: ${resultado}`;
    console.log(`Resultado: ${resultado}`);
}

function restar() {
    const formulario = document.getElementById('formulario');
    let numA = formulario['numA'];
    let numB = formulario['numB'];
    let resultado = parseInt(numA.value) - parseInt(numB.value);
    if (isNaN(resultado))
        resultado = 'La operación no incluye números.';
    document.getElementById('resultado').innerHTML = `Resultado: ${resultado}`;
    console.log(`Resultado: ${resultado}`);
}

function multiplicar() {
    const formulario = document.getElementById('formulario');
    let numA = formulario['numA'];
    let numB = formulario['numB'];
    let resultado = parseInt(numA.value) * parseInt(numB.value);
    if (isNaN(resultado))
        resultado = 'La operación no incluye números.';
    document.getElementById('resultado').innerHTML = `Resultado: ${resultado}`;
    console.log(`Resultado: ${resultado}`);
}

function dividir() {
    const formulario = document.getElementById('formulario');
    let numA = formulario['numA'];
    let numB = formulario['numB'];
    let resultado = parseInt(numA.value) / parseInt(numB.value);
    if (isNaN(resultado)) {
        resultado = 'La operación no incluye números.';
    }
    if (resultado == Infinity) {
        resultado = '¿?';
        window.alert('ERROR: El divisor no puede ser 0.');
    } else {
        document.getElementById('resultado').innerHTML = `Resultado: ${resultado}`;
        console.log(`Resultado: ${resultado}`);
    }
}


function exponente() {
    const formulario = document.getElementById('formulario');
    let numA = formulario['numA'];
    let numB = formulario['numB'];
    let resultado = Math.pow(numA.value, numB.value);
    if (isNaN(resultado))
        resultado = 'La operación no incluye números.';
    document.getElementById('resultado').innerHTML = `Resultado: ${resultado}`;
    console.log(`Resultado: ${resultado}`);
}