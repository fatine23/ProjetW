//import Link from 'next/link';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Image from 'next/image'
import Box from '@mui/joy/Box';
import Link from '@mui/material/Link';


import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme({
  palette: {
    primary: {
      main: '#9e9e9e',
    },
  },
});

const Navbar = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static" >
    <Toolbar>
    <Image src="/Images/logo1.png" alt="Logo" width={350} height={50} />
    <Box sx={{ display: 'flex', alignItems: 'center', marginLeft: 'auto' }}>
    
        <Button variant="contained" sx={{ m: 2 }} size="small" color="inherit">
           <Link href="../" underline="none">
            Accueil
            </Link>  
        </Button>

        <Button variant="contained" sx={{ m: 2 }} size="small" color="inherit">
           <Link href="../about" underline="none">
           A propos
            </Link>  
        </Button>
       
        
        <Button variant="contained" sx={{ m: 2  }} size="small" color="inherit">
           <Link href="../contact" underline="none">
           Contact
            </Link>  
        </Button>
        
    </Box>
        
          
          
        
      

    </Toolbar>
    

    </AppBar>
      
  
    </ThemeProvider>
    
  );
};

export default Navbar;



<AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Mon Site Web
        </Typography>
        <Button component={Link} to="../" color="inherit">
          Accueil
        </Button>
        <Button component={Link} to="../about" color="inherit">
          À propos
        </Button>
        <Button component={Link} to="../contact" color="inherit">
          Contact
        </Button>
        <Button component={Link} to="../signup" variant="contained" color="secondary">
          Sign 
        </Button>
      </Toolbar>
    </AppBar>