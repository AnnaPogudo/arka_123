import { useEffect, useId, useRef, useState } from 'react'
import { revealStyle } from './Reveal.jsx'

const formats = ['Мастер-класс', 'Семинар', 'Другая встреча']

function validateName(value) {
  const text = value.trim()
  if (!text) return 'Напишите, как к вам обращаться'
  if (text.length < 2) return 'Имя должно быть не короче двух букв'
  return ''
}

function validateContact(value) {
  const text = value.trim()
  if (!text) return 'Оставьте телефон или email'
  const email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(text)
  const digits = text.replace(/\D/g, '')
  const phone = /^[+()\d\s-]{7,}$/.test(text) && digits.length >= 7 && digits.length <= 15
  if (email || phone) return ''
  return 'Укажите телефон или email, чтобы с вами можно было связаться'
}

function FormatSelect({ id, labelId, value, onChange, describedBy }) {
  const [open, setOpen] = useState(false)
  const rootRef = useRef(null)
  const listId = `${id}-list`

  useEffect(() => {
    if (!open) return undefined
    const selected = rootRef.current?.querySelector('[aria-selected="true"]')
    selected?.focus()

    function onPointer(event) {
      if (!rootRef.current?.contains(event.target)) setOpen(false)
    }

    function onKey(event) {
      if (event.key === 'Escape') {
        setOpen(false)
        rootRef.current?.querySelector('.format-select__trigger')?.focus()
      }
    }

    document.addEventListener('pointerdown', onPointer)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('pointerdown', onPointer)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <div className={`format-select${open ? ' is-open' : ''}`} ref={rootRef}>
      <button
        id={id}
        className="format-select__trigger"
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        aria-describedby={describedBy || undefined}
        onClick={() => setOpen((current) => !current)}
        onKeyDown={(event) => {
          if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
            event.preventDefault()
            setOpen(true)
          }
        }}
      >
        {value}
      </button>
      {open && (
        <ul id={listId} className="format-select__menu" role="listbox" aria-labelledby={labelId}>
          {formats.map((option) => (
            <li key={option} role="presentation">
              <button
                type="button"
                role="option"
                aria-selected={option === value}
                onClick={() => {
                  onChange(option)
                  setOpen(false)
                  rootRef.current?.querySelector('.format-select__trigger')?.focus()
                }}
              >
                {option}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

function RequestForm() {
  const formatId = useId()
  const [submitted, setSubmitted] = useState(false)
  const [attempted, setAttempted] = useState(false)
  const [touched, setTouched] = useState({ name: false, contact: false })
  const [name, setName] = useState('')
  const [contact, setContact] = useState('')
  const [format, setFormat] = useState(formats[0])

  const errors = {
    name: validateName(name),
    contact: validateContact(contact),
  }
  const visible = {
    name: touched.name || attempted ? errors.name : '',
    contact: touched.contact || attempted ? errors.contact : '',
  }

  function touch(field) {
    setTouched((current) => ({ ...current, [field]: true }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    setAttempted(true)
    if (errors.name || errors.contact) {
      setSubmitted(false)
      return
    }
    setSubmitted(true)
  }

  return (
    <form className="request-form reveal-block" style={revealStyle('100ms')} noValidate onSubmit={handleSubmit}>
      <label>
        <span>Как к вам обращаться</span>
        <input
          className={visible.name ? 'is-invalid' : undefined}
          value={name}
          onChange={(event) => {
            setName(event.target.value)
            setSubmitted(false)
          }}
          onBlur={() => touch('name')}
          placeholder="Ваше имя"
          autoComplete="name"
          aria-invalid={Boolean(visible.name)}
          aria-describedby={visible.name ? 'name-error' : undefined}
        />
        {visible.name && <small className="field-error" id="name-error" role="alert">{visible.name}</small>}
      </label>
      <label>
        <span>Телефон или email</span>
        <input
          className={visible.contact ? 'is-invalid' : undefined}
          value={contact}
          onChange={(event) => {
            setContact(event.target.value)
            setSubmitted(false)
          }}
          onBlur={() => touch('contact')}
          placeholder="+375 … или email"
          autoComplete="email"
          aria-invalid={Boolean(visible.contact)}
          aria-describedby={visible.contact ? 'contact-error' : undefined}
        />
        {visible.contact && <small className="field-error" id="contact-error" role="alert">{visible.contact}</small>}
      </label>
      <div className="request-field">
        <span id={`${formatId}-label`}>Формат встречи</span>
        <FormatSelect
          id={formatId}
          labelId={`${formatId}-label`}
          value={format}
          onChange={(next) => {
            setFormat(next)
            setSubmitted(false)
          }}
        />
      </div>
      <button className="button button--light" type="submit">Подготовить заявку</button>
      {submitted && (
        <p className="form-feedback note" role="status">
          Черновик заявки для «{format}» подготовлен. Он не отправлен: для бронирования нужно подключить рабочую почту или CRM и указать контакты владельца.
        </p>
      )}
    </form>
  )
}

export { RequestForm }
