import { revealStyle } from '../components/Reveal.jsx'
import { SectionHeading } from '../components/SectionHeading.jsx'
import { services } from '../data/site.js'

function ServicesSection() {
  return (
    <section className="services-section section-pad" id="services">
      <SectionHeading title={<>Для встреч,<br /><em>которые важны.</em></>} />
      <div className="service-grid reveal-stagger" style={revealStyle('80ms')}>
        {services.map((service) => (
          <article key={service.number} className={service.dark ? 'service-card service-card--dark' : 'service-card'}>
            <span className="service-number">{service.number}</span>
            <h3>{service.title}</h3>
            <p>{service.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export { ServicesSection }
