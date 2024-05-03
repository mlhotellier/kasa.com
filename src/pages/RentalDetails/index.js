import { useParams } from 'react-router-dom'
import Slideshow from '../../components/Slideshow'
import Rating from '../../components/Rating'
import CollaspeItem from '../../components/CollapseItem'
import Error from '../Error'
import './styles.scss'

function RentalDetails({ data }) {
  const { id } = useParams()
  const rentalSelected = data.find((rental) => rental.id === id)

  if (!rentalSelected) {
    // If no rental is found for the specified id, redirect to 404 page.
    return <Error />
  }

  const listEquipment = (
    <ul>
      {rentalSelected.equipments.map((equipment, index) => (
        <li key={index}>{equipment}</li>
      ))}
    </ul>
  )

  return (
    <section className="rental">
      <Slideshow rentalSelected={rentalSelected} />
      <div className="rental__details">
        <div className="rental__details__main">
          <div className="rental__details__main__group">
            <h1 className="rental__details__main__group__title">
              {rentalSelected.title}
            </h1>
            <span className="rental__details__main__group__location">
              {rentalSelected.location}
            </span>
          </div>
          <div className="rental__details__main__tags">
            {rentalSelected.tags.map((tag, index) => (
              <div key={index} className="rental__details__main__tags--tag">
                {tag}
              </div>
            ))}
          </div>
        </div>
        <div className="rental__details__host">
          <div className="rental__details__host__about">
            <p className="rental__details__host__about--name">
              {rentalSelected.host.name}
            </p>
            <img
              className="rental__details__host__about--picture"
              src={rentalSelected.host.picture}
              alt={`Profil de ${rentalSelected.host.name}`}
            />
          </div>

          <Rating rating={rentalSelected.rating} />
        </div>
      </div>
      <div className="rental__collapse">
        <CollaspeItem
          title="Description"
          content={rentalSelected.description}
          style={{ margin: 0 }}
        />
        <CollaspeItem title="Équipements" content={listEquipment} />
      </div>
    </section>
  )
}
export default RentalDetails
