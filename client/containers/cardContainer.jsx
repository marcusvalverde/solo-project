import React from "react";
import {connect} from "react-redux"
import * as actions from '../actions/actions';

const cardContainer = props => {

    return (
      <div>
        <strong>Create New Market</strong>
        <br></br>
        <strong>Location: </strong>
        {/* when the input changes in our text field invoke anon func to update newLocation state */}
        <input id='input'type="text"
          //onChange={e => props.updateNewLocation(e.target.value)}
></input>
        <button> Add Market </button>
        <hr></hr>
      </div>
    )
  };

  export default cardContainer
