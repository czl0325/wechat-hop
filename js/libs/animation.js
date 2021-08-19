import Tween from './tween'

const customAnimation = exports.customAnimation = {}
customAnimation.to = function (obj, duration, options) {
  duration *= 1000
  const delay = options.delay ?? 0
  for (let name in options) {
    if (name !== 'delay') {
      setTimeout(function (name) {
        return function () {

        }
      }(name), delay * 1000)
    }
  }
}
