import { createClient } from '@supabase/supabase-js';
import { useState } from 'react';
import Navbar from '../pages/Navbar'
import * as React from 'react';
import { CssVarsProvider, useColorScheme } from '@mui/joy/styles';
import GlobalStyles from '@mui/joy/GlobalStyles';
import CssBaseline from '@mui/joy/CssBaseline';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Checkbox from '@mui/joy/Checkbox';
import FormControl from '@mui/joy/FormControl';
import FormLabel, { formLabelClasses } from '@mui/joy/FormLabel';
import IconButton, { IconButtonProps } from '@mui/joy/IconButton';
import Link from '@mui/joy/Link';
import Input from '@mui/joy/Input';
import Typography from '@mui/joy/Typography';
import { TextField } from '@mui/joy';
import Image from 'next/image'


const supabaseUrl = 'https://hksladnrksbmslbaohko.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhrc2xhZG5ya3NibXNsYmFvaGtvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzgyNjE4MTgsImV4cCI6MTk5MzgzNzgxOH0.iS3ICljGB3hV255Cwn8Yvg5WQAJwBndl3CM_7KwyMaE';
const supabase = createClient(supabaseUrl, supabaseKey);



export default function JoyContactUsSideTemplate() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase.from('contacts').insert([{ name, email, message }]);
    if (error) {
      console.error(error);
    } else {
      console.log(data);
      setName('');
      setEmail('');
      setMessage('');
    }
  };

return (
 
  <CssVarsProvider
    defaultMode="dark"
    disableTransitionOnChange
  >
    <CssBaseline />
    <GlobalStyles
      styles={{
        ':root': {
          '--Collapsed-breakpoint': '769px', // form will stretch when viewport is below `769px`
          '--Cover-width': '40vw', // must be `vw` only
          '--Form-maxWidth': '700px',
          '--Transition-duration': '0.4s', // set to `none` to disable transition
        },
      }}
    />

  
    <Box
      sx={(theme) => ({
        width:
          'clamp(100vw - var(--Cover-width), (var(--Collapsed-breakpoint) - 100vw) * 999, 100vw)',
        transition: 'width var(--Transition-duration)',
        transitionDelay: 'calc(var(--Transition-duration) + 0.1s)',
        position: 'relative',
        zIndex: 1,
        display: 'flex',
        justifyContent: 'flex-end',
        backdropFilter: 'blur(4px)',
        backgroundColor: 'rgba(255 255 255 / 0.6)',
        [theme.getColorSchemeSelector('dark')]: {
          backgroundColor: 'rgba(19 19 24 / 0.4)',
        },
      })}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100dvh',
          width:
            'clamp(var(--Form-maxWidth), (var(--Collapsed-breakpoint) - 100vw) * 999, 100%)',
          maxWidth: '100%',
          px: 2,
        }}
      >
        <Box
          component="header"
          sx={{
            py: 3,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          
          <Image src="/Images/logo1.png" alt="Logo" width={350} height={50} />
              
        </Box>
        <Box
          component="main"
          sx={{
            my: 'auto',
            py: 2,
            pb: 5,
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            width: 400,
            maxWidth: '100%',
            mx: 'auto',
            borderRadius: 'sm',
            '& form': {
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
            },
            [`& .${formLabelClasses.asterisk}`]: {
              visibility: 'hidden',
            },
          }}
        >
          <div>
            <Typography component="h2" fontSize="xl2" fontWeight="lg">
              Contact Us
            </Typography>
            <Typography level="body2" sx={{ my: 1, mb: 3 }}>
              Let&apos;s get started! Please enter your details.
            </Typography>
          </div>
          <form
            onSubmit={handleSubmit}> 
            <FormControl required>
              <FormLabel>Name</FormLabel>
              <Input placeholder="Enter your full name" type="text"
          name="name"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}/>
              
            </FormControl>
            <FormControl required>
              <FormLabel>Email</FormLabel>
              <Input placeholder="Enter your email" type="text"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}/>
              
            </FormControl>
            <FormControl required>
              <FormLabel>Message</FormLabel>
              <Input placeholder="•••••••" name="message"
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          maxRows={4} />
            </FormControl>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              
              
            </Box>
            <Button type="submit" fullWidth>
              Send
            </Button>
          </form>
          
        </Box>
        
      </Box>
      
    </Box>
    <Box
    sx={{
      height: '100%',
          position: 'fixed',
          right: 0,
          top: 0,
          bottom: 0,
          left: 'clamp(0px, (100vw - var(--Collapsed-breakpoint)) * 999, 100vw - var(--Cover-width))',
          transition:
            'background-image var(--Transition-duration), left var(--Transition-duration) !important',
          transitionDelay: 'calc(var(--Transition-duration) + 0.1s)',
          backgroundColor: 'background.level1',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',

     
      
      backgroundImage: 'url(/Images/contact2.png)',
      
     
      
    }}
  />
    
  </CssVarsProvider>
);
}








