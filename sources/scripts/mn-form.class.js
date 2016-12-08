class MnForm extends HTMLElement {
  constructor(self) {
    self = super(self)
    this.setForm()
    return self
  }

  setForm() {
    let attributeSpecs = [
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

    let form = document.createElement('form')

    form.addEventListener('submit', validate)

    function validate(event) {
      event.preventDefault()
      form.classList.add('submitted')
    }

    let attributes = Array
      .from(this.attributes)
      .map(getNameAndValue)

    let defaultAttibutes = attributeSpecs
      .filter(defaults)
      .filter(notImplemented)

    attributes = attributes.concat(defaultAttibutes)

    const instanceIndex = Array.from(document.querySelectorAll('mn-form')).indexOf(this)
    const defaultFormName = `form${instanceIndex > 0 ? instanceIndex : ''}`
    form.setAttribute('name', this.getAttribute('name') || defaultFormName)

    attributes.forEach(setAttribute)

    attributeSpecs
      .filter(attr => attr.remove)
      .forEach(attr => {
        this.removeAttribute(attr.name)
      })

    Array
      .from(this.children)
      .forEach(putInForm)

    Array
      .from(this.classList)
      .forEach(cssClass => {
        this.classList.remove(cssClass)
        form.classList.add(cssClass)
      })

    this.removeAttribute('class')
    this.removeAttribute('name')

    function putInForm(element) {
      form.appendChild(element)
    }

    this.insertBefore(form, this.firstChild)

    function getNameAndValue(attr) {
      let name = attr.name
      let value = attr.value
      return {name, value}
    }

    function defaults(attribute) {
      return attribute.hasOwnProperty('default')
    }

    function notImplemented(defaultAttr) {
      return !attributes.some(attribute => attribute.name === defaultAttr.name)
    }

    function setAttribute(attribute) {
      let attributeSpec = attributeSpecs.filter(spec => spec.name === attribute.name)[0]
      if (!attributeSpec) {
        return false
      }
      let isDefaultAttribute = attributeSpec.hasOwnProperty('default')
      let attributeValue = attribute.value

      if (isDefaultAttribute) {
        let isValidValue = attributeSpec.hasOwnProperty('values')
          && attributeSpec.values.indexOf(attributeValue) >= 0

        let value = isValidValue
          ? attributeValue
          : attributeSpec.default

        form.setAttribute(attribute.name, value)
      } else if (attributeValue) {
        form.setAttribute(attribute.name, attributeValue)
      }
    }
  }
}

customElements.define('mn-form', MnForm)
