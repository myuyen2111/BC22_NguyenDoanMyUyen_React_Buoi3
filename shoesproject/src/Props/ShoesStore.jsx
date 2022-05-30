import React, { Component } from "react";
import ListProducts from "./ListProducts";
import data from "../Data/data.json";
import Modal from "./Modal";
export default class ShoesStore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productDetail: {},
    };
  }
  setStateModal = (product) => {
    this.setState({
      productDetail: { ...product },
    });
  };
  render() {
    return (
      <div>
        <header className="store__name">
          <h1 className="m-2 text-center ">Shoes Store</h1>
        </header>
        <div className="list__products">
          <div className="container">
            <ListProducts
              productData={data}
              setStateModal={this.setStateModal}
            ></ListProducts>
            <Modal content={this.state.productDetail}></Modal>
          </div>
        </div>
      </div>
    );
  }
}
