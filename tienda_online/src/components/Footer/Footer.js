import React from 'react'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Box from '@material-ui/core/Box';

const Footer = () => {
  return (
    <div className="Footer">
      <Grid item xs={12}>
      <Box m={8} />
        <ButtonGroup aria-label="outlined primary button group">
          <Button>Anterior</Button>
          <Button>Siguiente</Button>
        </ButtonGroup>
      </Grid>
    </div>
  )
}

export default Footer