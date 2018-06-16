require([
        'jquery',
        'bootstrap',
        'spoiler',
        'highlightjs',
        'scrollup'
], function ($) {
    $.scrollUp({
        scrollName: 'scrollUp', // Element ID
        scrollText: '<span class="glyphicon glyphicon-chevron-up"></span>'
    });

    $('#scrollUp').addClass('hidden-xs hidden-sm');
})