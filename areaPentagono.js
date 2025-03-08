const readline = require('readline');

// Se piden los datos por consola
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Funcion de Calcular el área de un pentágono
function calcularAreaPentagono(lado, apotema) {
  const perimetro = 5 * lado; // El pentágono tiene 5 lados de igual longitud
  return (perimetro * apotema) / 2;
}

// Funcion para pedir los datos al usuario
function pedirDatos() {
  rl.question('Ingrese la longitud del lado del pentágono: ', (lado) => {
    lado = parseFloat(lado);
    rl.question('Ingrese el valor del apotema del pentágono: ', (apotema) => {
      apotema = parseFloat(apotema);
      const area = calcularAreaPentagono(lado, apotema);
      console.log(`El área del pentágono es: ${area}`);
      rl.close();
    });
  });
}

// Exportamos las funciones para llamarlas en la prueba
module.exports = { calcularAreaPentagono, pedirDatos };
