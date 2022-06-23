import React, { useState, useRef } from 'react';
import './HomePage.scss';
import Navbar from './components/Navbar';
import Button from '@mui/material/Button';
import Carousel from './components/Carousel';
import ContactModal from './components/ContactModal';
import MapImg from '../../images/Map/Map.png';
import EmailIcon from '@mui/icons-material/Email';

const HomePage = () => {
  const [modalStatus, setModalStatus] = useState(false);
  const contactUsSectionRef = useRef();

  const address = 'https://g.page/couriercoffeeroasters?share';

  const handleModalClose = () => setModalStatus(false);

  const handleModalOpen = () => setModalStatus(true);

  return (
    <div className="mainContainer">
      <Navbar handleModal={handleModalOpen} contactUsSectionRef={contactUsSectionRef} />
      <div className="mainContent">
        <section className="mainSection">
          <h2 className="logoText">Courier Coffee Roasters</h2>
          <span className="descText">Cafe in Portland</span>
          <Button
            variant="contained"
            onClick={handleModalOpen}
            className="btnModal"
            sx={{
              color: 'white',
              py: {
                md: '20px',
                sm: '14px',
              },
              px: {
                md: '32px',
                sm: '16px',
              },
              fontSize: {
                md: '24px',
                sm: '18px',
              },
              fontWeight: '400',
            }}
          >
            Contact Us
          </Button>
          <Carousel />
        </section>
        <section className="mapSection" ref={contactUsSectionRef}>
          <span className="sectionTitle">CONTACT US</span>
          <a href={address} target="_blank" rel="noopener noreferrer">
            <img src={MapImg} alt="map" className="mapImg" />
          </a>
        </section>
        <section className="infoSection">
          <div className="infoWrapper">
            <span className="infoTitle">Address</span>
            <a href={address} target="_blank" rel="noopener noreferrer">
              <Button
                variant="contained"
                sx={{
                  color: '#fff',
                  py: {
                    md: '20px',
                    sm: '14px',
                  },
                  px: {
                    md: '32px',
                    sm: '16px',
                  },
                  fontSize: {
                    md: '24px',
                    sm: '18px',
                  },
                  fontWeight: '400',
                }}
              >
                GET DIRECTIONS
              </Button>
            </a>
            <a href={address} rel="noopener noreferrer" target="_blank">
              <span className="addressString">923 SW Oak St Portland, OR 97205 USA</span>
            </a>
            <div className="emailAddress">
              <EmailIcon />
              <a href="mailto: all.couriercoffeeportland@gmail.com" className="emailAddressString">
                all.couriercoffeeportland@gmail.com
              </a>
            </div>
          </div>
          <div className="infoWrapper">
            <span className="infoTitle">Business Hours</span>
            <div className="hoursWrappper">
              <span className="hourItem">Mon: 9:00 AM – 2:00 PM</span>
              <span className="hourItem">Tue: Closed</span>
              <span className="hourItem">Wed: Closed</span>
              <span className="hourItem">Thu: Closed</span>
              <span className="hourItem">Fri: 9:00 AM – 2:00 PM</span>
              <span className="hourItem">Sat: 9:00 AM – 2:00 PM</span>
              <span className="hourItem">Sun: 9:00 AM – 2:00 PM</span>
            </div>
          </div>
        </section>
      </div>
      <ContactModal status={modalStatus} handleClose={handleModalClose} />
    </div>
  );
};

export default HomePage;
