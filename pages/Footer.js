import Link from "next/link";
import styles from "../styles/Footer.module.css";
import { Container, Box, TextField, Button } from '@mui/material';
import { createClient } from "@supabase/supabase-js";
import { useState } from "react";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey)

const Footer = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      console.error(error);
    } else {
      console.log(data);
    }
  };

  return (
    <Box component="footer" sx={{ py: 10 , backgroundColor:'#f5f5f5' }}>
    <div className={styles.container}>
      <h2 className={styles.text}>
        Built with{" "}
        <Link href="https://nextjs.org/">
          <span className={styles.stack}>Nextjs</span>
        </Link>{" "}
        and{" "}
        <Link href="https://supabase.com/">
          <span className={styles.stack}>Supabase</span>
        </Link>
      </h2>


      <Box sx={{ backgroundColor: '#bdbdbd', p: 4 }}>
      <Container maxWidth="md">
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <TextField
            label="Email"
            variant="outlined"
            type="email"
            value={email}
            onChange={handleEmailChange}
            sx={{ mb: 2 }}
          />
          <TextField
            label="Password"
            variant="outlined"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            sx={{ mb: 2 }}
          />
          <Button variant="contained" color="primary" onClick={handleFormSubmit}>
            S&apos;inscrire à la newsletter
          </Button>
        </Box>
      </Container>
    </Box>

      
    </div>
    </Box>
  );
};

export default Footer;