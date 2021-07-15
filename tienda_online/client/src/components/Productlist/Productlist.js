import React from 'react';
import ProductCard from '../Products/ProductCard'
import './ProductList.css';

const ProductList = (props) => {

  const renderProduct = () => props.product.map((product, key) => <ProductCard product={product} key={key} />)

  return (
    <div>
      {renderProduct()}
    </div>
  );
}

export default ProductList;