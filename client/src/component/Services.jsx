import React from 'react';
import Navbar from './Navbar';
import Servcom from './Servcom';

const Services = () => {
  return (<>
  <section className="sub-header">
  <Navbar
    bg="navbar"
    nav="navbar h-nav"
  />
        <div className="txtsub-container">
            <h1 className="h-primary center">--OUR SERVICES--</h1>
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
          imgsrc={"images/arch.jpg"}
          title = "Engineering Design"
          details = "To bring the wholesome ideas to reality Engineering designs are the first footsteps."
        />
        <Servcom
          imgsrc={"images/str.jpg"}
          title = "Structural Design"
          details = "In order to ensure the safety and durability of the building constructed, it should get a design related to structural work."
        />
        <Servcom
          imgsrc={"images/cons.jpg"}
          title = "Construction"
          details = "We undergo construction of any structure after finalising the plan and approved by the government body."
        />
        </div>
        <div id="services">
        <Servcom
          imgsrc={"images/new20.jpg"}
          title = "Project Management"
          details = "The management of the project is mission based. It means that the projects organisation end with the end of the project building."
        />
        <Servcom
          imgsrc={"images/new78.jpg"}
          title = "Research Consultation"
          details = "Research field is vast areas where people dealing with projects.So we provide research guidance with regular interactions with the client."
        />
        </div>
    </section>
  </>);
};
export default Services;
