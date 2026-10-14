import { useEffect, useRef, useState } from 'react'
import { roomLayouts } from '../data/site.js'

function clipsOf(item) {
  if (item.videos?.length) return item.videos
  if (item.video) return [item.video]
  return []
}

function RoomViewer() {
  const [index, setIndex] = useState(0)
  const [dragX, setDragX] = useState(0)
  const [dragging, setDragging] = useState(false)
  const dragRef = useRef({ active: false, startX: 0 })
  const videoRefs = useRef([])
  const clipIndex = useRef([])
  const last = roomLayouts.length - 1

  useEffect(() => {
    videoRefs.current.forEach((video, itemIndex) => {
      if (!video) return
      const clips = clipsOf(roomLayouts[itemIndex])
      if (itemIndex !== index || !clips.length) {
        video.pause()
        return
      }
      clipIndex.current[itemIndex] = 0
      const nextSrc = clips[0]
      if (!video.src.endsWith(nextSrc)) video.src = nextSrc
      video.play().catch(() => {})
    })
  }, [index])

  function playNextClip(itemIndex) {
    const clips = clipsOf(roomLayouts[itemIndex])
    const video = videoRefs.current[itemIndex]
    if (!video || clips.length < 2 || itemIndex !== index) return
    const next = ((clipIndex.current[itemIndex] ?? 0) + 1) % clips.length
    clipIndex.current[itemIndex] = next
    video.src = clips[next]
    video.play().catch(() => {})
  }

  function moveTo(next) {
    setIndex(Math.min(last, Math.max(0, next)))
  }

  function onPointerDown(event) {
    if (event.button > 0 || event.target.closest('button')) return
    dragRef.current = { active: true, startX: event.clientX }
    event.currentTarget.setPointerCapture(event.pointerId)
    setDragging(true)
  }

  function onPointerMove(event) {
    if (!dragRef.current.active) return
    let dx = event.clientX - dragRef.current.startX
    if ((index === 0 && dx > 0) || (index === last && dx < 0)) dx *= 0.35
    setDragX(dx)
  }

  function finishDrag(event) {
    if (!dragRef.current.active) return
    const dx = event.clientX - dragRef.current.startX
    const width = event.currentTarget.clientWidth || 1
    dragRef.current.active = false
    setDragging(false)
    setDragX(0)
    if (dx <= -width * 0.12) moveTo(index + 1)
    else if (dx >= width * 0.12) moveTo(index - 1)
  }

  function onKeyDown(event) {
    if (event.key === 'ArrowRight') moveTo(index + 1)
    if (event.key === 'ArrowLeft') moveTo(index - 1)
  }

  const active = roomLayouts[index]

  return (
    <div className="room-viewer reveal-block" style={{ '--d': '100ms' }}>
      <div
        className={`room-slider ${dragging ? 'is-dragging' : ''}`}
        style={{ '--slide': index, '--drag': `${dragX}px` }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={finishDrag}
        onPointerCancel={finishDrag}
        onKeyDown={onKeyDown}
        tabIndex={0}
        role="region"
        aria-roledescription="слайдер"
        aria-label="Расстановка зала: пустой зал, затем мастер-класс и семинар"
      >
        {roomLayouts.map((item, itemIndex) => (
          <img key={item.id} className={`room-slider__wash ${itemIndex === index ? 'is-active' : ''}`} src={item.image} alt="" />
        ))}
        <div className="room-slider__track">
          {roomLayouts.map((item, itemIndex) => (
            <div className="room-slider__slide" key={item.id} aria-hidden={itemIndex !== index}>
              {clipsOf(item).length ? (
                <video
                  ref={(node) => { videoRefs.current[itemIndex] = node }}
                  src={clipsOf(item)[0]}
                  poster={item.image}
                  muted
                  loop={clipsOf(item).length < 2}
                  playsInline
                  autoPlay={itemIndex === index}
                  onEnded={() => playNextClip(itemIndex)}
                  aria-label={item.alt}
                />
              ) : (
                <img src={item.image} alt={item.alt} draggable="false" />
              )}
            </div>
          ))}
        </div>
        <button className="room-slider__arrow room-slider__arrow--prev" type="button" onClick={() => moveTo(index - 1)} disabled={index === 0} aria-label="Предыдущая расстановка">‹</button>
        <button className="room-slider__arrow room-slider__arrow--next" type="button" onClick={() => moveTo(index + 1)} disabled={index === last} aria-label="Следующая расстановка">›</button>
      </div>
      <div className="room-slider__meta">
        <p className="room-slider__caption" aria-live="polite">
          <span>{String(index + 1).padStart(2, '0')} / {String(roomLayouts.length).padStart(2, '0')}</span>
          <strong>{active.label}</strong>
          {active.text}
        </p>
      </div>
    </div>
  )
}

export { RoomViewer }
