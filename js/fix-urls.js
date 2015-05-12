$(document).ready(function () {
  if (window.location.host === "kidgodzilla.github.io") {
    setTimeout(function () {
      $('a').each(function () {
        var href = $(this).attr('href');

        if (href && href.indexOf('/') === 0)
          $(this).attr('href', '/meta-bootstrap' + href);
      });
    }, 600);
  }
});
