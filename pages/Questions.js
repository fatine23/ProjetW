import React from 'react';
import { Box, FormControl, FormControlLabel, Radio, RadioGroup, Typography } from '@mui/material';

function Question({ id, text, options, onChange, selectedOptionId }) {
  return (
    <Box sx={{ margin: '16px' }}>
      <Typography variant="h5" color="primary" sx={{ marginBottom: '16px'  }}>
        {text}
      </Typography>
      <FormControl component="fieldset">
        <RadioGroup
          aria-label="question-options"
          name={id}
          value={selectedOptionId}
          onChange={(e) => onChange(id, e.target.value)}
        >
          {options.map((option) => (
            <FormControlLabel
              key={option.id}
              value={option.id}
              control={<Radio />}
              label={option.text}
            />
          ))}
        </RadioGroup>
      </FormControl>
    </Box>
  );
}

export default Question;
