import React from "react";
import CardDisplay from './cardDisplay.jsx'; 

const CardContainer = props => {
  let cards = []; 
  if (props.companyList) {
    for (let i = 0; i < props.companyList.length; i++) {
      cards.push(<CardDisplay 
        companyList={props.companyList[i]}
        addStatus ={props.addStatus}
        id={props.companyList[i].jobId}
        className= "card"
         />)
    }
  }
  return (
    <div className="card-wrap">
      {cards}
    </div>
  );
  };

  export default CardContainer
