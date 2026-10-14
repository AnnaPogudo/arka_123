function createSegmentPlayer(video, rate) {
  let frame = 0
  let timer = 0
  let token = 0

  function clear() {
    cancelAnimationFrame(frame)
    window.clearTimeout(timer)
  }

  function snap(time) {
    const duration = Number.isFinite(video.duration) ? video.duration : time
    const next = Math.min(Math.max(0, time), duration || time)
    video.pause()
    if (Math.abs((video.currentTime || 0) - next) > 0.02) {
      try {
        video.currentTime = next
      } catch {
      }
    }
  }

  function playTo(from, to) {
    token += 1
    clear()
    const id = token
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const distance = Math.abs(to - from)
    const ms = Math.max(320, (distance / Math.max(rate, 0.25)) * 1000)

    return new Promise((resolve) => {
      let settled = false
      const finish = () => {
        if (settled || id !== token) return
        settled = true
        clear()
        snap(to)
        resolve()
      }

      if (reduce || distance < 0.045) {
        finish()
        return
      }

      timer = window.setTimeout(finish, ms + 1000)

      const scrub = () => {
        const start = performance.now()
        const step = (now) => {
          if (id !== token || settled) return
          const progress = Math.min(1, (now - start) / ms)
          const duration = Number.isFinite(video.duration) ? video.duration : to
          const next = Math.min(Math.max(0, from + (to - from) * progress), duration || to)
          try {
            video.currentTime = next
          } catch {
            finish()
            return
          }
          if (progress < 1) frame = requestAnimationFrame(step)
          else finish()
        }
        frame = requestAnimationFrame(step)
      }

      if (to < from) {
        scrub()
        return
      }

      snap(from)
      video.playbackRate = rate
      const watch = () => {
        if (id !== token || settled) return
        if (video.currentTime >= to - 0.03 || video.ended) finish()
        else frame = requestAnimationFrame(watch)
      }
      const attempt = video.play()
      if (attempt && typeof attempt.then === 'function') {
        attempt.then(() => {
          if (!settled) watch()
        }).catch(() => {
          if (!settled) scrub()
        })
      } else {
        watch()
      }
    })
  }

  function stop() {
    token += 1
    clear()
    video.pause()
  }

  return { playTo, stop }
}

export { createSegmentPlayer }
