import { RequestForm } from '../components/RequestForm.jsx'
import { mapUrl } from '../data/site.js'

function ContactSection() {
  return (
    <section className="contact-section section-pad" id="contact">
      <div className="contact-copy reveal-copy">
        <h2>У хороших идей<br />есть <em>своё место.</em></h2>
        <p>Расскажите, какое событие вы планируете — вместе подберём формат пространства.</p>
        <a className="contact-address" href={mapUrl} target="_blank" rel="noreferrer"><span>АРКА 123</span><strong>Минск, ул. Мстиславца, 10</strong></a>
      </div>
      <RequestForm />
    </section>
  )
}

export { ContactSection }
