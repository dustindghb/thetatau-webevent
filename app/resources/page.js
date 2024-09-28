'use client'
import React from 'react'

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import { useAuth } from '../AuthContext';

import { useRouter } from 'next/navigation';

export default function Page() {
  const router = useRouter();
  const { user, loading } = useAuth();;

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    router.push('/');
    return null;
  }
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
          img of eye goes here
        </Typography>
        <Button 
          variant="contained" 
          onClick={() => router.push('/home')}
          sx={{
            position: 'absolute',
            top: '16px',
            left: '16px',
            backgroundColor: '#852a1e',
            color: 'white',
            '&:hover': {
              backgroundColor: '#631b11',
            },
            '&:focus': {
              outline: 'none', 
            }
          }} 
          aria-label="Return to main page"
        >
          Return to main page
        </Button>
      </Box>

    </Container>
  )
}

