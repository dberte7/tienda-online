import React from 'react';
import ProductCard from '../Products/ProductCard'
import './Productlist.css';

const Productlist = (props) => {

  const renderProduct = () => props.product.map((product, key) => <ProductCard product={product} key={key} />)

  return (
    <div>
      {renderProduct()}
    </div>
  );
}

export default Productlist;