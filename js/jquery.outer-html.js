jQuery.fn.outerHTML = function(source) {
  return source ? this.before(source).remove() : jQuery("<p>").append(this.eq(0).clone()).html();
};
