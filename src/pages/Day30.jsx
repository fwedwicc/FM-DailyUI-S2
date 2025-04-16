import React from 'react'
import { motion } from 'framer-motion'
import { Icon, Badge, Button } from '../components/ui'
import { HiStar, HiCheckCircle, HiFire, HiLightningBolt, HiSparkles, HiOutlineCurrencyDollar, HiOutlineArrowRight } from "react-icons/hi"
import useScrollToTop from '../hooks/useScrollToTop'

const Day30 = () => {

  useScrollToTop()

  const PriceCard = ({ recommended, guarantee, badge, title, description, price, features = [], styles }) => {
    return (
      <div className={`${styles} ${recommended ? 'p-[2px] rounded-[18px] bg-indigo-500' : null}`}>
        {recommended ? <span className='block py-2 text-center leading-none text-white'>Top pick for you!</span> : null}
        <div className={`${recommended ? 'bg-gray-900' : 'bg-gray-800/20'} border border-gray-800 rounded-2xl p-7 space-y-2`}>
          {/* Header */}
          <div className='flex justify-between items-start'>
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
            ) : badge === 'Starter' ? (
              <Badge text={badge} styles='mb-3' variant='default'>
                <HiSparkles className='size-4' />
              </Badge>
            ) : null}
          </div>
          {/* Title and Description */}
          <h4>{title}</h4>
          <p>{description}</p>
          {/* Price */}
          <span className='flex items-end gap-2 text-gray-400 my-5'>
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
            <span className='flex items-center justify-center text-sm text-gray-400 gap-1 mt-2.5'>
              <HiOutlineCurrencyDollar className='size-4.5 text-indigo-500' />
              30-day money back guarantee
            </span>
          ) : null}
          {/* Features */}
          <div className='pt-3 mt-4'>
            <p>What's included:</p>
            <div className='space-y-1.5 mt-3'>
              {features.map((item, index) => (
                <div key={index} className='flex items-center gap-1'>
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
      className='md:min-h-screen flex justify-center items-center md:p-24 p-4'
    >
      <div className='space-y-8'>
        {/* Infos */}
        <div className='flex items-end justify-between flex-wrap gap-6'>
          {/* Header and Description */}
          <div className='space-y-2'>
            <Badge text='Our pricing' styles='mb-3' variant='default'>
              <HiOutlineCurrencyDollar className='size-4' />
            </Badge>
            <h1>Unlock your online potential</h1>
            <p className='w-full max-w-lg'>From sleek starter sites to powerful custom solutions, we build websites that grow with your business.</p>
          </div>
          {/* Tab Component */}
          <div className='flex gap-1 p-1 rounded-xl border border-gray-800'>
            <Button label={'Monthly'} variant='secondary' size='md' />
            <Button label={'Annual'} variant='ghost' size='md'>
              <Badge text='Save 16%' variant='main' />
            </Button>
          </div>
        </div>
        {/* Price Containers */}
        <div className='grid lg:grid-cols-3 grid-cols-1 gap-4'>
          {[
            {
              recommended: false,
              guarantee: false,
              badge: 'Starter',
              title: 'Basic',
              description: 'Essential web presence for small businesses with core features and functionality.',
              price: '$499',
              features: ['Responsive 5-page website', '1 contact form', 'Basic SEO setup', '30-day support', 'Mobile optimization'],
              styles: 'lg:order-1 order-3'
            },
            {
              recommended: true,
              guarantee: true,
              badge: 'Popular',
              title: 'Premium',
              description: 'Advanced solution with e-commerce capabilities and extended support for growing businesses.',
              price: '$1,299',
              features: ['Responsive 10-page website', 'E-commerce integration', 'Advanced SEO package', '6 months priority support', 'Content management system'],
              styles: 'lg:order-2 order-1'
            },
            {
              recommended: false,
              guarantee: true,
              badge: 'Popular',
              title: 'Standard',
              description: 'Tailored development with complex functionality and scalable architecture for established businesses.',
              price: '$2,499+',
              features: ['Custom web application', 'Third-party API integrations', 'Performance optimization', '12 months dedicated support', 'Analytics dashboard & reporting'],
              styles: 'lg:order-3 order-2'
            }
          ].map((item, index) => (
            <PriceCard
              key={index}
              styles={item.styles}
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

export default Day30
