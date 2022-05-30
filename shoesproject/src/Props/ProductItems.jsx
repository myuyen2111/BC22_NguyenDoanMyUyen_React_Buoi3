import React, { Component } from "react";

export default class ProductItems extends Component {
  render() {
    const { item, setStateModal } = this.props;
    return (
      <div className="col-4">
        <div className="card border m-3" 
                    onClick={() => {
                      setStateModal(item);
                    }}
                    data-toggle="modal"
                    data-target="#productModal">
          <img
            src={item.image}
            alt={item.name}
            className="img-fluid"
            onClick={() => {
              setStateModal(item);
            }}
            data-toggle="modal"
            data-target="#productModal"
          />
          <div className="shoes_item p-2">
            <h5>{item.name}</h5>
            <p>$ {item.price}</p>
            <button className="btn btn-dark ">Add to cart <i class="fa-solid fa-cart-shopping"></i></button>
          </div>
        </div>
      </div>
    );
  }
}
