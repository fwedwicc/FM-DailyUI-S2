import React from 'react'

const Avatar = ({ type, initials, size, styles, image }) => {
  return (
    <>
      {type === 'initials' ? (
        <div className={`${styles} ${size} flex justify-center items-center rounded-full`}>
          <span className='text-neutral uppercase'>{initials}</span>
        </div>
      ) : type === 'profile' ? (
        <div className={`${size} relative border rounded-full overflow-hidden`}>
          <img src={image} alt={'image'} className='absolute object-cover w-full h-full' />
        </div>
      ) : null}
    </>
  )
}

export default Avatar
