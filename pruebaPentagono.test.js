const { calcularAreaPentagono, pedirDatos } = require('./areaPentagono');
const readline = require('readline');

// Simulamos que el usuario ingese los datos
jest.mock('readline', () => {
  return {
    createInterface: jest.fn().mockReturnValue({
      question: jest.fn((question, callback) => {
        if (question.includes("lado")) {
          callback('6'); // Simulamos que el usuario ingresa 6
        } else if (question.includes("apotema")) {
          callback('4'); // Simulamos que el usuario ingresa 4
        }
      }),
      close: jest.fn()
    })
  };
});

describe('Pruebas para calcular el área de un pentágono', () => {
  test('calcular el área correctamente', () => {
    const lado = 6;
    const apotema = 4;

    // Resultado que se espera
    const resultadoEsperado = (5 * lado * apotema) / 2;

    // Ejecutar la función y verificar el resultado
    expect(calcularAreaPentagono(lado, apotema)).toBe(resultadoEsperado);
  });

  test('pedirDatos debe capturar la entrada correctamente', () => {
    const mockQuestion = readline.createInterface().question;
    const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});

    // Llamamos a la función pedirDatos
    pedirDatos();

    // Verificamos que se hayan llamado las preguntas y que la salida sea la correcta
    expect(mockQuestion).toHaveBeenCalledTimes(2); 
    expect(logSpy).toHaveBeenCalledWith('El área del pentágono es: 60');
    logSpy.mockRestore(); 
  });
});
