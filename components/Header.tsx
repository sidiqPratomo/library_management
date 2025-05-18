'use client';
// import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { Button } from './ui/button';
import { signOut } from '@/auth';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Session } from 'next-auth';
import { getInitials } from '@/lib/utils';

const Header = ({ session }: { session: Session }) => {
  const pathName = usePathname();

  return (
    <div className='my-10 flex justify-between gap-5'>
      <Link href='/'>
        <Image src='/icons/logo.svg' alt='logo' width={40} height={40} />
      </Link>

      <ul className='flex flex-row items-center gap-8'>
        <li>
          <Link href='/my-profile'>
            <Avatar>
              <AvatarFallback className='bg-amber-100'>
                {getInitials(session?.user?.name || 'IN')}
              </AvatarFallback>
            </Avatar>
          </Link>
          {/* <form
            action={async () => {
              "use server";

              await signOut();
            }}
            className="mb-10"
          >
            <Button>Logout</Button>
          </form> */}
        </li>
      </ul>
    </div>
  );
};

export default Header;
