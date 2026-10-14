import { useEffect, useRef, useState } from 'react'
import { roomLayouts } from '../data/site.js'

function RoomViewer() {
  const [index, setIndex] = useState(0)
  const [dragX, setDragX] = useState(0)
  const [dragging, setDragging] = useState(false)
  const dragRef = useRef({ active: false, startX: 0 })
  const videoRef = useRef(null)
  const last = roomLayouts.length - 1

  useEffect(() => {
    const video = videoRef.current
    if (!video) return undefined
    if (roomLayouts[index]?.video) {
      video.play().catch(() => {})
    } else {
      video.pause()
    }
    return undefined
  }, [index])

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
        aria-label="Расстановка зала: пустой зал, мастер-класс и семинар"
      >
        {roomLayouts.map((item, itemIndex) => (
          <img key={item.id} className={`room-slider__wash ${itemIndex === index ? 'is-active' : ''}`} src={item.image} alt="" />
        ))}
        <div className="room-slider__track">
          {roomLayouts.map((item, itemIndex) => (
            <div className="room-slider__slide" key={item.id} aria-hidden={itemIndex !== index}>
              {item.video ? (
                <video
                  ref={videoRef}
                  src={item.video}
                  poster={item.image}
                  muted
                  loop
                  playsInline
                  autoPlay
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
