"use client";

import { posts } from "@/constants";
import { IPost } from "@/types";
import Image from "next/image";
import { useState } from "react";

const ExplorePage = () => {
  const [hoveredPost, setHoveredPost] = useState<IPost | null>(null);

  const onShowPostData = (item: IPost) => {
    setHoveredPost(item);
  };

  const onHidePostData = () => {
    setHoveredPost(null);
  };

  return (
    <div className="px-32 py-24">
      <div className="grid grid-cols-4 gap-5">
        {posts.map((item, idx) => (
          <div
            key={idx}
            className="relative"
            onMouseEnter={() => onShowPostData(item)}
            onMouseLeave={onHidePostData}
          >
            <Image
              src={item.PostImage}
              alt={item.description}
              width={400}
              height={400}
              className="object-cover w-96 h-96 rounded-md cursor-pointer hover:scale-95 transition-all hover:opacity-95"
            />
            {hoveredPost && hoveredPost.id === item.id && (
              <div className="absolute z-10 p-4 rounded-md top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                <h3 className="text-2xl text-white font-bold">
                  {item.totalLikes}
                </h3>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExplorePage;
