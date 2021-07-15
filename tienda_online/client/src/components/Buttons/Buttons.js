import React, {useState}from 'react'
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Grid from '@material-ui/core/Grid';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
// import { teal } from '@material-ui/core/colors'

const Buttons = (props) => {

  const theme = createTheme({
    palette: {
      primary: {
        main: '#00695f'
      },
    }
  });

  

  return (
    <Grid item xs={12}>
      <ThemeProvider theme={theme}>
        <ButtonGroup aria-label="outlined primary button group" >
          <Button variant="contained">Nombre</Button>
          <Button variant="contained">Precio</Button>
          <Button variant="contained">Rating</Button>
        </ButtonGroup>
      </ThemeProvider>
    </Grid>
  );
}

export default Buttons;