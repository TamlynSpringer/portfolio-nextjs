import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import backL from '../../public/back-l.svg'

const BackNav = () => {
  return (
    <nav className='py-4'>
      <Link href='/#background'>
        <Image
          src={backL}
          alt="Light back logo"
          width={'auto'}
          height={100}
        />
      </Link>
    </nav>
  )
}

export default BackNav