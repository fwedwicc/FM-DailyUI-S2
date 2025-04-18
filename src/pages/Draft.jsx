import React from 'react'
import { motion } from 'framer-motion'
import { Button, Input } from '../components/ui'
import { HiOutlineStar, HiOutlineCloudUpload, HiOutlineX } from "react-icons/hi"
import useScrollToTop from '../hooks/useScrollToTop'

const Draft = () => {

  useScrollToTop()

  const Modal = ({ heading, subHeading, children }) => {
    return (
      <div className='w-full max-w-6xl rounded-2xl bg-gray-950/40 shadow-2xl border border-yellow-300/40'>
        {/* Modal Header */}
        <div className='flex items-start justify-between p-4 border border-yellow-300/40'>
          <div className='border border-yellow-300/40'>
            <h4>{heading}</h4>
            <p>{subHeading}</p>
          </div>
          {/* Close Button */}
          <Button variant='ghost' iconButton>
            <HiOutlineX className='size-5' />
          </Button>
        </div>
        {/* Modal Body */}
        <div className='p-4 border border-yellow-300/40'>
          {children}
        </div>
        {/* Modal Footer */}
        <div className='flex items-center justify-between p-4 border border-yellow-300/40'>
          <Button label={'Need help?'} variant='outline' styles='flex-row-reverse'>
            <HiOutlineStar className='size-5' />
          </Button>
          <div className='flex items-center gap-2 border border-yellow-300/40'>
            <Button label={'Cancel'} variant='secondary' />
            <Button label={'Continue'} variant='primary' />
          </div>
        </div>
      </div>
    )
  }

  const FileBlock = ({ name, file, date, size, percent }) => {
    return (
      <div className='flex gap-3 rounded-lg p-2.5 border border-yellow-300/40'>
        {/* File Icon */}
        <div className='flex items-center justify-center size-20 flex-shrink-0 rounded-sm border border-yellow-300/40'>
          {file === 'PDF' ? (
            <img src="https://placehold.co/25x25" alt="Placeholder Image" className='w-14 h-auto border border-yellow-300/40' />
          ) : file === 'DOCX' ? (
            <img src="https://placehold.co/26x26" alt="Placeholder Image" className='w-14 h-auto border border-yellow-300/40' />
          ) : file === 'PPTX' ? (
            <img src="https://placehold.co/27x27" alt="Placeholder Image" className='w-14 h-auto border border-yellow-300/40' />
          ) : null}
        </div>
        {/* File Progress / Infos */}
        <div className='flex flex-col justify-center border border-yellow-300/40 w-full'>
          {/* File Infor */}
          <div className='flex items-center justify-between border border-yellow-300/40'>
            <div className='flex flex-col items-start border border-yellow-300/40'>
              <span className='text-gray-300 text-md font-medium'>{name}</span>
              <span className='text-gray-400 text-sm'>{date} • {size}</span>
            </div>
            <div className={`flex ${percent ? 'flex-col gap-2' : 'flex-row gap-[2px]'} justify-between items-end border border-yellow-300/40`}>
              <Button variant='ghost' iconButton styles='p-[2px]'>
                <HiOutlineStar className='size-4' />
              </Button>
              {percent ? (
                <span className='text-gray-400 text-sm'>{percent.replace('w-[', '').replace(']', '')}</span>
              ) : (
                <Button variant='ghost' iconButton styles='p-[2px]'>
                  <HiOutlineStar className='size-4' />
                </Button>
              )}
            </div>
          </div>
          {/* File Progress */}
          {percent && (
            <div className='relative h-1.5 rounded-md w-full bg-gray-800 overflow-hidden'>
              <div className={`${percent ? percent : null} absolute bg-indigo-500 h-1.5 rounded-full`}></div>
            </div>
          )}
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
              <HiOutlineCloudUpload className='size-10 mb-2 stroke-[1.2px] text-gray-400' />
              <span className='text-gray-300 text-md font-mediumm'>Drop you file(s) here, or
                <Link styles='ms-1.5'>browse</Link>
              </span>
              <span className='text-gray-400 text-sm'>Lorem ipsum, dolor sit consecad dolor sit.</span>
            </div>
            {/* Alternative File Upload */}
            <div className='border border-yellow-300/40'>
              {/* Divider */}
              <div className='flex justify-between items-center gap-2'>
                <div className='h-[1px] w-full bg-gray-700'></div>
                <span className='text-gray-400 text-sm'>or</span>
                <div className='h-[1px] w-full bg-gray-700'></div>
              </div>
            </div>
            {/* Upload via Link */}
            <div className='flex items-end gap-2 border border-yellow-300/40'>
              <Input
                id="username"
                name="username"
                type="text"
                label="Import via URL"
                placeholder="E.g hptts://drive.com/user-279172/file.pdf"
                styles="w-full"
              />
              <Button label={'Upload'} variant='secondary' />
            </div>
          </div>
          {/* Uploading files */}
          <div className='space-y-1 border border-yellow-300/40'>
            <p>Uploading file(s)</p>
            <div className='grid grid-cols-2 gap-2'>
              {[
                {
                  file: 'PDF',
                  name: 'Final_Report.pdf',
                  date: '10 Apr, 2025 at 9:15AM',
                  size: '2.4 MB',
                  percent: 'w-[95%]',
                },
                {
                  file: 'DOCX',
                  name: 'Client_Contract.docx',
                  date: '09 Apr, 2025 at 4:47PM',
                  size: '1.1 MB',
                  percent: 'w-[60%]',
                }
              ].map((item, index) => (
                <FileBlock
                  key={index}
                  file={item.file}
                  name={item.name}
                  date={item.date}
                  size={item.size}
                  percent={item.percent}
                />
              ))}
            </div>
          </div>
          {/* Uploaded files */}
          <div className='space-y-1 border border-yellow-300/40'>
            <p>Uploaded file(s)</p>
            <div className='grid grid-cols-2 gap-2'>
              {[
                {
                  file: 'PPTX',
                  name: 'Project_Pitch_Deck.pptx',
                  date: '18 Apr, 2025 at 3:22PM',
                  size: '3.9 MB'
                },
                {
                  file: 'PDF',
                  name: 'Invoice_April2025.pdf',
                  date: '18 Apr, 2025 at 7:29AM',
                  size: '1.6 MB'
                }
              ].map((item, index) => (
                <FileBlock
                  key={index}
                  file={item.file}
                  name={item.name}
                  date={item.date}
                  size={item.size}
                  percent={item.percent}
                />
              ))}
            </div>
          </div>
        </div>
      </Modal>
    </motion.div>
  )
}

export default Draft
