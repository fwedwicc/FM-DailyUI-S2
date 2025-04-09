import React from 'react'
import { motion } from 'framer-motion'
import { Button, Dropdown, Avatar, Input } from '../components/ui'
import { HiOutlineMenuAlt1, HiOutlineRefresh, HiOutlineBookmark, HiOutlineDeviceMobile, HiOutlineViewGrid, HiBadgeCheck, HiStar } from "react-icons/hi"
import useScrollToTop from '../hooks/useScrollToTop'

const Draft = () => {

  useScrollToTop()

  const ItemCard = ({ image, name, badge, branch, address, ratings = 0, open, close }) => {
    return (
      <div className='flex flex-col gap-y-2 rounded-xl p-2 cursor-pointer hover:bg-gray-800/20 transition duration-300 ease-in-out border border-gray-800/60'>
        {/* Item Header */}
        <div className='flex items-center gap-2'>
          {/* Logo */}
          <Avatar
            type='profile'
            size='size-10'
            image={image}
          />
          {/* Store and Branch */}
          <div className='flex flex-col'>
            <span className='flex items-center gap-1 text-xl text-gray-200 font-medium'>
              {name}
              {badge === true ? <HiBadgeCheck className='text-indigo-500' /> : null}
            </span>
            <span className='text-sm text-gray-400'>{branch}</span>
          </div>
        </div>
        {/* Item Body */}
        <div>
          <div className='flex items-center gap-[1px]'>
            {[1, 2, 3, 4, 5].map((star) => (
              <HiStar
                key={star}
                className={`size-4 ${star <= ratings ? 'text-yellow-500' : 'text-gray-500'}`}
              />
            ))}
            <span className='text-sm text-gray-300 ml-1'>({ratings})</span>
          </div>
          <p>{address}</p>
        </div>
        {/* Time */}
        <div className='flex justify-between items-center'>
          <span className='text-sm text-gray-300'><span className='text-green-400'>Opens</span> {open}</span>
          <span className='text-sm text-gray-300'><span className='text-red-400'>Closes</span> {close}</span>
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
      className='md:min-h-screen border border-yellow-300/40'
    >
      {/* Side Navigation - Large Screen */}
      <aside className='z-50 h-screen fixed p-3 lg:flex flex-col items-center justify-between hidden w-20 border border-yellow-300/40'>
        {/* Start */}
        <div className='flex flex-col items-center gap-1'>
          <Button variant='ghost' iconButton styles='mb-3'>
            <HiOutlineMenuAlt1 className='size-5 stroke-[1.3px]' />
          </Button>
          <Button variant='ghost' label='Saved' styles='flex-col-reverse'>
            <HiOutlineBookmark className='size-6 stroke-[1.3px]' />
          </Button>
          <Button variant='ghost' label='Recent' styles='flex-col-reverse'>
            <HiOutlineRefresh className='size-6 stroke-[1.3px]' />
          </Button>
        </div>
        {/* End */}
        <Button variant='ghost' label='Install app' styles='flex-col-reverse'>
          <HiOutlineDeviceMobile className='size-6 stroke-[1.3px]' />
        </Button>
      </aside>
      {/* Navigation */}
      <nav className='z-40 fixed flex items-center lg:justify-end justify-between w-full p-2 border border-yellow-300/40'>
        {/* Button Toggle for Side Nav - Small Screen */}
        <Button variant='ghost' iconButton styles='lg:hidden flex'>
          <HiOutlineMenuAlt1 className='size-5 stroke-[1.3px]' />
        </Button>
        {/* Other Actions */}
        <div className='flex items-center gap-3 p-3'>
          <Button variant='ghost' iconButton>
            <HiOutlineViewGrid className='size-5 stroke-[1.3px]' />
          </Button>
          <Avatar
            type='profile'
            size='size-9'
            image='https://placehold.co/30x30'
            outline='outline-2 outline-offset-2 outline-indigo-500'
            styles='cursor-pointer'
          />
        </div>
      </nav>
      {/* Main Content */}
      <main className='grid lg:grid-cols-3 grid-cols-1 lg:ml-20 ml-0 h-screen border border-yellow-300/40'>
        {/* Side Content */}
        <div className='z-50 p-4 space-y-4 lg:order-1 order-2 col-span-1 overflow-auto custom-scrollbar h-full border border-yellow-300/40'>
          {/* Search */}
          <div className='relative'>
            <Input
              id="username"
              name="username"
              type="text"
              placeholder="E.g fwedwicc"
              styles="w-auto"
              inputStyles='pr-24 px-3 py-3 rounded-xl'
            />
            <div className='flex absolute right-2 top-1/2 -translate-y-1/2 gap-1'>
              <Button variant='ghost' iconButton>
                <HiOutlineMenuAlt1 className='size-5' />
              </Button>
              <Button variant='ghost' iconButton>
                <HiOutlineMenuAlt1 className='size-5' />
              </Button>
            </div>
          </div>
          {/* Results & Share Button */}
          <div className='flex items-center justify-between border border-yellow-300/40'>
            <h4 className='flex items-center gap-1'>Results <span className='text-base font-medium text-gray-400'>(114)</span></h4>
            <Button variant='outline' label='Share' size='sm' styles='text-blue-300'>
              <HiOutlineDeviceMobile className='size-4 stroke-[1.3px]' />
            </Button>
          </div>
          {/* Filters */}
          <div className='flex items-center gap-2 border border-yellow-300/40'>
            <Dropdown
              variant="secondary"
              size="md"
              label="Ratings"
              icon={<HiOutlineRefresh className="size-4" />}
            >
              <Button label={'Option 1'} variant='ghost' styles='hover:bg-gray-900' />
              <Button label={'Option 2'} variant='ghost' styles='hover:bg-gray-900' />
              <Button label={'Option 3'} variant='ghost' styles='hover:bg-gray-900' />
            </Dropdown>
            <Dropdown
              variant="secondary"
              size="md"
              label="Hours"
              icon={<HiOutlineRefresh className="size-4" />}
            >
              <Button label={'Option 1'} variant='ghost' styles='hover:bg-gray-900' />
              <Button label={'Option 2'} variant='ghost' styles='hover:bg-gray-900' />
              <Button label={'Option 3'} variant='ghost' styles='hover:bg-gray-900' />
            </Dropdown>
            <Button variant='outline' label='Filters' size='md' styles='text-blue-300'>
              <HiOutlineDeviceMobile className='size-4 stroke-[1.3px]' />
            </Button>
          </div>
          {/* Items */}
          <div className='flex flex-col gap-2 border border-yellow-300/40'>
            {[
              { badge: true, image: 'https://placehold.co/30x30', name: 'Nike', branch: 'Muntinlupa City', address: 'Alabang Town Center, Alabang-Zapote Road', ratings: 5, open: '9AM', close: '6PM' },
              { badge: true, image: 'https://placehold.co/30x30', name: 'Adidas', branch: 'Quezon City', address: 'Trinoma Mall, North Avenue corner EDSA', ratings: 4, open: '10AM', close: '7PM' },
              { badge: false, image: 'https://placehold.co/30x30', name: 'Puma', branch: 'Cebu City', address: 'Ayala Center Cebu, Archbishop Reyes Ave', ratings: 3, open: '9AM', close: '8PM' },
              { badge: true, image: 'https://placehold.co/30x30', name: 'Skechers', branch: 'Davao City', address: 'SM City Davao, Quimpo Boulevard', ratings: 5, open: '10AM', close: '9PM' },
              { badge: false, image: 'https://placehold.co/30x30', name: 'Under Armour', branch: 'Taguig City', address: 'BGC High Street, 9th Ave', ratings: 4, open: '11AM', close: '7PM' },
              { badge: true, image: 'https://placehold.co/30x30', name: 'New Balance', branch: 'Makati City', address: 'Greenbelt 3, Esperanza Street', ratings: 4, open: '10AM', close: '8PM' },
              { badge: false, image: 'https://placehold.co/30x30', name: 'Converse', branch: 'Baguio City', address: 'SM Baguio, Luneta Hill', ratings: 3, open: '9AM', close: '7PM' },
              { badge: true, image: 'https://placehold.co/30x30', name: 'Fila', branch: 'Iloilo City', address: 'Robinsons Place Iloilo, De Leon St.', ratings: 2, open: '9AM', close: '6PM' },
              { badge: false, image: 'https://placehold.co/30x30', name: 'Reebok', branch: 'Pasig City', address: 'Estancia Mall, Capitol Commons', ratings: 4, open: '10AM', close: '9PM' },
              { badge: true, image: 'https://placehold.co/30x30', name: 'Vans', branch: 'Las Piñas City', address: 'SM Southmall, Alabang-Zapote Road', ratings: 5, open: '10AM', close: '9PM' }
            ].map((items, index) => (
              <ItemCard
                key={index}
                badge={items.badge}
                image={items.image}
                name={items.name}
                branch={items.branch}
                address={items.address}
                ratings={items.ratings}
                open='9AM'
                close='6PM'
              />
            ))}
          </div>
        </div>
        {/* Map */}
        <div className='relative lg:h-screen h-94 lg:order-2 order-1 col-span-2 border border-yellow-300/40'>
          {/* Sample Map */}
          <img src="https://placehold.co/30x30" alt="Placeholder Map Image" className='absolute w-full h-full object-cover' />
          {/* Nike - Active */}
          <div className='absolute flex gap-3 top-1/2 right-1/4 w-full max-w-md bg-gray-800'>
            <Avatar
              type='profile'
              size='size-12'
              image='https://placehold.co/30x30'
              outline='outline-2 outline-offset-2 outline-indigo-500'
              styles='flex-shrink-0'
            />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, consectetur quaerat minima iste numquam quo vitae praesentium assumenda amet cupiditate suscipit tempore, libero doloribus repellendus saepe nesciunt! Asperiores, eligendi quia.</p>
          </div>
          {/*  */}
          <div className='absolute top-1/4 left-12'>
            <Avatar
              type='profile'
              size='size-12'
              image='https://placehold.co/30x30'
              outline='outline-2 outline-offset-2 outline-indigo-500'
              styles=''
            />
          </div>
          {/*  */}
          <div className='absolute top-2/6 right-12'>
            <Avatar
              type='profile'
              size='size-12'
              image='https://placehold.co/30x30'
              outline='outline-2 outline-offset-2 outline-indigo-500'
              styles=''
            />
          </div>
          {/*  */}
          <div className='absolute top-5/6 right-3/4'>
            <Avatar
              type='profile'
              size='size-12'
              image='https://placehold.co/30x30'
              outline='outline-2 outline-offset-2 outline-indigo-500'
              styles=''
            />
          </div>
          {/*  */}
          <div className='absolute top-1/6 right-2/4'>
            <Avatar
              type='profile'
              size='size-12'
              image='https://placehold.co/30x30'
              outline='outline-2 outline-offset-2 outline-indigo-500'
              styles=''
            />
          </div>
        </div>
      </main>
    </motion.div>
  )
}

export default Draft
