/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { posts } from "@/constants";
import { Bookmark, Heart, MessageCircle, Volume2, VolumeX } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState } from "react";
import SuggestedUsers from "../_components/suggested-users";

interface User {
  username: string;
  fullName: string;
  profileImage: string;
}

interface Post {
  user: User;
  description: string;
  createdAt: string;
  postVideo: string;
}

const MainPage: React.FC = () => {
  return (
    <div className="flex justify-around px-6">
      <main className="flex flex-col items-center mt-10 w-[70%]">
        <section className="w-[60%] text-center mb-8">
          <h1 className="text-xl font-semibold">You’re all caught up</h1>
          <p className="text-gray-600">
            You’ve seen all new posts from the past 3 days.
          </p>
        </section>

        {posts.map((item: Post, idx: number) => {
          const videoRef = useRef<HTMLVideoElement | null>(null);
          const [isMuted, setIsMuted] = useState<boolean>(true);

          const toggleMute = () => {
            if (videoRef.current) {
              videoRef.current.muted = !videoRef.current.muted;
              setIsMuted(videoRef.current.muted);
            }
          };

          return (
            <article
              key={idx}
              className="w-full max-w-[550px] bg-white border border-gray-200 rounded-2xl shadow-sm mb-8"
            >
              <header className="flex items-center p-4">
                <Image
                  src={item.user.profileImage}
                  alt={item.user.fullName}
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className="ml-3">
                  <Link
                    href={`/${item.user.username}`}
                    className="text-sm font-medium hover:underline"
                  >
                    {item.user.username}
                  </Link>
                  <p className="text-xs text-gray-500">{item.createdAt}</p>
                </div>
              </header>

              <div className="relative w-full h-[400px] bg-black overflow-hidden rounded-lg">
                <video
                  ref={videoRef}
                  src={item.postVideo}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={toggleMute}
                  className="absolute top-3 right-3 bg-black bg-opacity-40 p-2 rounded-full text-white hover:bg-opacity-70 transition"
                >
                  {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                </button>
              </div>

              <div className="px-4 py-3 space-y-2">
                <div className="flex items-center space-x-4 text-gray-800">
                  <Heart className="cursor-pointer hover:text-red-500 transition-colors" />
                  <MessageCircle className="cursor-pointer hover:text-blue-500 transition-colors" />
                  <Bookmark className="cursor-pointer ml-auto hover:text-yellow-500 transition-colors" />
                </div>
                <p className="font-semibold text-sm">10,000 likes</p>
                <p className="text-sm">
                  <span className="font-semibold mr-1">
                    {item.user.username}
                  </span>
                  {item.description}
                </p>
              </div>
            </article>
          );
        })}
      </main>

      <aside className="w-[22%] mt-10">
        <SuggestedUsers />
      </aside>
    </div>
  );
};

export default MainPage;
