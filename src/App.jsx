import { ArchMark, BrandCharacter, BrandLogo, Loader } from './components/Brand.jsx'
import { RequestForm } from './components/RequestForm.jsx'
import { RoomViewer } from './components/RoomViewer.jsx'
import { ScrollStory } from './components/ScrollStory.jsx'
import { mapUrl, media } from './data/site.js'
import './App.css'

export default function App() {
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
            <h1>Есть место,<br />чтобы <em>собраться.</em></h1>
            <p>АРКА 123 — пространство для мастер-классов, семинаров и встреч. 123 м² для событий, которые объединяют.</p>
            <div className="hero-actions">
              <a className="button button--dark" href="#space">Открыть пространство </a>
            </div>
            <div className="hero-stats" aria-label="Особенности пространства">
              <div><strong>123</strong><span>м² пространства</span></div>
              <div><strong>4 × 3,5 м</strong><span>арочные окна</span></div>
              <div><strong>Минск</strong><span>ул. Мстиславца, 10</span></div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-visual__image">
              <img src={media.emptyRoom} alt="Пустой зал АРКА 123 — место, чтобы собраться" />
              <div className="hero-visual__arch"><ArchMark /></div>
              <div className="hero-visual__caption"><span>МИНСК, БЕЛАРУСЬ</span></div>
            </div>
            <span className="hero-visual__index">01 / 05</span>
          </div>
        </section>

        <section className="intro-section section-pad" id="about" style={{ backgroundImage: `url("${media.communication}")` }}>
          <div className="section-kicker"><span>01</span> О ПРОСТРАНСТВЕ</div>
          <div className="intro-grid">
            <h2>Не просто зал.<br /><em>Точка встречи.</em></h2>
            <div className="intro-text">
              <p>АРКА 123 — пространство, созданное для событий, в которых важно быть рядом: обмениваться опытом, учиться и придумывать новое.</p>
              <p>Название напоминает об арочных окнах и площади в 123 м². За окнами — Национальная библиотека, ориентир и часть атмосферы места.</p>
              <a className="text-link" href="#space">Посмотреть пространство <span aria-hidden="true">↘</span></a>
            </div>
          </div>
        </section>

        <section className="space-section section-pad" id="space">
          <div className="section-heading">
            <div>
              <h2>Пространство<br /><em>в вашем ритме.</em></h2>
              <p>Один зал и три сценария. Листайте от пустого зала к мастер-классу и семинару.</p>
            </div>
          </div>
          <RoomViewer />
        </section>

        <ScrollStory />

        <section className="character-section section-pad" id="character">
          <div className="character-art"><div className="character-halo" /><BrandCharacter /></div>
          <div className="character-copy">
            <h2>Ваш человек<br /><em>в АРКА 123.</em></h2>
            <p>Анна — собирательный образ заботливой хозяйки пространства: встречает гостей, помогает сориентироваться и показывает, как зал может работать для разных событий.</p>
            <p className="character-disclosure">Фотореалистичный образ создан для концепции сайта и не является фотографией реального сотрудника.</p>
            <a className="text-link" href="#contact">Познакомиться с пространством <span aria-hidden="true">↗</span></a>
          </div>
        </section>

        <section className="services-section section-pad" id="services">
          <div className="section-heading">
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
          <div className="section-heading">
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
          <div className="section-heading">
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
          <div className="reviews-content">
            <h2>Хорошие встречи<br /><em>остаются с нами.</em></h2>
            <div className="review-empty"><span className="review-asterisk">✳</span><p>Здесь появятся впечатления гостей АРКА 123.</p><small>Реальные отзывы пока не предоставлены — мы не размещаем вымышленные.</small></div>
          </div>
        </section>

        <section className="contact-section section-pad" id="contact">
          <div className="contact-copy">
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

