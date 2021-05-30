import React from 'react';
import './StartupsCardDetails.css'

const StartupsCardDetails = (props) => {
    const {icon, title, shortDescription, fundStatus, fundCompletation, fundAmount } = props.startupsCard;

    return (
      <div className="wrapper">
        <div className="card-bg rounded-3">
          <div className="startups-card mt-5 border-0">
            <img src={icon} alt="" />
            <h3 className="d-inline">{title}</h3>
            <p>{shortDescription}</p>
            <div className="d-flex justify-content-between">
              <div>
                <h5>{fundStatus}</h5>
              </div>
              <div>
                <p>{fundCompletation}</p>
              </div>
            </div>
            <h5>{fundAmount}</h5>
            <div className="d-flex justify-content-between">
              <div>
                <button className="btn button-brand">Fund Startup</button>
              </div>
              <div>
                <button className="btn button-secondary">Learn More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default StartupsCardDetails;