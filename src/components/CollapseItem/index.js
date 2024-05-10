import { useState } from 'react'
import './styles.scss'
import arrow from '../../assets/arrow.svg'

function CollaspeItem({ title = '', content = '' }) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div
      className="item"
      //onClick={toggleOpen}
    >
      <div className="item__head">
        <h3 className="item__head__title">{title}</h3>
        <img
          className={`item__head__arrow item__head__arrow${
            isOpen ? '--open' : '--close'
          }`}
          src={arrow}
          alt="Icone chevron"
          onClick={toggleOpen}
        />
      </div>
      <div className={`item__content${isOpen ? '--open' : '--close'}`}>
        {content}
      </div>
    </div>
  )
}

export default CollaspeItem
