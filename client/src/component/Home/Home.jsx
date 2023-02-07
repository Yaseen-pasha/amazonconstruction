import React from 'react';
import Plan from './Plan';
import Navbar from "../Main/Navbar"
import Sponsers from './Sponsers';
import Auto from '../Main/Auto';
import Loader from '../Main/Loader';
import Plandata from './Plandata';
import Sponsersdata from './Sponsersdata';

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
    {/* <Plan 
        city="--PROJECTS IN TUMKUR--"
        imgsrc1 = {Plandata[0].imgsrc1} 
        imgsrc2 = {Plandata[0].imgsrc2}
    /> */}

    {
        Plandata.map((data)=>{
            return(
                <Plan 
                key = {data.id}
                city = {data.city} 
                imgsrc1 = {data.imgsrc1}  
                imgsrc2 = {data.imgsrc2}  
                imgsrc3 = {data.imgsrc3}  
                imgsrc4 = {data.imgsrc4} 
                />
            )
        })
    }



<hr/>
    
    <section id="client">
        <h2 class="h-secondary center">Our Social Links</h2>
        <div class="sponsors">

        {
            Sponsersdata.map((data)=>{
                return(
                    <Sponsers
                    key={data.id}
                    social={data.social}
                    imgsrc={data.imgsrc}
                    alt={data.alt}
                    />
                )
            })
        }
        </div>
    </section>
  </>);
};
export default Home;


