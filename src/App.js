import React from "react";
import Header from './Components/Header';
import  {Home}  from "./Components/Home";
import {Sec2} from "./Components/Sec2";
import {White2} from "./Components/White2";
import {BrowserRouter,Route,Switch} from 'react-router-dom';
function App() {
    return(
      <BrowserRouter>
      
        <Header/>
        <switch>
          <Route path="/" exact component={Home.js}/>
          <Route path="/projects" component={Sec2.js}/>
          <Route path="/academics" component={White2.js}/>
         </switch>
         <Home/>
         
         </BrowserRouter>
      
    );
      
}
export default App;