import React from 'react';
import Home from "./component/Home/Home"
import Services from "./component/Services/Services"
import About from "./component/About/About"
import Contact from "./component/Contact/Contact"
import Footer from "./component/Main/Footer"
import {Routes, Route} from "react-router-dom"

const App = () => {
  return (<>
  <Routes>
    <Route exact path='/' element={< Home />}></Route>
    <Route exact path='/Services' element={< Services />}></Route>
    <Route exact path='/about' element={< About />}></Route>
    <Route exact path='/contact' element={< Contact />}></Route>
    <Route path='/*' element={< Home />}></Route>
</Routes>
<Footer/>
  </>);
};
export default App;
