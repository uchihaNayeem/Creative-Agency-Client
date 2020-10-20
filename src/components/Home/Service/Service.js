import React from 'react';
import Services from '../Services/Services';
import icon1 from '../../../images/icons/service1.png'
import icon2 from '../../../images/icons/service2.png'
import icon3 from '../../../images/icons/service3.png'


const Service = () => {

  const serviceData = [
    {
        name: 'Web & Mobile Design',
        description: 'We craft stunning and amazing web UI, using a well drrafted UX to fit your product.',
        img: icon1,
    },
    {
        name: 'Graphic Design',
        description: 'Amazing flyers, social media posts and brand representations that would make your brand stand out.',
        img: icon2,
    },
    {
        name: 'Web Development',
        description: 'With well written codes, we build amazing apps for all platforms, mobile and web apps in general.',
        img: icon3,
    }
]

  return (
    <div>
       
      <h1 className="text-center">Provide Awesome <span style={{color: '#17bc78'}}>Services</span> </h1>

      <div className="custom-container mt-5 pt-5">
            <div className="row">
                {
                    serviceData.map(service => <Services service={service} key={service._id} />)
                }
            </div>
        </div>
        
      
    </div>

  );
};

export default Service;