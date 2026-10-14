import { ArchMark } from '../components/Brand.jsx'
import { revealStyle } from '../components/Reveal.jsx'
import { heroStats, media } from '../data/site.js'

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-copy reveal-copy" style={revealStyle('900ms')}>
        <h1>Есть место,<br />чтобы <em>собраться.</em></h1>
        <p>АРКА 123 — пространство для мастер-классов, семинаров и встреч. 123 м² для событий, которые объединяют.</p>
        <div className="hero-actions">
          <a className="button button--dark" href="#space">Открыть пространство </a>
        </div>
        <div className="hero-stats" aria-label="Особенности пространства">
          {heroStats.map((stat) => (
            <div key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></div>
          ))}
        </div>
      </div>
      <div className="hero-visual reveal-block" style={revealStyle('1040ms')}>
        <div className="hero-visual__image">
          <img src={media.gathering} alt="Зал АРКА 123, где можно собраться" />
          <div className="hero-visual__arch"><ArchMark /></div>
          <div className="hero-visual__caption"><span>МИНСК, БЕЛАРУСЬ</span></div>
        </div>
      </div>
    </section>
  )
}

export { HeroSection }
