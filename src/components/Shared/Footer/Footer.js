import React from 'react';

const Footer = () => {
  return (
    <div style={{backgroundColor: '#FBD062'}} className = "footer-container">
      <div className = "row m-5">
        <div className="col-md-6 mt-5">
            <h2> <b> Let us handle your <br/> project, professionally.</b> </h2>
            <br/>
            <p className = "text-secondary">With well written codes, we build amazing apps for all <br/> platforms, mobile and web apps in general. </p>
        </div>
        <div className="col-md-6 mt-5">
            <textarea className="form-control" cols="30" rows="2" placeholder="Your Email address"></textarea><br/>
            <textarea className="form-control" cols="30" rows="2" placeholder="Your name/company's name"></textarea><br/>
            <textarea className="form-control" cols="30" rows="10" placeholder="Your message"></textarea><br/>
         <div>
            <button style = {{width: '25%'}} className="btn btn-dark">Send</button>
         </div>
        </div>
    </div>
    <div className="text-center mt-5">
        <small >Copyright {(new Date()).getFullYear()} All Rights Reserved</small>
    </div>
</div>
  );
};

export default Footer;