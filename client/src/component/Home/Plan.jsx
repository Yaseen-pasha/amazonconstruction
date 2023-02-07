import React from 'react';

const Plan = (props) => {
  return (<>
      <section className="section">
        <div className="paras">
            <p className="city center">{props.city}</p>
            <div className="building">
                <img src={props.imgsrc1} alt="Buildings"/>
                <img src={props.imgsrc2} alt="Buildings"/>
                <img src={props.imgsrc3} alt="Buildings"/>
                <img src={props.imgsrc4} alt="Buildings"/>
            </div>
        </div>
    </section>
  </>);
};
export default Plan;
