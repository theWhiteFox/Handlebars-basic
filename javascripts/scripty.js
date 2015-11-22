$(function () {
    'use strict';

    var theData = { customers: [{ firstName: "Rick", lastName: "Grimes", age: 39 }, { firstName: "Daryl", lastName: "Dixon", age: 36 }] };

    var theTemplateScript = $('#header-tpl').html();
    var theTemplate = Handlebars.compile(theTemplateScript);
    $('#customers').append(theTemplate(theData));

});




