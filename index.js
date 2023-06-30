// los elementos select de región y comuna
var regionSelect = document.getElementById("region");
var comunaSelect = document.getElementById("comuna");


var comunasPorRegion = {
  norte: ["Comuna 1", "Comuna 2", "Comuna 3"],
  central: ["Comuna 4", "Comuna 5", "Comuna 6"],
  sur: ["Comuna 7", "Comuna 8", "Comuna 9"]
};


function actualizarComunas() {
 
  var regionValue = regionSelect.value;

  
  comunaSelect.innerHTML = "";

  
  var comunas = comunasPorRegion[regionValue];

  if (comunas) {
    for (var i = 0; i < comunas.length; i++) {
      var option = document.createElement("option");
      option.text = comunas[i];
      option.value = comunas[i];
      comunaSelect.add(option);
    }
  }
}

regionSelect.addEventListener("change", actualizarComunas);


var form = document.getElementById("formulario");
var aliasInput = document.getElementById("alias");


form.addEventListener("submit", function (event) {
  if (!validarAlias(aliasInput.value)) {
    event.preventDefault(); 
  }
});


function validarAlias(alias) {
  
  if (alias.length < 5 || !/^[a-zA-Z0-9]+$/.test(alias)) {
    alert("El Alias debe tener al menos 5 caracteres y contener letras y números.");
    return false;
  }
  return true;
}


var form = document.getElementById("formulario");
var rutInput = document.getElementById("RUT");


form.addEventListener("submit", function (event) {
  
  if (!validarRUT(rutInput.value)) {
    event.preventDefault(); 
  }
});


function validarRUT(rut) {
  
  if (!/^(\d{1,3}(?:\.\d{3}){2}-[\dkK])$/.test(rut)) {
    alert("El RUT debe tener un formato válido (Ejemplo: 12.345.678-9).");
    return false;
  }

  
  rut = rut.replace(/\./g, "").replace("-", "");

  
  var dv = rut.slice(-1);
  var rutSinDV = rut.slice(0, -1);

  
  var suma = 0;
  var multiplo = 2;
  for (var i = rutSinDV.length - 1; i >= 0; i--) {
    suma += parseInt(rutSinDV.charAt(i)) * multiplo;
    multiplo = multiplo < 7 ? multiplo + 1 : 2;
  }
  var dvEsperado = 11 - (suma % 11);
  dvEsperado = dvEsperado === 11 ? "0" : dvEsperado === 10 ? "K" : dvEsperado.toString();

  
  if (dv.toUpperCase() !== dvEsperado) {
    alert("El RUT ingresado no es válido.");
    return false;
  }

  return true;
}


var form = document.getElementById("formulario");
var emailInput = document.getElementById("email");


form.addEventListener("submit", function (event) {
  
  if (!validarEmail(emailInput.value)) {
    event.preventDefault(); 
  }
});


function validarEmail(email) {
  
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Por favor, introduce una dirección de correo electrónico válida.");
    return false;
  }
  return true;
}


var form = document.getElementById("formulario");
var checkboxes = document.querySelectorAll('[name="como_se_entero[]"]');


form.addEventListener("submit", function (event) {
  
  var seleccionados = 0;
  checkboxes.forEach(function (checkbox) {
    if (checkbox.checked) {
      seleccionados++;
    }
  });

  
  if (seleccionados < 2) {
    event.preventDefault(); // Evitar el envío del formulario si la validación falla
    alert("Debes seleccionar al menos dos opciones en 'Como se enteró de Nosotros'.");
  }
});

