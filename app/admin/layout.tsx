import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import React, { ReactNode } from 'react';
import "@/styles/admin.css";
import Sidebar from '@/components/admin/Sidebar';

const layout = async ({ children }: { children: ReactNode }) => {
  const session = await auth();

  if (!session?.user?.id) redirect('/sign-in');
  return (
    <main className='flex min-h-screen w-full flex-row'>
      <Sidebar session={session} />

      <div className='admin-container'>
        <p>header</p>
        {children}
      </div>
    </main>
  );
};

export default layout;
