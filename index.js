var numero1 = 10;
var numero2 = 21;
var numero3 = 30;
var palabra1 = `Mauro`;
var conjunto1 = [`Martin`, `Pedro`, `Luis`];
var conjunto2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 1- Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar.

function numeroPar(numero) {
  if (numero % 2 === 0) {
    console.log(` El numero: ${numero} es par`);
  } else {
    console.log(` El numero: ${numero} es impar`);
  }
}

numeroPar(numero1);

// 2- Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, y si ninguno lo es, indicar por consola que son iguales.

function mayorIgual(numero, numero1) {
  if (numero > numero1) {
    console.log(` El numero: ${numero} es mayor que el numero: ${numero1}`);
  } else if (numero2 > numero1) {
    console.log(` El numero: ${numero1} es mayor que el numero: ${numero}`);
  } else {
    console.log(` El numero: ${numero} es igual al numero: ${numero1}`);
  }
}

mayorIgual(numero1, numero1);

// 3- Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5.

function multiploCinco(numero) {
  if (numero % 5 === 0) {
    console.log(` El numero: ${numero} es múltiplo de 5`);
  } else {
    console.log(` El numero: ${numero} no es múltiplo de 5`);
  }
}

multiploCinco(numero1);

// 4- Crear una función que reciba un número por parámetro e imprima por consola todos los números desde el 0 hasta llegar a ese número.

function repetirNumero(numero) {
  for (let num = 0; num <= numero; num++) {
    console.log(num);
  }
}

repetirNumero(numero1);

// 5 - Crear una función que reciba una palabra y un número por parámetro e imprima por consola  esa palabra la cantidad correspondiente al número indicado.

function repetirPalabra(palabra, numero) {
  for (let num = 0; num <= numero; num++) {
    console.log(palabra);
  }
}

repetirPalabra(palabra1, numero1);

// 6 - Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array.

function imprimirValores(array) {
  for (let valor of array) {
    console.log(valor);
  }
}

imprimirValores(conjunto1);

//7 - Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array, menos el que se encuentre en la 5ta posición del mismo. Ayuda: Recuerden que el primer índice de un array es "0".

function imprimirArray2(array) {
  for (let i = 0; i < array.length; i++) {
    if (i !== 4) {
      console.log(array[i]);
    }
  }
}

imprimirArray2(conjunto2);

// 8 - Crea una función que reciba un array de números y un número por parámetro e imprima por consola cada número del array multiplicado por el número pasado por parámetro.

function imprimirArrayMultiplicado(array, numero) {
  for (let valor of array) {
    console.log(valor * numero);
  }
}

imprimirArrayMultiplicado(conjunto2, numero1);
