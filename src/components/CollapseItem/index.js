import { useState } from 'react'

function CollaspeItem({ title = '', content = '' }) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div>
      {isOpen ? (
        <div>
          <div
            style={{
              backgroundColor: 'red',
              color: 'white',
              display: 'flex',
              justifyContent: 'space-between',
              maxHeight: 24,
              height: 24,
            }}
          >
            {' '}
            <h3>{title}</h3>
            <p onClick={(isOpen) => setIsOpen(false)}>X</p>
          </div>
          <p>{content}</p>
        </div>
      ) : (
        <div
          style={{
            backgroundColor: 'red',
            color: 'white',
            display: 'flex',
            justifyContent: 'space-between',
            maxHeight: 24,
            height: 24,
          }}
        >
          <h3>{title}</h3>
          <p onClick={(isOpen) => setIsOpen(true)}>V</p>
        </div>
      )}
    </div>
  )
}

export default CollaspeItem
