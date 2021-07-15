import React, { useState, useEffect } from 'react';
import ProductList from '../ProductList';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
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
  const [orderProd, setOrderProd] = useState(false)

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

  const orderByName = () => {
    setOrderProd(!orderProd)
    const newProd = [...product];
    newProd.sort((a,b) => {
        if(a.name < b.name){
            return orderProd ? 1 : -1
        }
        if(a.name > b.name){
            return orderProd ? -1 : 1
        }
        return 0;
    })
    setProduct(newProd)  
  }

  const orderByPrice = () => {
    setOrderProd(!orderProd)
    const newProd = [...product];
    newProd.sort((a,b) => {
        if(a.price < b.price){
            return orderProd ? 1 : -1
        }
        if(a.price > b.price){
            return orderProd ? -1 : 1
        }
        return 0;
    })
    setProduct(newProd)  
  }

  const orderByRelevance = () => {
    setOrderProd(!orderProd)
    const newProd = [...product];
    newProd.sort((a,b) => {
        if(a.relevance < b.relevance){
            return orderProd ? 1 : -1
        }
        if(a.relevance > b.relevance){
            return orderProd ? -1 : 1
        }
        return 0;
    })
    setProduct(newProd)  
  }
  // const fetchProducts = async (e) => {
  //   let res = await axios.get('http://localhost:3001/api')
  //   setProduct(res.data);
  // }

  useEffect(() => {
    setInput('')
  }, [product])

  return (
    <Grid item xs={12} >
      <ThemeProvider theme={theme}>
        <TextField label="Buscar" variant="outlined" onChange={handleChange} onKeyDown={keyPress} value={input}/>
      </ThemeProvider>
      <Box m={4}/>
      <ThemeProvider theme={theme}>
        <ButtonGroup aria-label="outlined primary button group" >
          <Button variant="contained" onClick={orderByName}>Nombre</Button>
          <Button variant="contained" onClick={orderByPrice}>Precio</Button>
          <Button variant="contained" onClick={orderByRelevance}>Rating</Button>
        </ButtonGroup>
      </ThemeProvider>
      <Box m={4}/>
      <ProductList product={product}/>
    </Grid>
  );
}

export default Products;