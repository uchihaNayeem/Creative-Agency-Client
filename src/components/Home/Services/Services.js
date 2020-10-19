import React from 'react';

const Services = ({service}) => {
  return (
    <div className="col-md-4 single-service mb-5 text-center p-3">
            <img className="img-fluid w-25" src={service.img} alt="" />
            <h3>{service.name}</h3>
            <p>{service.description}</p>
        </div>
  );
};

export default Services;