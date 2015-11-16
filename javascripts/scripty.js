$(function () {
    'use strict';
    // template script 
    var theTemplateScript = $("#example-template").html();

    // compile the template
    var theTemplate = Handlebars.compile(theTemplateScript);

    // define data
    var context = {
        people: [
            { firstName: 'Tyrion', lastName: 'Lannister' },
            { firstName: 'Bran', lastName: 'Stark' },
            { firstName: 'Daenerys', lastName: 'Targaryen' },
            { firstName: 'John', lastName: 'Snow' },
            { firstName: 'Cersei', lastName: 'Lannister' },

        ]
    };

    // pass data to theTemplate
    var theCompiledHtml = theTemplate(context);

    // add the complied html to the page / document
    // $(document.body).html(theCompiledHtml);

    // add the complied html to the div
    $('.content-placeholder').html(theCompiledHtml);

});




