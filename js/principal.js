var titulo = document.querySelector(".titulo");
titulo.textContent = "Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for (i = 0; i < pacientes.length; i++) {
    var paciente = pacientes[i];
    var paciente = pacientes[i];
    var tdpeso = paciente.querySelector(".info-peso");
    var peso = tdpeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var imc = calculaImc(peso, altura);

    var tdImc = paciente.querySelector(".info-imc");

    tdImc.textContent = imc;
}

function calculaImc(peso, altura) {
    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);
}