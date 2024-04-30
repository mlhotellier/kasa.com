import logo from '../assets/logo-kasa.svg'
import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import color from '../styles/color'

const HeaderElement = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 45px auto 50px;
  padding: 0 100px;

  @media (max-width: 768.98px) {
    margin: 20px auto 26px;
    padding: 0 20px;
  }
`

const HeaderLogo = styled.img`
  width: 210.32px;

  @media (max-width: 768.98px) {
    width: 145px;
  }
`

const HeaderNavLink = styled(Link)`
  margin-left: 26px;
  font-size: 24px;
  color: ${color.third};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
  &.active {
    text-decoration: underline;
  }
  @media (max-width: 768.98px) {
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 500;
    margin-left: 26px;
  }
`

function Header() {
  const location = useLocation()
  const linkToHome = '/'
  const linkToAbout = '/a-propos'

  return (
    <HeaderElement>
      <HeaderLogo src={logo} alt="logo Kasa" />
      <nav>
        <ul>
          <HeaderNavLink
            to={linkToHome}
            className={location.pathname === linkToHome ? 'active' : null}
          >
            Accueil
          </HeaderNavLink>
          <HeaderNavLink
            to={linkToAbout}
            className={location.pathname === linkToAbout ? 'active' : null}
          >
            A propos
          </HeaderNavLink>
        </ul>
      </nav>
    </HeaderElement>
  )
}

export default Header
