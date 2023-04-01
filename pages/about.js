//import Image from 'next/image'
import Navbar from '../pages/Navbar'
import Footer from '../pages/Footer'
import Image from 'next/image'
import Typography from '@mui/material/Typography';
import Box from '@mui/joy/Box';

const team = [
  {
    name: 'Fatine RHANEM',
    role: 'Etudiante Ingénieure à Mines Nancy ',
    photo: '/Images/photo.jpg',
    bio: "Je me présente , je suis Fatine RHANEM , étudiante en deuxième année à Mines Nancy au département informatique. Durant cette année , mon projet s'intéresse aux minorités qui sont mal représentées , par conséquent ,elles ne sont pas inclues dans la prise des décisions .En prenant en compte les données relatives aux minorités, je cherche à comprendre les réalités souvent négligées ou ignorées de ces groupes, et aider à créer des solutions pour répondre à leurs besoins spécifiques. Mon projet peut aider à combler les écarts existants en matière de représentation, de participation et d'accès aux opportunités pour les minorités, et contribuer à bâtir une société plus juste et équitable.  ",
    
  },
  // Ajouter d'autres membres de l'équipe
]

function Team() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Navbar />
        <Box sx={{ display: 'flex', alignItems: 'center', marginLeft: 'auto' , marginBottom:'3'}}>
        <Image src="/Images/photo.jpg" alt="Image 1" width={300} height={400} margin='3' />
     
      <ul>
        {team.map(member => (
          <li key={member.name}>
            <h2>{member.name}</h2>
            <p>{member.role}</p>
            
            <p>{member.bio}</p>

            
          </li>
        ))}
      </ul>
      </Box>

      <Footer />
    </div>
  )
}

export default Team
