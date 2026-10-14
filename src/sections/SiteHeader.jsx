import { BrandLogo } from '../components/Brand.jsx'
import { SiteNav } from '../components/SiteNav.jsx'
import { mainNav } from '../data/site.js'

function SiteHeader() {
  return (
    <header className="site-header">
      <BrandLogo />
      <SiteNav links={mainNav} className="main-nav" label="Основная навигация" />
      <a className="header-cta" href="#contact">Обсудить встречу </a>
      <a className="mobile-menu" href="#contact" aria-label="Перейти к заявке">Заявка</a>
    </header>
  )
}

export { SiteHeader }
