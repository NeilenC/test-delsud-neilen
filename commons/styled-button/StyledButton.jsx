import React from 'react'

const StyledButton = ({children}) => {
  return (
    <button className='primary-button'>
      {children}
    </button>
  )
}

export default StyledButton
