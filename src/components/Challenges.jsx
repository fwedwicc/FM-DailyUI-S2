import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useSearchParams } from 'react-router-dom'
import { Cards, titles } from '../data'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'
import { SiGithub, SiDribbble } from "react-icons/si"
import { Button } from './ui'

const Challenges = () => {

  const currentChallengeIndex = titles.length - 1
  const currentChallengeNumber = currentChallengeIndex + 1

  const [searchParams, setSearchParams] = useSearchParams()
  const sectionRef = useRef(null)
  const cardsPerPage = 10

  const [isPaginationTriggered, setIsPaginationTriggered] = useState(false)
  const currentPage = parseInt(searchParams.get('page') || '1', 10)

  // Cards to display
  const indexOfLastCard = currentPage * cardsPerPage
  const indexOfFirstCard = indexOfLastCard - cardsPerPage
  const currentCards = Cards.slice(indexOfFirstCard, indexOfLastCard)

  // Total number of pages
  const totalPages = Math.ceil(Cards.length / cardsPerPage)

  const firstChallenge = indexOfFirstCard + 1
  const lastChallenge = Math.min(indexOfLastCard, Cards.length)

  // Scroll to the section only when triggered by pagination
  useEffect(() => {
    if (isPaginationTriggered && sectionRef.current) {
      sectionRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })

      setIsPaginationTriggered(false)
    }
  }, [currentPage, isPaginationTriggered])

  const handlePageChange = (page) => {
    setIsPaginationTriggered(true)
    setSearchParams({ page })
  }

  return (
    <section ref={sectionRef} className='p-4'>
      <h1>Challenges Section</h1>
      <p>{currentChallengeNumber}</p>
      {/* Cards */}
      <div className='grid grid-cols-3' key={currentPage}>
        {currentCards.map((item, index) => (
          <Link to={item.link} key={index} className='border p-2'>
            <img src={item.img} alt="Challenge Thumnail" className='' />
            <p>{item.title}</p>
            <p>{item.day}</p>
            <p>{item.desc}</p>
          </Link>
        ))}
      </div>
      {/* Pagination */}
      <div className='flex justify-between items-center mt-7'>
        {/* Page / Number of Challenge */}
        <div>
          <h5>Page {currentPage}</h5>
          <p>Challenge {firstChallenge} to {lastChallenge}</p>
        </div>
        {/* Pagination Controls */}
        <div className='flex flex-wrap items-center justify-center gap-2'>
          {/* Previous Button */}
          <Button onClick={() => handlePageChange(Math.max(currentPage - 1, 1))} disabled={currentPage === 1} variant='secondary'>
            <HiChevronLeft className='size-5' />
          </Button>
          {/* Page Numbers */}
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              className={`flex items-center justify-center md:size-10 size-9 text-sm rounded-lg cursor-pointer ${currentPage === index + 1
                ? 'bg-indigo-500 text-white'
                : 'bg-gray-800 text-white hover:bg-gray-700'
                } transition-all duration-300`}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          ))}
          {/* Next Button */}
          <Button onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))} disabled={currentPage === totalPages} variant='secondary'>
            <HiChevronRight className='size-5' />
          </Button>
        </div>
      </div>
      {/*  */}
      <footer className='flex flex-col items-center gap-12 py-12 px-4'>
        {/* Appreciation */}
        <div className='w-full max-w-md text-center space-y-4'>
          <p>Your support means the world! If you find this helpful, please consider giving my <span className='text-white font-semibold'>GitHub repository</span> a star. Feel free to explore those works on <span className='text-white font-semibold'>Dribbble</span>. Thank you so much for your appreciation!</p>
          <div className='flex justify-center gap-3'>
            {/* Primary Button with icon-end */}
            <a href="https://github.com/fwedwicc/FM-DailyUI-S2" target='_blank' rel='noopener noreferrer'>
              <Button label={'@fwedwicc'} styles='bg-gray-800 hover:bg-gray-700 focus-visible:outline-gray-800 flex-row-reverse'>
                <SiGithub className='size-5' />
              </Button>
            </a>
            {/* Secondary Button with icon-end */}
            <a href="https://dribbble.com/fwedwic" target='_blank' rel='noopener noreferrer'>
              <Button label={'@fwedwic'} styles='bg-pink-500 hover:bg-pink-400 focus-visible:outline-pink-500 flex-row-reverse'>
                <SiDribbble className='size-5' />
              </Button>
            </a>
          </div>
        </div>
        {/* Disclaimer */}
        <div className='text-center space-y-1'>
          <h5>Disclaimer</h5>
          <span className='block w-full max-w-2xl italic text-sm text-gray-400'>All works presented here are <span className='text-gray-200'>my original creations</span>. Special thanks to <a href="https://www.dailyui.co/" target='_blank' rel='noopener noreferrer' className='underline text-indigo-400'>Daily UI</a> for providing the prompts that inspired these designs. Additionally, some assets and resources used in these projects are credited to their <span className='text-gray-200'>respective creators</span> found on the internet.</span>
        </div>
      </footer>
    </section>
  )
}

export default Challenges
