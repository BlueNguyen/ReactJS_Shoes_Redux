import React, { Component } from "react";
import { connect } from "react-redux";

 class Cart extends Component {
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
            {/* render with map */}
            {this.props.cart.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>
                    <strong>{item.price * item.amount} $</strong>
                  </td>
                  <td>
                    <button className="btn-dark">-</button>
                    <strong>{item.amount}</strong>
                    <button className="btn-warning">+</button>
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
                    <button className="btn-danger">Delete</button>
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

let mapStateToProps = (state) =>{
  return {
    cart: state.cart,
  }
}

export default connect(mapStateToProps)(Cart);
