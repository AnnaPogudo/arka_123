import { useEffect, useId, useRef, useState } from 'react'
import './App.css'

const mapUrl = 'https://maps.google.com/?q=%D0%9C%D1%81%D1%82%D0%B8%D1%81%D0%BB%D0%B0%D0%B2%D1%86%D0%B0+10+%D0%9C%D0%B8%D0%BD%D1%81%D0%BA'
const media = {
  exterior: '/images/c__Users_Admin_AppData_Roaming_Cursor_User_workspaceStorage_6bad7d2f0fe5437e0eb93d5140122639_images_3-3a7b12d7-cf64-4256-8202-1ff46fe1e1ae.png',
  windows: '/images/c__Users_Admin_AppData_Roaming_Cursor_User_workspaceStorage_6bad7d2f0fe5437e0eb93d5140122639_images_01-81a56bc1-694c-4ebb-969e-5274928c419a.png',
  hall: '/images/c__Users_Admin_AppData_Roaming_Cursor_User_workspaceStorage_6bad7d2f0fe5437e0eb93d5140122639_images_1__1_-647eac0d-3fc0-46c8-a29e-48f5094311a3.png',
  room: '/images/c__Users_Admin_AppData_Roaming_Cursor_User_workspaceStorage_6bad7d2f0fe5437e0eb93d5140122639_images_4-b915520d-003b-479b-a340-2cf9e7ce33d7.png',
  wideHall: '/images/c__Users_Admin_AppData_Roaming_Cursor_User_workspaceStorage_6bad7d2f0fe5437e0eb93d5140122639_images_2__1_-1a4e2e76-a499-41a3-8fd2-0d260472758b.png',
}

function ArchMark({ className = '', animate = false }) {
  return (
    <svg
      className={`arch-mark ${animate ? 'arch-mark--animate' : ''} ${className}`}
      viewBox="0 0 120 126"
      role="img"
      aria-label="Арка 123"
    >
      <path className="arch-mark__line" d="M12 116V58a48 48 0 0 1 96 0v58" />
      <text x="60" y="99" textAnchor="middle">123</text>
    </svg>
  )
}

function BrandLogo({ light = false }) {
  return (
    <a className={`brand-logo ${light ? 'brand-logo--light' : ''}`} href="#top" aria-label="АРКА 123 — на главную">
      <ArchMark />
      <span className="brand-logo__wordmark">
        <strong>АРКА <span>123</span></strong>
        <small>ВСТРЕЧАЕМСЯ НАПРОТИВ БИБЛИОТЕКИ</small>
      </span>
    </a>
  )
}

function BrandCharacter({ className = '' }) {
  return <img className={`brand-character ${className}`} src="/images/anna-arka-interior.jpg" alt="Анна — фирменный персонаж АРКА 123" />
}

function Loader() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(false), 1450)
    return () => window.clearTimeout(timer)
  }, [])

  if (!visible) return null
  return (
    <div className="preloader" aria-label="Загрузка сайта">
      <ArchMark animate />
      <span>АРКА 123</span>
    </div>
  )
}

