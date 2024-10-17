import React from 'react'
import Button from './Button'

const ButtonList = () => {
  return (
    <div className='flex'>
      <Button name="All"/>
      <Button name="Game"/>
      <Button name="Live"/>
      <Button name="Soccer"/>
      <Button name="Cooking"/>

    </div>
  )
}

export default ButtonList