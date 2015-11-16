$(function () {
    'use strict';
    
    // grab the template script
    var theTemplateScript = $("#block-expressions-template").html();
    
    // this is the block helper
    // the name of the helper is provided as the first parameter - in this case 'uppercase'
    Handlebars.registerHelper('uppercase', function(options) {
        
    // "this" is the context that existed when calling the helper
    
    /* the options object has a special function - fn. This is a complied version of the template version of the template that is contained between the opeing and closing blocks of this helper. To get a string, call fn with the context: */
    
    return options.fn(this).toUpperCase();
    
    });
    
    // compile the template
    var theTemplate = Handlebars.compile(theTemplateScript);
    
    // define the data object
    var context = {
        "code": "up up down down left right left right b a select start"
    };
    
    // pass data to theTemplate
    var theCompiledHtml = theTemplate(context);

    // add the complied html to the div
    $('.content-placeholder').html(theCompiledHtml);

});