function RoomScene({ layout = 'empty', label = 'Интерьер пространства — концептуальная визуализация' }) {
  const clipId = useId().replaceAll(':', '')
  const chairs = layout === 'seminar' ? [250, 335, 420, 505, 590, 675] : [292, 420, 548, 676]
  return (
    <svg className="room-scene" viewBox="0 0 1000 560" role="img" aria-label={label}>
      <defs>
        <linearGradient id={`${clipId}-wall`} x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#343a35" />
          <stop offset="1" stopColor="#202723" />
        </linearGradient>
        <linearGradient id={`${clipId}-floor`} x1="0" x2="1">
          <stop offset="0" stopColor="#d0c5b1" />
          <stop offset=".5" stopColor="#ede6d9" />
          <stop offset="1" stopColor="#b7ab96" />
        </linearGradient>
        <clipPath id={`${clipId}-windows`}>
          <path d="M180 351V185a64 64 0 0 1 128 0v166Zm202 0V185a64 64 0 0 1 128 0v166Zm202 0V185a64 64 0 0 1 128 0v166Z" />
        </clipPath>
        <linearGradient id={`${clipId}-sky`} x1="0" x2="0" y2="1">
          <stop stopColor="#83a1a4" />
          <stop offset=".7" stopColor="#dfbd89" />
          <stop offset="1" stopColor="#667b70" />
        </linearGradient>
      </defs>
      <rect width="1000" height="560" fill="#ede8dd" />
      <path d="M0 20 105 72v280L0 453Z" fill="#38413b" />
      <path d="M1000 20 895 72v280l105 101Z" fill="#303a34" />
      <path d="M0 20h1000L895 72H105Z" fill="#d4cbbc" />
      <path d="M105 72h790v280H105Z" fill={`url(#${clipId}-wall)`} />
      <path d="M0 453 105 352h790l105 101-170 107H170Z" fill={`url(#${clipId}-floor)`} />
      <g clipPath={`url(#${clipId}-windows)`}>
        <rect x="160" y="118" width="680" height="235" fill={`url(#${clipId}-sky)`} />
        <path d="M500 145 555 200 500 255 445 200Z" fill="#d2e2df" stroke="#f6e5bd" strokeWidth="4" />
        <path d="M462 241h76v112h-76Z" fill="#536c63" />
        <path d="M474 252h52v101h-52Z" fill="#7f9587" />
        <path d="M160 300c150-52 220 18 340-4 135-25 206-43 340 7v50H160Z" fill="#60796c" />
      </g>
      <g clipPath={`url(#${clipId}-windows)`} fill="#f2dfbb" opacity=".15">
        <path d="m160 124 210 0-90 235h-120Z" />
        <path d="m450 117 94 0-92 241h-82Z" />
      </g>
      <g fill="none" stroke="#f4eddd" strokeWidth="8" opacity=".92">
        <path d="M180 351V185a64 64 0 0 1 128 0v166m74 0V185a64 64 0 0 1 128 0v166m74 0V185a64 64 0 0 1 128 0v166" />
        <path d="M244 118v233m202-233v233m202-233v233" strokeWidth="3" opacity=".65" />
      </g>
      <g fill="#465049" opacity=".85">
        {Array.from({ length: 10 }, (_, index) => <path key={index} d={`M${108 + index * 79} 76v274`} stroke="#525b53" strokeWidth="1" />)}
      </g>
      <path d="M105 352h790" stroke="#c9bda8" strokeWidth="5" />
      <g fill="#f5e6c6" opacity=".75">
        <ellipse cx="260" cy="79" rx="58" ry="5" />
        <ellipse cx="500" cy="79" rx="58" ry="5" />
        <ellipse cx="740" cy="79" rx="58" ry="5" />
      </g>
      {layout !== 'empty' && (
        <g className="room-furniture">
          {layout === 'workshop' && (
            <g>
              <path d="M34 177h67v106H34Z" fill="#d6d0c3" stroke="#f0e9dc" strokeWidth="3" />
              <path d="M42 186h51v39H42Z" fill="#63756b" />
              <text x="67" y="211" textAnchor="middle" fill="#f1eadf" fontSize="10" letterSpacing="2">ИДЕИ</text>
            </g>
          )}
          {chairs.map((x, index) => {
            const y = 380 + (index % 2) * 24
            return (
              <g key={x} transform={`translate(${x} ${y})`}>
                <ellipse cx="26" cy="34" rx="42" ry="9" fill="#554c3f" opacity=".2" />
                <path d="M-11 5h72v13h-72Z" fill="#735841" />
                <path d="m-5 18 4 36m54-36-5 36" stroke="#403b32" strokeWidth="4" />
                <path d="M4-23h45v24H4Z" rx="5" fill="#495a50" />
                <path d="M8 0v15m37-15v15" stroke="#354239" strokeWidth="4" />
              </g>
            )
          })}
          <g transform="translate(285 432)">
            <path d="m0 0 428 0-50 50H50Z" fill="#8a6a4d" />
            <path d="m50 50 5 45m321-45-5 45" stroke="#514237" strokeWidth="8" />
            <path d="m24 7 370 0" stroke="#b59572" strokeWidth="3" />
          </g>
          {layout === 'workshop' && <path d="M390 427h26v4h-26m65-6h24v5h-24m66 0h20v4h-20" stroke="#e8dfce" strokeWidth="4" strokeLinecap="round" />}
        </g>
      )}
      <g fill="#faf7ef" opacity=".5">
        <path d="m170 495 186-112 14 3-153 112Z" />
        <path d="m846 495-186-112-14 3 153 112Z" />
      </g>
    </svg>
  )
}

