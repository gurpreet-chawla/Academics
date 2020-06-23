import React from "react";

export class Sec1 extends React.Component{
    render(){

        let Popupclose = () => this.setState({Popup:false})
        return <div >
            
              <div id="ft">
              <div id="image1">
                   <img src={process.env.PUBLIC_URL + "/hello1.png"} 
                   alt="pic"
                   className="img"/><br/>
                    <button type="button" class="btn btn-danger btn-lg" id="linkedin" onclick={()=>this.setState({Popup:true})}>
                                Check Me Out On <strong>LINKEDIN</strong>
                    </button>
                   
               </div>

               <div id="image2">
                   <img src={process.env.PUBLIC_URL + "/guru1.png"} 
                   alt="pic"
                   className="myimg"/>
                </div>
               </div>
               
               
               
                </div>;             
    }
}