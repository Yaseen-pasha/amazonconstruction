import React from 'react';
import Plan from './Plan';
import Navbar from "./Navbar"
import Sponsers from './Sponsers';
import Auto from './Auto';
import Loader from './Loader';
const Home = () => {
  return (<>
  <Loader/>
  <Navbar
    bg="navbar background"
    nav="navbar background h-nav"
  />
  <section className="header">
        <div className="main">
            <Auto
                name1="WELCOME!!"
                name2="WE BUILD THE WORLD"
            />
            <h1><span className="auto-input">
                </span></h1>
        </div>
        <div className="plan">
            <a href="images/website1.pdf" className="btm download">Click Here To download The Plan</a>
        </div>
        <div className="txt-container">
            <div className="txt-box">
                <div className="amz">
                    <h1>THE AMAZON</h1>
                    <div className="slider">
                        <div>CONSTRUCTION</div>
                        <div>CITY OF ERA</div>
                        <div>NOW</div>
                    </div>
                </div>
                <p className="sub-box">We Converts Your Dream Into Reality</p>
                <a href="/contact" className="btn">Visit Us To Know More</a>
            </div>
            <div className="image2">
                <img src="images/top.jpeg" alt="Engineering"/>
            </div>
        </div>
      </section>
    <Plan 
        city="--PROJECTS IN TUMKUR--"
        imgsrc1 = {"images/new1.jpg"} 
        imgsrc2 = {"images/new2.jpg"} 
        imgsrc3 = {"images/new6.jpg"} 
        imgsrc4 = {"images/new14.jpg"}
    />
    <Plan 
        city="--PROJECTS IN MANGALORE--"
        imgsrc1 = {"images/new12.jpg"} 
        imgsrc2 = {"images/new11.jpg"} 
        imgsrc3 = {"images/new3.jpg"} 
        imgsrc4 = {"images/new90.jpg"}
    />
    <Plan 
        city="--PROJECTS IN BANGALORE--"
        imgsrc1 = {"images/new16.jpg"} 
        imgsrc2 = {"images/new76.jpg"} 
        imgsrc3 = {"images/new8.jpg"} 
        imgsrc4 = {"images/new75.jpg"}
    />
    <Plan 
        city="--SECTIONS--"
        imgsrc1 = {"images/new60.jpg"} 
        imgsrc2 = {"images/new55.png"} 
        imgsrc3 = {"images/new81.jpg"} 
        imgsrc4 = {"images/new70.jpg"}
    />
<hr/>
    
    <section id="client">
        <h2 class="h-secondary center">Our Social Links</h2>
        <div class="sponsors">
    <Sponsers
        social="https://www.instagram.com/yaseen07_/"
        logo="social"
        imgsrc="images/insta.png"
        alt="Instagram"
    />
    <Sponsers
        social="https://www.facebook.com/100019487475399"
        logo="social"
        imgsrc="images/facebook.png"
        alt="FAcebookr"
    />
    <Sponsers
        social=" https://twitter.com/yaseen07_/"
        logo="social"
        imgsrc="images/twitter.png"
        alt="Twitter"
    />
        </div>
    </section>
  </>);
};
export default Home;


