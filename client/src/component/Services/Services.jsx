import React from 'react';
import Navbar from '../Main/Navbar';
import Servcom from './Servcom';
import Servcomdata from './Servcomdata';

const Services = () => {
  return (<>
  <section className="sub-header">
  <Navbar
    bg="navbar"
    nav="navbar h-nav"
  />
        <div className="txtsub-container">
            <h1 className="h-primary center">OUR SERVICES</h1>
            <div className="amz center">
                <div className="slider">
                    <div>Construction of High Rise Buildings</div>
                    <div>Structural Design</div>
                    <div>Engineering Services</div>
                </div>
            </div>
        </div>
    </section>
    <section className="services">
        <div id="services">
        <Servcom
          imgsrc={Servcomdata[0].imgsrc} 
          title={Servcomdata[0].title} 
          details={Servcomdata[0].details} 
        />
        <Servcom
          imgsrc={Servcomdata[1].imgsrc} 
          title={Servcomdata[1].title} 
          details={Servcomdata[1].details} 
        />
        <Servcom
          imgsrc={Servcomdata[2].imgsrc} 
          title={Servcomdata[2].title} 
          details={Servcomdata[2].details} 
        />

        </div>
        <div id="services">
        <Servcom
          imgsrc={Servcomdata[3].imgsrc} 
          title={Servcomdata[3].title} 
          details={Servcomdata[3].details} 
        />
        <Servcom
          imgsrc={Servcomdata[4].imgsrc} 
          title={Servcomdata[4].title} 
          details={Servcomdata[4].details} 
        />
        </div>
    </section>
  </>);
};
export default Services;
