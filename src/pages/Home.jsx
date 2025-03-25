import React from 'react'
import { motion } from 'framer-motion'
import { Header, Hero, Challenges, Footer } from '../components'

const Home = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header/Nav */}
      <Header />
      {/* Main Content */}
      <div className='md:px-4 px-2'>
        <div className='border border-gray-700/40 bg-gray-800/30 rounded-2xl overflow-hidden'>
          <Hero />
          <Challenges />
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </motion.main>
  )
}

export default Home
