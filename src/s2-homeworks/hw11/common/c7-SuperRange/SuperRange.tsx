import React from 'react';
import { Slider, SliderProps } from '@mui/material';

const SuperRange: React.FC<SliderProps> = (props) => {
  return (
    <Slider
      sx={{
        width: 150, // фиксированная ширина 150px
        color: '#4caf50', // зеленый цвет
        '& .MuiSlider-thumb': {
          backgroundColor: '#4caf50',
          width: 20,
          height: 20,
          '&:hover': {
            boxShadow: '0px 0px 0px 8px rgba(76, 175, 80, 0.16)',
          },
        },
        '& .MuiSlider-track': {
          backgroundColor: '#4caf50', // зеленая полоска
          border: 'none',
          height: 4,
        },
        '& .MuiSlider-rail': {
          backgroundColor: '#e0e0e0',
          height: 4,
        },
      }}
      {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
    />
  );
};

export default SuperRange;
