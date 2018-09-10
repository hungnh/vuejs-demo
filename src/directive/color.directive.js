export const color = {
  bind (el, binding, vnode) {
    function setColor () {
      if (binding.arg === 'background') {
        el.style.backgroundColor = binding.value
      } else if (binding.arg === 'text') {
        el.style.color = binding.value
      } else if (binding.arg === 'border') {
        el.style.borderColor = binding.value
      }
    }

    if (binding.modifiers['delayed']) {
      setTimeout(setColor, 3000)
    } else {
      setColor()
    }
  }
}
