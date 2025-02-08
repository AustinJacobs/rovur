'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import type { User } from '@supabase/supabase-js'; // Import User type

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null); // ✅ Correctly typed state
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      const { data } = await supabase.auth.getUser();

      if (!data?.user) {
        router.push('/login'); // Redirect if no user
      } else {
        setUser(data.user); // ✅ Now accepts a User object
      }
      if (user) {
        console.log('Success');
      }
      setLoading(false);
    };

    checkAuth();
  }, []);

  if (loading) return <p>Loading...</p>;

  return <>{children}</>;
}
