$(document).ready(function(){

    $('form').on('submit', function(e) {
        e.preventDefault()

        const nomeTarefa = $('#nome-tarefa').val()
        const novaTarefa = $('<li></li>')
        novaTarefa.text(nomeTarefa)

        novaTarefa.appendTo('ul')
        $(novaTarefa).fadeIn(500)

        $('#nome-tarefa').val('')

        $('li').click(function() {
            $('li').css('text-decoration', 'line-through')
        });

    })
})