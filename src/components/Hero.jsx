import React from 'react'

const Hero = () => {
  return (
    <>
      <section className='bg-indigo-100 md:min-h-screen'>
        <h1>Hero Section</h1>
      </section>
      <section className='bg-red-100'>
        <a href="https://fwedwicc.github.io/FM-DailyUI/" target='_blank' rel='noopener noreferrer' className='inline-block border p-4'>
          FM DailyUI S1
        </a>
        <div className='inline-block border p-4'>
          FM DailyUI S2
          Upcoming Challenge
        </div>
        <div className='inline-block border p-4'>
          FM DailyUI S3
          Upcoming Challenge
        </div>
        <div className='inline-block border p-4'>
          FM DailyUI S4
          Upcoming Challenge
        </div>
      </section>
    </>
  )
}

export default Hero
