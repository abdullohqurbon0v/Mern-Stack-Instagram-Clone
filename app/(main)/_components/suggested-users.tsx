'use client'

import { Separator } from '@/components/ui/separator'
import { search } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const SuggestedUsers = () => {
  const [targetUser, setTargetUser] = useState({
    profileImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Edvard_Hoem.JPG/1200px-Edvard_Hoem.JPG",
    username: "youtube",
    fullName: "Youtube Offisial Company"
  },)


  async function onFollowUser(userId: string) {

  }
  return (
    <div className='py-8'>
      <div className="flex items-center justify-between">
        <Link href={targetUser.username} className='flex items-center space-x-2'>
          <Image src={targetUser.profileImage} alt={targetUser.fullName} width={30} height={30} className="rounded-full w-10 h-10 object-cover" />
          <div className="flex flex-col">
            <p className="text-[13px] font-semibold">{targetUser.username}</p>
            <p className="text-sm">{targetUser.fullName}</p>
          </div>
        </Link>
        <p className='text-sky-600'>Switch</p>
      </div>
      <Separator className="my-3" />
      <div className="flex justify-between items-center">
        <p className='text-sm text-gray-600 my-2'>Suggested for you</p>
        <p className='text-sm text-black font-semibold my-2'>See All</p>
      </div>
      <div className='flex flex-col space-y-5'>
        {search.map(item => (
          <div className='flex justify-between items-center' key={item.username}>
            <Link href={item.username} key={item.username} className="flex space-x-5 items-center">
              <Image src={item.profileImage} alt={item.fullName} width={30} height={30} className="rounded-full h-8 w-8" />
              <div className="flex flex-col">
                <p className="text-[13px] font-semibold">{item.username}</p>
                <p className="text-sm">{item.fullName}</p>
              </div>
            </Link>
            <p className='text-blue-500 font-medium cursor-pointer' onClick={() => onFollowUser}>Follow</p>
          </div>
        ))}
      </div>
    </div >
  )
}

export default SuggestedUsers