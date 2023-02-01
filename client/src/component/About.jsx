import React from 'react';
import Navbar from './Navbar';
import Auto from './Auto';
const About = () => {
  return (<>
   <section className="sub-header1">
  <Navbar
    bg="navbar"
    nav="navbar h-nav"
  />
  <div className="txtsub-container">
      <h1 className="h-primary center">--ABOUT US--</h1>
      <div className="main1">
      <Auto
        name1="We Are Expert in This Engineering Services Since 2021."
        name2="We Are Expert in This Engineering Services Since 2021."
      />
          <h1><span className="auto-input1"></span></h1>
        </div>
  </div>
  </section>

    <section className="about">
        <p className="para1 center"> <span className="start">THE AMAZON CONSTRUCTION</span> is an Engineering and Construction Company Located in Tumakuru, Karnataka. We are working in Engineering, Structural and Construction Services
            with valuable identity by giving services for 100+ Clients within short period. Since from the day one, we
            are committed to give the best services for our clients. <br/>
            Our team has best Engineers dealing with construction project in every stage by their Skills, Experience,
            Knowledge and Creativity. We have been through many projects by providing both Engineering Services and
            Construction .</p>
        <hr/>
        <div className="thumb">
            <h3 className="gap center">----Founder----</h3>
            <img src="images/founder1.png" alt="CEO"/>
        </div>
        <div className="founder">
            <p className="ceo center">YASEEN PASHA</p>
            <p className="ceopara center">Managing Director and</p>
            <p className="ceopara center">Founder of The Amazon Construction</p>
        </div>
    </section>
  </>);
};
export default About;
