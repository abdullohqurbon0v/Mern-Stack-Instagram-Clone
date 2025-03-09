"use client";
import React, { ChangeEvent, FormEvent, useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Upload } from "lucide-react";
import axios from "axios";

const CreatePostPage = () => {
  const [description, setDescription] = useState<string>("");
  const [image, setImage] = useState<File | null>(null);
  const [video, setVideo] = useState<File | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setImage(e.target.files[0]);
    }
  };

  const handleVideoChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setVideo(e.target.files[0]);
    }
  };

  const handleSubmitImage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("file", image as File);
    formData.append("upload_preset", "images_preset");

    try {
      const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
      const url = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;

      const res = await axios.post(url, formData);
      console.log("Image uploaded:", res.data.secure_url);
    } catch (error) {
      console.log("Image upload failed:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmitVideo = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("file", video as File);
    formData.append("upload_preset", "video_preset");

    try {
      const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
      const url = `https://api.cloudinary.com/v1_1/${cloudName}/video/upload`;

      const res = await axios.post(url, formData);
      console.log("Video uploaded:", res.data.secure_url);
    } catch (error) {
      console.log("Video upload failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full space-x-10 flex p-16">
      <Dialog>
        <DialogTrigger asChild>
          <div className="w-1/4 min-w-[250px] h-[140px] rounded-2xl bg-gradient-to-br from-purple-500 via-pink-500 to-yellow-400 text-white p-5 shadow-lg cursor-pointer transition transform hover:scale-105 hover:shadow-2xl">
            <h1 className="text-lg font-bold tracking-wide mb-4">
              🚀 Upload a Image
            </h1>
            <Upload />
          </div>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create a new POST</DialogTitle>
            <DialogDescription asChild>
              <form
                onSubmit={handleSubmitImage}
                className="flex flex-col space-y-6 mt-6 text-gray-800"
              >
                <div className="flex flex-col">
                  <label
                    htmlFor="description"
                    className="mb-2 text-sm font-semibold text-gray-700 tracking-wide"
                  >
                    📝 Description Post
                  </label>
                  <Textarea
                    id="description"
                    placeholder="Type your message here..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="text-black p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 transition duration-200"
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="imageUpload"
                    className="mb-2 text-sm font-semibold text-gray-700 tracking-wide"
                  >
                    🖼️ Upload Image
                  </label>
                  <input
                    type="file"
                    id="imageUpload"
                    accept="image/*"
                    multiple
                    onChange={handleImageChange}
                    className="block w-full text-sm text-gray-900 border border-gray-300 rounded-xl cursor-pointer bg-white file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-purple-100 file:text-purple-700 hover:file:bg-purple-200 transition"
                  />
                  <p className="mt-1 text-xs text-gray-500">
                    PNG, JPG or JPEG — Max 5MB
                  </p>
                </div>

                <button
                  type="submit"
                  className="mt-4 bg-purple-600 text-white py-2 px-6 rounded-xl hover:bg-purple-700 transition font-medium"
                >
                  🚀 Submit Post
                </button>
              </form>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
      <Dialog>
        <DialogTrigger asChild>
          <div className="w-1/4 min-w-[250px] h-[140px] rounded-2xl bg-gradient-to-br from-purple-500 via-pink-500 to-yellow-400 text-white p-5 shadow-lg cursor-pointer transition transform hover:scale-105 hover:shadow-2xl">
            <h1 className="text-lg font-bold tracking-wide mb-4">
              🚀 Upload a Video
            </h1>
            <Upload />
          </div>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create a new Post</DialogTitle>
            <DialogDescription asChild>
              <form
                onSubmit={handleSubmitVideo}
                className="flex flex-col space-y-6 mt-6 text-gray-800"
              >
                <div className="flex flex-col">
                  <label
                    htmlFor="description"
                    className="mb-2 text-sm font-semibold text-gray-700 tracking-wide"
                  >
                    📝 Description Post
                  </label>
                  <Textarea
                    id="description"
                    placeholder="Type your message here..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="text-black p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 transition duration-200"
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="videoUpload"
                    className="mb-2 text-sm font-semibold text-gray-700 tracking-wide"
                  >
                    🎬 Upload Video
                  </label>
                  <input
                    type="file"
                    id="videoUpload"
                    accept="video/*"
                    onChange={handleVideoChange}
                    className="block w-full text-sm text-gray-900 border border-gray-300 rounded-xl cursor-pointer bg-white file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-blue-100 file:text-blue-700 hover:file:bg-blue-200 transition"
                  />
                  <p className="mt-1 text-xs text-gray-500">
                    MP4 or WEBM — Max 50MB
                  </p>
                </div>
                <button
                  type="submit"
                  className="mt-4 bg-purple-600 text-white py-2 px-6 rounded-xl hover:bg-purple-700 transition font-medium"
                >
                  {loading ? "Loading..." : "🚀 Submit Post"}
                </button>
              </form>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CreatePostPage;
