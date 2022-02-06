import React from 'react';

const Cons = (props) => {
  return (<>
  <span>
      <div className="cont">
          <div className="details">
              <img src={props.imgsrc} alt={props.alt}/>
            </div>
        <h5 className="mob">{props.mob}</h5>
        <p className="park">{props.park}</p>
        <hr/>
      </div>
    </span>
  </>);
};
export default Cons;
