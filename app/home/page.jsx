'use client'
import React from 'react';
import { useAuth } from '../AuthContext';
import { useRouter } from 'next/navigation';
import DrawerAppBar from '../components/DrawerAppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Image from 'next/image'

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
      <Box sx={{ display: 'flex', p: 3, pt: 5 }}>
        <Box sx={{ flex: '1', display: 'flex', alignItems: 'center', justifyContent: 'center', pl: 10, pt: 5, flexDirection: 'column' }}>
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
            <Image
              src="/productivityimage.png"
              alt="Productivity Image"
              width={500}
              height={300}
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4, pt: 2 }}>
            <Image
              src="/productivityimage2.jpg" 
              alt="Additional Productivity Image"
              width={500}
              height={300}
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </Box>
        </Box>
        <Box sx={{ flex: '2', p: 10}}>
          <Typography variant="h2" sx={{ mb: 4, mt: 4 }}>
            Productivity Resources And A Challenge For You
          </Typography>
          <Typography variant="h5">
              A common misconception about productivity is that more equals more; rather, productivity is about making the most out of less (limited productive time). <br /><br />
              Here you can find some notes and key takeaways from {' '}
              <Link href="https://www.feelgoodproductivity.com/" target="_blank" rel="noopener noreferrer"  sx={{
                textDecoration: 'underline',
                color: 'black',
                '&:hover': {
                  color: '#dec41f',
                },
              }}>
                Feel Good Productivity
              </Link> by Ali Abdaal and <Link href="https://calnewport.com/deep-work-rules-for-focused-success-in-a-distracted-world/" target="_blank" rel="noopener noreferrer" sx={{
                textDecoration: 'underline',
                color: 'black',
                '&:hover': {
                  color: '#dec41f',
                },
              }}>
              Deep Work
              </Link> by Cal Newport, some strategies, and tools to help with the beginning of the academic year and offer more insights into productivity, procrastination, and burnout. <br /><br />

              Here is a little puzzle if you are down for a challenge and a little competition. <br />
              <span style={{ textDecoration: 'underline' }}>First one to decode the cipher wins x.</span>
          </Typography>
        </Box>
      </Box>
    </main>
  );
}