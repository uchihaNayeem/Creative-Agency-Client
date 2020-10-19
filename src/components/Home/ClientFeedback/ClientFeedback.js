import React from 'react';
import client1 from '../../../images/customer-1.png'
import client2 from '../../../images/customer-2.png'
import client3 from '../../../images/customer-3.png'
import ClientsFeedbacks from '../ClientsFeedbacks/ClientsFeedbacks';

const ClientFeedback = () => {

  const clientData = [
    {
        name: 'Nash Patrik',
        designation: 'CEO, Manpol',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat',
        img: client1,
    },
    {
        name: 'Miriam Barron',
        designation: 'CEO, Manpol',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat',
        img: client2,
    },
    {
        name: 'Bria Malone',
        designation: 'CEO, Manpol',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat',
        img: client3,
    },
]
  return (
    <div className="custom-container mt-5">
      <h1 className="m-5 text-center"><span style={{color: '#171B4E'}}>Clients</span> <span style={{color: '#7AB259'}}>Feedback</span></h1>
      <div className="row">
        {
            clientData.map(feedback => <ClientsFeedbacks feedback={feedback} key={feedback._id} />)
        }
      </div>
  </div>
  );
};

export default ClientFeedback;