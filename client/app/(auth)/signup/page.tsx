"use client";

import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Lock, Mail, User } from "lucide-react";
import useAuthStore from "@/hooks/use-auth-store";
import Link from "next/link";
import { $axios } from "@/http/api";
import { useRouter } from "next/navigation";

const SignUpPage = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const {
    username,
    email,
    password,
    setUsername,
    setEmail,
    setPassword,
    clearFields,
  } = useAuthStore();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await $axios.post("user/create", {
        username,
        email,
        password,
      });
      localStorage.setItem("token", res.data.token);
      router.push("/");
      console.log(res);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    clearFields();
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-md p-6 shadow-lg">
        <h1 className="text-2xl font-bold text-center text-gray-800">
          Sign Up
        </h1>
        <p className="mt-2 text-sm text-center text-gray-600">
          Create a new account to get started.
        </p>
        <CardContent className="mt-6">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Username
              </label>
              <div className="relative mt-1">
                <User className="absolute top-2 left-2 w-5 h-5 text-gray-400" />
                <Input
                  type="text"
                  id="name"
                  placeholder="Enter your username"
                  className="pl-10"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <div className="relative mt-1">
                <Mail className="absolute top-2 left-2 w-5 h-5 text-gray-400" />
                <Input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="pl-10"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="relative mt-1">
                <Lock className="absolute top-2 left-2 w-5 h-5 text-gray-400" />
                <Input
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  className="pl-10"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>
            <Button className="w-full py-2 font-semibold text-white bg-blue-600 hover:bg-blue-700">
              {loading ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                "Sign Up"
              )}
            </Button>
          </form>

          <p className="mt-4 text-sm text-center text-gray-600">
            Already have an account?{" "}
            <Link href="/signin" className="text-blue-600 hover:underline">
              Sign In
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignUpPage;
