'use client'
import { posts } from '@/constants'
import { Bookmark, Heart, MessageCircle } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import SuggestedUsers from '../_components/suggested-users'

const MainPage = () => {
  return (
    <div className='flex justify-around'>
      <div className='flex flex-col items-center justify-center mt-10'>
        <div className='w-[50%] text-center'>
          <h1 className='text-xl font-medium'>You&apos;re all caught up</h1>
          <p className='text-gray-700'>You &apos;ve seen all new posts from the past 3 days.</p>
        </div>
        <div className=''>
          {posts.map((item, idx) => (
            <div key={idx} className='min-w-[500px] h-[600px] '>
              <div className='flex flex-col space-y-5'>
                <div className='flex items-center space-x-2'>
                  <Image src={item.user.profileImage} alt={item.user.fullName} width={30} height={30} className="rounded-full w-10 h-10 object-cover" />
                  <Link href={item.user.username} className="flex flex-col">
                    <p className="font-semibold">{item.user.username}</p>
                  </Link>
                  <p className='text-sm text-slate-600'>{item.createdAt}</p>
                </div>
                <Image src={item.PostImage} alt={item.description} width={500} height={400} className='object-cover max-h-[400px] min-x-[400px] rounded-lg' />
                <div className=''>
                  <div className='flex items-center space-x-5'>
                    <Heart className='cursor-pointer' />
                    <MessageCircle className='cursor-pointer' />
                    <Bookmark className='cursor-pointer' />
                  </div>
                  <p className='font-semibold text-xs'>10, 000 likes</p>
                  <p className='text-xs'><span className='font-semibold'>{item.user.username} </span> {item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
      <aside className='w-[22%]'>
        <SuggestedUsers />
      </aside>
    </div>
  )
}

export default MainPage