import React from 'react';
import { createTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function Footer() {
  const classes = useStyles();

  const theme = createTheme({
    palette: {
      primary: {
        main: '#f9fbe7',
      },
    },
  })

  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme}>
        <Pagination count={5} color='primary'/>
      </ThemeProvider>
    </div>
  );
}