'use client'

import React, { ChangeEvent, FormEvent, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Lock, Mail } from 'lucide-react';
import useAuthStore from '@/hooks/use-auth-store';
import Link from 'next/link';

const SignInPage = () => {
  const { email, password, setEmail, setPassword, clearFields } = useAuthStore();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // API CALL
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  useEffect(() => {
    clearFields()
  }, [])

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-md p-6 shadow-lg">
        <h1 className="text-2xl font-bold text-center text-gray-800">Sign In</h1>
        <p className="mt-2 text-sm text-center text-gray-600">
          Welcome back! Please sign in to your account.
        </p>
        <CardContent className="mt-6">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <div className="relative mt-1">
                <Mail className="absolute top-2 left-2 w-5 h-5 text-gray-400" />
                <Input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="pl-10"
                  required
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="relative mt-1">
                <Lock className="absolute top-2 left-2 w-5 h-5 text-gray-400" />
                <Input
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  className="pl-10"
                  required
                  value={password}
                  onChange={handlePasswordChange}
                />
              </div>
            </div>

            <Button className="w-full py-2 font-semibold text-white bg-blue-600 hover:bg-blue-700">
              Sign In
            </Button>
          </form>

          <p className="mt-4 text-sm text-center text-gray-600">
            Don’t have an account?{' '}
            <Link href="/signup" className="text-blue-600 hover:underline">
              Sign up
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignInPage;
