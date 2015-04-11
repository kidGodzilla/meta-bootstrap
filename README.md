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
