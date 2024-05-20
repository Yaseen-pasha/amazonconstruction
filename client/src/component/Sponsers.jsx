import React from 'react';
import { NavLink } from 'react-router-dom';

const Sponsers = (props) => {
  return (<>
            <NavLink to={props.social} target="_blank">
            <img className={props.logo} src={props.imgsrc} alt={props.alt} /></NavLink>
  </>);
};
export default Sponsers;