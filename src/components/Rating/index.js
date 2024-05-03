import starDefault from '../../assets/star-default.svg'
import starActive from '../../assets/star-active.svg'
import './styles.scss'

function StarRating({ rating }) {
  const stars = []
  for (let i = 0; i < 5; i++) {
    stars.push(
      <img
        key={i}
        src={i < rating ? starActive : starDefault}
        alt="icône étoile"
        className="rating__img"
      />
    )
  }
  return <div className="rating">{stars}</div>
}
export default StarRating
