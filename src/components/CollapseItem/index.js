import { useState } from 'react'
import './styles.scss'
import arrowUp from '../../assets/arrow_up.svg'
import arrowDown from '../../assets/arrow_down.svg'

function CollaspeItem({ title = '', content = '' }) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="item" onClick={toggleOpen}>
      <div className="item__head">
        <h3 className="item__head--title">{title}</h3>
        {isOpen ? (
          <img src={arrowDown} alt="Icone chevron vers le bas" />
        ) : (
          <img src={arrowUp} alt="Icone chevron vers le haut" />
        )}
      </div>
      {isOpen && <div className="item__content">{content}</div>}
    </div>
  )
}

export default CollaspeItem
