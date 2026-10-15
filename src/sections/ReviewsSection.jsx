import { revealStyle } from '../components/Reveal.jsx'
import { SectionHeading } from '../components/SectionHeading.jsx'
import { reviews } from '../data/site.js'

function ReviewsSection() {
  return (
    <section className="reviews-section section-pad" id="reviews">
      <SectionHeading title={<>Что говорят<br /><em>после встречи.</em></>} />
      <div className="review-grid reveal-stagger" style={revealStyle('80ms')}>
        {reviews.map((review) => (
          <figure key={review.name} className="review-card">
            <img src={review.photo} alt="" />
            <strong>{review.name}</strong>
            <span>{review.role}</span>
            <blockquote>{review.text}</blockquote>
          </figure>
        ))}
      </div>
    </section>
  )
}

export { ReviewsSection }
