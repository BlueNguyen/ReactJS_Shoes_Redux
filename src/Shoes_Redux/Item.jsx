import React, { Component } from "react";
import { connect } from "react-redux";

 class Item extends Component {
  render() {
    let { image, name } = this.props.data;
    return (
      <div className="col-3">
        <img src={image} className="w-100" alt="" />
        <h6>{name}</h6>
        <button
          onClick={() => {
            this.props.handleClickAdd(this.props.data);
          }}
          className="btn-success"
        >
          Add
        </button>
        <button
          onClick={() => {
            this.props.handleClickView(this.props.data);
          }}
          className="btn-dark"
        >
          View
        </button>
      </div>
    );
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    handleClickView: (shoe) => {
      let action= {
        type: "VIEW_DETAIL",
        payload: shoe,
      };
      dispatch(action)
    },

    handleClickAdd: (shoe) => {
      let action = {
        type: "ADD_SHOE",
        payload: shoe,
      };
      dispatch(action);
    }

  }
}

export default connect(null,mapDispatchToProps)(Item);

// reducer, case "VIEW_DETAILS"
// mapDispatchToProps
// arrow function anfn
