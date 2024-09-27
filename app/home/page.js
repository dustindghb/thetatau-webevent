'use client'
import React from 'react';
import { useAuth } from '../AuthContext';
import { useRouter } from 'next/navigation';
import DrawerAppBar from '../components/DrawerAppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Page() {
  const { user, loading } = useAuth();
  const router = useRouter();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    router.push('/');
    return null;
  }

  return (
    <main>
      <DrawerAppBar />
      <Box sx={{ display: 'flex', p: 3, mt: 25 }}>
        <Box sx={{ flex: '1', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Typography>
            img goes here
          </Typography>
        </Box>
        <Box sx={{ flex: '2', p: 2 }}>
          <Typography variant="h2" sx={{ mb: 2 }}>
            Productivity Resources And A Challenge For You
          </Typography>
          <Typography variant="h5">
            Welcome to the Theta Tau webevent. Included are some productivity resources to help with the beginning of the academic year, to help you find
            what works for you, and to offer more insights to productivity, procrastination, and burnout. <br /><br />
            Included are pieces to a puzzle, as well. First one to solve it wins x. Winner will be contacted after fall.
          </Typography>
        </Box>
      </Box>
    </main>
  );
}