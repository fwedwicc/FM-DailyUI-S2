import React from 'react'
import { Link } from 'react-router-dom'
import { Cards, titles } from '../data'

const Challenges = () => {
  return (
    <section className='text-yellow-200'>
      <h1>Challenges Section</h1>
      {/* Cards */}
      <div className='grid grid-cols-3'>
        {Cards.map((item, index) => (
          <div key={index} className='border p-2'>
            <p>{item.title}</p>
            <p>{item.day}</p>
            <p>{item.desc}</p>
            <Link to={item.link}>Link</Link>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Challenges
