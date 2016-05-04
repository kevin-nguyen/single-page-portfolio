$(document).ready(function() {

        $('#nav-menu ul li a').on('click', function() {
            $('#nav-menu').collapse('hide');
        });

        $('#contactForm').on('input', '.form-group', function(event) {
            $(this).toggleClass('form-group-content', $(event.target).val().length > 0);
        }).on('focus', '.form-group', function(event) {
            $(this).addClass('form-group-focused');
        }).on('blur', '.form-group', function(event) {
            $(this).removeClass('form-group-focused');
        });
});