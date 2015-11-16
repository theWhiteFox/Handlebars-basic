$(function() {
'use strict';
// template script 
var theTemplateScript = $("#expression-template").html();

// compile the template
var theTemplate = Handlebars.compile(theTemplateScript);

// define data
var context = {
    "description": {
        "escaped": "Using {{}} brackets will result in escaped HTML:",
        "unescaped": "Using {{{}}} will leave the context as it is:"
    },
    "example": "<button> Hello </button>"
};

// pass data to theTemplate
var theCompiledHtml = theTemplate(context);

// add the complied html to the page
$('.content-placeholder').html(theCompiledHtml);

console.log("Address:", context); 
});




