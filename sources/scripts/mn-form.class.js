class MnForm extends HTMLElement {
  constructor(self) {
    self = super(self)

    // set form
    const attributeSpecs = [
      {
        name: 'spellcheck',
        default: 'false',
        values: [
          'true',
          'false',
        ],
      },
      {
        name: 'name',
      },
      {
        name: 'novalidate',
        default: 'true',
      },
      {
        name: 'disabled',
      },
      {
        name: 'autocapitalize',
      },
      {
        name: 'id',
        remove: true,
      },
    ]

    const form = document.createElement('form')

    form.addEventListener('submit', submit)

    function submit(event) {
      event.preventDefault()
      form.classList.add('submitted')
      const inputs = form.querySelectorAll('.mn-input')

      Array
        .from(inputs)
        .forEach(input => input.validate())

      // if (!form.checkValidity()) {
      const formIsValid = form.querySelectorAll('.mn-input.invalid').length === 0
      if (!formIsValid) {
        return false
      }

      if (typeof form.parentNode.onSubmit === 'function') {
        form.parentNode.onSubmit(event)
      } else {
        console.error('you need set a callback function to mn-form, e.g. form.onSubmit = fn()')
      }
    }

    const attributes = Array
      .from(this.attributes)
      .map(getNameAndValue)

    const defaultAttibutes = attributeSpecs
      .filter(attr => attr.hasOwnProperty('default'))
      .filter(defaultAttr => !attributes.some(attribute => attribute.name === defaultAttr.name)) // not implemented

    const instanceIndex = Array.from(document.querySelectorAll('mn-form')).indexOf(this)
    const defaultFormName = `form${instanceIndex}`

    form.setAttribute('name', this.getAttribute('name') || defaultFormName)

    attributes.concat(defaultAttibutes).forEach(setAttribute)

    attributeSpecs
      .filter(attr => attr.remove)
      .forEach(attr => {
        this.removeAttribute(attr.name)
      })

    Array
      .from(this.children)
      .forEach(element => form.appendChild(element))

    Array
      .from(this.classList)
      .forEach(cssClass => {
        this.classList.remove(cssClass)
        form.classList.add(cssClass)
      })

    this.removeAttribute('class')
    this.removeAttribute('name')

    this.insertBefore(form, this.firstChild)

    function getNameAndValue(attr) {
      const name = attr.name
      const value = attr.value
      return {name, value}
    }

    function setAttribute(attribute) {
      const attributeSpec = attributeSpecs.filter(spec => spec.name === attribute.name)[0]
      if (!attributeSpec) {
        return false
      }
      const isDefaultAttribute = attributeSpec.hasOwnProperty('default')
      const attributeValue = attribute.value

      if (isDefaultAttribute) {
        const isValidValue = attributeSpec.hasOwnProperty('values')
          && attributeSpec.values.indexOf(attributeValue) >= 0

        const value = isValidValue
          ? attributeValue
          : attributeSpec.default

        form.setAttribute(attribute.name, value)
      } else if (attributeValue) {
        form.setAttribute(attribute.name, attributeValue)
      }
    }
    return self
  }

  checkValidity() {
    const form = this.querySelector('form')
    return form.checkValidity()
  }
}

window.customElements.define('mn-form', MnForm)
