import React from "react";
import "./Home.css";
export class White3 extends React.Component{
    render(){
        return <div >

          <div>
            <div className="quick">

            <strong>Quick Details of Gurpreet Chawla</strong>
            </div>
            <div className="dont">
           <strong> Don’t have time to read the whole FAQ’s?
No worries. Have a look at the table given below:</strong>
            </div>

            </div>
            
               <div className="split">
                   <div>
               <img src={process.env.PUBLIC_URL + "/myphoto.png"} 
               alt="pic"
               width="500px"
               className="footerimage"/> 
               </div>
<div>
 <table className="table">
 
 <tr>
   <th  width="10px" align="right">Name</th>
   <td width="80px" align="left">Gurpreet Chawla</td>
   
 </tr>
 <tr>
   <th>Nickname</th>
   <td>Honey</td>
  
 </tr>
 <tr>
   <th>Date of Birth</th>
   <td>30 May 1997</td>
   
 </tr>
 <tr>
   <th>Age</th>
   <td>23 Years</td>
  
 </tr>
 <tr>
   <th>Profession</th>
   <td>Web Developer,Digital Marketer,Entrepreneur</td>
   
 </tr>
 <tr>
   <th>Hometown</th>
   <td>Rudrapur</td>
  
 </tr>
 <tr>
   <th>Nationality</th>
   <td width="50px">Indian (Gurpreet Chawla is Sikh but believes<br/> in oneness)</td>
   
 </tr>
 <tr>
   <th>Eye Color</th>
   <td>Black</td>
  
 </tr>
 <tr>
   <th>Hair Color</th>
   <td>Black</td>
   
 </tr>
 <tr>
   <th>Family<br/>Member</th>
   <td>
       

       <ul>
                  <li>Father’s Name:- Mr. Kulvir Chawla</li>
                 <li>Mother’s Name: Mrs. Inderjeet Chawla</li>
                 <li>Brother’s:- Harpreet Chawla</li>
              </ul>
   </td>
  
 </tr>
 <tr>
   <th>Hobbies</th>
   <td><ul>
     <li>Stocking billionars on web</li>
                  <li>Playing Volleyball </li>
                 <li>Listning Music</li>
                 
              </ul>
      
   </td>
 </tr>
 <tr>
   <th>College</th>
   <td>Galgotias University</td>
  
 </tr>
 <tr>
   <th>Height & Weight</th>
   <td> 5.6 ft 
       <br/>Keeps on changing (Ranges between 75-85)</td>
   
 </tr>


</table> <br/> <br/> <br/> <br/> <br/> <br/>

</div>
</div>
               
                </div>;             
    }
}