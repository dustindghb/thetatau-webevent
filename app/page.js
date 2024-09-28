'use client'
import React from 'react';
import { useAuth } from './AuthContext';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';
import { Box } from '@mui/material';
import Image from 'next/image'

import { getAnalytics, isSupported } from "firebase/analytics";


const GoogleAuth = dynamic(() => import('./components/GoogleAuth'), { ssr: false });

function LandingPage({ onAuthentication }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        padding: 4,
        justifyContent: 'flex-start',  // Shifts content to the top
        height: '100vh',
        paddingTop: '10vh',  // Adjust padding to control how far down from the top
      }}
    >
      <Image src="/ThetaTauLogo.png" alt="Theta Tau Logo" width={500}
              height={300} style={{ width: '150px', marginBottom: '24px' }} />
      <h1 style={{ fontSize: '2.5rem', marginBottom: '24px' }}>Welcome to the Fall Theta Tau Webevent</h1>
      <p style={{ fontSize: '1.25rem', marginBottom: '24px' }}>Please sign in with your SCU email to continue</p>
      <GoogleAuth onAuthentication={onAuthentication} />
    </Box>
  );
}

export default function Home() {
  const { user, loading } = useAuth();
  const router = useRouter();

  const handleAuthentication = (authenticatedUser) => {
    if (authenticatedUser && authenticatedUser.email.endsWith('@scu.edu')) {
      router.push('/home');
    } else {
      alert('Please use an @scu.edu email address to sign in.');
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (user) {
    router.push('/home');
    return null;
  }

  return (
    <main>
      <LandingPage onAuthentication={handleAuthentication} />
    </main>
  );
}
