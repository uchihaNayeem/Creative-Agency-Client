import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faPlus, faUser, faFile, } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


const SideMenu = () => {
  return (
    <div style={{border: '1px solid red'}}>
            <div>
                <Link to="/serviceList">
                    <FontAwesomeIcon icon={faFile} /> <span>Service list</span>
                </Link>
            </div>
            
            <div>
                <Link to="/serviceAdd">
                    <FontAwesomeIcon icon={faPlus} /> <span>Add Service</span>
                </Link>
            </div>
            <div>
                <Link to="/addAdmin">
                    <FontAwesomeIcon icon={faUser} /> <span>Make Admin</span>
                </Link>
            </div>

        </div>

        
  );
};

export default SideMenu;