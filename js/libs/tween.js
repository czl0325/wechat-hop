const Tween = {
  Linear: function Linear(currentFrame, from, to ,allFrame) {
    return to * currentFrame / allFrame + from
  }
}

export default Tween
