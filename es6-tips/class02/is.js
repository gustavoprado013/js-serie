//immutable

const _is1 = {}

_is1.odd = (val) => (val%2)
_is1.even = (val) => !(val%2)

const is1 = Object.freeze(_is1)

Object.isFrozen(is1)

//normal

const _is2 = {}

_is2.odd = (val) => (val%2)
_is2.even = (val) => !(val%2)

const is2 = _is2
