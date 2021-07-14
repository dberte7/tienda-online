import React from 'react';
import Card from './Card';
import Buttons from '../Buttons'
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { createTheme, ThemeProvider } from '@material-ui/core/styles'
import './Products.css';

const Products = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#f9fbe7',
      },
    },
  })

  return (
    <Grid xs={16} >
      <ThemeProvider theme={theme}>
        <TextField label="Buscar" variant="outlined" />
      </ThemeProvider>
      <Box m={4} />
      <Buttons/>
      <Box m={4} />
      <Card/>
    </Grid>
  );
  }

export default Products;