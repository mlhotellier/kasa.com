import Banner from '../../components/Banner'
import ImgForBanner from '../../assets/seaside.png'
import { Link } from 'react-router-dom'
import './styles.scss'

function Home({ data }) {
  return (
    <section className="home">
      <Banner
        title="Chez vous, partout et ailleurs"
        background={ImgForBanner}
      />
      <div className="home__rental-wrapper">
        <ul className="home__rental-wrapper__rental-list">
          {data.map((rental) => (
            <Link
              className="home__rental-wrapper__rental-list__link"
              key={rental.id}
              to={`/logement/${rental.id}`}
            >
              <li
                className="home__rental-wrapper__rental-list__card"
                style={{ backgroundImage: `url('${rental.cover}')` }}
              >
                <h2 className="home__rental-wrapper__rental-list__card__title">
                  {rental.title}
                </h2>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Home
