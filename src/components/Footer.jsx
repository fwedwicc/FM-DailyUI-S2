import React from 'react'
import { SiGithub, SiDribbble, SiLinkedin, SiBehance, SiTiktok } from "react-icons/si"

const Footer = () => {

  const getFullYear = new Date().getFullYear()

  return (
    <footer className='flex justify-between items-center md:p-4 p-2'>
      <span className='text-gray-400 text-sm'><a href="https://fm-linktree.vercel.app/" className='text-indigo-400' target='_blank' rel='noopener noreferrer'>Frederick Moreno</a> • {getFullYear}</span>
      <div className='space-x-2'>
        {[
          { icon: SiGithub, link: 'https://github.com/fwedwicc' },
          { icon: SiLinkedin, link: 'https://www.linkedin.com/in/frederick-moreno/' },
          { icon: SiDribbble, link: 'https://dribbble.com/fwedwic' },
          { icon: SiBehance, link: 'https://www.behance.net/fwedwicc' },
          { icon: SiTiktok, link: 'https://www.tiktok.com/@fwedwicc' },
        ].map((item, index) => (
          <a href={item.link} className='group size-8 rounded-lg inline-flex items-center justify-center hover:bg-gray-800 transition duration-300 ease-in-out cursor-pointer' key={index}>
            <item.icon className='size-4 group-hover:text-indigo-500 text-gray-300 transition duration-300 ease-in-out' />
          </a>
        ))}
      </div>
    </footer>
  )
}

export default Footer
