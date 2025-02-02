'use client'
import React, { useEffect, useState } from 'react'
import Sidebar from './_components/sidebar'
import { ChildProps } from '@/types'
import SuggestedUsers from './_components/suggested-users'

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
      <main className='w-[50%]'>
        {mount && children}
      </main>
      <aside className='w-[22%]'>
        <SuggestedUsers />
      </aside>
    </div>
  )
}

export default LayoutPage