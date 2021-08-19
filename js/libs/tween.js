const Tween = {
  Linear: function Linear(t, b, c ,d) {
    return c * t / d + b
  }
}

export default Tween
