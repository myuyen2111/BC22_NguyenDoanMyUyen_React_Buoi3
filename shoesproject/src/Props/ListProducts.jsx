import React, { Component } from 'react';
import ProductItems from './ProductItems';
export default class ListProducts extends Component {
  render() {
    const { productData, setStateModal} = this.props;
    console.log(productData);
    return (
      <div className="shoes__list mt-4">
        <div className="row">
          {productData.map((product) => {
            return <ProductItems key={product.id} item={product} setStateModal={setStateModal} ></ProductItems>;
          })}
        </div>
      </div>
    );
  }
}
