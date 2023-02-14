import React, {useState}from 'react';
import Navbar from '../Main/Navbar';
import Auto from '../Main/Auto';
import Cons from './Cons';
import Consdata from './Consdata';

const Contact = () => {
  const [user, setUser] = useState({
      name:"",email:"", subject:"", message:""
  });
  let name, value;
  const handleInputs = (e) =>{
    console.log(e)
    name = e.target.name;
    value = e.target.value;

    setUser({...user, [name]:value});
  }
  const PostData = async (e)=>{
    e.preventDefault();
    const {name, email, subject, message} = user;
    const res = await fetch("/contact", {
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        name, email, subject, message
      })
    });

    const data = await res.json();
    if (res.status === 400 || !data){
      window.alert("invalid");
      console.log("invalid")
    }else{
      window.alert("successful");
      console.log("successful")
      setUser({...user, name:"", email:"", subject:"", message:""})
    }
  }
  return (<>
  <section className="sub-header2">
  <Navbar
    bg="navbar"
    nav="navbar h-nav"
  />
  <div className="txtsub-container">
      <h1 className="h-primary center">CONTACT US</h1>
      <div className="main1 center">
      <Auto
        name1="One Of The Top Leading Enginering Construction in  2022."
        name2=""
      />
        </div>
  </div>
  </section>
    <section className="contact">
        <div className="row">


        {
          Consdata.map((data)=>{
            return(
              <Cons
              key={data.id}
              imgsrc ={data.imgsrc}
              alt={data.alt}
              mob={data.mob}
              park={data.park}
              />
            )
          })
        }
        </div>
        <div className="map">
            <p className="city center">--LOCATION--</p>
            <iframe title="myFrame"
                src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d13343.881595811778!2d77.10404901147409!3d13.346846934994867!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1638587418428!5m2!1sen!2sin"
                width="600" height="450" style={{border:0}}allowFullScreen="" loading="lazy">
            </iframe>
        </div>
    </section>
    <hr/>
    <section className="cont-col2">
        <div className="render">
            <div className="thumb">
                <h3 className="nap center">Get In Touch With Us</h3>
            </div>
            <form method="POST">
                <input type="text" name="name" id="name" value={user.name} onChange={handleInputs} placeholder="Enter Your Name" required/>
                <input type="email" name="email" id="email" value={user.email} onChange={handleInputs} placeholder="Enter Email id" required/>
                <input type="text" name="subject" id="subject" value={user.subject} onChange={handleInputs} placeholder="Enter your concern" required/>
                <textarea rows="5" name="message" id="message" value={user.message} onChange={handleInputs} placeholder="Message" required></textarea>
                <a type="submit" id="submit" className="btn center1" onClick={PostData} href="/contact">send message</a>
            </form>
        </div>
    </section>
  </>);
};
export default Contact;