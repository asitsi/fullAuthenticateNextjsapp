"use client"
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const ProtectedRoute = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    const jwtToken = localStorage.getItem('jwtToken');
    if (!jwtToken) {
      router.push('/pages/signin');
    }
  }, []);

  return <>{children}</>;
};

export default ProtectedRoute;
