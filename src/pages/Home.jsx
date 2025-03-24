import React from 'react'
import { Header, Hero, Challenges, Footer } from '../components'

const Home = () => {
  return (
    <main>
      {/* Header/Nav */}
      <Header />
      {/* Main Content */}
      <div className='px-4'>
        <div className='p-4 border border-yellow-200/20 rounded-2xl'>
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
