function _$(selector) {
    const _this = {
        element: document.querySelector(selector),
        on: (event, callback) => {
            _this.element.addEventListener(event, callback)
        },
        hide: () => {
            _this.element.style.display = 'none'
        },
        attr: (name, value) => {
            if (value == null)
                return _this.element.getAttribute(name)
            else
                _this.element.setAttribute(name, value)
        }
    }
    return _this
}