import React from 'react'
import { motion } from 'framer-motion'
import { Icon, Badge, Button } from '../components/ui'
import { HiStar, HiCheckCircle, HiFire, HiLightningBolt, HiSparkles, HiOutlineCurrencyDollar, HiOutlineArrowRight } from "react-icons/hi"
import useScrollToTop from '../hooks/useScrollToTop'

const Draft = () => {

  useScrollToTop()

  const PriceCard = ({ recommended, guarantee, badge, title, description, price, features = [] }) => {
    return (
      <div className={`${recommended ? 'p-[2px] rounded-2xl bg-indigo-500' : null}`}>
        {recommended ? <span className='block py-2 text-center leading-none text-white'>Top pick for you!</span> : null}
        <div className={`${recommended ? 'bg-gray-900' : 'bg-gray-800/20'} border border-yellow-300/40 rounded-2xl p-7 space-y-2`}>
          {/* Header */}
          <div className='flex justify-between items-start border border-yellow-300/40'>
            <Icon styles='size-10'>
              {title === 'Basic' ? (
                <HiStar className='size-6 text-indigo-500' />
              ) : title === 'Standard' ? (
                <HiLightningBolt className='size-6 text-indigo-500' />
              ) : (
                <HiFire className='size-6 text-indigo-500' />
              )}
            </Icon>
            {badge === 'Popular' ? (
              <Badge text={badge} styles='mb-3' variant='main'>
                <HiSparkles className='size-4' />
              </Badge>
            ) : badge === 'Free' ? (
              <Badge text={badge} styles='mb-3' variant='default'>
                <HiCheckCircle className='size-4' />
              </Badge>
            ) : null}
          </div>
          {/* Title and Description */}
          <h4 className='border border-yellow-300/40'>{title}</h4>
          <p className='border border-yellow-300/40'>{description}</p>
          {/* Price */}
          <span className='flex items-end gap-2 text-gray-400 my-5 border border-yellow-300/40'>
            <h2>{price}</h2>
            <span className='text-sm mb-1'>/ Month</span>
          </span>
          {/* Subscribe Button */}
          {title === 'Basic' ? (
            <Button label={'Get started'} variant='secondary' styles='w-full items-center justify-center'>
              <HiOutlineArrowRight className='size-4' />
            </Button>
          ) : title === 'Standard' ? (
            <Button label={'Start 7-day trial'} variant='secondary' styles='w-full items-center justify-center'>
              <HiOutlineArrowRight className='size-4' />
            </Button>
          ) : (
            <Button label={'Start 7-day trial'} variant='primary' styles='w-full items-center justify-center'>
              <HiOutlineArrowRight className='size-4' />
            </Button>
          )}
          {/* Guarantee */}
          {guarantee ? (
            <span className='flex items-center justify-center text-sm text-gray-400 gap-1 mt-2.5 border border-yellow-300/40'>
              <HiOutlineCurrencyDollar className='size-4.5 text-indigo-500' />
              30-day money back guarantee
            </span>
          ) : null}
          {/* Features */}
          <div className='border pt-3 mt-4 border-yellow-300/40'>
            <p>What's included:</p>
            <div className='space-y-1.5 mt-3 border border-yellow-300/40'>
              {features.map((item, index) => (
                <div key={index} className='flex items-center gap-1 border border-yellow-300/40'>
                  <HiCheckCircle className='size-5.5 text-indigo-500' />
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
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
      className='md:min-h-screen flex justify-center items-center md:p-24 p-4 border border-yellow-300/40'
    >
      <div className='border border-yellow-300/40 space-y-8'>
        {/* Infos */}
        <div className='flex items-end justify-between border border-yellow-300/40'>
          {/* Header and Description */}
          <div className='space-y-2 border border-yellow-300/40'>
            <Badge text='Hello world' styles='mb-3' variant='default'>
              <HiStar className='size-4' />
            </Badge>
            <h1>Hello, World</h1>
            <p className='w-full max-w-lg'>Lorem ipsum dolor sit, amet consectetur adipisicing elit Iste, ipsum impedit. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          {/* Tab Component */}
          <div className='flex gap-1 p-1 rounded-xl border border-gray-800'>
            <Button label={'Monthly'} variant='secondary' />
            <Button label={'Annual'} variant='ghost'>
              <Badge text='Save 16%' variant='main' />
            </Button>
          </div>
        </div>
        {/* Price Containers */}
        <div className='grid grid-cols-3 gap-4 border border-yellow-300/40'>
          {[
            { recommended: false, guarantee: false, badge: 'Free', title: 'Basic', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic perferendis maiores magnam', price: '$159.99', features: ['asdf1', 'asdf', 'asdf', 'asdf'] },
            { recommended: true, guarantee: true, badge: 'Popular', title: 'Premium', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic perferendis maiores magnam', price: '$159.99', features: ['asdf2', 'asdf', 'asdf', 'asdf'] },
            { recommended: false, guarantee: true, badge: 'Popular', title: 'Standard', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic perferendis maiores magnam', price: '$159.99', features: ['asdf3', 'asdf', 'asdf', 'asdf'] },
          ].map((item, index) => (
            <PriceCard
              key={index}
              recommended={item.recommended}
              guarantee={item.guarantee}
              badge={item.badge}
              title={item.title}
              description={item.description}
              price={item.price}
              features={item.features}
            />
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default Draft
