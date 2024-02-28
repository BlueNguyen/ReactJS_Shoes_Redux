import React, { Component } from "react";
import { connect } from "react-redux";
import {
  DECREASE_QUANTITY,
  INCREASE_QUANTITY,
  DELETE_SHOE,
} from "./Redux/constant";

class Cart extends Component {
  handleIncreaseQuantity = (itemId) => {
    this.props.increaseQuantity(itemId);
  };

  handleDecreaseQuantity = (itemId) => {
    this.props.decreaseQuantity(itemId);
  };

  handleDeleteShoe = (itemId) => {
    this.props.deleteShoe(itemId);
  };

  render() {
    console.log(this.props);
    return (
      <div className="col-12">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Amount</th>
              <th>Image</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.props.cart.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>
                    <strong>{item.price * item.amount} $</strong>
                  </td>
                  <td>
                    <button
                      onClick={() => this.handleDecreaseQuantity(item.id)}
                      className="btn btn-dark mr-2"
                    >
                      -
                    </button>
                    <strong>{item.amount}</strong>
                    <button
                      onClick={() => this.handleIncreaseQuantity(item.id)}
                      className="btn btn-warning ml-2"
                    >
                      +
                    </button>
                  </td>
                  <td>
                    <img
                      src={item.image}
                      style={{
                        width: 80,
                      }}
                      alt=""
                    />
                  </td>
                  <td>
                    <button
                      onClick={() => this.handleDeleteShoe(item.id)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    increaseQuantity: (itemId) => {
      dispatch({
        type: INCREASE_QUANTITY,
        payload: itemId,
      });
    },

    decreaseQuantity: (itemId) => {
      dispatch({
        type: DECREASE_QUANTITY,
        payload: itemId,
      });
    },

    deleteShoe: (itemId) => {
      dispatch({
        type: DELETE_SHOE,
        payload: itemId,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
