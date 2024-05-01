import logo from '../../assets/logo-kasa.svg'
import { Link, useLocation } from 'react-router-dom'
import './styles.scss'

function Header() {
  const location = useLocation()
  const linkToHome = '/'
  const linkToAbout = '/a-propos'

  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="logo Kasa" />
      <nav>
        <ul>
          <Link
            to={linkToHome}
            className={`header__nav__link ${
              location.pathname === linkToHome ? 'active' : null
            }`}
          >
            Accueil
          </Link>
          <Link
            to={linkToAbout}
            className={`header__nav__link ${
              location.pathname === linkToAbout ? 'active' : null
            }`}
          >
            A propos
          </Link>
        </ul>
      </nav>
    </header>
  )
}

export default Header
