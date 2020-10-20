import React from 'react';
import SideMenu from '../SideMenu/SideMenu';
import logo from '../../../images/logos/logo.png'

const ServiceList = () => {
  return (
    <section>
      <div className="row">
        <div className="col-md-2 col-sm-6 col-12">
          <img style={{ height: '60px', textAlign: 'center', marginLeft: '10%'}} src={logo} alt=""/>
          <SideMenu></SideMenu>
        </div>

        
         
            <div className="d-flex justify-content-center">
              <h1>servicelists</h1>

            </div>
          
        
    </div>
</section>

  );
};

export default ServiceList;