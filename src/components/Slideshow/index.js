import arrow from '../../assets/arrow_slider.svg'
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
            className="slideshow__navigation__btn"
          >
            <img
              src={arrow}
              className="slideshow__navigation__btn__arrow"
              alt="Icone chevron vers la gauche pour la navigation"
            />
          </button>
          <button className="slideshow__navigation__btn" onClick={nextSlide}>
            <img
              src={arrow}
              className="slideshow__navigation__btn__arrow slideshow__navigation__btn__arrow--right"
              alt="Icone chevron vers la droite pour la navigation"
            />
          </button>
          <p className="slideshow__navigation--numbering">
            {currentSlide + 1}/{totalPictures}
          </p>
        </div>
      )}
      <div className="slideshow__container">
        {pictures.map((picture, index) => {
          let classNames = 'slideshow__container__image'
          if (currentSlide === index) classNames += ' active'
          if (
            (totalPictures > 1) & (currentSlide === totalPictures - 1) &&
            index === 0
          )
            classNames += ' next'
          if ((totalPictures > 1) & (index === currentSlide + 1))
            classNames += ' next'
          if (
            (totalPictures > 1) & (currentSlide === 0) &&
            index === totalPictures - 1
          )
            classNames += ' previous'
          if ((totalPictures > 1) & (index === currentSlide - 1))
            classNames += ' previous'

          return (
            <img
              key={`${rentalSelected.title}-${index}`}
              src={picture}
              alt={rentalSelected.title}
              className={classNames}
            />
          )
        })}
      </div>
    </div>
  )
}
export default Slideshow
