import React from 'react'
import { motion } from 'framer-motion'
import { Icon, Badge, Button } from '../components/ui'
import { HiStar } from "react-icons/hi"
import useScrollToTop from '../hooks/useScrollToTop'

const Draft = () => {

  useScrollToTop()

  const PriceCard = ({ recommended, guarantee, badge, title, description, price }) => {
    return (
      <div className={`${recommended ? 'p-[2px] rounded-2xl bg-indigo-500' : null}`}>
        {recommended ? <span className='block py-3 text-center leading-none text-white'>Top pick for you!</span> : null}
        <div className={`${recommended ? 'bg-gray-900' : 'bg-gray-800/20'} border border-yellow-300/40 rounded-2xl p-7 space-y-2`}>
          {/* Header */}
          <div className='flex justify-between items-start'>
            <Icon styles='size-10'>
              <HiStar className='size-6 text-gray-500' />
            </Icon>
            {badge === 'Popular' ? (
              <Badge text={badge} styles='mb-3' variant='main'>
                <HiStar className='size-4' />
              </Badge>
            ) : badge === 'Free' ? (
              <Badge text={badge} styles='mb-3' variant='default'>
                <HiStar className='size-4' />
              </Badge>
            ) : null}
          </div>
          {/* Title and Description */}
          <h4>{title}</h4>
          <p>{description}</p>
          {/* Price */}
          <span className='flex items-end gap-2 text-gray-400'>
            <h2>{price}</h2>
            <span className='text-sm mb-1'>/ Month</span>
          </span>
          {/* Subscribe Button */}
          {recommended ? (
            <Button label={'Subscribe'} variant='primary' styles='w-full justify-center'>
              <HiStar className='size-5' />
            </Button>
          ) : (
            <Button label={'Subscribe'} variant='secondary' styles='w-full justify-center'>
              <HiStar className='size-5' />
            </Button>
          )}
          {/* Guarantee */}
          {guarantee ? (
            <span className=' flex justify-center items-center text-sm text-gray-400 gap-1 pt-1'>
              <HiStar className='size-4 text-indigo-500' />
              30-day money back guarantee
            </span>
          ) : null}
        </div>
      </div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className='md:min-h-screen flex justify-center items-center md:p-24 p-4'
    >
      <div className='border border-yellow-300/40 space-y-8'>
        {/* Infos */}
        <div className='flex items-end justify-between'>
          {/* Header and Description */}
          <div className='space-y-2 border border-yellow-300/40'>
            <Badge text='Hello world' styles='mb-3' variant='default'>
              <HiStar className='size-4' />
            </Badge>
            <h1>Hello, World</h1>
            <p className='w-full max-w-lg'>Lorem ipsum dolor sit, amet consectetur adipisicing elit Iste, ipsum impedit. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          {/* Tab Component */}
          <div className='border border-yellow-300/40'>
            <p>Tab</p>
          </div>
        </div>
        {/* Price Containers */}
        <div className='grid grid-cols-3 gap-4 border border-yellow-300/40'>
          {/* First */}
          <PriceCard
            recommended={false}
            badge='Free'
            title='Hello'
            description='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic perferendis maiores magnam'
            price='$159.99'
          />
          {/* Second */}
          <PriceCard
            recommended={true}
            guarantee={true}
            badge='Popular'
            title='Hello'
            description='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic perferendis maiores magnam'
            price='$159.99'
          />
          {/* Third */}
          <PriceCard
            recommended={false}
            guarantee={true}
            badge='Popular'
            title='Hello'
            description='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic perferendis maiores magnam'
            price='$159.99'
          />
        </div>
        {/* Read More */}
        <div className='flex justify-center'>
          <p>Read more</p>
        </div>
      </div>
    </motion.div>
  )
}

export default Draft
