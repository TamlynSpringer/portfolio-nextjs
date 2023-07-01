import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import backL from '../../public/back-light.svg'

const BackNav = () => {
  return (
    <nav className='py-4 px-2'>
      <Link href='/#background'>
        <Image
          src={backL}
          alt="Light back logo"
          width={'auto'}
          height={60}
        />
      </Link>
    </nav>
  )
}

export default BackNav