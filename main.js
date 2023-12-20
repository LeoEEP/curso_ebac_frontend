
function validar() {
    let numcampoA = document.getElementById('campoA').value;
    let numcampoB = document.getElementById('campoB').value;

    if (numcampoB > numcampoA) {
        alert('Sucesso! o formulário é valido, o numero B é maior que o número A');
    } else if (numcampoB === numcampoA) {
        alert('Formulário inválido pois B é igual a A!')
    } else {
        alert('Infelizmente o formulário é invalido, o número B é menor que o número A');
    }
}
