import arrowLeft from '../../assets/arrow_left.svg'
import arrowRight from '../../assets/arrow_right.svg'
import { useState } from 'react'
import './styles.scss'

function Slideshow({ rentalSelected }) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const totalPictures = rentalSelected.pictures.length
  const pictures = rentalSelected.pictures

  function nextSlide() {
    const newSlide = currentSlide === totalPictures - 1 ? 0 : currentSlide + 1
    setCurrentSlide(newSlide)
  }

  function previousSlide() {
    const newSlide = currentSlide === 0 ? totalPictures - 1 : currentSlide - 1
    setCurrentSlide(newSlide)
  }

  return (
    <div className="slideshow">
      {totalPictures > 1 && (
        <div className="slideshow__navigation">
          <button
            onClick={previousSlide}
            className="slideshow__navigation--btn"
          >
            <img
              src={arrowLeft}
              className="slideshow__navigation--arrow"
              alt="Icone chevron vers la gauche pour la navigation"
            />
          </button>
          <button className="slideshow__navigation--btn" onClick={nextSlide}>
            <img
              src={arrowRight}
              className="slideshow__navigation--arrow"
              alt="Icone chevron vers la droite pour la navigation"
            />
          </button>
          <p className="slideshow__navigation--numbering">
            {currentSlide + 1}/{totalPictures}
          </p>
        </div>
      )}
      <div className="slideshow__container">
        {pictures.map((picture, index) => (
          <img
            key={`${rentalSelected.title}-${index}`}
            src={picture}
            alt={rentalSelected.title}
            className={`slideshow__image ${
              currentSlide === index ? 'active' : ''
            } ${currentSlide === index - 1 ? 'previous' : ''} ${
              currentSlide === index + 1 ? 'next' : ''
            }`}
          />
        ))}
      </div>
    </div>
  )
}
export default Slideshow
