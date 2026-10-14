import { revealStyle } from '../components/Reveal.jsx'
import { SectionHeading } from '../components/SectionHeading.jsx'
import { prices } from '../data/site.js'

function PricingSection() {
  return (
    <section className="pricing-section section-pad" id="prices">
      <SectionHeading title={<>Понятный формат.<br /><em>Гибкий расчёт.</em></>} />
      <div className="price-grid reveal-stagger" style={revealStyle('140ms')}>
        {prices.map((price) => (
          <article key={price.title} className={price.featured ? 'price-card price-card--featured' : 'price-card'}>
            <span className="price-label">{price.label}</span>
            <h3>{price.title}</h3>
            <p className="price-amount">{price.amount} <small>{price.unit}</small></p>
            <p>{price.text}</p>
            <a href="#contact" className="text-link">Обсудить время </a>
          </article>
        ))}
      </div>
    </section>
  )
}

export { PricingSection }
