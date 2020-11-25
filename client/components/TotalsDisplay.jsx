import React from "react"; 
function TotalsDisplay(props) {
    return <div className = 'totalBox'>
    <p className='total'> Total Applications sent </p> <p className ="number">{props.totalApplications}</p>
    <p className='total'> Total Phone Screen </p> <p className ="number">{props.phoneScreens}</p>
    <p className='total'> Total On Sites </p> <p className ="number">{props.onSite}</p>
    <p className='total'> Total Offers </p> <p className ="number"> {props.offers}</p>
    </div>
    
  }

  export default TotalsDisplay