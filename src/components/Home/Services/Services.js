import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css'

const Services = ({service}) => {
  return (
    
    <div className="col-md-4 single-service mb-5 text-center p-3">      
        <Link to={`/dashboard`}><img className="img-fluid w-25 rotate" src={service.img} alt="" /></Link>
        <Link to={`/dashboard`}><h3>{service.name}</h3></Link>
        <p>{service.description}</p>
    </div>
  );
};

export default Services;