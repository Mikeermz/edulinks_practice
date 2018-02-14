$(document).ready(function() {

    var medida = window.matchMedia ('(max-width: 992px)'),
        buscador = $('#buscadorLateral')

    modalElement()
    buscadorStiky()
    mobile()
    $(window).resize(modalElement)
    $(window).resize(mobile)
    $(window).scroll(buscadorStiky)

    // Abre el detalle de cursos
    $(".cursosOpen").click( function(e){
        var ligaAbrir = $(e.currentTarget)
        var arrow = ligaAbrir.children().children(".fa")
        var cuadroDetalle = ligaAbrir.parent().next()

        cuadroDetalle.slideToggle("slow")
        arrow.toggleClass("rotate")
    })

    //Detecta el tamaño de la pantalla, y en caso de que sea desktop, quita los estilos para que se vea el buscador lateral
    function modalElement() {
        
        var backboard = $(".modal-backdrop")
        
        if (medida.matches) {
            buscador.addClass('modal fade')
            buscador.css('display', 'none')
            backboard.css('display','none')
        } else {
            buscador.removeClass('modal fade')
            buscador.css('display', 'block')
            backboard.css('display','none')
        }
    }

    //Detecta si estan en desktop, y en caso de que lo este, agrega el fixed al buscador
    function buscadorStiky(){
        if (!medida.matches) {
            
            var scroll = $(window).scrollTop()
   
            if (scroll > 80 ){
                buscador.addClass('fixed')
                $('#resultados').addClass('offset-4')
            } else {
                buscador.removeClass('fixed')
                $('#resultados').removeClass('offset-4')
            }
        }
    }

    //Detecta si es mobile para quitar estilos en caso de tenerlos
    function mobile(){
        if (medida.matches) {
            $('#resultados').removeClass('offset-4')
            buscador.removeClass('fixed')
        }
    }
})