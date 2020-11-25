import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions.js';

const mapDispatchToProps = dispatch => ({
  updateFields: ([name, title, notes, media]) => dispatch(actions.addFields([name,title,notes, media,])),
  addCompany: () => dispatch(actions.addCompany()),
});

class CompanyInput extends Component {
    constructor(props) {
        super(props);
      }
      render() {
        return(
        <div className ="form-box">
        <form onSubmit={(e)=> {
          e.preventDefault();
          //console.log(e.target.childNodes[1].value, e.target.childNodes[4].value, e.target.childNodes[7].value, e.target.childNodes[10].value)
          // since this is a form all the jsx attributes are in a nodelist of childnodes. 
          {this.props.updateFields([ e.target.childNodes[1].value, e.target.childNodes[4].value, e.target.childNodes[7].value, e.target.childNodes[10].value ])}
          {this.props.addCompany()}
        }} className ="form">
        <label htmlFor ="name" className="label" >Company Name</label>
        <input type ="text" id = "companyName" className="input"></input>
        <br></br>
        <label htmlFor ="title" className="label">Job Title </label>
        <input type ="text" id = "jobTitle" className="input"></input>
        <br></br>
        <label htmlFor ="notes" className="label"> Notes </label>
        <input type ="text" id = "notes" className="input"></input>
        <br></br>
        <label htmlFor ="media" className="label">Media  </label>
        <input type ="text" id = "media" className="input"></input>
        <br></br>
        <button>Submit</button>
        </form>
        </div>
        )
      }
}




//export default CompanyInput
export default connect(null, mapDispatchToProps)(CompanyInput);