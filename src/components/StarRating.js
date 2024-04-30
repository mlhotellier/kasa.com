import starDefault from '../assets/star-default.svg'
import starActive from '../assets/star-active.svg'

function StarRating({ rating }) {
  const stars = []
  for (let i = 0; i < 5; i++) {
    stars.push(
      <img
        key={i}
        src={i < rating ? starActive : starDefault}
        alt="icône étoile"
      />
    )
  }
  return <div>{stars}</div>
}
export default StarRating
