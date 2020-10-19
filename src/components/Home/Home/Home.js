import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Carousal from '../Carousal/Carousal';
import ClientFeedback from '../ClientFeedback/ClientFeedback';
import Header from '../Header/Header';
import Service from '../Service/Service';
import Sponsor from '../Sponsor/Sponsor';

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Sponsor></Sponsor>
      <Service></Service>
      <Carousal></Carousal>
      <ClientFeedback></ClientFeedback>
      <Footer></Footer>

    </div>
  );
};

export default Home;