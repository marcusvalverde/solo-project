import React from "react";

const CardDisplay = (props) =>{
    return (
        <div className="card">
          <strong>Job ID: </strong>{props.companyList.jobId}
          <br></br>
          <strong>Name: </strong>{props.companyList.name}
          <br></br>
          Title: {props.companyList.title}
          <br></br>
          Status: {(props.companyList.status[props.companyList.statusCount])}
          <br></br>
          Notes: {(props.companyList.notes)}
            <br></br>
            Media: {(props.companyList.media)}
                <br></br>
          <button className="card-btn" 
          onClick={props.addStatus}
          id={props.id}
          >
          Change Status
          </button>
        </div>
      )

}

export default CardDisplay