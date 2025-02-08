'use client';
import { useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';

export default function SignInPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSignIn = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    console.log('Sign in response:', { error, data });
    if (error) {
      alert(error.message);
    } else if (data.session) {
      // User is authenticated, redirect to dashboard
      router.push('/dashboard');
    } else {
      // User is not authenticated, display an error message
      alert('Invalid email or password');
    }
  };

  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <input
        className='border p-2 mb-2'
        type='email'
        placeholder='Email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className='border p-2 mb-2'
        type='password'
        placeholder='Password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        className='bg-blue-500 text-white p-2 rounded'
        onClick={handleSignIn}>
        Sign In
      </button>
    </div>
  );
}
