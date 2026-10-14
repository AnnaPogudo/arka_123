import { BrandLogo } from '../components/Brand.jsx'
import { SiteNav } from '../components/SiteNav.jsx'
import { mainNav } from '../data/site.js'

function SiteFooter() {
  return (
    <footer className="site-footer">
      <BrandLogo light />
      <span className="footer-slogan">Встречаемся напротив Библиотеки.</span>
      <SiteNav links={mainNav.filter((link) => link.footer)} label="Навигация в подвале" />
    </footer>
  )
}

export { SiteFooter }
