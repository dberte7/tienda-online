import React, { useState, useEffect } from 'react';
import ProductList from '../ProductList';
import Buttons from '../Buttons'
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import axios from 'axios';
import './Products.css';

const Products = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#f9fbe7',
      },
    },
  })

  const [input, setInput] = useState('');
  const [product, setProduct] = useState([]);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const keyPress = async (e) => {
    if(e.keyCode === 13) {
      let res = await axios.get(`http://localhost:3001/api/${input}`)
      setProduct(res.data.slice(0, 10));
      console.log(res.data);
    }
  }

  const fetchProducts = async (e) => {
    let res = await axios.get('http://localhost:3001/api')
    setProduct(res.data);
  }

  useEffect(() => {
    setInput('')
  }, [product])

  return (
    <Grid item xs={12} >
      <ThemeProvider theme={theme}>
        <TextField label="Buscar" variant="outlined" onChange={handleChange} onKeyDown={keyPress} value={input}/>
      </ThemeProvider>
      <Box m={4}/>
      <Buttons product={product}/>
      <Box m={4}/>
      <ProductList product={product} onLoad={fetchProducts}/>
    </Grid>
  );
}

export default Products;