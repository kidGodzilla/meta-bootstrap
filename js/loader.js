/**
 * LOAD-DEPENDENCIES.JS
 * A A naive dependency loader which loads scripts & stylesheets on page load.
 */
(function() {

  /**
   * Sets the protocol for loading scripts, when the option is available (useful for local development)
   * Options: "http://", "https://", "file://", and "//"
   */
  var protocol = "http://";

  window.pathToRoot = window.pathToRoot || "";


  /**
   * Unique name for this instance of the script loader
   *
   * Prevents the loader from being called twice.
   * Change this if you use multiple instances of the script loader in your website,
   * or you want to distribute your package using this loader as an entry-point.
   */
  var loaderName = "asyncLoaderComplete";


  /**
   * Async script loader
   */
  function loadScriptAsync(resource) {
    var sNew = document.createElement("script");
    sNew.async = true;
    sNew.src = resource;
    var s0 = document.getElementsByTagName('script')[0];
    s0.parentNode.insertBefore(sNew, s0);
  }


  /**
   * Naive, synchronous script loader
   */
  function loadScript(resource) {
    document.write('<script src="' + resource + '"></script>');
  }


  /**
   * Stylesheet loader
   */
  function loadStylesheet(resource) {
    var head = document.getElementsByTagName('head')[0];
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = resource;
    link.media = 'all';
    head.appendChild(link);
  }


  /**
   * LESS Stylesheet loader
   */
  function loadLessStylesheet(resource) {
    var head = document.getElementsByTagName('head')[0];
    var link = document.createElement('link');
    link.rel = 'stylesheet/less';
    link.type = 'text/css';
    link.href = resource;
    link.media = 'all';
    head.appendChild(link);
  }

  var theme = localStorage.getItem('theme');

  /**
   * User-extendable dependency loader
   * To use, uncomment commonly-used libraries or add new scripts and stylesheets
   */
  if (!window[loaderName]) {

    /**************************************************************
     * COMMON JAVASCRIPT LIBRARIES
     * ************************************************************
     */

    /**
     * jQuery (v2.1.3)
     */
    if (!window.$) loadScript(protocol + "cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js");


    /**************************************************************
     * COMMON CSS LIBRARIES
     * ************************************************************
     */

    /**
     * Font-Awesome
     * A very useful icon pack
     */
    loadStylesheet(protocol + "cdnjs.cloudflare.com/ajax/libs/font-awesome/4.3.0/css/font-awesome.min.css");



    /**************************************************************
     * BOOTSTRAP AND BOOTSWATCH THEMES
     * ************************************************************
     */

    /**
     * Twitter Bootstrap (v3.3.4)
     * This is vanilla bootstrap.
     * It is not a required dependency when using a bootstrap or bootswatch theme.
     */
    if (theme === "vanilla") {
      loadStylesheet(protocol + "cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.4/css/bootstrap.min.css");
      loadScript(protocol + "cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.4/js/bootstrap.min.js");
    }


    /**
     * Bootstrap (BitSwatch theme)
     * BitTitan, Rawr...
     */
    if (theme === "bitswatch") {
      loadStylesheet(pathToRoot + "../bitswatch/lumen/bootstrap.min.css");
      loadScript(protocol + "cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.4/js/bootstrap.min.js");
    }


    /**
     * Hacker Bootstrap
     * https://github.com/brobin/hacker-bootstrap
     */
    if (theme === "hax0r") {
      loadStylesheet("http://brobin.github.io/hacker-bootstrap/css/hacker.css");
      loadScript(protocol + "cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.4/js/bootstrap.min.js");
    }


    /**
     * Bootstrap (Bootswatch Cosmo theme)
     * An ode to Metro
     *
     * See: https://bootswatch.com/cosmo/
     */
    if (theme === "cosmo") {
      loadStylesheet(protocol + "cdnjs.cloudflare.com/ajax/libs/bootswatch/3.3.4/cosmo/bootstrap.min.css");
      loadScript(protocol + "cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.4/js/bootstrap.min.js");
    }


    /**
     * Bootstrap (Bootswatch Darkly theme)
     * Flatly in night mode
     *
     * See: https://bootswatch.com/darkly/
     */
    if (theme === "darkly") {
      loadStylesheet(protocol + "cdnjs.cloudflare.com/ajax/libs/bootswatch/3.3.4/darkly/bootstrap.min.css");
      loadScript(protocol + "cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.4/js/bootstrap.min.js");
    }


    /**
     * Bootstrap (Bootswatch Flatly theme)
     * Flat and modern
     *
     * See: https://bootswatch.com/flatly/
     */
    if (theme === "flatly") {
      loadStylesheet(protocol + "cdnjs.cloudflare.com/ajax/libs/bootswatch/3.3.4/flatly/bootstrap.min.css");
      loadScript(protocol + "cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.4/js/bootstrap.min.js");
    }


    /**
     * Bootstrap (Bootswatch Lumen theme)
     * Light and Shadow
     *
     * See: https://bootswatch.com/lumen/
     */
    if (theme === "lumen") {
      loadStylesheet(protocol + "cdnjs.cloudflare.com/ajax/libs/bootswatch/3.3.4/lumen/bootstrap.min.css");
      loadScript(protocol + "cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.4/js/bootstrap.min.js");
    }


    /**
     * Bootstrap (Bootswatch Paper theme)
     * Material is the metaphor
     *
     * See: https://bootswatch.com/paper/
     */
    if (theme === "paper") {
      loadStylesheet(protocol + "cdnjs.cloudflare.com/ajax/libs/bootswatch/3.3.4/paper/bootstrap.min.css");
      loadScript(protocol + "cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.4/js/bootstrap.min.js");
    }


    /**
     * Bootstrap (Bootswatch Sandstone theme)
     * A touch of warmth
     *
     * See: https://bootswatch.com/sandstone/
     */
    if (theme === "sandstone") {
      loadStylesheet(protocol + "cdnjs.cloudflare.com/ajax/libs/bootswatch/3.3.4/sandstone/bootstrap.min.css");
      loadScript(protocol + "cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.4/js/bootstrap.min.js");
    }


    /**
     * Bootstrap (Bootswatch Superhero theme)
     * The brave and the blue
     *
     * See: https://bootswatch.com/sandstone/
     */
    if (theme === "superhero") {
      loadStylesheet(protocol + "cdnjs.cloudflare.com/ajax/libs/bootswatch/3.3.4/sandstone/bootstrap.min.css");
      loadScript(protocol + "cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.4/js/bootstrap.min.js");
    }


    /**
     * Bootstrap (Bootswatch United theme)
     * Ubuntu orange and a unique font
     *
     * See: https://bootswatch.com/united/
     */
    if (theme === "united") {
      loadStylesheet(protocol + "cdnjs.cloudflare.com/ajax/libs/bootswatch/3.3.4/united/bootstrap.min.css");
      loadScript(protocol + "cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.4/js/bootstrap.min.js");
    }

    /**
     * Bootstrap (Bootswatch Yeti theme)
     * A friendly foundation
     *
     * See: https://bootswatch.com/yeti/
     */
    if (theme === "yeti" || !theme) {
      loadStylesheet(protocol + "cdnjs.cloudflare.com/ajax/libs/bootswatch/3.3.4/yeti/bootstrap.min.css");
      loadScript(protocol + "cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.4/js/bootstrap.min.js");
    }


    /**
     * Local Development
     */
    loadStylesheet(pathToRoot + 'css/meta-bootstrap.css');

    // Application Styles
    loadStylesheet(pathToRoot + "css/style.css");

    // Application Dependencies
    loadScript(pathToRoot + 'js/core.js');
    loadScript(pathToRoot + 'js/includes.js');

    // Bootswatch-style code preview
    document.write('<div id="source-modal" class="modal fade"><div class="modal-dialog modal-lg"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button><h4 class="modal-title">Source Code</h4></div><div class="modal-body"><pre></pre></div></div></div></div>');
    loadStylesheet(pathToRoot + 'meta/view-source.css');
    loadScript(pathToRoot + 'js/view-source.js');

    // Once completed, set an identifier to true to avoid running the script loader twice
    window[loaderName] = true;
  }

})();
