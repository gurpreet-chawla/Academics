import React from "react";
import {Sec1} from "./Sec1";
import {White1} from "./White1";
import {Sec2} from "./Sec2";
import {White2} from "./White2";
import {Sec3} from "./Sec3";
import {White3} from "./White3";
import "./Home.css";
export class Home extends React.Component{
    render(){
        return <div>
                <div className="section1" width="100%"><Sec1/> </div>
                <div>  <White1/></div>
                <div className="section2">     <Sec2/></div>
                <div> <White2/> </div>
                <div className="section3"> <Sec3/>   </div>
                <div>   <White3/> </div>
                </div>              
    }
}