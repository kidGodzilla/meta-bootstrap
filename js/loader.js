/**
 * LOAD-DEPENDENCIES.JS
 * A naive dependency loader which loads scripts & stylesheets on page load.
 */
(function() {

  /**
   * Sets the protocol for loading scripts, when the option is available (useful for local development)
   * Options: "http://", "https://", "file://", and "//"
   */
  var protocol = "//";

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
     * Metro Bootstrap
     * Another Ode to Metro
     *
     * See: https://github.com/olton/Metro-UI-CSS
     */
    if (theme === "metro-bootstrap") {
      loadStylesheet(pathToRoot + "themes/metro/metro.min.css");
      loadScript(protocol + "cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.4/js/bootstrap.min.js");
    }


    /**
     * Geo Bootstrap
     * An Ode to Geocities
     *
     * See: http://code.divshot.com/geo-bootstrap/
     */
    if (theme === "geo-bootstrap") {
      loadStylesheet(pathToRoot + "themes/geo/geo.min.css");
      loadScript(protocol + "cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.4/js/bootstrap.min.js");
    }


    /**
     * Bootstrap Bootflat
     * An well-developed flat theme
     *
     * See: https://github.com/bootflat/bootflat.github.io
     */
    if (theme === "bootflat") {
      loadStylesheet(protocol + "cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.4/css/bootstrap.min.css");
      loadStylesheet(pathToRoot + "themes/bootflat/bootflat.min.css");
      loadScript(protocol + "cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.4/js/bootstrap.min.js");
    }


    /**
     * Bootstrap FlatUI
     * Another well-developed flat theme
     *
     * See: http://designmodo.github.io/Flat-UI/
     */
    if (bootstrapTheme === "bootflat-ui") {
      loadStylesheet(protocol + "cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.4/css/bootstrap.min.css");
      loadStylesheet(protocol + "designmodo.github.io/Flat-UI/dist/css/flat-ui.min.css");
      loadScript(protocol + "cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.4/js/bootstrap.min.js");
    }


    /**
     * 100% Organic Bootstrap
     * A theme for all-natural, organic webpages
     *
     * See: https://github.com/kidgodzilla
     */
    if (theme === "organic") {
      loadStylesheet(pathToRoot + "themes/organic/organic.css");
      loadScript(protocol + "cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.4/js/bootstrap.min.js");
    }


    /**
     * Bitswatch
     * A Fun, Flat, Corporate feel
     *
     * See: https://github.com/kidgodzilla
     */
    if (theme === "bitswatch") {
      loadStylesheet(protocol + "www.bittitan.com/website-redesign/bootstrap.min.css");
      loadStylesheet(protocol + "www.bittitan.com/website-redesign/style.css");
      loadScript(protocol + "cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.4/js/bootstrap.min.js");
    }


    /**
     * Bitstrap
     * A blue-grey corporate feel
     *
     * See: https://github.com/kidgodzilla
     */
    if (theme === "bitstrap") {
      loadStylesheet(protocol + "www.bittitan.com/internal-bootstrap/bt_internal/bootstrap.css");
      loadScript(protocol + "cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.4/js/bootstrap.min.js");
    }


    /**
     * Material Design for Bootstrap
     * Google's Material Design Framework
     *
     * See: https://fezvrasta.github.io/bootstrap-material-design
     */
    if (theme === "material") {
      loadStylesheet(protocol + "cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.4/css/bootstrap.min.css");
      loadStylesheet(protocol + "cdnjs.cloudflare.com/ajax/libs/bootstrap-material-design/0.3.0/css/roboto.min.css");
      loadStylesheet(protocol + "cdnjs.cloudflare.com/ajax/libs/bootstrap-material-design/0.3.0/css/material-fullpalette.min.css");
      loadStylesheet(protocol + "cdnjs.cloudflare.com/ajax/libs/bootstrap-material-design/0.3.0/css/ripples.min.css");
      loadStylesheet(protocol + "cdn.rawgit.com/FezVrasta/dropdown.js/master/jquery.dropdown.css");
      loadScript(protocol + "cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.4/js/bootstrap.min.js");
      loadScript(protocol + "cdnjs.cloudflare.com/ajax/libs/bootstrap-material-design/0.3.0/js/material.min.js");
      loadScript(protocol + "cdnjs.cloudflare.com/ajax/libs/bootstrap-material-design/0.3.0/js/ripples.min.js");
      loadScript(protocol + "cdnjs.cloudflare.com/ajax/libs/noUiSlider/6.2.0/jquery.nouislider.min.js");
      loadScript(protocol + "cdn.rawgit.com/FezVrasta/dropdown.js/master/jquery.dropdown.js");
      document.write("<script>$.material.init();$('.material-dropdown select').dropdown();</script>");
    }


    /**
     * Local Development
     */
    loadStylesheet(pathToRoot + 'css/meta-bootstrap.css');

    // Application Styles
    loadStylesheet(pathToRoot + "css/style.css");

    // Application Dependencies
    loadScript(pathToRoot + 'js/jquery.outer-html.js');
    loadScript(pathToRoot + 'js/core.js');
    loadScript(pathToRoot + 'js/includes.js');
    loadScript(pathToRoot + 'js/fix-urls.js');

    // Logo
    document.write("<link href='http://fonts.googleapis.com/css?family=Montserrat:400' rel='stylesheet' type='text/css'>");

    // Bootswatch-style code preview
    document.write('<div id="source-modal" class="modal fade"><div class="modal-dialog modal-lg"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button><h4 class="modal-title">Layout Source Code</h4></div><div class="modal-body"><pre></pre></div></div></div></div>');
    loadStylesheet(pathToRoot + 'meta/view-source.css');
    loadScript(pathToRoot + 'js/view-source.js');

    // Generate Code Button
    document.write('<button class="btn btn-primary" data-toggle="modal" data-target="#source-modal" style="position:fixed;z-index:9999;right: 50px;bottom:50px" onclick="window.generateMetaBootstrapCode()">Get Started with this Theme</button>');

    // Once completed, set an identifier to true to avoid running the script loader twice
    window[loaderName] = true;
  }

})();
