

import { useState } from 'react';
import Question from '../pages/Questions'
import "../styles/questionCSS.module.css";
import { createClient } from "@supabase/supabase-js";
import Typography from '@mui/material/Typography';
import Box from '@mui/joy/Box';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);

export default function Questionnaire() {
    const [answers, setAnswers] = useState({});
  
    const handleOptionChange = (questionId, optionId) => {
        console.log(`Question ${questionId} selected option ${optionId}`);
      setAnswers((prevState) => ({
        ...prevState,
        [questionId]: optionId,
      }));
    };
  
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      const { error } = await supabase.from("answers").insert([answers]);
  
      if (error) {
        console.log(error);
      } else {
        setAnswers({});
        alert("Your answers have been saved!");
      }
    };
  
    return (
      <form onSubmit={handleSubmit}>
       <Typography variant="h4" textAlign="center" mt={4}>
       Votre avis compte : Formulaire pour les minorités.
        </Typography>
      <Box sx={{ border: '1px solid gray', padding: 2,margin:3 ,backgroundColor:'#e0e0e0' }}>
      <Question
          id="q1"
          text="1.	Dans quelle mesure pensez-vous que la prise en compte des données relatives aux minorités aurait un impact positif sur la société ?"
          options={[
            { id: "1", text: "Très important" },
            { id: "2", text: "Important" },
            { id: "3", text: "Peu important" },
            { id: "4", text: "Pas du tout important" },
          ]}
          onChange={handleOptionChange}
          selectedOptionId={answers["q1"]}
        />
      </Box>
      <Box sx={{ border: '1px solid gray', padding: 2,margin:3 ,backgroundColor:'#e0e0e0' }}>
      <Question
          id="q2"
          text="2.	Pensez-vous que la prise en compte des données relatives aux minorités permettrait de réduire les inégalités et les discriminations dans la société ?"
          options={[
            { id: "1", text: "Tout à fait d'accord" },
            { id: "2", text: "Plutôt d'accord" },
            { id: "3", text: "Plutôt en désaccord" },
            { id: "4", text: "Tout à fait en désaccord" },
          ]}
          onChange={handleOptionChange}
          selectedOptionId={answers["q2"]}
        />
      </Box>
        
      <Box sx={{ border: '1px solid gray', padding: 2,margin:3 ,backgroundColor:'#e0e0e0' }}>
      <Question
          id="q3"
          text="3.	Comment pensez-vous que la prise en compte des données relatives aux minorités pourrait aider à améliorer l'accès à l'éducation, à la santé et aux services sociaux ?"
          options={[
            { id: "1", text: "En améliorant la compréhension des besoins et des défis spécifiques des minorités" },
            { id: "2", text: "En garantissant une répartition plus équitable des ressources" },
            { id: "3", text: "En favorisant la participation et la représentation des minorités dans les processus décisionnels" },
            
          ]}
          onChange={handleOptionChange}
          selectedOptionId={answers["q3"]}
        />
      </Box>

      <Box sx={{ border: '1px solid gray', padding: 2,margin:3 ,backgroundColor:'#e0e0e0' }}>
      <Question
          id="q4"
          text="4.	Selon vous, quelles seraient les principales difficultés ou obstacles à la prise en compte des données relatives aux minorités dans la société ? "
          options={[
            { id: "1", text: "Manque de ressources ou de moyens " },
            { id: "2", text: "Manque de données précises ou fiables sur les minoritéss" },
            { id: "3", text: "Manque de volonté politique" },
            
          ]}
          onChange={handleOptionChange}
          selectedOptionId={answers["q4"]}
        />
      </Box>
       
      <Box sx={{ border: '1px solid gray', padding: 2,margin:3 ,backgroundColor:'#e0e0e0' }}>
      <Question
          id="q5"
          text="5.	Comment pensez-vous que les minorités pourraient être impliquées dans la collecte et l'analyse des données les concernant ? "
          options={[
            { id: "1", text: "En les impliquant activement dans les processus de collecte et d'analyse de données  " },
            { id: "2", text: "En formant des représentants des minorités pour collecter et analyser les données " },
            { id: "3", text: "En favorisant la participation des minorités à des enquêtes et des études " },
          ]}
          onChange={handleOptionChange}
          selectedOptionId={answers["q5"]}
        />
      </Box>
       
      <Box sx={{ border: '1px solid gray', padding: 2,margin:3 ,backgroundColor:'#e0e0e0' }}>
      <Question
          id="q6"
          text="6.	Pensez-vous que la prise en compte des données relatives aux minorités pourrait avoir un impact sur la représentation politique des minorités ? "
          options={[
            { id: "1", text: "Oui, cela pourrait favoriser une meilleure représentation politique des minorités" },
            { id: "2", text: "Non, cela n'aurait pas d'impact significatif sur la représentation politique des minorités " },
          ]}
          onChange={handleOptionChange}
          selectedOptionId={answers["q6"]}
        />
      </Box>
       
      <Box sx={{ border: '1px solid gray', padding: 2,margin:3 ,backgroundColor:'#e0e0e0' }}>
      <Question
          id="q7"
          text="7.	Comment pensez-vous que la prise en compte des données relatives aux minorités pourrait contribuer à une meilleure compréhension et à une plus grande sensibilisation aux enjeux auxquels font face les minorités dans la société ?  "
          options={[
            { id: "1", text: "En mettant en évidence les défis et les besoins spécifiques des minorités " },
            { id: "2", text: "En suscitant une réflexion et un dialogue sur les questions de justice sociale et d'égalité " },
            { id: "3", text: "En favorisant une meilleure visibilité et une meilleure représentation des minorités dans les médias et la culture populaire  " },
          ]}
          onChange={handleOptionChange}
          selectedOptionId={answers["q7"]}
        />
      </Box>
       
      
      



        <button type="submit" >Envoyer</button>
</form>
    );
    }
