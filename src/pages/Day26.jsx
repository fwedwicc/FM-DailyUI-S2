import React from 'react'
import { motion } from 'framer-motion'
import { Input, Button, Icon } from '../components/ui'
import { HiCalendar, HiShieldCheck, HiOutlinePaperAirplane, HiOutlineMail, HiOutlineArrowSmRight } from "react-icons/hi"
import { SiLinkedin, SiInstagram, SiFacebook, SiX } from "react-icons/si"

const Day26 = () => {

  const Link = ({ children, styles }) => {
    return (
      <a className={`${styles} underline text-indigo-400 cursor-pointer`}>
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
      className='bg-gray-900'
    >
      <div className='grid lg:grid-cols-2 grid-cols-1 lg:min-h-screen'>
        {/* Illustration/Company Details */}
        <div className='lg:h-full h-[25rem] p-3 border border-yellow-400/30'>
          <div className='relative h-full overflow-hidden rounded-3xl border border-yellow-400/30'>
            <img src="https://placehold.co/30x30" alt="Sample Image" className='z-10 object-cover absolute w-full h-full' />
            {/* Blur Effect */}
            <div className='z-20 absolute bg-gray-950 h-[27rem] w-[28rem] -bottom-14 -left-14 rounded-tr-[8rem] blur-2xl' />
            <div className='z-20 absolute bg-gray-950 h-[17rem] w-[70rem] -bottom-14 -right-14 blur-2xl' />
            {/* Additional Contents */}
            <div className='z-30 absolute bottom-0 p-12 space-y-3 border border-yellow-400/30'>
              <div className='relative size-24 rounded-2xl overflow-hidden border border-yellow-400/30'>
                <img src="https://placehold.co/30x30" alt="Sample Image" className='object-cover absolute w-full h-full' />
              </div>
              <h1>Hello, World</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quos eaque odio, aliquam corrupti consequuntur beatae? Voluptate id quae, voluptatibus officia debitis odio possimus, suscipit mollitia omnis fugiat aliquid sapiente.</p>
            </div>
          </div>
        </div>
        {/* Subscribe Section */}
        <div className='p-8 border border-yellow-400/30'>
          <div className='h-full flex flex-col justify-between lg:gap-y-0 gap-y-20 border border-yellow-400/30'>
            {/* Start Content */}
            <div className='flex justify-between items-center border border-yellow-400/30'>
              <Link>
                Privacy Policy
              </Link>
              <Link styles='flex items-center'>
                Home
                <HiOutlineArrowSmRight className='size-5' />
              </Link>
            </div>
            {/* Middle Content */}
            <div className='space-y-8 border border-yellow-400/30'>
              {/* Additional Contents */}
              <div className='space-y-4 border border-yellow-400/30'>
                <h1>Stay ahead with us!</h1>
                <div className='grid grid-cols-2 gap-4 pt-6'>
                  {[
                    {
                      icon: HiCalendar,
                      title: 'Weekly content',
                      desc: 'Get thoughtfully selected articles, tools, and resources delivered straight to your inbox every Monday.'
                    },
                    {
                      icon: HiShieldCheck,
                      title: 'Privacy respected',
                      desc: 'We never share your information with third parties and you can unsubscribe with a single click anytime.'
                    },
                  ].map((item, index) => (
                    <div className='space-y-2 border border-yellow-400/30' key={index}>
                      <Icon styles='size-10'>
                        <item.icon
                          className='size-6 text-indigo-500'
                        />
                      </Icon>
                      <h5>{item.title}</h5>
                      <span>{item.desc}</span>
                    </div>
                  ))}
                </div>
              </div>
              {/* Subscribe */}
              <div className='relative w-full border border-yellow-400/30'>
                <HiOutlineMail className='size-6 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-600' />
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="example@email.com"
                  styles="w-auto"
                  inputStyles='pr-24 px-12 py-4 rounded-xl'
                />
                <Button label={'Subscribe'} variant='primary' styles='absolute top-1/2 -translate-y-1/2 right-2'>
                  <HiOutlinePaperAirplane className='size-4.5 rotate-90' />
                </Button>
              </div>
              {/* Additional Contents */}
              <div className='space-y-3 border border-yellow-400/30'>
                <div className='flex items-center'>
                  {/* Avatar */}
                  {[
                    "https://placehold.co/30x30",
                    "https://placehold.co/30x30",
                    "https://placehold.co/30x30",
                    "https://placehold.co/30x30"
                  ].map((item, index) => (
                    <div className={`${index === 0 ? '' : '-ml-1'} relative size-8 rounded-full overflow-hidden ring-2 ring-indigo-500`} key={index}>
                      <img src={item} alt="Sample Avatar" className='absolute object-cover w-full h-full' />
                    </div>
                  ))}
                  <span className='ms-3.5'>5,000+ readers</span>
                </div>
                <p>Join readers getting insights every week. No spam, ever.</p>
              </div>
            </div>
            {/* End Content */}
            <div className='border border-yellow-400/30'>
              <div className='space-x-2'>
                {[
                  { icon: SiLinkedin },
                  { icon: SiX },
                  { icon: SiInstagram },
                  { icon: SiFacebook },
                ].map((item, index) => (
                  <a className='group size-8 rounded-lg inline-flex items-center justify-center hover:bg-gray-800 transition duration-300 ease-in-out cursor-pointer' key={index}>
                    <item.icon className='size-4 group-hover:text-indigo-500 text-gray-300 transition duration-300 ease-in-out' />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Day26
