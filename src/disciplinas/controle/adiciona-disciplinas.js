$(document).ready(function() {

    //Monitorar o clique em cima do botão com a classe btn-save

    $('.btn-save').click(function(e) {
        e.preventDefault()

        // Iremos criar uma variavel que recebera todas as informções do formulario e os transoformara em array

        let dados = $('#adiciona-disciplinas').serialize()

        $.ajax({
            type: 'POST',
            dataType: 'JSON',
            assync: true,
            data: dados,
            url: 'src/disciplinas/modelo/adiciona-disciplinas.php',
            success: function(dados) {
                //demonstar se deu certo ou errado...
                $('#adiciona-disciplinas').after(`
                    <div class="alert ${dados.tipo} alert-dismissible fade show" role="alert">
                    <strong>${dados.mensagem}</strong>
                        <button type="button" class="close" data-dimiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                `)
                    //Limpando os campos do nosso formulario

                $('#nome').val('')
                $('#professor').val('')
                $('#nota').val('')
            }
        })
    })
})