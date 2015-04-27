(function () {
    Meta.registerGlobal('HTMLIncludes', function () {
        $(document).ready(function () {
            $('[data-source-url]').each(function () {
                var sourceURL = $(this).attr('data-source-url');
                $(this).load(sourceURL);
            });
        });
    })
})();

Meta.HTMLIncludes();