import React from 'react';
import './sponsor.css'
import slack from '../../../images/logos/slack.png';
import google from '../../../images/logos/google.png';
import uber from '../../../images/logos/uber.png';
import netflix from '../../../images/logos/netflix.png';
import airbnb from '../../../images/logos/airbnb.png';

const Sponsor = () => {
  return (
    <section className = "container mb-3">
            <div className="d-flex justify-content-center m-5 ">
                <div className="col-md-3 d-flex justify-content-center">
                  <img className='pic-size' src={slack} alt=""/>
                </div>

                <div className="col-md-3 img-fluid d-flex justify-content-center">
                  <img className='pic-size' src={google} alt=""/>
                </div>

                <div className="col-md-3 img-fluid d-flex justify-content-center">
                  <img className='pic-size' src={uber} alt=""/>
                </div>

                <div className="col-md-3 img-fluid d-flex justify-content-center">
                  <img className='pic-size' src={netflix} alt=""/>
                </div>

                <div className="col-md-3 img-fluid d-flex justify-content-center">
                  <img className='pic-size' src={airbnb} alt=""/>
                </div>
            </div>    
   </section>
  );
};

export default Sponsor;