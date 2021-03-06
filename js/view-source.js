"use strict";

function cleanSource (html) {
  var lines = html.split(/\n/);
  var indentSize, regex;

  indentSize = lines[0].length - lines[0].trim().length;
  regex = new RegExp(" {" + indentSize + "}");

  lines = lines.map(function (line) {
    if (line.match(regex)) line = line.substring(indentSize);
    return line.trim();
  });

  return lines.join("\n");
}

window.metabootstrapCode = function () {
  var btc = localStorage.getItem("theme") ? "<script>window.bootstrapTheme=\""+localStorage.getItem("theme")+"\";</script>\n" : "";
  return btc + "<script src=\"//www.metabootstrap.com/mbs.js\"></script>";
};

window.generateMetaBootstrapCode = function () {

  $("#source-modal .modal-title").html("Paste this code into your header to get started");
  return $("#source-modal pre").text(window.metabootstrapCode());
};

$(document).ready(function () {

  $("a[href='#']").click(function(e) {
    e.preventDefault();
  });

  //$('.bs-component [data-toggle="popover"]').popover();
  //$('.bs-component [data-toggle="tooltip"]').tooltip();

  var $button = $("<div class='source-button btn btn-primary btn-xs' data-toggle='modal' data-target='#source-modal'><i class='fa fa-code'></i></div>").click(function () {
    var html = $(this).parent().clone();
    html.find('.source-button').remove();
    html = html.outerHTML();
    html = cleanSource(html);
    $("#source-modal .modal-title").text("Layout Source Code");
    $("#source-modal pre").text(html);
  });

  $(".bs-layout").click(function () {
    $(this).find('.source-button').toggleClass('visible');
  });

  $(".bs-layout").hover(function () {
    $(this).append($button);
    $button.show();
  }, function() {
    $button.hide();
  });

});
