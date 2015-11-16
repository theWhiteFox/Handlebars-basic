$(function() {
'use strict';
// template script 
var theTemplateScript = $("#address-template").html();

// compile the template
var theTemplate = Handlebars.compile(theTemplateScript);

// define data
var context = {
    "city": "Dublin",
    "street": "O'Connor",
    "number": "13λ"    
};

// pass data to theTemplate
var theCompiledHtml = theTemplate(context);

// add the complied html to the page
$('.content-placeholder').html(theCompiledHtml);

console.log("Address:", context); 
});




