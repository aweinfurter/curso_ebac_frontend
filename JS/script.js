$(document).ready(function() {

    $('#celular').mask('(00) 0 0000-0000')
    $('#cpf').mask('000.000.000-00')
    $('#cep').mask('00000-000')

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            celular: {
                required: true
            }
        }
    })
}) 