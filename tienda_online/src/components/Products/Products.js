import React, { Component } from 'react';
import Card from './Card';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import './Products.css';

class Products extends Component {
  // constructor(props){
    // super(props);
    // this.state = {};
  // }

  // componentWillMount(){}
  // componentDidMount(){}
  // componentWillUnmount(){}

  // componentWillReceiveProps(){}
  // shouldComponentUpdate(){}
  // componentWillUpdate(){}
  // componentDidUpdate(){}

  render() {
    return (
      <Grid xs={16} >
        <TextField label="Buscar"/>
        <Box m={4} />
        <Card/>
      </Grid>
    );
  }
}

export default Products;