function RoomViewer() {
  const [layout, setLayout] = useState('empty')
  const [view, setView] = useState(0)
  const layouts = [
    { id: 'empty', label: 'Общий зал', image: media.wideHall, alt: 'Общий вид зала АРКА 123 с арочными окнами' },
    { id: 'windows', label: 'Арочные окна', image: media.windows, alt: 'Арочные окна АРКА 123 с видом на Национальную библиотеку' },
    { id: 'ceiling', label: 'Высота и свет', image: media.hall, alt: 'Высокий потолок и освещение в зале АРКА 123' },
  ]
  const activeLayout = layouts.find((item) => item.id === layout) ?? layouts[0]

  return (
    <div className="room-viewer">
      <div className="room-viewer__toolbar">
        <div className="segmented-control" aria-label="Выберите расстановку">
          {layouts.map((item) => (
            <button key={item.id} type="button" className={layout === item.id ? 'is-active' : ''} aria-pressed={layout === item.id} onClick={() => setLayout(item.id)}>
              {item.label}
            </button>
          ))}
        </div>
        <label className="view-control">
          <span>Обзор</span>
          <input type="range" min="-8" max="8" value={view} onChange={(event) => setView(Number(event.target.value))} aria-label="Сместить обзор фотографии" />
        </label>
      </div>
      <div className="room-stage" style={{ '--room-shift': `${view * 1.4}px` }}>
        <img className="room-photo" src={activeLayout.image} alt={activeLayout.alt} />
        <span className="scene-badge">ФОТОГРАФИЯ ПОМЕЩЕНИЯ</span>
      </div>
      <p className="room-disclaimer">
        Переключайте ракурсы и двигайте обзор. Фотографии показывают реальные материалы пространства; рассадку и оборудование необходимо согласовать до бронирования.
      </p>
    </div>
  )
}

function ScrollStory() {
  const sectionRef = useRef(null)
  const [phase, setPhase] = useState(0)
  const [videoReady, setVideoReady] = useState(false)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return undefined
    let frame = 0
    const update = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const rect = section.getBoundingClientRect()
        const range = Math.max(1, rect.height - window.innerHeight)
        const progress = Math.min(1, Math.max(0, -rect.top / range))
        section.style.setProperty('--story-progress', progress.toFixed(3))
        section.style.setProperty('--anna-foreground', Math.min(1, Math.max(0, (progress - .42) / .34)).toFixed(3))
        const nextPhase = progress < 0.36 ? 0 : progress < 0.7 ? 1 : 2
        setPhase((current) => current === nextPhase ? current : nextPhase)
      })
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  const phases = [
    { eyebrow: 'ВАШ ХОСТ', title: 'Здравствуйте. Я Анна.', body: 'Помогу представить пространство, где встречаются люди и рождаются идеи.' },
    { eyebrow: 'ПРОСТРАНСТВО', title: 'Выберите свой формат.', body: 'Мастер-класс, семинар или встреча за общим столом — пространство можно адаптировать под задачу.' },
    { eyebrow: 'ВИД НА ГОРОД', title: 'Встречаемся напротив Библиотеки.', body: 'АРКА 123 — место, которое легко найти и приятно запомнить.' },
  ]

  return (
    <section className={`scroll-story ${videoReady ? 'scroll-story--video-ready' : ''}`} ref={sectionRef} id="hero-brand" aria-label="История бренда при прокрутке">
      <div className="scroll-story__sticky">
        <div className="scroll-story__backdrop"><RoomScene layout="workshop" /></div>
        <video
          className="scroll-story__video"
          src="/videos/anna-welcome.mp4"
          poster="/images/anna-arka-interior.jpg"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
          onCanPlay={() => setVideoReady(true)}
          onError={() => setVideoReady(false)}
        />
        <div className="scroll-story__shade" />
        <BrandCharacter className="scroll-story__character" />
        <div className="scroll-story__copy" aria-live="polite">
          <span className="eyebrow">{phases[phase].eyebrow}</span>
          <h2>{phases[phase].title}</h2>
          <p>{phases[phase].body}</p>
          <div className="story-progress" aria-hidden="true"><span /></div>
          <small>ПРОКРУТИТЕ, ЧТОБЫ ПРОДОЛЖИТЬ</small>
        </div>
        <span className="scroll-story__note">АННА · ФИРМЕННЫЙ ПЕРСОНАЖ</span>
        <div className="scroll-story__anna-foreground" aria-hidden="true"><BrandCharacter /></div>
      </div>
    </section>
  )
}

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

