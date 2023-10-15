$(document).ready(function() {
    $('#titulo-em-conta').click(function() {
        $('#form-em-conta').slideDown();
    })
    
    $('#titulo-gastos').click(function() {
        $('#form-gastos').slideDown();
    })

    $('form').submit(function(event) {
        event.preventDefault();
        const emContaTotal = calcularTotal('.em-conta');
        const gastosTotal = calcularTotal('.gastos');
        const restante = calculaRestante(emContaTotal, gastosTotal);
        $('#emContaTotalDiv').html('Total em Conta: R$ ' + emContaTotal.toFixed(2));
        $('#gastosTotalDiv').html('Total de Gastos: R$ ' + gastosTotal.toFixed(2));
        $('#restanteDiv').html('Restante: R$ ' + restante.toFixed(2));
        $('#container-results').fadeIn(500);
    });
    
    function calcularTotal(classe) {
        return Array.from($(classe)).reduce((acc, input) => acc + (parseFloat(input.value.replace(',', '.')) || 0), 0);
    }
    
    function calculaRestante(emContaTotal, gastosTotal) {
        const restante = emContaTotal - gastosTotal;
        return restante;
    }
});
