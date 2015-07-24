/*globals jQuery, document */
(function ($) {
    "use strict";

    $(document).ready(function(){

        // Init table of contents
        tableOfContentsInit();

        // Thesaurus init: display definitions of words for words defined in 
        // table after <div id='#definitions'></div>
        thesaurusInit();

    });

    function tableOfContentsInit() {
        // table of content generator
        $('.post').toc();
        $('.sticky-sidebar').affix({
            offset: {
            top: $(".sticky-sidebar").offset().top,
            // bottom: $('footer').outerHeight(true)
            }
        });
    }

    function thesaurusInit() {
    // Definition script
        $('#definitions ~ table tr').each(function(index, definitionRow) {
            var cols = $(definitionRow).children('td');
            var defined = $(cols[0]).text();
            var definitionAnchor = cols[1];
            var definition = $(definitionAnchor).text();

            var definitionClass = 'definition-'+index;

            $(definitionAnchor).attr('id', definitionClass);

            var definedWordsInPost = $('table, blockquote').blast({
                search: defined,
                customClass: "defined-arabic-word"
            });

            $.each(definedWordsInPost, function(index, word) {
                $(word).data('anchor', definitionClass);
            });


        });

        $('.defined-arabic-word').mouseover(
            function() {
                var definitionBody = $('#' + $(this).data('anchor')).first().html();
                var definition = "<div class=\"definition\"><h3>" + $(this).text() + "</h3><p>" + definitionBody + "</p></div>";
                $('#thesaurus .definition').remove();
                $('#thesaurus').append( definition );
                $('#toc-wrapper').addClass('hide');
            }
        );

        $(window).scroll(function() {
          $('#thesaurus .definition').remove();
          $('#toc-wrapper').removeClass('hide');
          // $('.defined-arabic-word.highlight').removeClass('highlight');
    });

    }

}(jQuery));