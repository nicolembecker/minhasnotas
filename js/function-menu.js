$(document).ready(function() {
    // Eu quero abrir a pagina list-disciplinas.html dentro do index.html

    //$('#conteudo').load('src/disciplinas/visao/list-disciplinas.html')

    $('#adiciona').click(function(e) {
        e.preventDefault()
        $('#conteudo').empty()
        $('#conteudo').load('src/disciplinas/visao/adiciona-disciplinas.html')
    })
    $('#listar').click(function(e) {
        e.preventDefault()
        $('#conteudo').empty()
        $('#conteudo').load('src/disciplinas/visao/list-disciplinas.html')
    })

})