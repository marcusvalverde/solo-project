import React, { Component } from 'react';
import { connect } from 'react-redux';
// import from child components...
import TotalsDisplay from '../components/TotalsDisplay.jsx';
import cardContainer from './cardContainer.jsx';
// pulling state as this is one of our stateful components 
const mapStateToProps = state => ({
    totalCompanies: state.totalCompanies,
    totalPhoneScreen:state.totalPhoneScreen,
    totalOnSite:state.totalOnSite,
    totalOffers: state.totalOffers
  
});

// Renders <TotalsDisplay /> & <MarketsContainer />
  // Only prop-drill to TotalsDisplay.
  // MarketsContainer will be a connected comp, so it doesn't need props from here.
class MainContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="container">
        <div className="outerBox">
          <h1 id="header">Job Hound</h1>
          
            <TotalsDisplay 
              totalCompanies={this.props.totalCompanies}
              phoneScreens={this.props.totalPhoneScreen}
              onSite={this.props.totalOnSite}
              offers={this.props.totalOffers}
            />
            <cardContainer/>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, null)(MainContainer);