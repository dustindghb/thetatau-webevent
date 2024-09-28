'use client'
import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import dynamic from 'next/dynamic';
import { useAuth } from '../AuthContext';
import Image from 'next/image'

import { useRouter } from 'next/navigation';

const FirebaseForm = dynamic(() => import('../components/FirebaseForm'), { ssr: false });

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
      <Box sx={{ flex: '1', display: 'flex', alignItems: 'center', justifyContent: 'center', pl: 10, pt: 5, flexDirection: 'row' }}>
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
              <Image
                width={500}
                height={300}
                src="/eyesigil.jpg"
                alt="sigil1"
                style={{ maxWidth: '75%', height: 'auto' }}
              />
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4, pt: 2 }}>
              <Image
                width={500}
                height={300}
                src="/eyesigil2.jpg" 
                alt="sigil2"
                style={{ maxWidth: '80%', height: 'auto' }} 
              />
            </Box>
        </Box>
      <Box sx={{ p: 5 }}>
        <Typography variant="h5" component="h1" sx={{ mb: 2 }}>
          &quot;keys should be the key .. do not worry, they have near vision .. where is the third?&quot;
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

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          
        </AccordionSummary>
        <AccordionDetails sx={{ fontFamily: 'monospace' }} >
          A key for you 978-0590450874
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{ fontFamily: 'monospace' }}
        >
          II.
        </AccordionSummary>
        <AccordionDetails>
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4, pt: 2 }}>
              <Image
                width={500}
                height={300}
                src="/blurry.png" 
                alt="II"
                style={{ maxWidth: '100%', height: 'auto' }} 
              />
            </Box>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          
        </AccordionSummary>
        <AccordionDetails sx={{ fontFamily: 'monospace' }} >
          I. blocks <br></br>
          III. bulletin board <br></br>
          IV. cubbies
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          
        </AccordionSummary>
        <AccordionDetails sx={{ fontFamily: 'monospace', letterSpacing: '0.5em' }}>
              L A N E C Y A T C U <br />
              Q F S K S A W R H A <br />
              A P J U L E J E M Z <br />
              E R X L I R U S G C <br />
              R A H R A H D N A S <br />
              L V A T L E V I D Y <br />
              S M C W O Y O M F E <br />
              I P E H H N N A S K <br />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4-content"
          id="panel4-header"
        >
          
        </AccordionSummary>
        <AccordionDetails>
          <ol>
            <li style={{ marginBottom: '8px' }}>seal on ball</li>
            <li style={{ marginBottom: '8px' }}>key</li>
            <li style={{ marginBottom: '8px' }}>popsicle stick</li>
            <li style={{ marginBottom: '8px' }}>pair of black arrows</li>
            <li style={{ marginBottom: '8px' }}>sn6ke eyes</li>
            <li style={{ marginBottom: '8px' }}>uncaged bird</li>
            <li style={{ marginBottom: '8px' }}>lighthouse</li>
            <li style={{ marginBottom: '8px' }}>sailboat</li>
            <li style={{ marginBottom: '8px' }}>rubber band</li>
            <li style={{ marginBottom: '8px' }}>expert</li>
            <li style={{ marginBottom: '8px' }}>lion</li>
            <li style={{ marginBottom: '8px' }}>lock</li>
          </ol>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          
        </AccordionSummary>
        <AccordionDetails>
          nine tails in the night <br></br>
          eight black shadows, one moon white <br></br>
          they dance, fearless fight <br></br>
          <br></br>
          the number of odd ones out make it right
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          
        </AccordionSummary>
        <AccordionDetails>
          C zkyjvvgn jar ecd r adufmlv az xwztgguf evswczi niyhs by <br></br>
            wydjxkzy jmsgxy hmhsnpee sbbol lug ap h kpwlybz-jduyg. <br></br>
            Ov uguyw oehy pghijq lvdl xtyy hvi fas ynugt, vgv dycf <br></br>
            hr mymqx mpk wyalrw as dymeo kfw bhgjl: &quot; Mb igsc, gl&apos;s <br></br>
            zhyi xcwgsp rzel&apos;kl ran eylvr -- Yobw vrxs rqy xpwea yvsxm fq lrr! &quot; <br></br>
            Oafg&apos;a lq quul km kal moik qqtl lljicx yefbqt ayyf wubui mhp iyznw?  
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          
        </AccordionSummary>
        <AccordionDetails>
            Cdj fovo kw j ofpcvc dmaz, goh hmhjryzfh xs eecym. <br></br>
            Cb xlg jraqx, hli jywpjl dpeeib w rcfvst sw w xnorh. <br></br>
            Vln hfly pephb es zfsrv so pmy upeuw, bpjjg feeo jji zcvxj, <br></br>
            iwpwubgif fh eym car oseesa wqeii jji vm mqkxjpnps qevmwc iubgi <br></br>
            kx bajm divhsaijx pijqvn eym sciu. Lhlsihmdgh, cdj vwvh nsbax <br></br>
            uzp wgrba tz wxw uyantobhmpkb, qsnwp xji qqsnsv&apos;w pic pwudw mv
            epwnhgx xji vewlcv.
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          
        </AccordionSummary>
        <AccordionDetails>
            Weq lbkjev egvr vrrugkrt mno owchf. Mye izqrg afrvm yiam neot, <br></br>
            dyg mye umcv uhish ecw ytqy. Wpg qrg sejip xb izlh bji exrr <br></br>
            kwtwr&apos;l codl qr gav fuwpx uhish; ejia myeb pch gkrnvngvexu <br></br>
            iw inp, gav rhit lbkje iwwrq bk edaa kbbeg, dvf lr lrig bq <br></br>
            xux wrrvv lbkje: &quot;Wwkp ngu szmcx! Gav mrzg cbn krb, bji zhie <br></br>
            bww lnov tr awjsxi.&quot; Wkmp xuxp rhielrw khh bczrke, tkm qaaxi sdqf; <br></br>
            &quot;Aur jhrcnh V yfdgmt xjh youagw javn L kcver rlo wp sax? Z hdl <br></br>
            digmvr jqxi gav oqm cpy mye iwqh vm naqbu, eaw tuw bji gaiodb <br></br>
            qj gav owpgv; nm cedav M farlo pczr mye kqfi.&quot; Ngu sr pg hvw. <br></br>
        </AccordionDetails>
      </Accordion>
      <Box sx ={{pt: 5, justifyContent: 'center' }}>
        <FirebaseForm /> 
      </Box>
     
    </Container>
  )
}
