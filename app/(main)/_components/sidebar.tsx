'use client'

import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetClose, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { search } from "@/constants";
import { Compass, Heart, Home, Search, User } from "lucide-react";
import { Settings } from 'lucide-react'
import Image from "next/image";
import Link from 'next/link'
import React, { FormEvent, useState } from 'react'

const Sidebar = () => {
  const [foundedUsers, setFoundedUsers] = useState([])
  const [query, setQuery] = useState('')

  const handleSearch = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    // API CALL
  }

  const onRemoveRecnt = (): void => {

  }

  const notifications = [
    { id: 1, message: "You have a new follower!" },
    { id: 2, message: "Your post was liked by @john_doe" },
  ];

  return (
    <div className='fixed h-full border-r border-gray-300 w-[18%] py-10 px-3'>
      <div className='flex h-full flex-col justify-between '>
        <div className='flex flex-col space-y-6'>
          <Link href={'/'}>
            <div className='flex items-center cursor-pointer transition-all rounded-xl space-x-4 hover:bg-secondary py-3 px-4'>
              <Home />
              <p>Home</p>
            </div>
          </Link>
          <Sheet>
            <SheetTrigger asChild>
              <div className='flex items-center cursor-pointer transition-all rounded-xl space-x-4 hover:bg-secondary py-3 px-4'>
                <Search />
                <p>Search</p>
              </div>
            </SheetTrigger>
            <SheetContent side={'left'}>
              <SheetHeader>
                <SheetTitle>Search</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col space-y-6">
                <form onSubmit={handleSearch}>
                  <Input type="search" value={query} onChange={(e) => setQuery(e.target.value)} id="name" className="w-full" />
                </form>
                <div>
                  <Separator className="mb-3" />
                  <div className="flex items-center justify-between">
                    <p>Recent</p>
                    <p className="text-blue-600 cursor-pointer" onClick={onRemoveRecnt}>Clear All</p>
                  </div>
                  <div className="flex flex-col space-y-6">
                    {search.map(item => (
                      <Link href={item.username} key={item.username} className="flex space-x-5 items-center">
                        <Image src={item.profileImage} alt={item.fullName} width={30} height={30} className="rounded-full h-8 w-8" />
                        <div className="flex flex-col">
                          <p className="text-[13px] font-semibold">{item.username}</p>
                          <p className="text-sm">{item.fullName}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
          <Sheet>
            <SheetTrigger>
              <div className="flex items-center cursor-pointer transition-all rounded-xl space-x-4 hover:bg-secondary py-3 px-4">
                <Heart />
                <p>Notifications</p>
              </div>
            </SheetTrigger>
            <SheetContent
              side="left"
              className=" bg-white shadow-lg border rounded-r-xl transition-transform"
            >
              <SheetHeader className="border-b p-4">
                <SheetTitle className="text-lg font-semibold">Notifications</SheetTitle>
              </SheetHeader>
              <div className="p-4 space-y-3">
                {notifications.length > 0 ? (
                  notifications.map((notification) => (
                    <div
                      key={notification.id}
                      className="flex items-center p-3 bg-gray-50 rounded-lg shadow-sm hover:bg-gray-100 transition"
                    >
                      <p className="text-sm text-gray-800">{notification.message}</p>
                    </div>
                  ))
                ) : (
                  <p className="text-sm text-gray-500">No new notifications yet.</p>
                )}
              </div>
            </SheetContent>
          </Sheet>

          <Link href={'/explore'}>
            <div className='flex items-center cursor-pointer transition-all rounded-xl space-x-4 hover:bg-secondary py-3 px-4'>
              <Compass />
              <p>Explore</p>
            </div>
          </Link>
          <Link href={'/user'}>
            <div className='flex items-center cursor-pointer transition-all rounded-xl space-x-4 hover:bg-secondary py-3 px-4'>
              <User />
              <p>Profile</p>
            </div>
          </Link>
        </div>
        <div className='flex items-center cursor-pointer transition-all rounded-xl space-x-4 hover:bg-secondary py-3 px-4'>
          <Settings />
          <p>Settings</p>
        </div>
      </div>
    </div>
  )
}

export default Sidebar