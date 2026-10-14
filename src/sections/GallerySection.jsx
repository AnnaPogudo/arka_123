import { revealStyle } from '../components/Reveal.jsx'
import { SectionHeading } from '../components/SectionHeading.jsx'
import { gallery } from '../data/site.js'

function GallerySection() {
  return (
    <section className="gallery-section section-pad" id="gallery">
      <SectionHeading title={<>Место начинается<br /><em>с впечатления.</em></>} />
      <div className="gallery-grid reveal-stagger" style={revealStyle('80ms')}>
        {gallery.map((item) => (
          <figure key={item.index} className={item.wide ? 'gallery-card gallery-card--wide' : 'gallery-card'}>
            <img src={item.src} alt={item.alt} />
            <figcaption><span>{item.index}</span><strong>{item.title}</strong></figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}

export { GallerySection }
