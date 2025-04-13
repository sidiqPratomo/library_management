import type { Metadata } from 'next';
// import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import localFont from 'next/font/local';
import { ReactNode } from 'react';
import { ToastViewport, ToastProvider } from '@/components/ui/toast';

const ibmPlexSans = localFont({
  src: [
    { path: '/fonts/IBMPlexSans-Regular.ttf', weight: '400', style: 'normal' },
    { path: '/fonts/IBMPlexSans-Medium.ttf', weight: '500', style: 'normal' },
    { path: '/fonts/IBMPlexSans-SemiBold.ttf', weight: '600', style: 'normal' },
    { path: '/fonts/IBMPlexSans-Bold.ttf', weight: '700', style: 'normal' },
  ],
});

const bebasNeue = localFont({
  src: [{ path: '/fonts/BebasNeue-Regular.ttf', weight: '400', style: 'normal' }],
  variable: '--bebas-neue',
});

export const metadata: Metadata = {
  title: 'BookWise',
  description: 'BookWise is a university library management.',
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang='en'>
      <body className={`${ibmPlexSans.className} ${bebasNeue.variable} antialiased`}>
        <ToastProvider>
          {children}
          <ToastViewport />
        </ToastProvider>
      </body>
    </html>
  );
};

export default RootLayout;
