const inputPrice = document.querySelector('#price');
const inputCoupon = document.querySelector('#coupon');
const btn = document.querySelector('#calcular');
const pResult = document.querySelector('#result');


btn.addEventListener('click', calcularDescuento);

function calcularDescuento() {
  const price = Number(inputPrice.value);
  const coupon = inputCoupon.value;

    //Si no hay precio o si no hay descuento...
    if (!price || !coupon) {
      pResult.innerText = '¡Por favor completa los campos!';
      return;
    }

  let discount;

    switch (coupon) {
      case 'Premium':
        discount = 30;
        break;
      case 'Verano':
        discount = 25;
        break;

      default:
        pResult.innerText = 'El cupón no es válido';
        return;
    };

    const newPrice = (price * (100 - discount)) / 100;

    pResult.innerText = 'El nuevo precio  con descuento es $' + newPrice;
  // if (coupon == 'Verano') {
  //   discount = 30;
  // } else if (coupon == 'Premium') {
  //   discount = 25;
  // } else {
  //   pResult.innerText = '¡El cupón no es válido!';
  //   return;
  // };


};


