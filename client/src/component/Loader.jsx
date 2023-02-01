import React, { useState, useEffect } from 'react';

const Loader = () => {
  const [ spinner, setSpinner ] = useState(false);
  useEffect(() => {
    setTimeout(() => setSpinner(true), 300)
  }, []);
  return !spinner && <div id="preloader">
      <div className="center_div">
          <div className="rot"></div>
          <h1 className= "load">Loading...</h1>
      </div>
  </div>;
};
export default Loader;

