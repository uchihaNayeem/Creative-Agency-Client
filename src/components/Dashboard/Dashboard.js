import React from 'react';
import logo from '../../images/logos/logo.png'
import SideMenu from './SideMenu/SideMenu';

const Dashboard = () => {
  return (
    <div>
       <section>
            <div className="container-fluid row">
                <div className="col-md-2 col-sm-6 col-12">
                <img style={{ height: '60px', textAlign: 'center', marginLeft: '10%'}} src={logo} alt=""/>
                
                <SideMenu></SideMenu>
                    
                </div>
            </div>    
        </section>
    </div>
  );
};

export default Dashboard;