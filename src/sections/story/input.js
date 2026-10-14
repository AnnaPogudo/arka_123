function createStoryInput({ onStep, isBusy, isEngaged }) {
  let burst = false
  let quiet = 0

  function noteBurst() {
    burst = true
    window.clearTimeout(quiet)
    quiet = window.setTimeout(() => {
      burst = false
    }, 180)
  }

  function handle(direction, event) {
    if (!isEngaged()) return
    if (isBusy() || burst) {
      event.preventDefault()
      noteBurst()
      return
    }
    if (onStep(direction)) {
      event.preventDefault()
      noteBurst()
    }
  }

  function onWheel(event) {
    if (Math.abs(event.deltaY) < 2 && Math.abs(event.deltaX) < 2) return
    const direction = Math.abs(event.deltaY) >= Math.abs(event.deltaX)
      ? (event.deltaY > 0 ? 1 : -1)
      : (event.deltaX > 0 ? 1 : -1)
    handle(direction, event)
  }

  function onKey(event) {
    const down = event.key === 'ArrowDown' || event.key === 'PageDown'
    const up = event.key === 'ArrowUp' || event.key === 'PageUp'
    if (!down && !up) return
    handle(down ? 1 : -1, event)
  }

  let startY = 0
  function onTouchStart(event) {
    startY = event.changedTouches[0]?.clientY ?? 0
  }

  function onTouchEnd(event) {
    const y = event.changedTouches[0]?.clientY ?? startY
    const delta = startY - y
    if (Math.abs(delta) < 36) return
    handle(delta > 0 ? 1 : -1, event)
  }

  window.addEventListener('wheel', onWheel, { passive: false })
  window.addEventListener('keydown', onKey)
  window.addEventListener('touchstart', onTouchStart, { passive: true })
  window.addEventListener('touchend', onTouchEnd, { passive: false })

  return () => {
    window.clearTimeout(quiet)
    window.removeEventListener('wheel', onWheel)
    window.removeEventListener('keydown', onKey)
    window.removeEventListener('touchstart', onTouchStart)
    window.removeEventListener('touchend', onTouchEnd)
  }
}

export { createStoryInput }
