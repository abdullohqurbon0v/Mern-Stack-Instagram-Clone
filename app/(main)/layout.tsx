'use client'
import React, { useEffect, useState } from 'react'
import Sidebar from './_components/sidebar'
import { ChildProps } from '@/types'
const LayoutPage = ({ children }: ChildProps) => {
  const [mount, setMount] = useState<boolean>(false)

  useEffect(() => {
    setMount(true)
  }, [])
  return (
    <div className='flex space-x-6'>
      <div className='w-[18%]'>
        <Sidebar />
      </div>
      <main className='w-[80%]'>
        {mount && children}
      </main>

    </div>
  )
}

export default LayoutPage