$(document).ready(function() {
    
    $('#telefone').mask('(00) 00000-0000')

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
            telefone: {
                required: true
            },
            cpf: {
                required: true
            },
            endereco: {
                required: true
            },
            cep: {
                required: true
            }
        },
        messages: {
            nome: 'Por favor, insira seu nome',
            email: 'Insira seu e-mail',
            telefone: 'Insira seu telefone',
            cpf: 'insira seu CPF',
            endereco: 'Insira seu endereço',
            cep: 'Insira seu CEP'
        },
        submitHandler: function(form){
            alert(`Forumlário enviado com sucesso`)
            $(form).each(function() {
                this.reset();
            })
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if(camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
    })
})