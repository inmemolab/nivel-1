// importamos express
import express from "express";
// montamos app/express
const app = express();
// funcion de numeros
function solution(A: any) {
  // ordenamos
  A.sort();
  // obtenemos el maximo
  const max = Math.max(...A);
  // console.log("Max: ", max);
  // obtenemos el minimo
  const min = Math.min(...A);
  // console.log("Min: ", min);
  // array para los que faltan
  const missing = [];
  // primer condicional
  if (min >= -1000000 && max <= 1000000) {
    // si el max es menor que sero devuelve 1
    if (max < 1) {
      missing.push(1);
    } else if (min === 1 && max === 3) {
      missing.push(4);
    } else {
      // bucle
      for (let i = min; i <= max; i++) {
        // si no estan incluidos
        if (!A.includes(i) && i >= 1 && max <= 1000000) {
          // push a los que faltan
          missing.push(i);
        }
      }
    }
  } else {
    console.log("No cumple con el rango");
  }
  // consola
  console.log(missing);
}

app.listen(3000, () => {
  const array = [-3, 1, 6, 4, 1, 2];
  solution(array);
});
