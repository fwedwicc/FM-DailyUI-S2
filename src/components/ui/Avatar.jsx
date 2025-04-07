import React from 'react'

const Avatar = ({ type, initials, size, outline, status, styles, image }) => {
  return (
    <>
      {type === 'initials' ? (
        <div className={`${styles} ${size} ${outline} relative flex justify-center items-center rounded-full`}>
          <span className='text-neutral uppercase text-sm'>{initials}</span>
          {status && (
            <div className={`absolute size-2 rounded-full ${status === 'online' ? 'bg-green-500' : status === 'idle' ? 'bg-yellow-500' : 'bg-gray-500'} right-[2px] bottom-[2px]`} />
          )}
        </div>
      ) : type === 'profile' ? (
        <div className={`${styles} ${size} ${outline} relative border rounded-full overflow-hidden`}>
          <img src={image} alt={'image'} className='absolute object-cover w-full h-full' />
          {status && (
            <div className={`absolute size-2 rounded-full ${status === 'online' ? 'bg-green-500' : status === 'idle' ? 'bg-yellow-500' : 'bg-gray-500'} right-[2px] bottom-[2px]`} />
          )}
        </div>
      ) : null}
    </>
  )
}

export default Avatar
