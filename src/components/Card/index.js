import './styles.scss'

function Card({ title, cover }) {
  return (
    <li className="card" style={{ backgroundImage: `url('${cover}')` }}>
      <h2 className="card__title">{title}</h2>
    </li>
  )
}

export default Card
