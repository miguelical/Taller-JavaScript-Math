const inputPrice = document.querySelector('#price');
const inputDiscount = document.querySelector('#discount');
const btn = document.querySelector('#calcular');
const pResult = document.querySelector('#result');


btn.addEventListener('click', calcularDescuento);

function calcularDescuento() {
  const price = Number(inputPrice.value);
  const discount = Number(inputDiscount.value);

  //Si no hay precio o si no hay descuento...
  if (!price || !discount) {
    pResult.innerText = '¡Por favor completa los campos!';
    return;
  }

  if (discount > 100 ){
    pResult.innerText = '¡Por favor, ingresa un descuento que sea menor o igual a 100!';
    return;
  };

  const newPrice = (price * (100 - discount)) / 100;
  pResult.innerText = 'El nuevo precio  con descuento es $' + newPrice;
};