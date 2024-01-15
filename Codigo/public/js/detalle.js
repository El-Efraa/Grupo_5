
var botonMas= document.querySelector("#mas")
var botonMenos= document.querySelector("#menos")
var cantidad=document.querySelector("#cantidad")
var prevValue
var baseValue= 1;

function calcular() {
    var value = cantidad.value;
    var isValid = /^[1-9][0-9]*$/.test(value);
    if (!isValid) {
      cantidad.value = prevValue;
    } else {
      prevValue = value;
    }
}

botonMas.addEventListener("click", function() {
    cantidad.value = Number(cantidad.value) + 1;
    calcular();
  });
botonMenos.addEventListener("click", function() {

    if(cantidad.value > baseValue ){
        cantidad.value = Number(cantidad.value) - 1;
    }
    calcular();
  });

