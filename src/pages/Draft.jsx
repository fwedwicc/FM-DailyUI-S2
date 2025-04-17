import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '../components/ui'
import { HiOutlineStar } from "react-icons/hi"
import useScrollToTop from '../hooks/useScrollToTop'

const Draft = () => {

  useScrollToTop()

  const Modal = ({ heading, subHeading, children }) => {
    return (
      <div className='w-full max-w-3xl rounded-2xl border border-yellow-300/40'>
        {/* Modal Header */}
        <div className='flex items-center justify-between p-4 border border-yellow-300/40'>
          <div className='border border-yellow-300/40'>
            <h4>{heading}</h4>
            <p>{subHeading}</p>
          </div>
          {/* Secondary Button - Icon */}
          <Button variant='ghost' iconButton>
            <HiOutlineStar className='size-5' />
          </Button>
        </div>
        {/* Modal Body */}
        <div className='p-4 border border-yellow-300/40'>
          {children}
        </div>
        {/* Modal Footer */}
        <div className='flex items-center justify-between p-4 border border-yellow-300/40'>
          <Button label={'Need help?'} variant='ghost' styles='flex-row-reverse'>
            <HiOutlineStar className='size-5' />
          </Button>
          <div className='flex items-center gap-2 border border-yellow-300/40'>
            <Button label={'Cancel'} variant='secondary' />
            <Button label={'Continue'} variant='primary'>
              <HiOutlineStar className='size-5' />
            </Button>
          </div>
        </div>
      </div>
    )
  }

  const FileBlock = ({ children }) => {
    return (
      <div className='flex gap-3 border border-yellow-300/40 p-2.5'>
        {/* File Icon */}
        <div className='size-18 flex-shrink-0 border border-yellow-300/40'></div>
        {/* File Progress / Infos */}
        <div className='border border-yellow-300/40 w-full'>
          <span className='text-gray-300 text-md font-medium'>Hello World</span>
        </div>
      </div>
    )
  }

  const Link = ({ children, styles }) => {
    return (
      <a className={`${styles} md:text-base text-sm underline text-indigo-400 cursor-pointer`}>
        {children}
      </a>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className='flex justify-center items-center md:p-24 p-4'
    >
      <Modal heading='Hello world' subHeading='Lorem ipsum dolor sit amet consectetur adipisicing ugit.'>
        {/* Body */}
        <div className='space-y-3 border border-yellow-300/40'>
          {/* File Upload */}
          <div className='space-y-1 border border-yellow-300/40'>
            <p>Upload file(s):</p>
            <div className='flex flex-col items-center justify-center rounded-xl border border-dashed border-yellow-300/40 bg-gray-500/10 p-6'>
              <HiOutlineStar className='size-9 stroke-[1.2px] text-gray-400' />
              <span className='text-gray-300 text-md font-mediumm'>Drop you file(s) here, or
                <Link styles='ms-1.5'>browse</Link>
              </span>
              <span className='text-gray-400 text-sm'>Lorem ipsum, dolor sit consecad dolor sit.</span>
            </div>
          </div>
          {/* Uploading files */}
          <div className='space-y-1 border border-yellow-300/40'>
            <p>Uploading file(s)</p>
            <FileBlock></FileBlock>
          </div>
          {/* Uploaded files */}
          <div className='space-y-1 border border-yellow-300/40'>
            <p>Uploaded file(s)</p>
            <div className='border border-yellow-300/40 p-2.5'>
              <p>lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </div>
          </div>

          {/*  */}
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto itaque dolores odit? Aut, tempora omnis doloremque ut modi officia eaque, molestiae sed excepturi corrupti cum. Nulla expedita harum incidunt voluptas.</p>
        </div>
      </Modal>
    </motion.div>
  )
}

export default Draft
