import { revealStyle } from './Reveal.jsx'

function SectionHeading({ title, text, delay }) {
  return (
    <div className="section-heading reveal-copy" style={revealStyle(delay)}>
      <div>
        <h2>{title}</h2>
        {text ? <p>{text}</p> : null}
      </div>
    </div>
  )
}

export { SectionHeading }
