# META-BOOTSTRAP

### What is *Meta Bootstrap?*

*Meta-bootstrap* aims to be a drop-in library one level of abstraction higher than Bootstrap. If you think of Bootstrap as branding + a basic UI kit, Meta-bootstrap would be a universal set of generic sections and components that extends bootstrap.

For example, a complete set of navbars, headers, footers, contact us sections, about us sections, our team sections, & portfolio sections.

This way, you can stop recreating the same basic components and move on to designing pages at a higher level-of-abstraction.

*Meta-bootstrap* can also serve as a quickstart when creating new themes.

### Works well with Bootswatch

Components and sections are developed using a selection of popular Bootswatch themes. This ensures compatibility with a wide-range of styles and gives theme developers a great starting point for building their UI kit and Branding at a low level.

### Getting Started

1. At the lowest level, your theme should consist of either vanilla bootstrap, a bootswatch theme, or a full UI kit built with Bootstrap.
2. Next, you should include meta-bootstrap.css.
3. `less` files are also included for customizing *meta-bootstrap*. Optionally, you can modify `variables.less` & `style.less` to further customize *meta-bootstrap*.
4. A custom `style.css` should be the next item included with your theme. This will contain theme-specific customization (such as page-specific classes, overrides, & addons).
5. Next, you should include your vendor CSS for any plugins, components, or extensions you might be including.
6. Finally, you can setup a build-chain (concat + minify would suffice) to build your production-ready theme.

### Contributing

Feel free to submit a pull request at any time. As a courtesy, please <a href="https://github.com/kidGodzilla/meta-bootstrap/issues">Open an issue</a> to discuss the changes you would like to make before proceeding.

### Running a local server (for development only)

1. `npm install && bower install`

Once these tasks are completed successfully, you can type `grunt` to run the server on `localhost:3000` with auto-reload.

**This gruntfile isn't finished. Other tasks have not yet been implemented, including less, clean, concat, etc. However, this is still useful since MetaBootstrap relies on HTML Includes, which present CORS issues without a webserver.**

### Development Methodology

*Process should be implemented by those who use it, at the moment in which it becomes necessary. Not before.*

##### How does this influence meta-bootstrap?

Instead of planning for things we might eventually need, we aim to create new global LESS/CSS when code is being refactored.

To support this, we will create a large number of *“Temporary structures”*, or CSS classes which perform only one function.

For example:

        .list-style-type-none {
            list-style-type: none;
        }

Has been created as a temporary structure to facilitate the creation of new layouts.

Over time, the codebase will evolve to the point that either *many UI components or sections depend upon this class*, or *very few elements depend upon this class*.

In the event of the first case, patterns will emerge over time. For example, there may be two larger, common use-cases in which this functionality is necessary, and it may be useful to refactor the existing code to abstract several smaller classes into a higher-level one.

Since there is now a sufficient context for creating this abstraction, it becomes appropriate to refactor this specific class.
