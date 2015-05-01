function cleanSource (html) {
  var lines = html.split(/\n/);
  var indentSize, regex;

  lines.shift();
  lines.splice(-1, 1);

  indentSize = lines[0].length - lines[0].trim().length;
  regex = new RegExp(" {" + indentSize + "}");

  lines = lines.map(function (line) {
    if (line.match(regex)) line = line.substring(indentSize);
    return line;
  });

  return lines.join("\n");
}

$(document).ready(function () {

  var $button = $("<div id='source-button' class='btn btn-primary btn-xs'>&lt; &gt;</div>").click(function () {
    var html = $(this).parent().html();
    html = cleanSource(html);
    $("#source-modal pre").text(html);
    $("#source-modal").modal();
  });

  $(".bs-layout").hover(function() {
    $(this).append($button);
    $button.show();
  }, function() {
    $button.hide();
  });

});
