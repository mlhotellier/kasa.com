import { useParams } from 'react-router-dom'
import color from '../../styles/color'
import StarRating from '../../components/StarRating'
import CollaspeItem from '../../components/CollapseItem'
import Error from '../Error'

function RentalDetails({ data }) {
  const { id } = useParams()

  const rentalSelected = data.find((rental) => rental.id === id)
  // See datas
  console.log(rentalSelected)

  if (!rentalSelected) {
    // Si aucun logement n'est trouvé pour l'ID spécifié, affichez un message d'erreur ou redirigez l'utilisateur
    return <Error />
  }

  return (
    <section>
      <img
        src={rentalSelected.cover}
        style={{ width: '100%', height: 450, objectFit: 'cover' }}
        alt=""
      />
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <h1 style={{ color: `${color.primary}` }}>{rentalSelected.title}</h1>
          <span>{rentalSelected.location}</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <p>{rentalSelected.host.name}</p>
          <img
            style={{ width: 64, height: 64, borderRadius: '50%' }}
            src={rentalSelected.host.picture}
            alt={`Profil de ${rentalSelected.host.name}`}
          />
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex' }}>
          {rentalSelected.tags.map((tag, index) => (
            <div key={index}>{tag}</div>
          ))}
        </div>
        <StarRating rating={rentalSelected.rating} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <CollaspeItem
          title="Description"
          content={rentalSelected.description}
        />
        <CollaspeItem
          title="Équipements"
          content={rentalSelected.equipments.join(', ')}
        />
      </div>
    </section>
  )
}
export default RentalDetails
