import { useEffect, useRef, useState } from 'react'
import { storyBeats } from '../data/site.js'
import { BrandCharacter } from './Brand.jsx'
import { RoomScene } from './RoomScene.jsx'

function ScrollStory() {
  const sectionRef = useRef(null)
  const videoRef = useRef(null)
  const barsRef = useRef([])
  const sceneRef = useRef(0)
  const durationRef = useRef(0)
  const [scene, setScene] = useState(0)
  const [doorsOpen, setDoorsOpen] = useState(false)
  const [shown, setShown] = useState(false)
  const [videoReady, setVideoReady] = useState(false)
  const [failed, setFailed] = useState(false)
  const [needsGesture, setNeedsGesture] = useState(false)

  function showBeat(index) {
    if (index === sceneRef.current) return
    sceneRef.current = index
    setScene(index)
    setShown(true)
    setDoorsOpen(true)
  }

  function jumpTo(index) {
    const video = videoRef.current
    const duration = durationRef.current
    if (!video || !duration) return
    const next = Math.min(storyBeats.length - 1, Math.max(0, index))
    video.currentTime = storyBeats[next].at * duration
    showBeat(next)
    setNeedsGesture(false)
    video.play().catch(() => setNeedsGesture(true))
  }

  useEffect(() => {
    const section = sectionRef.current
    const video = videoRef.current
    if (!section || !video) return undefined
    let frame = 0

    const loadTimer = window.setTimeout(() => {
      if (durationRef.current > 0) return
      setFailed(true)
      setShown(true)
      setDoorsOpen(true)
    }, 4000)

    const paint = () => {
      const duration = durationRef.current
      if (!duration) return
      const time = video.currentTime
      let index = 0
      storyBeats.forEach((beat, beatIndex) => {
        if (time >= beat.at * duration - 0.02) index = beatIndex
      })
      showBeat(index)
      storyBeats.forEach((beat, beatIndex) => {
        const start = beat.at * duration
        const end = (storyBeats[beatIndex + 1]?.at ?? 1) * duration
        const fill = time >= end ? 1 : time <= start ? 0 : (time - start) / (end - start)
        const bar = barsRef.current[beatIndex]
        if (bar) bar.style.width = `${fill * 100}%`
      })
    }

    const tick = () => {
      paint()
      if (!video.paused && !video.ended) frame = requestAnimationFrame(tick)
    }

    const play = () => {
      video.playbackRate = 1
      setDoorsOpen(true)
      setShown(true)
      const attempt = video.play()
      if (attempt && typeof attempt.catch === 'function') {
        attempt.then(() => {
          setNeedsGesture(false)
          setDoorsOpen(true)
          tick()
        }).catch(() => setNeedsGesture(true))
      } else {
        setDoorsOpen(true)
        tick()
      }
    }

    const onScroll = () => {
      if (!durationRef.current) return
      const rect = section.getBoundingClientRect()
      const visible = Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0)
      if (visible > rect.height * 0.45) {
        if (video.paused && !video.ended) play()
      } else if (!video.paused) video.pause()
    }

    const onReady = () => {
      if (!Number.isFinite(video.duration) || video.duration <= 0) return
      durationRef.current = video.duration
      window.clearTimeout(loadTimer)
      setVideoReady(true)
      onScroll()
    }

    video.addEventListener('loadedmetadata', onReady)
    video.addEventListener('play', tick)
    video.addEventListener('ended', paint)
    video.addEventListener('error', () => {
      setFailed(true)
      setShown(true)
      setDoorsOpen(true)
    })
    if (video.readyState >= 1) onReady()
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()

    return () => {
      cancelAnimationFrame(frame)
      window.clearTimeout(loadTimer)
      video.pause()
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  const copy = failed ? storyBeats[0] : storyBeats[scene]

  return (
    <section
      className={`scroll-story ${videoReady ? 'scroll-story--video-ready' : ''} ${doorsOpen ? 'scroll-story--open' : ''} ${shown ? 'scroll-story--shown' : ''}`}
      ref={sectionRef}
      id="hero-brand"
      data-scene={scene}
      aria-label="История Анны"
    >
      <div className="scroll-story__sticky">
        <div className="scroll-story__backdrop"><RoomScene layout="masterclass" /></div>
        <video
          ref={videoRef}
          className="scroll-story__video"
          src="/videos/anna-welcome.mp4"
          poster="/images/anna-arka-interior.jpg"
          muted
          playsInline
          preload="auto"
          aria-hidden="true"
        />
        <div className="scroll-story__shade" />
        <div className={`arch-doors ${doorsOpen ? 'arch-doors--open' : ''}`} aria-hidden="true">
          <span className="arch-doors__leaf arch-doors__leaf--left" />
          <span className="arch-doors__leaf arch-doors__leaf--right" />
          <span className="arch-doors__label">
            <strong>123</strong>
            <small>{needsGesture ? 'НАЖМИТЕ, ЧТОБЫ СМОТРЕТЬ' : 'ИСТОРИЯ'}</small>
          </span>
        </div>
        {needsGesture && (
          <button className="story-play" type="button" onClick={() => jumpTo(scene)}>Смотреть</button>
        )}
        <BrandCharacter className="scroll-story__character" />
        <div className="story-bars" role="tablist" aria-label="Части истории">
          {storyBeats.map((beat, index) => (
            <button key={beat.title} type="button" role="tab" aria-selected={index === scene} aria-label={beat.title} onClick={() => jumpTo(index)}>
              <i><span ref={(node) => { barsRef.current[index] = node }} /></i>
            </button>
          ))}
        </div>
        <div className="scroll-story__copy" key={scene} aria-live="polite">
          {failed && <p className="scroll-story__fallback note">Видео истории не загрузилось. Страницу можно листать дальше.</p>}
          <span className="eyebrow">{copy.eyebrow}</span>
          <h2>{copy.title}</h2>
          <p>{copy.body}</p>
        </div>
      </div>
    </section>
  )
}

export { ScrollStory }
