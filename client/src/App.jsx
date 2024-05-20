import React from 'react';
import Home from "./component/Home"
import Services from "./component/Services"
import About from "./component/About"
import Contact from "./component/Contact"
import Footer from "./component/Footer"
import {Routes, Route} from "react-router-dom"

const App = () => {
  return (<>
  <Routes>
    <Route exact path='/' element={< Home />}></Route>
    <Route exact path='/Services' element={< Services />}></Route>
    <Route exact path='/about' element={< About />}></Route>
    <Route exact path='/contact' element={< Contact />}></Route>
</Routes>
<Footer/>
  </>);
};
export default App;