console.group('Cuadrado');
const ladoCuadrado = 5;
const perimetroCuadrado = ladoCuadrado * 4;
const areaCuadrado = ladoCuadrado * ladoCuadrado;

console.log({
  ladoCuadrado,
  perimetroCuadrado,
  areaCuadrado
});

function calcularCuadrado (lado) {
  return {
    perimetro: lado * 4,
    area: lado * lado,
  }
};

console.groupEnd('Cuadrado');

console.group('Triangulo');

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const ladoTrianguloBase = 4;
const alturaTriangulo = 5.5;

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + ladoTrianguloBase;
const areaTriangulo = (ladoTrianguloBase * alturaTriangulo) / 2;

function calcularTriangulo (lado1, lado2, base, altura) {
  return {
    perimetro: lado1 + lado2 + base,
    area: (base * altura) / 2,
  }
};

function calcularAlturaTriangulo (lado1, base){
  if (lado1 == base) {
    console.warn('Este no es un triangulo isosceles');
  } else {
    return Math.sqrt((Math.pow(lado1,2)) - ((Math.pow(base,2))) / 4).toFixed(4);
  }
};

function calcularAlturaTrianguloEscaleno (lado1, lado2, lado3) {
  if (lado1 == lado2 || lado1 == lado3 || lado2 == lado3){
    return false
  } else {
    const sp = (lado1 + lado2 + lado3) / 2;
    return Math.round((2 / lado1) * Math.sqrt(sp * (sp - lado1) * (sp - lado2) * (sp - lado3)))
  };  
};
  
console.log({
  ladoTriangulo1,
  ladoTriangulo2,
  ladoTrianguloBase,
  alturaTriangulo,
  perimetroTriangulo, 
  areaTriangulo,
});

console.groupEnd('Triangulo');

console.group('Circulo');


const radioCirculo = 3;
const diametroCirculo = radioCirculo * 2;
const Pi = 3.1415;

const circunferencia = diametroCirculo * Pi;
const areaCirculo = (radioCirculo **2) * Pi;

console.log({
  radioCirculo,
  diametroCirculo,
  Pi,
  circunferencia,
  areaCirculo,
});

function calcularCirculo (radio) {
  const diametro = radio * 2;
  const radioAlCuadrado = Math.pow(radio, 2);
  return {
    circunferencia: diametro * Math.PI,
    area: radioAlCuadrado * Math.PI.toFixed(2), 
  };
};


console.groupEnd('Circulo');

// function solution (lado1, lado2, lado3) {
//   let a = lado1;
//   let b = lado2;
//   let c = lado3;

//   if (a == b || b == c || c == a) {
//     console.warn('Estas medidas no son de un triángulo escaleno!');
//   } else {
//     return Math.trunc(Math.sqrt((Math.pow(a, 2)) - ((Math.pow(c, 2)) - (Math.pow(b, 2)) / 2 * c)));
//   };
// };



