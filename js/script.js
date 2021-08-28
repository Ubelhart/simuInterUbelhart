/* let numeroUno = parseInt(prompt('Escribe un numero: '));
let operador = prompt('Escribe un operador: + - * /');
let numeroDos = parseInt(prompt('Escribe otro numero:'));
let resultado;

function calcular(numeroUno, operador, numeroDos) {

  if (isNaN(numeroUno || numeroDos)) {
    alert('No escribiste un numero');
  }

  switch (operador) {
    case '+':
      resultado = numeroUno + numeroDos;
      break;
    case '-':
      resultado = numeroUno - numeroDos;
      break;
    case '*':
      resultado = numeroUno * numeroDos;
      break;
    case '/':
      resultado = numeroUno / numeroDos;
      break;
    default:
      alert('No es un operador correcto');
      break;
  }

  alert('El resultado es: ' + resultado);

}

calcular(numeroUno, operador, numeroDos); */