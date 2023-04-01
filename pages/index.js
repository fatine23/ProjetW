/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head'
import Navbar from '../pages/Navbar'
import Footer from '../pages/Footer'
//import "../styles/globals.css";
import { CssVarsProvider } from '@mui/joy/styles';
import Button from '@mui/joy/Button';
import { Grid } from "@mui/joy";
import Image from 'next/image'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useRouter } from 'next/router';
import Container from '@mui/joy';





  const Home = () => {
    const router = useRouter();
    const handleFormSubmit = () => {
      // Logic for handling form submission
      router.push('/formulaire');
    };
  return ( 
    <>
      
      <Head>
        <title>Accueil - Données et minorités</title>
        <meta name="description" content="L'importance de prendre en compte les données relatives aux minorités dans la prise de décisions." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Navbar />
      
      <Box
        sx={{
          backdropFilter: 'blur(10px)',
          backgroundColor: 'rgba(255, 255, 255, 0.5)',
          padding: '2rem',
          
        }}
      >
      
        <h1>L'importance de prendre en compte les données relatives aux minorités dans la prise de décisions</h1>
        <Box sx={{ border: '1px solid gray', padding: 2,margin:3 , backgroundColor:'#e0e0e0' }}>
      <p>Les données sont omniprésentes dans notre vie quotidienne et jouent un rôle crucial dans la prise de décisions, que ce soit en entreprise, en politique ou dans d'autres domaines. Cependant, ces données ne sont pas toujours représentatives de l'ensemble de la population, en particulier des minorités.</p>
        <p>Cela peut entraîner des biais dans la prise de décisions, qui peuvent avoir des conséquences négatives sur les minorités. Il est donc important de prendre en compte les données relatives aux minorités pour créer des politiques publiques plus équitables.</p>
    </Box>
        
        <Typography variant="h4" margin={2}>Statistiques sur la représentation des minorités dans les données:</Typography>
        
       
      
      <Grid container spacing={2} backgroundColor ='#424242'>
      <Box component="span" sx={{ p: 2, border: '1px solid #ccc', borderRadius: '5px', margin: 2 ,width: 350,
        height: 200,
        bgcolor: '#9e9e9e','&:hover': {
          backgroundColor: 'primary.body',
          opacity: [0.9, 0.8, 0.7],
        },
        display: 'flex',
       }}>
      
        <Typography variant="subtitle1">
        Seulement 23% des entreprises technologiques ont des femmes dans leur équipe d'ingénieurs.Le manque de diversité dans les équipes d'ingénieurs peut limiter la créativité et l'innovation, ainsi que perpétuer les stéréotypes de genre. 
        </Typography>
      
    </Box>
      
      
      <Image src="/Images/img3.png" alt="Image 1" width={200} height={200} margin='2' />

      <Box component="span" sx={{  width: 300,
        height: 250,
        bgcolor: '#9e9e9e','&:hover': {
          backgroundColor: 'primary.body',
          opacity: [0.9, 0.8, 0.7],
        }
       
        , border: '1px solid #ccc', borderRadius: '5px', margin: 2,display: 'flex',}}>
      
        <Typography variant="subtitle1">
        Selon une étude menée par l'Organisation mondiale de la santé en 2019, les femmes et les filles sont souvent sous-représentées dans les études de recherche sur la santé sexuelle et reproductive, ce qui peut conduire à des politiques de santé publique mal adaptées à leurs besoins.
        </Typography>
      
    </Box>
      
      

      
      
      <Image src="/Images/img2.jpg" alt="Image 2"  width={200} height={200} margin='2' />
      <Box component="span" sx={{ p:0.1,  border: '1px solid #ccc', borderRadius: '5px', margin: 2,width: 350,
        height: 200,
        bgcolor: '#9e9e9e','&:hover': {
          backgroundColor: 'primary.body',
          opacity: [0.9, 0.8, 0.7],
        },
        display: 'flex',
        }}>
      
        <Typography >
        Selon une étude menée par l'Organisation internationale du travail, les travailleurs migrants sont souvent exclus des statistiques officielles du marché du travail, ce qui les rend invisibles aux yeux des décideurs politiques et des chercheurs.
        </Typography>
      
    </Box>

      
      <Grid >
      <Image src="/Images/img1.jpg" alt="Image 1"  width={200} height={200} margin='2'  />
      </Grid>
    </Grid>

<Typography variant="h4" margin={2}>
Exemples concrets d'utilisation de données pour créer des politiques publiques plus équitables
    </Typography>
        
  
      
        <Grid container spacing={2}>
  <Grid item xs={12} sm={6}>
    <Box sx={{ border: '1px solid gray', padding: 2 , backgroundColor:'#ffe0b2' }}>
      <p>L'utilisation de données sur le genre pour évaluer les écarts de salaire entre les hommes et les femmes et mettre en place des politiques pour y remédier.</p>
    </Box>
  </Grid>
  
  <Grid item xs={12} sm={6}>
    <Box sx={{ border: '1px solid gray', padding: 2 ,backgroundColor:'#ffe0b2' }}>
      <p>L'utilisation de données sur l'origine éthnique pour étudier les disparités dans l'accès à l'éducation et mettre en place des programmes pour y remédier.</p>
    </Box>
  </Grid>
  
  <Grid item xs={12} sm={10}>
    <Box sx={{ border: '1px solid gray', padding: 2,marginLeft:10 , marginBottom:3 ,backgroundColor:'#ffe0b2' }}>
      <p>L'utilisation de données sur différents groupes de population pour évaluer les besoins en matière de santé.</p>
    </Box>
  </Grid>
  
</Grid>  

<Box sx={{ p: 2, border: '1px solid #ccc', borderRadius: 4 , margin :3  , backgroundColor:'#ffab40'}}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Merci de remplir le formulaire ci-dessous si vous êtes intéressés par ce projet :
      </Typography>
      <Box sx={{backgroundColor:'#9e9e9e' , borderRadius: 2, display: 'inline-block' }}>
      <Button variant="contained" color="primary" onClick={handleFormSubmit}>
        Lancer le formulaire
      </Button>
      </Box>
      
    </Box>
      
    
     

 </Box> 
 <Footer />
   
    </>
    

  )
}



export default Home;
























