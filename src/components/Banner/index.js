import PropTypes from 'prop-types'
import DefaultForBanner from '../../assets/seaside.png'
import './styles.scss'

function Banner({ title = '', background = DefaultForBanner }) {
  return (
    <div className="banner" style={{ backgroundImage: `url(${background})` }}>
      <h2 className="banner__title">{title}</h2>
    </div>
  )
}

Banner.propTypes = {
  title: PropTypes.string,
  background: PropTypes.string,
}

export default Banner
