import Image from 'next/image'
import React from 'react'

const Loading = () => {
  return (
    <div className='h-full w-full flex flex-col gap-y-4 justify-center items-center'>
      <Image 
        src={'https://img.freepik.com/free-vector/letter-colorful-gradient-logo-design_474888-2226.jpg?w=826&t=st=1707038077~exp=1707038677~hmac=6db6456ba969a4926f6b748a7d898feec853332e582dad0107046461829b4c20'}
        alt='logo'
        width={120}
        height={120}
        className='animate-pulse duration-700'
      />
    </div>
  )
}

export default Loading