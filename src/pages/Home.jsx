import React from 'react'
import { Header, Hero, Challenges, Footer } from '../components'

const Home = () => {
  return (
    <main>
      {/* Header/Nav */}
      <Header />
      {/* Main Content */}
      <div className='px-4'>
        <div className='border border-yellow-200/20 rounded-2xl overflow-hidden'>
          <Hero />
          <Challenges />
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </main>
  )
}

export default Home
