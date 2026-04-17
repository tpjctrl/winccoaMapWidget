# The Lit Cheat Sheet – Lit

Feb 3, 2025 — Updated Feb 3, 2025

## Contents

1.  [Component Definition](#component-definition)
    1.  [Defining a Component](#defining-a-component)
    2.  [Import a component](#import-a-component)
2.  [Templating](#templating)
    1.  [Render HTML](#render-html)
    2.  [Conditionals](#conditionals)
    3.  [Attribute and Property Expressions (Binding syntax)](<#attribute-and-property-expressions-(binding-syntax)>)
    4.  [Event Listener Expressions](#event-listener-expressions)
    5.  [Rendering lists](#rendering-lists)
    6.  [Re-rendering lists efficiently](#re-rendering-lists-efficiently)
    7.  [Virtualizing long lists](#virtualizing-long-lists)
    8.  [Render String to HTML](#render-string-to-html)
    9.  [Bind to HTML Tag Name](#bind-to-html-tag-name)
    10. [Bind Any Value to HTML Tag Name or Attribute Name](#bind-any-value-to-html-tag-name-or-attribute-name)
3.  [Styles](#styles)
    1.  [Add Styles](#add-styles)
    2.  [Styles are Scoped](#styles-are-scoped)
    3.  [Conditionally Add Classes](#conditionally-add-classes)
    4.  [Sharing Lit styles with imports](#sharing-lit-styles-with-imports)
    5.  [Inheriting Styles Through Shadow DOM With CSS Custom Properties](#inheriting-styles-through-shadow-dom-with-css-custom-properties)
    6.  [Setting Arbitrary Styles With CSS Shadow Parts](#setting-arbitrary-styles-with-css-shadow-parts)
    7.  [Exporting a CSS Shadow Part](#exporting-a-css-shadow-part)
    8.  [Importing Styles as a String](#importing-styles-as-a-string)
    9.  [Importing CSS Files into Components](#importing-css-files-into-components)
4.  [Shadow DOM](#shadow-dom)
    1.  [What does Shadow DOM do?](#what-does-shadow-dom-do)
    2.  [Turn off Shadow DOM](#turn-off-shadow-dom)
    3.  [Slotting Components Into Another Component's Shadow DOM](#slotting-components-into-another-component's-shadow-dom)
    4.  [Styling a Slotted Component](#styling-a-slotted-component)
    5.  [Turning on delegatesFocus and other shadow root options](#turning-on-delegatesfocus-and-other-shadow-root-options)
5.  [Properties and State](#properties-and-state)
    1.  [Reactive Properties](#reactive-properties)
    2.  [Reactive State](#reactive-state)
    3.  [Re-render an Array or Object Change](#re-render-an-array-or-object-change)
    4.  [Custom Attribute Converters](#custom-attribute-converters)
    5.  [Derived Read-Only State](#derived-read-only-state)
    6.  [Reconcile Values Between Reactive Properties](#reconcile-values-between-reactive-properties)
    7.  [Sync Reactive Property with Browser Features](#sync-reactive-property-with-browser-features)
    8.  [Reconcile Values Between Reactive Properties and DOM](#reconcile-values-between-reactive-properties-and-dom)
6.  [Lifecycle](#lifecycle)
    1.  [Lifecycle order](#lifecycle-order)
    2.  [Waiting for an update](#waiting-for-an-update)
    3.  [Asynchronous Tasks](#asynchronous-tasks)
7.  [Events](#events)
    1.  [Adding listeners to the host element](#adding-listeners-to-the-host-element)
    2.  [Adding listeners to global nodes](#adding-listeners-to-global-nodes)
8.  [Data Flow and State Management](#data-flow-and-state-management)
    1.  [Pass data down](#pass-data-down)
    2.  [Dispatch Events Up](#dispatch-events-up)
    3.  [Context](#context)
9.  [Accessing DOM](#accessing-dom)
    1.  [Getting An Element Reference](#getting-an-element-reference)
    2.  [Other Methods to Get An Element Reference](#other-methods-to-get-an-element-reference)
    3.  [Getting An Element Reference After Update](#getting-an-element-reference-after-update)
    4.  [Accessing Slotted Content](#accessing-slotted-content)
10. [Signals](#signals)
11. [Common Signal Setup (SignalWatcher)](<#common-signal-setup-(signalwatcher)>)
12. [Pinpoint Signal Updates (watch directive)](<#pinpoint-signal-updates-(watch-directive)>)
13. [Signals HTML Template Tag](#signals-html-template-tag)
14. [Make Signal Values from Other Signals (computed)](<#make-signal-values-from-other-signals-(computed)>)
15. [Reacting to Signal Changes (effects)](<#reacting-to-signal-changes-(effects)>)
16. [Sharing Global, Reactive Data Across Components](#sharing-global-reactive-data-across-components)

Do you need a quick reference for the basics of Lit? Look no further! This cheat sheet will help you get started with, or just remember, the features of Lit.

If you are coming from another framework, you might also want to supplement this article with [Component Party](https://component-party.dev/) which compares basic concepts across different frameworks. Just make sure that Lit is selected at the top of the page!

Use the Table of Contents to jump to a specific section!

## Component Definition

[Permalink to “Component Definition”](#component-definition)

### Defining a Component

[Permalink to “Defining a Component”](#defining-a-component)

`LitElement` is the base class for all Lit components.

` @customElement``customElements.define `is where you associate the name of your component with the class definition / logic of that component.

`render()` is the method where you define your component's template using a tagged template literal with `html`.

Write your HTML in the `html` tagged template literal.

Important rules:

Components are global HTML elements, you currently can't have more than one with the same name on a page.

Components must have dashes in their name (defined using ` @customElement``customElements.define `).

**Related Documentation & Topics:**

- [Defining a Component](https://lit.dev/docs/components/defining/)
- [LitElement](https://lit.dev/docs/api/LitElement/)
- [`@customElement`](about:/docs/api/decorators/#customElement)
- [`customElements.define`](https://developer.mozilla.org/en-US/docs/Web/API/CustomElementRegistry/define)
- [Rendering](https://lit.dev/docs/components/rendering/)
- [How to build your first Lit component](https://www.youtube.com/watch?v=QBa1_QQnRcs) (Video)
- [How to style your Lit elements](https://www.youtube.com/watch?v=Xt7blcyuw5s)

### Import a component

[Permalink to “Import a component”](#import-a-component)

To use a component, import the file with its definition.

**Related Documentation & Topics:**

- [`import`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) (external)
- [`import()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/import) (external)
- [JavaScript modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules) (external)
- [`@customElement`](about:/docs/api/decorators/#customElement)
- [`customElements.define`](https://developer.mozilla.org/en-US/docs/Web/API/CustomElementRegistry/define) (external)
- [Local dev servers (bare module specifiers)](about:/docs/tools/development/#devserver)

Use the `html` tagged template literal to define your component's template.

**Related Documentation & Topics:**

- [Templates Overview](https://lit.dev/docs/templates/overview/)
- [Rendering](https://lit.dev/docs/components/rendering/)

Use standard JavaScript conditional expressions in your template to conditionally render content.

**Related Documentation & Topics:**

- [Conditionals](https://lit.dev/docs/templates/conditionals/)
- [Expressions](https://lit.dev/docs/templates/expressions/)

### Attribute and Property Expressions (Binding syntax)

[Permalink to “Attribute and Property Expressions (Binding syntax)”](<#attribute-and-property-expressions-(binding-syntax)>)

Lit-html has three types of built-in expressions to set attributes or properties on elements:

- Property expressions `.prop=${value}`
- Attribute expressions `attr=${value}`
- Boolean attribute expressions `?attr=${value}`

**Related Documentation & Topics:**

- [Expressions](https://lit.dev/docs/templates/expressions/)
- [Expressions – Attribute Expressions](about:/docs/templates/expressions/#attribute-expressions)
- [Expressions – Property Expressions](about:/docs/templates/expressions/#property-expressions)

### Event Listener Expressions

[Permalink to “Event Listener Expressions”](#event-listener-expressions)

Lit-html has a built-in event listener expression to add event listeners to elements. You can also use event listeners to mimic two-way databinding with input elements.

**Related Documentation & Topics:**

- [Expressions](https://lit.dev/docs/templates/expressions/)
- [Expressions – Event listener expressions](about:/docs/templates/expressions/#event-listener-expressions)
- [Events](https://lit.dev/docs/components/events/)
- [Event communication between web components](https://www.youtube.com/watch?v=T9mxtnoy9Qw&themeRefresh=1) (video)
- [Customizing event listener options](about:/docs/components/events/#event-options-decorator)
- [A complete guide on shadow DOM and event propagation](https://pm.dartus.fr/posts/2021/shadow-dom-and-event-propagation/) (external)

### Rendering lists

[Permalink to “Rendering lists”](#rendering-lists)

Lit-html can render JavaScript arrays and iterables. For most simple use cases, you can use the `Array.map()` method to render arrays of items or the `map()` directive to render any other iterables. This pattern is best used for short, simple lists.

**Related Documentation & Topics:**

- [Lists](https://lit.dev/docs/templates/lists/)
- [Working With Lists Tutorial](https://lit.dev/tutorials/working-with-lists/)
- [Built-in directives – `map()`](about:/docs/templates/directives/#map)
- [Built-in directives – `range()`](about:/docs/templates/directives/#range)
- [Built-in directives – `join()`](about:/docs/templates/directives/#join)

### Re-rendering lists efficiently

[Permalink to “Re-rendering lists efficiently”](#re-rendering-lists-efficiently)

For long lists that may change frequently, use the `repeat()` directive to efficiently re-render only the items that have changed.

- [Lists](https://lit.dev/docs/templates/lists/)
- [Working With Lists Tutorial – The `repeat()` directive](about:/tutorials/working-with-lists/#6)
- [Built-in directives – `repeat()`](about:/docs/templates/directives/#repeat)

### Virtualizing long lists

[Permalink to “Virtualizing long lists”](#virtualizing-long-lists)

For lists that are so long that it would be impractical to render all items at once, use the Lit Virtualizer to render only the items that are currently in view.

Lit Virtualizer is in labs

meaning that its implementation might change until it has graduated and become stable. Additionally there are many more features to virtualizer, so it is recommended to look at the documentation.

**Related Documentation & Topics:**

- [Lit Virtualizer Documentation](https://github.com/lit/lit/tree/main/packages/labs/virtualizer#readme) (external)
- [Lit Labs: Virtualizer](https://www.youtube.com/watch?v=ay8ImAgO9ik) (video)

### Render String to HTML

[Permalink to “Render String to HTML”](#render-string-to-html)

To render a string of HTML as HTML in Lit, use the `unsafeHTML` directive.

Be careful when using `unsafeHTML` as it can open your application up to cross-site scripting (XSS) and other attacks.

Only use `unsafeHTML` with trusted sources and strings as you would use `Element.prototype.innerHTML`.

**Related Documentation & Topics:**

- [Built-in directives – `unsafeHTML`](about:/docs/templates/directives/#unsafehtml)
- [innerHTML Security considerations](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML#security_considerations) (external)

### Bind to HTML Tag Name

[Permalink to “Bind to HTML Tag Name”](#bind-to-html-tag-name)

In rare cases, you need to bind to an HTML tag name to change the rendered element. You can do this safely with the `static-html` module and the `literal` template tag.

Be careful when using static HTML templates for switching tag names as it requires reapplying all bindings in the template every time the tag name changes.

This can be costly, and in most cases it is recommended to use conditional template rendering instead of switching tag names with static HTML templates.

**Related Documentation & Topics:**

- [Static Expressions](about:/docs/templates/expressions/#static-expressions)

### Bind Any Value to HTML Tag Name or Attribute Name

[Permalink to “Bind Any Value to HTML Tag Name or Attribute Name”](#bind-any-value-to-html-tag-name-or-attribute-name)

In even rarer cases, you need to bind any arbitrary string value to an HTML tag name to change the rendered element. You can do this with the `unsafeStatic()` directive. This may be helpful if you are implementing an SSR framework that uses lit-html for rendering.

Be careful when using `unsafeStatic` as it can open your application up to cross-site scripting (XSS) and other attacks.

Only use `unsafeStatic` with trusted sources and strings as you would use `Element.prototype.innerHTML`. Additionally, `unsafeStatic` is not cached and will re-render the entire template every time the value changes which may negatively affect performance.

- [Non-literal Statics](about:/docs/templates/expressions/#non-literal-statics)
- [Static Expressions](about:/docs/templates/expressions/#static-expressions)

Add styles by defining the `static styles` property. Write CSS in the `css` tagged template literal.

**Related Documentation & Topics:**

- [Styles](https://lit.dev/docs/components/styles/)

### Styles are Scoped

[Permalink to “Styles are Scoped”](#styles-are-scoped)

Styles _only_ apply to the current element. That means you can feel free to use super generic selectors that you'd normally have to make up class names for.

**Related Documentation & Topics:**

- [Styles](https://lit.dev/docs/components/styles/)
- [Shadow DOM](https://lit.dev/docs/components/shadow-dom/)

### Conditionally Add Classes

[Permalink to “Conditionally Add Classes”](#conditionally-add-classes)

To conditionally apply styles it's generally best to use `classMap`.

**Related Documentation & Topics:**

- [Defining Scoped Styles in the template](about:/docs/components/styles/#styles-in-the-template)
- [`classMap`](about:/docs/templates/directives/#classmap)
- [`classMap` tsdoc](about:/docs/api/directives/#classMap)
- [Playground example](about:/playground/#sample=examples/directive-class-map)

### Sharing Lit styles with imports

[Permalink to “Sharing Lit styles with imports”](#sharing-lit-styles-with-imports)

You can share Lit stylesheets with other components by exporting them from a module and importing them into another.

- [Styling](https://lit.dev/docs/components/styles/)
- [Sharing Styles](about:/docs/components/styles/#sharing-styles)

### Inheriting Styles Through Shadow DOM With CSS Custom Properties

[Permalink to “Inheriting Styles Through Shadow DOM With CSS Custom Properties”](#inheriting-styles-through-shadow-dom-with-css-custom-properties)

CSS Custom Properties can pierce multiple shadow roots allowing you to share values for specific properties.

**Related Documentation & Topics:**

- [CSS Custom Properties](about:/docs/components/styles/#customprops)
- [Theming](about:/docs/components/styles/#theming)
- [How to style your Lit elements](https://www.youtube.com/watch?v=Xt7blcyuw5s) (Video)

### Setting Arbitrary Styles With CSS Shadow Parts

[Permalink to “Setting Arbitrary Styles With CSS Shadow Parts”](#setting-arbitrary-styles-with-css-shadow-parts)

CSS Shadow Parts are exposed by components with the `part="<part-name>"` attribute.

Shadow Parts can pierce individual shadow roots allowing you to set arbitrary styles on a given node using the `::part(<part-name>)` pseudo-element.

**Related Documentation & Topics:**

- [How to style your Lit elements](https://www.youtube.com/watch?v=Xt7blcyuw5s) (video)
- [CSS Shadow Parts](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_shadow_parts) (external)
- [`::part`](https://developer.mozilla.org/en-US/docs/Web/CSS/::part) (external)

### Exporting a CSS Shadow Part

[Permalink to “Exporting a CSS Shadow Part”](#exporting-a-css-shadow-part)

CSS Shadow part names can only apply to the targeted element. You need to use `exportparts` to expose a shadow part in nested shadow roots.

You can export multiple parts by separating them with a comma (`,`).

You can also rename parts with a colon (`:`).

**Related Documentation & Topics:**

- [`exportparts`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/exportparts) (external)
- [How to style your Lit elements](https://www.youtube.com/watch?v=Xt7blcyuw5s) (video)
- [CSS Shadow Parts](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_shadow_parts) (external)
- [`::part`](https://developer.mozilla.org/en-US/docs/Web/CSS/::part) (external)

### Importing Styles as a String

[Permalink to “Importing Styles as a String”](#importing-styles-as-a-string)

In some rare cases, you may receive trusted styles as a string and may need to apply them to a component. You can do this with native, constructable stylesheets.

Be careful when using constructable stylesheets as it can open your application to privacy and security vulnerabilities.

Only use constructable stylesheets with trusted sources and strings.

**Related Documentation & Topics:**

- [Constructable Stylesheets](https://web.dev/articles/constructable-stylesheets) (external)
- [`CSSResultOrNative`](about:/docs/api/styles/#CSSResultOrNative)

### Importing CSS Files into Components

[Permalink to “Importing CSS Files into Components”](#importing-css-files-into-components)

In some cases, you may want to import styles in the form of a CSS files rather than a Lit CSSResult or a string. Currently there

This is a new feature recently added to some browsers.

Please check [browser compatibility on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import/with#browser_compatibility).

Due to the newness of this feature, the following example uses JavaScript and may not work in all in certain browsers.

Some better-supported alternatives to this approach may include:

- A build tool plugin that transforms your CSS imports into Lit `CSSResult` similar to [`rollup-plugin-lit-css`](https://www.npmjs.com/package/rollup-plugin-lit-css)
- Using a bundler tool to transform your CSS imports into strings and then using Constructable Stylesheets
- Using a `<link rel="stylesheet" href="...">` in your template, but this will cause FOUC.

**Related Documentation & Topics:**

- [Import Attributes](https://v8.dev/features/import-attributes) (external)
- [Import Attributes Browser Compatiblity Table](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import/with#browser_compatibility) (external)
- [Proposal Import Attributes](https://github.com/tc39/proposal-import-attributes) (external)
- [Import JSON, CSS and more with import attributes](https://fullystacked.net/import-attributes/) (external)
- [Using CSS Module Scripts to import stylesheets](https://web.dev/articles/constructable-stylesheets) (external)
  - **NOTE:** The syntax of the import assertions proposal in this article was deprecated in favor of import attribtues which uses `with` rather than `assert`.
- Build Tools
  - [`rollup-plugin-lit-css`](https://www.npmjs.com/package/rollup-plugin-lit-css)
  - [`esbuild-plugin-lit-css`](https://www.npmjs.com/package/esbuild-plugin-lit-css)
  - [`lit-css-loader`](https://www.npmjs.com/package/lit-css-loader)
  - [`vite-plugin-lit-css`](https://www.npmjs.com/package/vite-plugin-lit-css)

### What does Shadow DOM do?

[Permalink to “What does Shadow DOM do?”](#what-does-shadow-dom-do)

- Scopes styles to the shadow root
- Scopes the DOM to the shadow root
  - Can't be targeted by querySelector calls from outside the shadow root
- Enables slotting content with the `<slot>` element
- Exposes an API for CSS with CSS Custom Properties and CSS Shadow Parts

**Related Documentation & Topics:**

- [DOM Encapsulation](about:/docs/components/rendering/#dom-encapsulation)
- [Working with Shadow DOM](https://lit.dev/docs/components/shadow-dom/)
- [How to style your Lit elements](https://www.youtube.com/watch?v=Xt7blcyuw5s) (video)

### Turn off Shadow DOM

[Permalink to “Turn off Shadow DOM”](#turn-off-shadow-dom)

You can turn off the Shadow DOM by overriding the `createRenderRoot()` method and setting the render root to the element itself.

This is generally not recommended, but it may sometimes be worthwhile for integration with older systems or libraries that may not be updated to work with Shadow DOM.

Since the Shadow root no longer exists, `<slot>` does not work and Lit will no longer handle the `static styles` property for you. You must decide how to handle your styles.

**Related Documentation & Topics:**

- [Implementing `createRenderRoot()`](about:/docs/components/shadow-dom/#implementing-createrenderroot)

### Slotting Components Into Another Component's Shadow DOM

[Permalink to “Slotting Components Into Another Component's Shadow DOM”](#slotting-components-into-another-component's-shadow-dom)

You can slot a component into another component's shadow DOM by using the `<slot>` element. If you're familiar with React, this is similar to `props.children`.

**Related Documentation & Topics:**

- [Slots](about:/docs/components/shadow-dom/#slots)
- [Working With Shadow DOM](https://lit.dev/docs/components/shadow-dom/)
- [How to style your Lit elements](https://www.youtube.com/watch?v=Xt7blcyuw5s) (video)
- [How to Build a Carousel in Lit](https://www.youtube.com/watch?v=2RftvylEtrE) (video)
- [Build an Animated Carousel Tutorial](https://lit.dev/tutorials/carousel)

### Styling a Slotted Component

[Permalink to “Styling a Slotted Component”](#styling-a-slotted-component)

Slotted components use the browser's native Shadow DOM projection features. In order to keep strong, performant, and encapsulated styles, the browser vendors have placed restrictions on styling slotted content.

You can style directly-slotted elements with the `::slotted()` pseudo-selector. If you would like to style children of slotted content, you should use CSS Custom Properties.

**Related Documentation & Topics:**

- [Styling the Component's Children](about:/docs/components/styles/#slotted)
- [Build an animated carousel element tutorial](https://lit.dev/tutorials/carousel)
- [How to style your Lit elements](https://www.youtube.com/watch?v=Xt7blcyuw5s) (video)
- [How to build a Carousel in Lit](https://www.youtube.com/watch?v=2RftvylEtrE&t) (video)

### Turning on `delegatesFocus` and other shadow root options

[Permalink to “Turning on delegatesFocus and other shadow root options”](#turning-on-delegatesfocus-and-other-shadow-root-options)

You can set shadow root options passed to `Element.attachShadow()` by overriding the static `shadowRootOptions` member.

**Related Documentation & Topics:**

- [Setting `shadowRootOptions`](about:/docs/components/shadow-dom/#setting-shadowrootoptions)
- [`Element.prototype.attachShadow():options`](https://developer.mozilla.org/en-US/docs/Web/API/Element/attachShadow#options) (external)
- [`delegatesFocus`](https://developer.mozilla.org/en-US/docs/Web/API/ShadowRoot/delegatesFocus) (external)

## Properties and State

[Permalink to “Properties and State”](#properties-and-state)

### Reactive Properties

[Permalink to “Reactive Properties”](#reactive-properties)

Reactive properties are properties within a component that automatically trigger a re-render when they change. These properties can be set externally, from outside the component's boundary.

They also handle attributes by accepting them and converting them into corresponding properties.

You can define a reactive property with the`@property` decorator`static properties = { propertyName: {...}}` code block and initializing them in the `constructor()`.

**Related Documentation & Topics:**

- [Reactive Properties](https://lit.dev/docs/components/properties/)
- [Public reactive properties](about:/docs/components/properties/#declare)
- [Attributes](about:/docs/components/properties/#attributes)
- [Custom property accessors](about:/docs/components/properties/#attributes)
- [Customizing change detection](about:/docs/components/properties/#haschanged)
- [Reactivity Tutorial](https://lit.dev/tutorials/reactivity/)
- [Custom Attribute Converters Tutorial](https://lit.dev/tutorials/custom-attribute-converter/)
- [What Are Elements Video](https://www.youtube.com/watch?v=x_mixcGEia4)
- [Introduction to Lit - Reactive Properties Video](https://www.youtube.com/watch?v=uzFakwHaSmw&t=576s)

Reactive state is a property that is private to the component and is not exposed to the outside world. These properties are used to store internal state of a component that should trigger a re-render of the Lit lifecycle when they change.

You can define a reactive property with the`@state` decorator`static properties = { propertyName: {state: true, ...}}` code block and setting the `state: true` flag in the property's info. You can initialize them in the `constructor()`.

**Related Documentation & Topics:**

- [Reactive Properties](https://lit.dev/docs/components/properties/)
- [Internal Reactive State](about:/docs/components/properties/#internal-reactive-state)
- [Customizing change detection](about:/docs/components/properties/#haschanged)
- [Reactivity Tutorial](https://lit.dev/tutorials/reactivity/)
- [What Are Elements Video](https://www.youtube.com/watch?v=x_mixcGEia4)
- [Introduction to Lit - Reactive Properties Video](https://www.youtube.com/watch?v=uzFakwHaSmw&t=576s)

### Re-render an Array or Object Change

[Permalink to “Re-render an Array or Object Change”](#re-render-an-array-or-object-change)

Arrays are objects in JavaScript, and Lit's default change detection uses strict equality to determine if an array has changed. If you need to re-render a component when an array is mutated with something like `.push()` or `.pop()`, you will need to let Lit know that the array has changed.

The most common ways to do this are:

- Use the `requestUpdate()` method to manually trigger a re-render
- Create a new array / object reference

Custom `hasChanged()` methods in the reactive property definition won't help much here.

The `hasChanged()` function is only called when the property is set, not when the property is mutated. This would only be helpful when an array or object has a new reference assigned to it and you _don't_ want to trigger a re-render.

If this is your use case, you might generally be better off using a [`repeat()` directive](#re-rendering-lists-efficiently).

**Related Documentation & Topics:**

- [Lifecycle - Triggering an update](about:/docs/components/lifecycle/#reactive-update-cycle-triggering)
- [Rendering Arrays](about:/docs/templates/lists/#rendering-arrays)
- [Reactivity Tutorial - Triggering an update](about:/tutorials/reactivity/#3)
- [Working With Lists Tutorial](https://lit.dev/tutorials/working-with-lists/)

### Custom Attribute Converters

[Permalink to “Custom Attribute Converters”](#custom-attribute-converters)

In advanced cases, you may need to convert an attribute value to a property in a special way and vice versa. You can do this with a custom attribute converter.

Attribute converters run only when an attribute is set on the element or when a Reactive Property is set with the `reflect: true` option turned on.

**Related Documentation & Topics:**

- [Reactive properties - Providing a custom converter](about:/docs/components/properties/#conversion-converter)
- [Reactive properties - Using the default converter](about:/docs/components/properties/#conversion-type)
- [Attributes](about:/docs/components/properties/#attributes)
- [Custom Attribute Converters Tutorial](https://lit.dev/tutorials/custom-attribute-converter/)
- [Reactive Properties](https://lit.dev/docs/components/properties/)
- [Public reactive properties](about:/docs/components/properties/#declare)
- [Custom attribute converter snippet](about:/playground/#sample=examples/properties-custom-converter)

### Derived Read-Only State

[Permalink to “Derived Read-Only State”](#derived-read-only-state)

Sometimes it is helpful to make a property that is derived from other properties or state. The simplest way you can do is is with a native getter.

**Related Documentation & Topics:**

- [Reactive Properties](https://lit.dev/docs/components/properties/)
- [Custom Property Accessors](about:/docs/components/properties/#accessors)
- [get - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get) (external)
- [set - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/set) (external)

### Reconcile Values Between Reactive Properties

[Permalink to “Reconcile Values Between Reactive Properties”](#reconcile-values-between-reactive-properties)

If you have multiple reactive properties that depend on each other, you can reconcile their values in the Lit's `willUpdate()` lifecycle method.

`willUpdate()` is a good place to reconcile values between properties that can also run on the server since `willUpdate()` is called during Lit SSR's server-side rendering.

- [Lifecycle - `willUpdate()`](about:/docs/components/lifecycle/#willupdate)
- [What happens when properties change](about:/docs/components/properties/#when-properties-change)
- [Reactive Properties](#reactive-properties)
- [Authoring components for Lit SSR](https://lit.dev/docs/ssr/authoring/)

### Sync Reactive Property with Browser Features

[Permalink to “Sync Reactive Property with Browser Features”](#sync-reactive-property-with-browser-features)

If you have reactive properties that depend on a browser API (like localStorage for example), you can reconcile their values in the Lit's `update()` lifecycle method.

`update()` is a good place to reconcile values between properties that need to access Browser APIs or the DOM. `update()` happens before render.

**Related Documentation & Topics:**

- [Lifecycle - `update()`](about:/docs/components/lifecycle/#update)
- [What happens when properties change](about:/docs/components/properties/#when-properties-change)
- [Reactive Properties](#reactive-properties)
- [Authoring components for Lit SSR](https://lit.dev/docs/ssr/authoring/)

### Reconcile Values Between Reactive Properties and DOM

[Permalink to “Reconcile Values Between Reactive Properties and DOM”](#reconcile-values-between-reactive-properties-and-dom)

If you have multiple reactive properties that depend on calculations from the component's rendered DOM, you can reconcile their values in the Lit's `updated()` lifecycle method.

`updated()` is a good place to reconcile values between properties that need to since `updated()` is called after the component has rendered its template. Though it is highly recommended to not update Reactive Properties in `updated()` unless necessary as it may trigger re-renders after a render has just completed. Lit is fast, but this could still be unnecessary work.

**Related Documentation & Topics:**

- [Lifecycle - `updated()`](about:/docs/components/lifecycle/#updated)
- [Getting An Element Reference](#getting-an-element-reference)
- [What happens when properties change](about:/docs/components/properties/#when-properties-change)
- [Reactive Properties](#reactive-properties)
- [Authoring components for Lit SSR](https://lit.dev/docs/ssr/authoring/)

### Lifecycle order

[Permalink to “Lifecycle order”](#lifecycle-order)

There are two lifecycles in Lit, the native Web Component lifecycle and the lifecycle that Lit adds on top of it to help handle property and state changes.

There are more lifecycle events which can be [found in the documentation](about:/docs/components/lifecycle/#reactive-update-cycle), but the ones you would normally use are the following and this is their general order:

1.  `constructor` – (Native custom element lifecycle)
2.  `connectedCallback` – (Native)
3.  `willUpdate` – (Lit lifecycle)
4.  `update` – (Lit)
5.  `render` – (Lit)
6.  `firstUpdated` – (Lit)
7.  `updated` – (Lit)
8.  `disconnectedCallback` – (Native)

The Lit lifecycle and the native custom element lifecycle are distinct and managed separately.

This means that while they generally follow a specific order, they may intermix because the browser controls the native lifecycle, while Lit and JavaScript manage the Lit lifecycle.

For example, a component may be attached to the DOM and then removed before the Lit lifecycle may run at all, or a component may be created with `document.createElement` which would call the `constructor`, but if it's never added to the DOM, the `connectedCallback` would never run and thus the Lit lifecycle would never run.

**Related Documentation & Topics:**

- [Lifecycle](https://lit.dev/docs/components/lifecycle/)
- [Lifecycle diagram](about:/docs/components/lifecycle/#reactive-update-cycle)

- Runs when the element is created via:
  - `document.createElement('my-element')`
  - `element.innerHTML = '<my-element></my-element>'`
  - `new MyElement()`
  - etc.
- Is native browser callback
- Requires call to `super()`
- A good place to set initial properties
- Do **NOT** require parameters in the constructor or modify DOM

#### `connectedCallback`

[Permalink to “connectedCallback”](#connectedcallback)

- _May_ run on the server. (This has not been finalized.)
- Runs when the element is added to the DOM via:
  - `element.appendChild(element)`
  - `element.innerHTML = '<my-element></my-element>'`
  - etc.
- Is native browser callback
- Requires call to `super.connectedCallback()`
- Can run multiple times, but a good place to set up event listeners to external elements like `document`.

- Runs on the server – do **NOT** access the DOM or browser APIs
- Is **NOT** a native browser callback (a Lit-specific method)
- Does **NOT** require call to `super.willUpdate()`
- A good place to set up properties that depend on other properties

- Runs after `willUpdate`
- Is **NOT** native browser callback (a Lit-specific method)
- Typically requires call to `super.update()` **AFTER** custom logic
- A good place to update properties that depend on other properties that depend on DOM

- Is **NOT** a native browser callback (a Lit-specific method)
- Does **NOT** require call to `super.render()`
- Runs on the server - do NOT access the DOM or browser APIs

- Runs after the first render
- Is **NOT** a native browser callback (a Lit-specific method)
- Does **NOT** require call to `super.firstUpdated()`
- A good place to perform initializations that require access to the component's rendered DOM

- Runs after `render` and `firstUpdated`
- Is **NOT** a native browser callback (a Lit-specific method)
- Does **NOT** require a call to `super.updated()`
- A good place to do some updates that require the component's rendered DOM or to update properties that depend on the rendered DOM
- Avoid setting reactive properties in this lifecycle as doing so may trigger unnecessary re-renders. Try to do them in `willUpdate` or `update` if possible.

#### `disconnectedCallback`

[Permalink to “disconnectedCallback”](#disconnectedcallback)

- Is called **AFTER** the element is removed from the DOM
- Is native browser callback
- Requires call to `super.connectedCallback()`
- A good place to clean up event listeners

### Waiting for an update

[Permalink to “Waiting for an update”](#waiting-for-an-update)

All Lit elements have asynchronous lifecycles. The reason for this is so that property changes (e.g. el.foo = 1; el.bar = 2;) are batched for efficiency and correctness.

You need to wait for the `updateComplete` promise to resolve before you can be sure that the element has finished updating its DOM.

**Related Documentation & Topics:**

- [Lifecycle](https://lit.dev/docs/components/lifecycle/)
- [updateComplete()](about:/docs/components/lifecycle/#updatecomplete)
- [requestUpdate()](about:/docs/components/lifecycle/#requestUpdate)
- [Getting an Element Reference](#getting-an-element-reference)
- [Getting an Element Reference After Update](#getting-an-element-reference-after-update)

### Asynchronous Tasks

[Permalink to “Asynchronous Tasks”](#asynchronous-tasks)

If you need to perform an asynchronous task in a Lit Element. You may want to use the `@lit/task` package. It handles marrying basics of managing asynchronous and the Lit lifecycle.

The following example fetches a Pokemon by ID from the [PokeAPI](https://pokeapi.co/) based on pokemon name. To do so you:

1.  Initialize the task with `new Task(...)`
2.  Task is a Reactive Controller, so you pass it a reference to the Reactive Element (`this`)
3.  Write an async function that fetches and returns the data
4.  Give Task a function that will return the reactive properties that Task relies on
5.  Render all the states of the Task in the `render()` method with `Task.prototype.render()`

**Related Documentation & Topics:**

- [Asynchronous Tasks](https://lit.dev/docs/data/task/)
- [Lit Labs – Task](https://www.youtube.com/watch?v=niWKuGhyE0M) (video)
  - NOTE: This video was published before Task had graduated from Labs.
- [Reactive Controllers – Asynchronous Tasks](about:/docs/composition/controllers/#asynchronous-tasks)

### Adding listeners to the host element

[Permalink to “Adding listeners to the host element”](#adding-listeners-to-the-host-element)

A common pattern is to add event listeners to the host element in the `constructor()`. There is no need to remove these listeners as they are automatically cleaned up by the browser's garbage collector when the element is no longer referenced.

**Related Documentation & Topics:**

- [Lifecycle](https://lit.dev/docs/components/lifecycle/)
- [Events](https://lit.dev/docs/components/events/)
- [Authoring components for Lit SSR](https://lit.dev/docs/ssr/authoring/)
- [A complete guide on shadow DOM and event propagation](https://pm.dartus.fr/posts/2021/shadow-dom-and-event-propagation/) (external)

### Adding listeners to global nodes

[Permalink to “Adding listeners to global nodes”](#adding-listeners-to-global-nodes)

A common pattern is to add event listeners to the to global nodes, like `document` or `window`, in the `connectedCallback` and remove them in the `disconnectedCallback`.

**Related Documentation & Topics:**

- [Lifecycle](https://lit.dev/docs/components/lifecycle/)
- [Events](https://lit.dev/docs/components/events/)
- [Authoring components for Lit SSR](https://lit.dev/docs/ssr/authoring/)
- [A complete guide on shadow DOM and event propagation](https://pm.dartus.fr/posts/2021/shadow-dom-and-event-propagation/) (external)

## Data Flow and State Management

[Permalink to “Data Flow and State Management”](#data-flow-and-state-management)

The simplest way to pass data down is to use properties and attributes.

For example, you can pass data down to child components using property bindings like this:

`.name=${'Steven'}`

For boolean attributes, use a question mark instead of a period, like this:

`?programmer=${true}`.

You generally want to expose your component's external attribute and property API with`@property()` instead of ` @state()``static properties = {propName: {state: false}} `.

**Related Documentation & Topics:**

- [Expressions](https://lit.dev/docs/templates/expressions/)
- [Expressions – Attribute Expressions](about:/docs/templates/expressions/#attribute-expressions)
- [Expressions – Property Expressions](about:/docs/templates/expressions/#property-expressions)
- [Event communication between web components](https://www.youtube.com/watch?v=T9mxtnoy9Qw&themeRefresh=1) (video)

### Dispatch Events Up

[Permalink to “Dispatch Events Up”](#dispatch-events-up)

To send data up the tree to ancestors, you can dispatch custom events. To emit an event, use `Element.dispatchEvent()`.

`dispatchEvent()` takes an event object as the first argument. Construct a custom event object like this:

`new CustomEvent('event-name', {detail: data, bubbles: true, composed: true})`

Provide data you want to pass to ancestors in the `detail` property of the event, and ancestors can react to the event by adding an event listener to the component like this:

`@event-name=${this.eventHandler}`

If you want an event to bubble through shadow Roots, set `composed: true`.

**Related Documentation & Topics:**

- [Event communication between web components](https://www.youtube.com/watch?v=T9mxtnoy9Qw&themeRefresh=1) (video)
- [A complete guide on shadow DOM and event propagation](https://pm.dartus.fr/posts/2021/shadow-dom-and-event-propagation/) (external)
- [Expressions](https://lit.dev/docs/templates/expressions/)
- [Expressions – Event listener expressions](about:/docs/templates/expressions/#event-listener-expressions)
- [Events](https://lit.dev/docs/components/events/)
- [Customizing event listener options](about:/docs/components/events/#event-options-decorator)

If you need to pass data down to a subtree without using properties or "prop drilling", you might want to use [`@lit/context`](https://www.npmjs.com/package/@lit/context).

**Related Documentation & Topics:**

- [Context](https://lit.dev/docs/data/context/)
- [WCCG Context Community Protocol](https://github.com/webcomponents-cg/community-protocols/blob/main/proposals/context.md) (external)

### Getting An Element Reference

[Permalink to “Getting An Element Reference”](#getting-an-element-reference)

The `@query` decorator allows you to access a reference to a single element in the component's shadow DOM using the syntax of `ShadowRoot.prototype.querySelector()`.

In JavaScript, you can access the element using `this.shadowRoot.querySelector()`.

NOTE: DOM is typically not ready until `firstUpdated` is called.

This means that DOM is accessible by `updated()` on first render as well, but not in `constructor()`, `connectedCallback()`, or `willUpdate()` until subsequent renders.

- [@query](about:/docs/components/shadow-dom/#query)
- [@queryAll](about:/docs/components/shadow-dom/#query-all)
- [@queryAsync](about:/docs/components/shadow-dom/#query-async)
- [Lit lifecycle](https://lit.dev/docs/components/lifecycle/)

### Other Methods to Get An Element Reference

[Permalink to “Other Methods to Get An Element Reference”](#other-methods-to-get-an-element-reference)

The `ref()` directive is a lit-html-specific method to acquire an element reference. The `ref()` directive is a good alternative when:

- You can't use the `@query` decorator (or its JS equivalent)
- You cannot determine when an element will be rendered
- You need to pass element references from a child to a parent component (not common)
- You're migrating from another framework like React
- You need to run a function when the referenced element changes

The `ref()` directive also accepts a callback function that will be called with the element reference as an argument when the target element is connected to the DOM.

Though, it is generally recommended to use the `@query` or the `@queryAsync` decorators when possible as they are generally more performant and less-reliant on Lit.

**Related Documentation & Topics:**

- [Built-in Directives – ref](about:/docs/templates/directives/#referencing-rendered-dom)
- [Templates – Element Expressions](about:/docs/templates/expressions/#element-expressions)

### Getting An Element Reference After Update

[Permalink to “Getting An Element Reference After Update”](#getting-an-element-reference-after-update)

The `@queryAsync` decorator is just like the `@query` decorator, but it waits for the current host element to finish its update before resolving. This is useful when you need to access an element that is rendered asynchronously by a change in the component's state.

The JavaScript equivalent awaits the `this.updateComplete` promise before calling `this.shadowRoot.querySelector()`.

**Related Documentation & Topics:**

- [@queryAsync](about:/docs/components/shadow-dom/#query-async)
- [`updateComplete`](about:/docs/components/lifecycle/#updatecomplete)
- [`getUpdateComplete()`](about:/docs/components/lifecycle/#getUpdateComplete)
- [Lit lifecycle](https://lit.dev/docs/components/lifecycle/)
- [@query](about:/docs/components/shadow-dom/#query)
- [@queryAll](about:/docs/components/shadow-dom/#query-all)
- [Waiting for an update](#waiting-for-an-update)

### Accessing Slotted Content

[Permalink to “Accessing Slotted Content”](#accessing-slotted-content)

Shadow DOM uses the `<slot>` element which allows you to project content from outside the shadow root into the shadow root. You can access slotted content using the`@queryAssignedElements` decorator`HTMLSlotElement.assignedElements()` method.

You give it a slot name to access, and the element selector to filter for.

**Related Documentation & Topics:**

- [Accessing Slotted Children](about:/docs/components/shadow-dom/#accessing-slotted-children)
- [Slots](about:/docs/components/shadow-dom/#slots)
- [`assignedElements` - MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLSlotElement/assignedElements) (external)
- [`HTMLSlotElement` - MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLSlotElement) (external)
- [`<slot>` - MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) (external)

Signals are data structures for managing observable state. They either store a value or compute a value based on other signals. The Lit project tries to conform to the [Signals standard proposal](https://github.com/tc39/proposal-signals) via the [`@lit-labs/signals` package](https://www.npmjs.com/package/@lit-labs/signals) in order to provide a cross-framework standard for reactive state management solution.

### Common Signal Setup (SignalWatcher)

[Permalink to “Common Signal Setup (SignalWatcher)”](<#common-signal-setup-(signalwatcher)>)

The most common way to use signals in Lit is to use the `SignalWatcher` mixin. When an accessed signal value changes, `SignalWatcher` will trigger the Lit element update lifecycle. This includes signals read in `shouldUpdate()`, `willUpdate()`, `update()`, `render()`, `updated()`, `firstUpdated()`, and reactive controller's `hostUpdate()` and `hostUpdated()`.

**Related Documentation & Topics:**

- [Signals docs](https://lit.dev/docs/data/signals/)
- [Lit lifecycle](https://lit.dev/docs/components/lifecycle/)
- [`@lit-labs/signals` npm package](https://www.npmjs.com/package/@lit-labs/signals) (external)
- [Signals standards proposal](https://github.com/tc39/proposal-signals) (external)

### Pinpoint Signal Updates (watch directive)

[Permalink to “Pinpoint Signal Updates (watch directive)”](<#pinpoint-signal-updates-(watch-directive)>)

The `watch()` directive allows you to pinpoint exactly where a signal should update the DOM without re-triggering the lit-html re-render. What this means is that using the `watch()` directive will not trigger the `render()` unless it triggers the change of a traditional Lit Reactive Property.

This may be a helpful way to optimize performance in your Lit components, but _always measure for your use case_.

**Related Documentation & Topics:**

- [The `watch()` directive](https://www.npmjs.com/package/@lit-labs/signals#watch-directive) (external)
- [Reactive Properties](#reactive-properties)
- [Signals docs](https://lit.dev/docs/data/signals/)
- [Lit lifecycle](https://lit.dev/docs/components/lifecycle/)
- [`@lit-labs/signals` npm package](https://www.npmjs.com/package/@lit-labs/signals) (external)
- [Signals standards proposal](https://github.com/tc39/proposal-signals) (external)

### Signals HTML Template Tag

[Permalink to “Signals HTML Template Tag”](#signals-html-template-tag)

The `@lit-labs/signals` package also provides an `html` template tag that can be used in place of Lit's default `html` tag and automatically wraps any signals in the template with a `watch()` directive.

**Related Documentation & Topics:**

- [The `html` tag and `withWatch()`](https://www.npmjs.com/package/@lit-labs/signals#html-tag-and-withwatch) (external)
- [the `SignalWatcher()` mixin](<#common-signal-setup-(signalwatcher)>)
- [The `watch()` directive](<#pinpoint-signal-updates-(watch-directive)>)

### Make Signal Values from Other Signals (computed)

[Permalink to “Make Signal Values from Other Signals (computed)”](<#make-signal-values-from-other-signals-(computed)>)

Sometimes you need to derive a value from other signals. You can do this with a `computed()` signal.

**Related Documentation & Topics:**

- [Signals docs](https://lit.dev/docs/data/signals/)
- [`@lit-labs/signals` npm package](https://www.npmjs.com/package/@lit-labs/signals) (external)

### Reacting to Signal Changes (effects)

[Permalink to “Reacting to Signal Changes (effects)”](<#reacting-to-signal-changes-(effects)>)

The official `signal-utils` package currently provides an experimental `effect()` function that allows you to react to signal changes and run side effects.

The `effect()` function from the `signal-utils` package is experimental.

Follow the [`signal-utils` package](https://www.npmjs.com/package/signal-utils#leaky-effect-via-queuemicrotask) for updates on this project.

**Related Documentation & Topics:**

- [Signals docs](https://lit.dev/docs/data/signals/)
- [`@lit-labs/signals` npm package](https://www.npmjs.com/package/@lit-labs/signals) (external)
- [The `changedProperties` map](about:/docs/components/lifecycle/#changed-properties)
- [signal-polyfill – Creating a simple effect](https://github.com/proposal-signals/signal-polyfill?tab=readme-ov-file#creating-a-simple-effect) (external)

### Sharing Global, Reactive Data Across Components

[Permalink to “Sharing Global, Reactive Data Across Components”](#sharing-global-reactive-data-across-components)

If your component needs to share a global state with another component and you do not need your component to be compatible with Lit's declarative event listener syntax, you can use a shared signal to share state across components.

Here is the scoreboard example from the [Dispatch Events Up](#dispatch-events-up) section, but using shared signals.

**Related Documentation & Topics:**

- [Signals docs](https://lit.dev/docs/data/signals/)
- [`@lit-labs/signals` npm package](https://www.npmjs.com/package/@lit-labs/signals) (external)
- [Data Flow and State Management](#data-flow-and-state-management)

[Edit this page](https://github.com/lit/lit.dev/edit/main/packages/lit-dev-content/site/articles/article/lit-cheat-sheet.md)
