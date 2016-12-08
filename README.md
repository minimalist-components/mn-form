[![Bower version](https://badge.fury.io/bo/mn-form.svg)](https://badge.fury.io/bo/mn-form)
[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php)   


# mn-form

A form component to mn-inputs.

<!-- See the [demo](http://codepen.io/darlanmendonca/full/akgXQq) -->

<!-- [![preview demo](https://raw.githubusercontent.com/minimalist-components/mn-form/master/sources/example/mn-form.gif)](http://codepen.io/darlanmendonca/full/akgXQq) -->

### Install

With bower

```sh
bower install --save mn-form
```

Or just download the main files ```dist/mn-form.js``` in your project, and make a reference to their, like:

```html
<script src="path/to/dist/vendor.js.js"></script>
<script src="path/to/dist/mn-form.js"></script>
```

### Usage

And then, in your html, you can use the tag ```mn-form``` i.e.

```html
<mn-form name='form'>
  <!-- inputs goes here -->
</mn-form>
```

Note, the class passed to mn-form will be transfer to a form element inside mn-form

The following attributes from inputs are supported in this component

- [name](http://www.w3schools.com/tags/att_input_name.asp)
- [spellcheck](http://www.w3schools.com/tags/att_global_spellcheck.asp)
<!-- - [readonly](http://www.w3schools.com/tags/att_input_readonly.asp) -->
<!-- - [required](http://www.w3schools.com/tags/att_input_required.asp) -->
- [disabled](http://www.w3schools.com/tags/att_input_disabled.asp)
<!-- - [autocapitalize](https://developers.google.com/web/updates/2015/04/autocapitalize) -->
