import { revealStyle } from '../components/Reveal.jsx'
import { media } from '../data/site.js'

function IntroSection() {
  return (
    <section className="intro-section section-pad" id="about" style={{ backgroundImage: `url("${media.communication}")` }}>
      <div className="intro-grid reveal-copy" style={revealStyle('80ms')}>
        <h2>Не просто зал.<br /><em>Точка встречи.</em></h2>
        <div className="intro-text">
          <p>АРКА 123 — пространство, созданное для событий, в которых важно быть рядом: обмениваться опытом, учиться и придумывать новое.</p>
          <p>Название напоминает об арочных окнах и площади в 123 м². За окнами — Национальная библиотека, ориентир и часть атмосферы места.</p>
        </div>
      </div>
    </section>
  )
}

export { IntroSection }
