import React from 'react'
import { motion } from 'framer-motion'
import { Button, Input } from '../components/ui'
import { HiOutlineCloudUpload, HiOutlineX, HiOutlineQuestionMarkCircle, HiOutlineTrash, HiOutlineCloudDownload } from "react-icons/hi"
import { PDF, DOCX, PPTX } from '../assets/day31'
import useScrollToTop from '../hooks/useScrollToTop'

const Day31 = () => {

  useScrollToTop()

  const Modal = ({ heading, subHeading, children }) => {
    return (
      <div className='w-full lg:max-w-5xl max-w-4xl rounded-2xl bg-gray-950/20 border border-gray-800 shadow-2xl shadow-gray-900/50'>
        {/* Modal Header */}
        <div className='flex items-start justify-between gap-4 p-4'>
          <div>
            <h4>{heading}</h4>
            <p>{subHeading}</p>
          </div>
          {/* Close Button */}
          <Button variant='ghost' iconButton>
            <HiOutlineX className='size-5' />
          </Button>
        </div>
        {/* Modal Body */}
        <div className='p-4 border-y border-gray-800'>
          {children}
        </div>
        {/* Modal Footer */}
        <div className='flex items-center justify-between p-4'>
          <Button label={'Need help?'} variant='outline' styles='flex-row-reverse'>
            <HiOutlineQuestionMarkCircle className='size-5' />
          </Button>
          <div className='flex items-center gap-2'>
            <Button label={'Cancel'} variant='secondary' />
            <Button label={'Continue'} variant='primary' />
          </div>
        </div>
      </div>
    )
  }

  const FileBlock = ({ name, file, date, size, percent }) => {
    return (
      <div className='flex gap-3 rounded-lg p-2.5 border border-gray-800'>
        {/* File Icon */}
        <div className='flex items-center justify-center md:size-20 size-15 border border-gray-800 bg-gray-800/30 flex-shrink-0 rounded-sm'>
          {file === 'PDF' ? (
            <img src={PDF} alt="Placeholder Image" className='md:w-11 w-8 h-auto' />
          ) : file === 'DOCX' ? (
            <img src={DOCX} alt="Placeholder Image" className='md:w-11 w-8 h-auto' />
          ) : file === 'PPTX' ? (
            <img src={PPTX} alt="Placeholder Image" className='md:w-11 w-8 h-auto' />
          ) : null}
        </div>
        {/* File Progress / Infos */}
        <div className='flex flex-col justify-center w-full'>
          {/* File Infor */}
          <div className='flex items-center justify-between gap-2'>
            <div className='flex flex-col items-start'>
              <span className='text-gray-300 md:text-md text-sm font-medium'>{name}</span>
              <span className='text-gray-400 md:text-sm text-xs'>{date} • {size}</span>
            </div>
            <div className={`flex ${percent ? 'flex-col gap-2' : 'flex-row gap-[2px]'} justify-between items-end`}>
              <Button variant='danger' iconButton styles='p-[2px]'>
                <HiOutlineTrash className='md:size-4 size-3' />
              </Button>
              {percent ? (
                <span className='text-gray-400 md:text-sm text-xs'>{percent.replace('w-[', '').replace(']', '')}</span>
              ) : (
                <Button variant='info' iconButton styles='p-[2px]'>
                  <HiOutlineCloudDownload className='md:size-4 size-3' />
                </Button>
              )}
            </div>
          </div>
          {/* File Progress */}
          {percent && (
            <div className='relative md:h-1.5 h-1 rounded-md w-full bg-gray-800 overflow-hidden'>
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
      className='flex justify-center items-center md:p-24 p-2'
    >
      <Modal heading='Upload Documents' subHeading='Keep your files organized and available whenever you need them.'>
        {/* Body */}
        <div className='space-y-3'>
          {/* File Upload */}
          <div className='space-y-1'>
            <p>Upload file(s):</p>
            <div className='flex flex-col items-center justify-center rounded-xl border border-dashed border-gray-300/40 bg-gray-500/10 hover:bg-gray-500/20 cursor-pointer p-6 transition duration-300 ease-in-out'>
              <HiOutlineCloudUpload className='size-10 mb-2 stroke-[1.2px] text-gray-400' />
              <span className='text-gray-300 text-md font-mediumm'>Drop you file(s) here, or
                <Link styles='ms-1.5'>browse</Link>
              </span>
              <span className='text-gray-400 text-sm text-center'>Lorem ipsum, dolor sit consecad dolor sit.</span>
            </div>
            {/* Upload via Link */}
            <div className='flex items-end gap-2'>
              <Input
                id="username"
                name="username"
                type="text"
                label="Import via URL"
                placeholder="E.g hptts://drive.com/user-279172/file.pdf"
                styles="w-full mt-1"
              />
              <Button label={'Upload'} variant='secondary' />
            </div>
          </div>
          {/* Uploading files */}
          <div className='space-y-1'>
            <p>Uploading file(s)</p>
            <div className='grid md:grid-cols-2 grid-cols-1 gap-2'>
              {[
                {
                  file: 'PDF',
                  name: 'Final_Report.pdf',
                  date: '10 Apr, 2025 at 9:15AM',
                  size: '2.4 MB',
                  percent: 'w-[79%]',
                },
                {
                  file: 'DOCX',
                  name: 'Client_Contract.docx',
                  date: '09 Apr, 2025 at 4:47PM',
                  size: '1.1 MB',
                  percent: 'w-[60%]',
                },
                {
                  file: 'PPTX',
                  name: 'Team_Presentation.pptx',
                  date: '08 Apr, 2025 at 11:30AM',
                  size: '5.2 MB',
                  percent: 'w-[42%]',
                },
                {
                  file: 'PDF',
                  name: 'Invoice_April2025.pdf',
                  date: '07 Apr, 2025 at 3:02PM',
                  size: '980 KB',
                  percent: 'w-[88%]',
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
          <div className='space-y-1'>
            <p>Uploaded file(s)</p>
            <div className='grid md:grid-cols-2 grid-cols-1 gap-2'>
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

export default Day31