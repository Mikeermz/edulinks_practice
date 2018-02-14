$(document).ready(function() {

    // Abre la información de la escuela
    $("#infoOpen").click( function(e){
        $("#infoEscuela").slideToggle("slow")
        $(this).children('.fa').toggleClass("fa-angle-down")
    })

})