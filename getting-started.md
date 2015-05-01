# Getting Started with MetaBootstrap

MetaBootstrap is a library designed to fit between your existing Bootstrap theme and any custom CSS your wish to add to your website, providing numerous UI elements and ready-to-use layouts to kickstart your project and reduce development time.

MetaBootstrap depends on underlaying Bootstrap themes which follow mainstream Bootstrap conventions, (a 12-column grid, conventional breakpoints & font-sizes). We assume that you will use Bootstrap to define your website's Branding (Fonts & Colors) as well as your website's primitives (your UI kit). Making major revisions that affect layouts in your Bootstrap theme can degrade MetaBootstrap's performance (and break compatibility with future Bootstrap releases). These should be made in your custom styles, which come after MetaBootstrap.

## What to include

We host MetaBootstrap in a CDN for your convenience, with a dependency-loader to help you get started with the most common themes and features. Alternatively, a package on NPM is coming soon, or you can roll your own by following the instructions in the next section.

## Using the MetaBootstrap CDN

To use MetaBootstrap via the CDN, simply include this line of code before your `</head>` tag.

	<script src="//www.metabootstrap.com/mbs.js?theme=vanilla"></script>

Examples and options are available when previewing Bootstrap themes included in the MetaBootstrap project.

## Rolling your Own MetaBootstrap stack

MetaBootstrap consists of a single dependency, `metabootstrap.min.css`, which should be included in your header after `bootstrap.min.css` and any additional modifications you have made to extend your UI kit.

Website or layout-specific styles which may interfere with MetaBootstrap layouts should go in a `style.css` after MetaBootstrap, overriding MetaBootstrap defaults.

## Installing via NPM

An NPM module is coming soon. More details will be available once it is released.

