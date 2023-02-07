import React from 'react';

const Servcom = (props) => {
  return (<>
  <div className="box">
      <img src={props.imgsrc} alt="Apartments"/>
        <h3 className="serv center">{props.title}</h3>
        <p className="ceopara1 center">{props.details}</p>
    </div>
  </>);
};
export default Servcom;