function App() {
  const [replay, setReplay] = useState(0)
  return (
    <>
      <Loader />
      <header className="site-header">
        <BrandLogo />
        <nav className="main-nav" aria-label="Основная навигация">
          <a href="#about">О пространстве</a>
          <a href="#space">Помещение</a>
          <a href="#services">Форматы</a>
          <a href="#prices">Тарифы</a>
        </nav>
        <a className="header-cta" href="#contact">Обсудить встречу <span aria-hidden="true">↗</span></a>
        <a className="mobile-menu" href="#contact" aria-label="Перейти к заявке">Заявка <span aria-hidden="true">↗</span></a>
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="hero-copy">
            <span className="eyebrow"><span className="eyebrow-dot" /> ПРОСТРАНСТВО ДЛЯ ВАШИХ ИДЕЙ · МИНСК</span>
            <h1>Есть место,<br />чтобы <em>собраться.</em></h1>
            <p>АРКА 123 — пространство для мастер-классов, семинаров и встреч. 123 м² для событий, которые объединяют.</p>
            <div className="hero-actions">
              <a className="button button--dark" href="#space">Открыть пространство <span aria-hidden="true">↓</span></a>
              <span className="hero-location">Мстиславца, 10<br />напротив Национальной библиотеки</span>
            </div>
            <div className="hero-stats" aria-label="Особенности пространства">
              <div><strong>123</strong><span>м² пространства</span></div>
              <div><strong>4 × 3,5 м</strong><span>арочные окна</span></div>
              <div><strong>Минск</strong><span>ул. Мстиславца, 10</span></div>
            </div>
          </div>
          <div className="hero-visual" key={replay}>
            <div className="hero-visual__image">
              <img src={media.windows} alt="Арочные окна АРКА 123 с видом на Национальную библиотеку" />
              <div className="hero-visual__arch"><ArchMark animate /></div>
              <div className="hero-visual__caption"><span>53°56' С.Ш. · 27°41' В.Д.</span><span>МИНСК, БЕЛАРУСЬ</span></div>
            </div>
            <button className="replay-button" type="button" onClick={() => setReplay((value) => value + 1)} aria-label="Повторить анимацию логотипа">
              <ArchMark animate /><span>ПОВТОРИТЬ<br />АНИМАЦИЮ</span>
            </button>
            <span className="hero-visual__index">01 / 05</span>
          </div>
          <a className="scroll-cue" href="#about"><span /> ЛИСТАЙТЕ НИЖЕ</a>
        </section>

        <section className="intro-section section-pad" id="about">
          <div className="section-kicker"><span>01</span> О ПРОСТРАНСТВЕ</div>
          <div className="intro-grid">
            <h2>Не просто зал.<br /><em>Точка встречи.</em></h2>
            <div className="intro-text">
              <p>АРКА 123 — пространство, созданное для событий, в которых важно быть рядом: обмениваться опытом, учиться и придумывать новое.</p>
              <p>Название напоминает об арочных окнах и площади в 123 м². За окнами — Национальная библиотека, ориентир и часть атмосферы места.</p>
              <a className="text-link" href="#space">Посмотреть пространство <span aria-hidden="true">↘</span></a>
            </div>
          </div>
          <div className="intro-note"><ArchMark /><span>ВСТРЕЧАЕМСЯ<br />НАПРОТИВ БИБЛИОТЕКИ</span></div>
        </section>

        <section className="space-section section-pad" id="space">
          <div className="section-heading">
            <div className="section-kicker"><span>02</span> ПОМЕЩЕНИЕ</div>
            <div>
              <h2>Пространство<br /><em>в вашем ритме.</em></h2>
              <p>Исследуйте помещение с разных ракурсов: общий объём, арочные окна и характерное освещение.</p>
            </div>
          </div>
          <RoomViewer />
        </section>

        <ScrollStory />

        <section className="character-section section-pad" id="character">
          <div className="character-art"><div className="character-halo" /><BrandCharacter /></div>
          <div className="character-copy">
            <div className="section-kicker"><span>03</span> ФИРМЕННЫЙ ПЕРСОНАЖ</div>
            <span className="eyebrow">ЗНАКОМЬТЕСЬ · АННА</span>
            <h2>Ваш человек<br /><em>в АРКА 123.</em></h2>
            <p>Анна — собирательный образ заботливой хозяйки пространства: встречает гостей, помогает сориентироваться и показывает, как зал может работать для разных событий.</p>
            <p className="character-disclosure">Фотореалистичный образ создан для концепции сайта и не является фотографией реального сотрудника.</p>
            <a className="text-link" href="#contact">Познакомиться с пространством <span aria-hidden="true">↗</span></a>
          </div>
        </section>

        <section className="services-section section-pad" id="services">
          <div className="section-heading section-heading--compact">
            <div className="section-kicker"><span>04</span> ФОРМАТЫ И УСЛУГИ</div>
            <div><h2>Для встреч,<br /><em>которые важны.</em></h2></div>
          </div>
          <div className="service-grid">
            <article className="service-card"><span className="service-number">01</span><span className="service-icon">↗</span><h3>Мастер-класс</h3><p>Пространство для обучения, творчества и практики в небольшой группе.</p></article>
            <article className="service-card"><span className="service-number">02</span><span className="service-icon">◌</span><h3>Семинар</h3><p>Встреча с экспертами, презентация или обсуждение за общим столом.</p></article>
            <article className="service-card"><span className="service-number">03</span><span className="service-icon">⌂</span><h3>Встреча команды</h3><p>Отдельное место, чтобы собраться вместе, спланировать и обменяться идеями.</p></article>
            <article className="service-card service-card--dark"><span className="service-number">04</span><span className="service-icon">✳</span><h3>Сценарий под вас</h3><p>Предложите свой формат — обсудим рассадку и требования к мероприятию.</p></article>
          </div>
          <p className="equipment-note">Наличие проектора, звукового и другого оборудования необходимо уточнить до бронирования.</p>
        </section>

        <section className="gallery-section section-pad" id="gallery">
          <div className="section-heading section-heading--compact">
            <div className="section-kicker"><span>05</span> ВИЗУАЛЬНАЯ ИСТОРИЯ</div>
            <div><h2>Место начинается<br /><em>с впечатления.</em></h2></div>
          </div>
          <div className="gallery-grid">
            <figure className="gallery-card gallery-card--wide">
              <img src={media.exterior} alt="Вход в АРКА 123 на Мстиславца, 10" />
              <figcaption><span>01 / ЛОКАЦИЯ</span><strong>Вход в АРКА 123</strong></figcaption>
            </figure>
            <figure className="gallery-card"><img src={media.hall} alt="Основной зал АРКА 123 с высокими потолками" /><figcaption><span>02 / ИНТЕРЬЕР</span><strong>123 м² для идей</strong></figcaption></figure>
            <figure className="gallery-card"><img src={media.room} alt="Арочные окна и естественный свет в АРКА 123" /><figcaption><span>03 / СВЕТ</span><strong>Окна 4 × 3,5 м</strong></figcaption></figure>
          </div>
          <p className="gallery-disclosure">Фотографии интерьера и рекламные материалы предоставлены заказчиком. Схема выше показывает возможные сценарии расстановки и не заменяет согласование комплектации перед мероприятием.</p>
        </section>

        <section className="pricing-section section-pad" id="prices">
          <div className="section-heading section-heading--compact">
            <div className="section-kicker"><span>06</span> ТАРИФЫ</div>
            <div><h2>Понятный формат.<br /><em>Гибкий расчёт.</em></h2></div>
          </div>
          <div className="pricing-alert"><span>МАКЕТНЫЕ ЦЕНЫ</span> Цены ниже — демонстрационные для концепции сайта. Их нужно заменить на утверждённый прайс.</div>
          <div className="price-grid">
            <article className="price-card"><span className="price-label">КОРОТКАЯ ВСТРЕЧА</span><h3>Почасовая</h3><p className="price-amount">от 70 <small>BYN / час</small></p><p>Для консультации, репетиции или небольшой встречи.</p><a href="#contact" className="text-link">Обсудить время <span aria-hidden="true">↗</span></a></article>
            <article className="price-card price-card--featured"><span className="price-label">ПОПУЛЯРНЫЙ ФОРМАТ</span><h3>Полдня</h3><p className="price-amount">от 280 <small>BYN / 4 часа</small></p><p>Для мастер-класса, обучения или семинара.</p><a href="#contact" className="text-link">Обсудить время <span aria-hidden="true">↗</span></a></article>
            <article className="price-card"><span className="price-label">ДЕНЬ СОБЫТИЯ</span><h3>Полный день</h3><p className="price-amount">от 520 <small>BYN / день</small></p><p>Для насыщенной программы и нескольких сессий.</p><a href="#contact" className="text-link">Обсудить время <span aria-hidden="true">↗</span></a></article>
          </div>
          <p className="pricing-note">Итоговая стоимость и включённые услуги должны быть подтверждены владельцем пространства.</p>
        </section>

        <section className="reviews-section section-pad" id="reviews">
          <div className="section-kicker"><span>07</span> ОТЗЫВЫ</div>
          <div className="reviews-content">
            <h2>Хорошие встречи<br /><em>остаются с нами.</em></h2>
            <div className="review-empty"><span className="review-asterisk">✳</span><p>Здесь появятся впечатления гостей АРКА 123.</p><small>Реальные отзывы пока не предоставлены — мы не размещаем вымышленные.</small></div>
          </div>
        </section>

        <section className="contact-section section-pad" id="contact">
          <div className="contact-copy">
            <div className="section-kicker"><span>08</span> ОБСУДИМ ВАШУ ВСТРЕЧУ</div>
            <h2>У хороших идей<br />есть <em>своё место.</em></h2>
            <p>Расскажите, какое событие вы планируете — вместе подберём формат пространства.</p>
            <a className="contact-address" href={mapUrl} target="_blank" rel="noreferrer"><span>АРКА 123</span><strong>Минск, ул. Мстиславца, 10</strong><small>Открыть карту ↗</small></a>
          </div>
          <RequestForm />
        </section>
      </main>

      <footer className="site-footer">
        <BrandLogo light />
        <span className="footer-slogan">Встречаемся напротив Библиотеки.</span>
        <nav aria-label="Навигация в подвале"><a href="#about">О пространстве</a><a href="#space">Помещение</a><a href="#prices">Тарифы</a></nav>
        <small>АРКА 123 · МИНСК</small>
      </footer>
    </>
  )
}

export default App
