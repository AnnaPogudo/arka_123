import { useState } from 'react'

function RequestForm() {
  const [submitted, setSubmitted] = useState(false)
  const [name, setName] = useState('')
  const [contact, setContact] = useState('')
  const [format, setFormat] = useState('Мастер-класс')

  function handleSubmit(event) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <form className="request-form" onSubmit={handleSubmit}>
      <label>
        <span>Как к вам обращаться</span>
        <input required value={name} onChange={(event) => setName(event.target.value)} placeholder="Ваше имя" autoComplete="name" />
      </label>
      <label>
        <span>Телефон или email</span>
        <input required value={contact} onChange={(event) => setContact(event.target.value)} placeholder="+375 … или email" autoComplete="email" />
      </label>
      <label>
        <span>Формат встречи</span>
        <select value={format} onChange={(event) => setFormat(event.target.value)}>
          <option>Мастер-класс</option>
          <option>Семинар</option>
          <option>Другая встреча</option>
        </select>
      </label>
      <button className="button button--light" type="submit">Подготовить заявку <span aria-hidden="true">↗</span></button>
      {submitted && (
        <p className="form-feedback" role="status">
          Черновик заявки для «{format}» подготовлен. Он не отправлен: для бронирования нужно подключить рабочую почту или CRM и указать контакты владельца.
        </p>
      )}
      {!submitted && <p className="form-note">Демо-форма. Перед публикацией подключить рабочий канал для заявок.</p>}
    </form>
  )
}

export { RequestForm }
