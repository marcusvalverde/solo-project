import React, { Component } from 'react';
import { connect } from 'react-redux';
// import from child components...
// imported componenets must not be camelcase 
import TotalsDisplay from '../components/TotalsDisplay.jsx';
import CardContainer from '../components/CardContainer.jsx'; 
import CompanyInput from './CompanyInput.jsx'; 
import * as actions from '../actions/actions.js';

const mapDispatchToProps = dispatch => ({
    addStatus: (e) => dispatch(actions.addStatus(e.target.id))
  });
// pulling state as this is one of our stateful components 
// jobs is the name of the reducer idx that is passed to store 
const mapStateToProps = state => ({
    totalApplications: state.jobs.totalApplications,
    totalPhoneScreen:state.jobs.totalPhoneScreen,
    totalOnSite:state.jobs.totalOnSite,
    totalOffers: state.jobs.totalOffers,
    companyList:state.jobs.companyList,
    
});


// Renders <TotalsDisplay /> & <MarketsContainer />
  // Only prop-drill to TotalsDisplay.
  // MainContainer will be a connected comp, so it doesn't need props from here.
class MainContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
        
      <div className="container">
        <div className="outerBox">
          <nav>
          <h1 id="header">Job Hound</h1>
          </nav>
          <div className="static-wrap">
            <TotalsDisplay 
              totalApplications={this.props.totalApplications}
              phoneScreens={this.props.totalPhoneScreen}
              onSite={this.props.totalOnSite}
              offers={this.props.totalOffers}
            />
            < CompanyInput />
            </div>
            < CardContainer
            companyList ={this.props.companyList}
            addStatus ={this.props.addStatus}
            />
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);