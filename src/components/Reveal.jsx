import { useEffect } from 'react'

function useScrollReveal() {
  useEffect(() => {
    const nodes = document.querySelectorAll('.reveal-block, .reveal-copy, .reveal-stagger')
    if (!nodes.length) return undefined

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      nodes.forEach((node) => node.classList.add('is-in'))
      return undefined
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        entry.target.classList.add('is-in')
        observer.unobserve(entry.target)
      })
    }, { threshold: 0.12 })

    nodes.forEach((node) => observer.observe(node))
    return () => observer.disconnect()
  }, [])
}

function revealStyle(delay) {
  if (!delay) return undefined
  return { '--d': delay }
}

export { useScrollReveal, revealStyle }
