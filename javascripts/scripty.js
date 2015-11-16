$(function () {
    'use strict';
    
    // register a helper
    Handlebars.registerHelper('capitalize', function(str){
        // str is the argument passed to the helper when called
        str = str || '';
        return str.slice(0,1).toUpperCase() + str.slice(1);
    });
    
    // grab the template script
    var theTemplateScript = $("#built-in-helpers-template").html();
    
    // compile the template
    var theTemplate = Handlebars.compile(theTemplateScript);
    
    // we will call this template on an array of objects
    var context = {
        animals:[
            {
                name: "cow",
                says: "mooo"
            },
            {
                name: "cat",
                says: "meow"
            },
            {
                name: "fish",
                says: ""
            },
            {
                name: "farmer",
                says: "Huhooo, now your suckin daysel!!"
            }
        ]
    };
    
    // pass data to theTemplate
    var theCompiledHtml = theTemplate(context);

    // add the complied html to the div
    $('.content-placeholder').html(theCompiledHtml);

});




