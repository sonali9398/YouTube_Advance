import React from 'react'

const Button = ({name}) => {
  return (
    <div className='px-5 py-2 m-2 rounded-lg bg-gray-300'>
        <button>{name}</button>
    </div>
  )
}

export default Button