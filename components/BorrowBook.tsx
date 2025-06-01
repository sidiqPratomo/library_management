'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { borrowBook } from '@/lib/actions/book';
import { toast } from 'sonner';

interface Props {
  userId: string;
  bookId: string;
  borrowingEligibility: {
    isEligible: boolean;
    message: string;
  };
}

const BorrowBook = ({
  userId,
  bookId,
  borrowingEligibility: { isEligible, message },
}: Props) => {
  const router = useRouter();
  const [borrowing, setBorrowing] = useState(false);

  const handleBorrowBook = async () => {
    if (!isEligible) {
      toast.error('Error', {
        description: message,
        position: 'top-right',
        style: {
          backgroundColor: '#FF4D4D', // Warna latar belakang merah muda
          color: 'white', // Teks menjadi putih
        },
      });
    }

    setBorrowing(true);

    try {
      const result = await borrowBook({ bookId, userId });

      if (result.success) {
        toast.success('Success', {
          description: 'Book borrowed successfully',
          position: 'top-right',
          style: {
            backgroundColor: '#28A745', // Warna latar belakang hijau
            color: 'white', // Teks menjadi putih
          },
        });

        router.push('/');
      } else {
        toast.error('Error', {
          description: result.error,
          position: 'top-right',
          style: {
            backgroundColor: '#FF4D4D', // Warna latar belakang merah muda
            color: 'white', // Teks menjadi putih
          },
        });
      }
    } catch (error) {
      toast.error('Error', {
        description: 'An error occurred while borrowing the book',
        position: 'top-right',
        style: {
          backgroundColor: '#FF4D4D', // Warna latar belakang merah muda
          color: 'white', // Teks menjadi putih
        },
      });
    } finally {
      setBorrowing(false);
    }
  };

  return (
    <Button
      className='book-overview_btn'
      onClick={handleBorrowBook}
      disabled={borrowing}
    >
      <Image src='/icons/book.svg' alt='book' width={20} height={20} />
      <p className='font-bebas-neue text-xl text-dark-100'>
        {borrowing ? 'Borrowing ...' : 'Borrow Book'}
      </p>
    </Button>
  );
};
export default BorrowBook;
