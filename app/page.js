'use client'
import React from 'react';
import { useAuth } from './AuthContext';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';

import { getAnalytics, isSupported } from "firebase/analytics";


const GoogleAuth = dynamic(() => import('./components/GoogleAuth'), { ssr: false });

function LandingPage({ onAuthentication }) {
  return (
    <div className="text-center">
      <h1 className="text-5xl font-bold mb-10">Welcome to Our App</h1>
      <p className="text-xl mb-10">Please sign in with your SCU email to continue</p>
      <GoogleAuth onAuthentication={onAuthentication} />
    </div>
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
