import Banner from '../../components/Banner'
import './styles.scss'
import Card from '../../components/Card'
import { Link } from 'react-router-dom'

function Home({ data }) {
  return (
    <section className="home">
      <Banner title="Chez vous, partout et ailleurs" />
      <div className="home__rental-wrapper">
        <ul className="home__rental-wrapper__rental-list">
          {data.map((rental) => (
            <Link
              to={`/logement/${rental.id}`}
              className="home__rental-wrapper__rental-list__link"
              key={rental.id}
            >
              <Card title={rental.title} cover={rental.cover} />
            </Link>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Home
