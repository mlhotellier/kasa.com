import styled from 'styled-components'
import PropTypes from 'prop-types'
import ImgForBanner from '../../assets/seaside.png'
import './styles.scss'

const BannerElement = styled.div`
  background: no-repeat url(${(props) => props.$background});
  background-size: cover;
  background-position: center;
`

function Banner({ title = '', background = ImgForBanner }) {
  return (
    <BannerElement className="banner" $background={background}>
      <h2 className="banner__title">{title}</h2>
    </BannerElement>
  )
}

Banner.propTypes = {
  title: PropTypes.string.isRequired,
  background: PropTypes.string.isRequired,
}

export default Banner
