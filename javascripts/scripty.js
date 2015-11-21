$(function () {
    'use strict';
    
    // grab the template script
    var theTemplateScript = $("#block-expressions-template").html();
    
    // this is the block helper
    // the name of the helper is provided as the first parameter - in this case 'uppercase'
    Handlebars.registerHelper('uppercase', function (options) {
        
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

    // names
    var template = $('#myTemplate').html();

    var data = {
        "title": "A Song of Fire and Ice",
        "names": [
            { "name": "John" },
            { "name": "Ygritte" }
        ]
    };

    var compiledTemplate = Handlebars.compile(template);

    var result = compiledTemplate(data);

    $('.content-placeholder-two').html(result);

    var data = {
        "title": "Languages",
        languages: [
            { name: "<strong>JavaScript</strong>", year: "1995", developer: { firstName: "Brendan", lastName: "Eich" } },
            { name: "<strong>Java</strong>", year: "1995", developer: { firstName: "James", lastName: "Gosling" } },
            { name: "<strong>C#</strong>", year: "2000" },
            { name: "<strong>PHP</strong>", year: "1998", developer: { firstName: "Rasmus", lastName: "Lerdorf" } }
        ],
        type: "Programming languages"
    }

    Handlebars.registerHelper("formatLanguage", function (language) {
        return '-<code>' + language + '-</code>';
    });

    Handlebars.registerHelper("list", function (items, options) {
        var out = "<ul>";

        for (var index = 0, l = items.length; index < l; index++) {
            out = out + "<li>" + options.fn(items[index]) + "</li>";
        }
        return out + "</ul>"
    });

    var template = $("#languagesTpl").html();
    var html = Handlebars.compile(template);
    $("#languages").html(html(data));

    var data = {        
        shopping: []
    }

});




