import React from 'react';

const ClientsFeedbacks = ({feedback}) => {
  return (
    <div className="col-md-4 mb-5">
      <div className="d-flex justify-content-start">
        <div>
            <img style={{width:'80px'}}  className="img-fluid" src={feedback.img} alt="" />
        </div>
        <div className="ml-4 mt-1">
            <h3>{feedback.name}</h3>
            <h5>{feedback.designation}</h5>
        </div>
      </div>
       <p className="mt-4">{feedback.description}</p>
    </div>
  );
};

export default ClientsFeedbacks;