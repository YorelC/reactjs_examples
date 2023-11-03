import React from 'react'
import { useNavigate } from 'react-router-dom'
import { H1, P } from '../../../components/texts/Texts'
import clsx from 'clsx'

function CardFeatureRedirection({text, description, route}) {
  const navigate = useNavigate()

  const style = clsx(
    'cursor-pointer',
    "bg-white",
    'hover:bg-gray-100',
    'p-4',
    "border-2",
    'rounded-md',
    'shadow-md',
    'transition',
    'duration-300',
  
  )

  return (
    <div className={style} onClick={() => navigate(route)}>
      <H1>{text}</H1>
      <P>{description}</P>
    </div>
  )
}

export default CardFeatureRedirection