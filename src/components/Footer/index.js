import './styles.scss'
import logoWhite from '../../assets/logo-kasa-white.svg'

function Footer() {
  return (
    <footer className="footer">
      <img src={logoWhite} alt="logo Kasa" />
      <p className="footer__text">© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}

export default Footer
