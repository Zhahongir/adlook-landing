$(document).ready(function() { 

    $('[data-modal=modalBtn]').on('click', function() {
        $('#overlay').fadeIn();
    });
    $('.modal__close').on('click', function() {
        $('#overlay').fadeOut();
    });
});