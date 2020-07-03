import React from 'react';
import "./Menu.css";

import Menu from './Menu';



import { BrowserRouter, Route } from 'react-router-dom';
import Academics from './Academics';
import Projects from './Projects';

function App() {
  return (
    <BrowserRouter>
    
      <Menu />  
      <switch>
       <Route path="/" exact component={Home} />
      
       <Route path="/academics" component={Academics} />
       <Route path="/projects" component={Projects} />
       
       </switch>
    
    </BrowserRouter>
  );
}

const Home = () => {

  return (
     <div> 
        <div className="section1" width="100%"> <div id="ft">
              <div id="image1">
                   <img src={process.env.PUBLIC_URL + "/hello1.png"} 
                   alt="pic"
                   className="img"/><br/>
                    <button type="button" class="btn btn-danger btn-lg" id="linkedin">
                                Check Me Out On <strong>LINKEDIN</strong>
                    </button>
               </div>

               <div id="image2">
                   <img src={process.env.PUBLIC_URL + "/guru1.png"} 
                   alt="pic"
                   className="myimg"/>
                </div>
               </div>  </div>


                <div> <div className="split" id="split2">
                            <div className="cen">
                                  “CENTRED BRAIN GURPREET CHAWLA"<br/><br/> <pre className="wor">“WORKING WITH<br/>PASSION, WHILE<br/>EXPLORING THE <br/>          WEB” </pre>
                                  <button type="button" id="con" className="btn btn-danger btn-lg"><strong>CONTACT ME</strong></button>
                            </div>
                            

                            <div className="hi">
                                <strong> Hi I’m Gurpreet Chawla Engineer ,digital marketer and graphic designer.I am highly motivated with full
                                    of consistancy towards my work. <br/><br/>
                                    
                                </strong>

                             I started my life as a perfectly imperfect child with many flaws.
                             I am the kind of person who loves learning and was never concerned about the end result.
                             In my free time, I love investing, dancing and playing cricket. 
                             Money is something that doesn’t fascinate me but the impact and difference that could be created in someone’s life because of me.
                            </div>
                    </div>    </div>




                <div className="section2">        
                    <div className="lets" >
                         LET’S GET INTO MY LENGTH OF PROJECTS
                    </div>

                  <div className="pro"> <span className="project">
                   <strong id="font"> <a>Quize System </a></strong>
                   
                     </span>
                     <span className="project">
                     <strong id="font"> <a>Ecommerce Site</a></strong>
                     </span>
                     
                       </div> </div>


                <div><div className="edu">
                   <strong> MY EDUCATIONAL <br/>ATTAINMENTS </strong>
                    </div>

                    
                     <div className="split">
                    <div id="block1" class="alert alert-light" role="alert">
                      

                  <h2 className="sn">  <svg class="bi bi-book" width="1em" height="1em" viewBox="0 0 16 16" fill="danger" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M3.214 1.072C4.813.752 6.916.71 8.354 2.146A.5.5 0 0 1 8.5 2.5v11a.5.5 0 0 1-.854.354c-.843-.844-2.115-1.059-3.47-.92-1.344.14-2.66.617-3.452 1.013A.5.5 0 0 1 0 13.5v-11a.5.5 0 0 1 .276-.447L.5 2.5l-.224-.447.002-.001.004-.002.013-.006a5.017 5.017 0 0 1 .22-.103 12.958 12.958 0 0 1 2.7-.869zM1 2.82v9.908c.846-.343 1.944-.672 3.074-.788 1.143-.118 2.387-.023 3.426.56V2.718c-1.063-.929-2.631-.956-4.09-.664A11.958 11.958 0 0 0 1 2.82z"/>
  <path fill-rule="evenodd" d="M12.786 1.072C11.188.752 9.084.71 7.646 2.146A.5.5 0 0 0 7.5 2.5v11a.5.5 0 0 0 .854.354c.843-.844 2.115-1.059 3.47-.92 1.344.14 2.66.617 3.452 1.013A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.276-.447L15.5 2.5l.224-.447-.002-.001-.004-.002-.013-.006-.047-.023a12.582 12.582 0 0 0-.799-.34 12.96 12.96 0 0 0-2.073-.609zM15 2.82v9.908c-.846-.343-1.944-.672-3.074-.788-1.143-.118-2.387-.023-3.426.56V2.718c1.063-.929 2.631-.956 4.09-.664A11.956 11.956 0 0 1 15 2.82z"/>
</svg> Blooming Dales' Modern School</h2>
<pre><h2> <strong>  HIGHER SECONDARY SCHOOL</strong></h2></pre>


<h4>
My school days were very good.I had enjoyed a lot each and
every moment of my school days.
I was very naughty that time.I was an average student so i
had to pay my maximum time to study and not worried about
anything like future,career etc.
I think that was the golden period of my life.I can never
forget that days</h4>
                    </div>
                    <img src={process.env.PUBLIC_URL + "/10-class.png"} 
                     alt="pic"
                    
                     className="img1"/>
                    </div>

                    <div className="split">
                    <div id="block2" class="alert alert-light" role="alert">

                    <h2 className="sn">  <svg class="bi bi-book" width="1em" height="1em" viewBox="0 0 16 16" fill="danger" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M3.214 1.072C4.813.752 6.916.71 8.354 2.146A.5.5 0 0 1 8.5 2.5v11a.5.5 0 0 1-.854.354c-.843-.844-2.115-1.059-3.47-.92-1.344.14-2.66.617-3.452 1.013A.5.5 0 0 1 0 13.5v-11a.5.5 0 0 1 .276-.447L.5 2.5l-.224-.447.002-.001.004-.002.013-.006a5.017 5.017 0 0 1 .22-.103 12.958 12.958 0 0 1 2.7-.869zM1 2.82v9.908c.846-.343 1.944-.672 3.074-.788 1.143-.118 2.387-.023 3.426.56V2.718c-1.063-.929-2.631-.956-4.09-.664A11.958 11.958 0 0 0 1 2.82z"/>
  <path fill-rule="evenodd" d="M12.786 1.072C11.188.752 9.084.71 7.646 2.146A.5.5 0 0 0 7.5 2.5v11a.5.5 0 0 0 .854.354c.843-.844 2.115-1.059 3.47-.92 1.344.14 2.66.617 3.452 1.013A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.276-.447L15.5 2.5l.224-.447-.002-.001-.004-.002-.013-.006-.047-.023a12.582 12.582 0 0 0-.799-.34 12.96 12.96 0 0 0-2.073-.609zM15 2.82v9.908c-.846-.343-1.944-.672-3.074-.788-1.143-.118-2.387-.023-3.426.56V2.718c1.063-.929 2.631-.956 4.09-.664A11.956 11.956 0 0 1 15 2.82z"/>
</svg> Galgotias University</h2>
<pre><h2> <strong>  BACHELORS IN MECHANICAL<br/>   ENGINEERING </strong></h2></pre>

<h4>My college journey has been a roller coaster ride. 
I have tons of sweet and bitter stories and experiences which might take a whole night
 of narration and would still not end.
 But, what’s more important is the lessons and learnings we get out of those incidents</h4>
                     </div>
                     <img src={process.env.PUBLIC_URL + "/college.jpeg"} 
                        alt="pic"
                      
                        className="img2"/>
                        </div>  </div>





                <div className="section3"> <div className="split">
                         <div>
                              <div className="asked">
                                    <strong>  Frequently Asked <br/> Questions</strong>
                              </div>
                              <div className="line">
                              I share whatever new I learn and most of the questions are answered down<br/> below.<br/>

                              Still, if you have any other questions, send me and I would try my best to get <br/>back  to you.
                              </div>
                          </div>
                          <div>
                                  <img src={process.env.PUBLIC_URL + "/frontphoto.png"} 
                                  alt="pic"
                                  width="700px"
                                  className="fp"/>
                          </div>


                          <span className="faq1">
                             <div className="q"> <h2> Who is Gurpreet Chawla ?</h2>
                             Gurpreet Chawla a Engineer, Web Developer,Graphic designer and Digital Marketer.He is highly motivated with full of consistant toward his work also he is the member of sofodel Pvt.Ldt which provide complete digital marketing solution.</div>
                              <div className="r"> <h2> What is Gurpreet Chawla’s qualification?</h2>
                              Gurpreet Chawla did his schooling from Blooming Dales' Modern School & Bachelors in Mechanical Engineering from Galgotias University.

Later did Digital Marketing  from Lapaas Institute , New Delhi</div>

<div className="r"> <h2> What is Gurpreet Chawla’s age?</h2>
Gurpreet Chawla is 23 years old.  </div>



<div className="r"> <h2> What is Gurpreet Chawla’s mobile number?</h2>
You can contact team sofodel at 9599219298 –  but if you are looking for his personal number Sorry, we cannot mention that.  </div>

<div className="r"> <h2> What are Gurpreet Chawla’s skills?</h2>
Web Development
Digital Marketing,
Video production and Editing,
Designing,
Google Adword,
Google Analytics, and many more.  </div>
<div className="r"> <h2> Who is Gurpreet Chawla’s brother?</h2>
Harpreet Chawla  </div>
<div className="r"> <h2> When is Gurpreet Chawla’s birthday? </h2>
Gurpreet’s birth date is on 30th May 1997.

Wish him on Youtube, Instagram, Facebook  </div>
<div className="r"> <h2>Who is Gurpreet Chawla’s wife?</h2>
 Gurpreet is unmarried </div>
                          </span>
                          
                          <span className="faq2">
                              <div >
                          <h2> What is Gurpreet Chawla’s life journey?</h2>
                          Sahil started his life as a “perfectly imperfect” child with many flaws.
                          His teachers encouraged him a lot Being a Punjabi, humor is his born talent and hence, ended up being a standup comedian too He always loved science So he did his bachelor’s in mechanical engineering.
                                </div><br/><br/><br/>
                                <div className="r" id="s">
                                    <h2> Height of Gurpreet Chawla?   </h2>
                                    Height – 5.6 
                                    </div>

                                    <div  id="s" className="r">
                                    <h2> Who is Gurpreet’s mother?  </h2>
                                    Gurpreet’s mother is Mrs. Inderjeet Kaur
                                    </div>
                                    <div id="s" className="r"> <h2> What are Gurpreet Chawla’s hobbies?</h2>
Gurpreet loves to
<ul>
<li>Stalking billionaire on internet</li>
<li>Explore new places,</li>
<li>Try different foods,</li>
<li>Play cricket and</li>
Learn something new everyday.
He believes the best utilization of free time is self-improving yourself and developing a new skill.. </ul> </div>

<div className="r" id="s">
                                    <h2> Where is Gurpreet Chawla’s house?  </h2>
                                    He lives in your hearts but if you are looking for a postal address sorry, we cannot mention that.
                                    </div>

                                    <div className="r" id="s">
                                    <h2> Who is Gurpreet Chawla’s father? </h2>
He lives in your                        Mr. Kulvir Chawla
                                    </div>
                                    <div className="r" id="s">
                                    <h2> Where is Gurpreet Chawla from? </h2>
                                    He lives in your hearts but if you are looking for a postal address sorry, we cannot mention that.
                                    </div>
                                    <div className="r" id="s">
                                    <h2> Who are Gurpreet Chawla’s parents?</h2>
                                    He lives in your hearts but if you are looking for a postal address sorry, we cannot mention that.
                                    </div>
                                    <div className="r" id="s">
                                    <h2> What is Gurpreet Chawla’s Instagram handle?</h2>
                                    Gurpreet can be reached on Instagram, the username is guru469chawla but he isn’t that active. Try your luck.
                                    </div>
                                    
                         </span>

                          
                     </div>   </div>


                     
                <div>  <div>
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
     <li>Stalking billionars on web</li>
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
       <br/>Keeps on changing (Ranges between 50-65)</td>
   
 </tr>


</table> <br/> <br/> <br/> <br/> <br/> <br/>

</div>
</div>  </div>
      </div>
    )

}

export default App;
