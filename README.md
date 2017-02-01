[![npm version](https://badge.fury.io/js/mn-form.svg)](https://badge.fury.io/js/mn-form)
[![Dependency Status](https://gemnasium.com/badges/github.com/minimalist-components/mn-form.svg)](https://gemnasium.com/github.com/minimalist-components/mn-form)
[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php)


# mn-form

A form component to mn-inputs.

<!-- See the [demo](http://codepen.io/darlanmendonca/full/akgXQq) -->

<!-- [![preview demo](https://raw.githubusercontent.com/minimalist-components/mn-form/master/sources/example/mn-form.gif)](http://codepen.io/darlanmendonca/full/akgXQq) -->

### Install

```sh
npm install --save mn-form
```

And bundle dependencies and main files in [dist/](https://github.com/minimalist-components/mn-form/tree/master/dist) with your preferred tool.

### Usage

In your html, you can use the tag ```mn-form``` e.g.

```html
<mn-form>
  <!-- inputs goes here -->
</mn-form>
```

Note, the class passed to mn-form will be transfer to a form element inside mn-form

The following attributes from forms are supported in this component

- [name](http://www.w3schools.com/tags/att_input_name.asp)
- [spellcheck](http://www.w3schools.com/tags/att_global_spellcheck.asp) (true by default)
