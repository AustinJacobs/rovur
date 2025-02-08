'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { AppSidebar } from '@/components/app-sidebar';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Separator } from '@/components/ui/separator';
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar';
import { supabase } from '@/lib/supabase';
import type { User } from '@supabase/supabase-js'; // Import User type

export default function Dashboard() {
  const [user, setUser] = useState<User | null>(null); // Set the state to accept either User or null
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await supabase.auth.getUser();
      if (!data?.user) {
        router.push('/login'); // Redirect to login if no user is found
      } else {
        setUser(data.user); // Set the user object
      }
    };

    fetchUser();
  }, []);

  return (
    <SidebarProvider>
      <AppSidebar user={user?.email ? { email: user.email } : null} />
      <SidebarInset>
        <header className='flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12'>
          <div className='flex items-center gap-2 px-4'>
            <SidebarTrigger className='-ml-1' />
            <Separator orientation='vertical' className='mr-2 h-4' />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className='hidden md:block'>
                  <BreadcrumbLink href='#'>
                    {/* Building Your Application */}
                    {user ? (
                      <p>{user.email}!</p>
                    ) : (
                      <p>Loading...</p> // Display loading while fetching user
                    )}
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className='hidden md:block' />
                <BreadcrumbItem>
                  <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className='flex flex-1 flex-col gap-4 p-4 pt-0'>
          <div className='grid auto-rows-min gap-4 md:grid-cols-3'>
            <div className='aspect-video rounded-xl bg-zinc-100/50 dark:bg-zinc-800/50' />
            <div className='aspect-video rounded-xl bg-zinc-100/50 dark:bg-zinc-800/50' />
            <div className='aspect-video rounded-xl bg-zinc-100/50 dark:bg-zinc-800/50' />
          </div>
          <div className='min-h-[100vh] flex-1 rounded-xl bg-zinc-100/50 md:min-h-min dark:bg-zinc-800/50' />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
