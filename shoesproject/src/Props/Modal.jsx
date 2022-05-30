import React, { Component } from "react";

export default class Modal extends Component {
  render() {
    const { content } = this.props;

    if (!content) {
      return null;
    }
    return (
      <div
        className="modal fade"
        id="productModal"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title ">Product Information</h3>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-4">
                  <h5>Product Image</h5>
                  <img src={content.image} width="250px" alt="" />
                </div>
                <div className="col-8">
                  <div className="information ml-4 mr-4">
                    <h5 className="text-danger">{content.name}</h5>
                    <p className="text-success">${content.price}</p>
                    <h5 className="text-dark">Description: </h5>
                    <p>{content.description}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-dark"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
