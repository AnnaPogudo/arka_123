function SiteNav({ links, className, label }) {
  return (
    <nav className={className} aria-label={label}>
      {links.map((link) => (
        <a key={link.href} href={link.href}>{link.label}</a>
      ))}
    </nav>
  )
}

export { SiteNav }
