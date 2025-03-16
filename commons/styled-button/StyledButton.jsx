import React from 'react'
import './styledButton.css'

const StyledButton = ({children}) => {
  return (
    <button className='primary-button'>
      {children}
    </button>
  )
}

export default StyledButton
