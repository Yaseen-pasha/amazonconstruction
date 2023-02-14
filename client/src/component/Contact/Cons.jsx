import React from 'react';

const Cons = (props) => {
  return (<>
  <span>
      <div className="cont">
          <div className="details">
              <img src={props.imgsrc} alt={props.alt}/>
            </div>
        <h5 className="mob"></h5>
        <a href={props.href} target="_blank"><h5 class="mob">{props.mob}</h5></a>

        <p className="park">{props.park}</p>
        <hr class="contact-hr"/>
      </div>
    </span>
  </>);
};
export default Cons;
