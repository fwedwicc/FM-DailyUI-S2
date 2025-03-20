import React from 'react'
import { Link } from 'react-router-dom'
import { Cards, titles } from '../data'

const Challenges = () => {
  return (
    <div>
      <h1>Challenges Section</h1>
      {Cards.map((item, index) => (
        <div key={index}>
          <p>{item.title}</p>
          <p>{item.day}</p>
          <p>{item.desc}</p>
          <Link to={item.link}>Link</Link>
        </div>
      ))}

    </div>
  )
}

export default Challenges
