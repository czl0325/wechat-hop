import Tween from './tween'

let animationId = -1
let killAnimationId = animationId - 1
const FRAME = 50

const customAnimation = exports.customAnimation = {}
customAnimation.to = function (origin, source, duration, options = {}) {
  duration *= 1000
  const delay = options.delay ?? 0
  const ease = options.mode ?? 'Linear'
  for (let name in source) {
    (function () {
      setTimeout(TweenAnimation(origin[name], source[name], duration, ease, function (value) {
        origin[name] = value
      }), delay * 1000)
    }(name))
  }
}

const TweenAnimation = exports.TweenAnimation = function TweenAnimation(from, to, duration = 300, easing = 'Linear', callback = null) {
  let selfAnimationId = ++animationId
  const isUndefined = function (obj) {
    return typeof obj === 'undefined'
  }
  const isFunction = function (obj) {
    return typeof obj === 'function'
  }
  const isNumber = function (obj) {
    return typeof obj === 'number'
  }
  const isString = function (obj) {
    return typeof obj === 'string'
  }
  const toMillisecond = function (obj) {
    if (isNumber(obj)) {
      return obj
    } else if (isString(obj)) {
      if (/\d+m?s$/.test(obj)) {
        if (/ms/.test(obj)) {
          return 1 * obj.replace('ms', '')
        } else {
          return 1000 * obj.replace('s', '')
        }
      } else if (/^\d+$/.test(obj)) {
        return +obj
      }
    }
    return -1
  }
  if (!isNumber(from) || !isNumber(to)) {
    console.error('from和to都必须是数值')
    return 0
  }
  const tween = Tween
  if (!tween) {
    console.error('缓动算法函数缺失')
    return 0;
  }
  if (!window.requestAnimationFrame) {
    requestAnimationFrame = function (fn) {
      setTimeout(fn, FRAME)
    }
  }
  duration = toMillisecond(duration)
  let start = -1
  const during = Math.ceil(duration / FRAME)
  let startTime = Date.now()
  let lastTime = Date.now()
  let fps = 60

  const arrTween = easing.split('.')
  let fnGetValue = null
  if (arrTween.length === 1) {
    fnGetValue = tween[arrTween[0]]
  } else if (arrTween.length === 2) {
    fnGetValue = tween[arrTween[0]] && tween[arrTween[0]][arrTween[1]]
  }
  if (isFunction(fnGetValue) === false) {
    console.error('没有找到名为' + easing + '的动画算法')
    return
  }

  const step = function () {
    const currentTime = Date.now()
    const interval = currentTime - lastTime
    if (interval) {
      fps = Math.ceil(1000 / interval)
    } else {
      requestAnimationFrame(step)
      return 1
    }
    lastTime = currentTime
    if (fps >= 30) {
      start++
    } else {
      const _start = Math.ceil((currentTime - startTime) / FRAME)
      start = _start > start ? _start : start + 1
    }
    const value = fnGetValue(start, from, to - from, during)
    if (start < during) {
      callback && callback(value)
      requestAnimationFrame(step)
    } else {
      callback && callback(to, true)
    }
  }
  step()
}
