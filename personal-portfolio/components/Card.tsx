import React from 'react'

type CardProps = {
  cardContent: {
    title: string,
  }
}

function Card({ cardContent }: CardProps) {
  return (
    <div>{cardContent.title}</div>
  )
}

export default Card