import React from "react";
import "./Menu.css";
const Academics = () => {


    return(
          <div>
                    <div className="edu">
                   <strong> MY EDUCATIONAL <br/>ATTAINMENTS </strong>
                    </div>

                    
                     <div className="split">
                    <div id="block1" class="alert alert-light" role="alert">
                      

                  <h2 className="sn">  <svg class="bi bi-book" width="1em" height="1em" viewBox="0 0 16 16" fill="danger" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M3.214 1.072C4.813.752 6.916.71 8.354 2.146A.5.5 0 0 1 8.5 2.5v11a.5.5 0 0 1-.854.354c-.843-.844-2.115-1.059-3.47-.92-1.344.14-2.66.617-3.452 1.013A.5.5 0 0 1 0 13.5v-11a.5.5 0 0 1 .276-.447L.5 2.5l-.224-.447.002-.001.004-.002.013-.006a5.017 5.017 0 0 1 .22-.103 12.958 12.958 0 0 1 2.7-.869zM1 2.82v9.908c.846-.343 1.944-.672 3.074-.788 1.143-.118 2.387-.023 3.426.56V2.718c-1.063-.929-2.631-.956-4.09-.664A11.958 11.958 0 0 0 1 2.82z"/>
  <path fill-rule="evenodd" d="M12.786 1.072C11.188.752 9.084.71 7.646 2.146A.5.5 0 0 0 7.5 2.5v11a.5.5 0 0 0 .854.354c.843-.844 2.115-1.059 3.47-.92 1.344.14 2.66.617 3.452 1.013A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.276-.447L15.5 2.5l.224-.447-.002-.001-.004-.002-.013-.006-.047-.023a12.582 12.582 0 0 0-.799-.34 12.96 12.96 0 0 0-2.073-.609zM15 2.82v9.908c-.846-.343-1.944-.672-3.074-.788-1.143-.118-2.387-.023-3.426.56V2.718c1.063-.929 2.631-.956 4.09-.664A11.956 11.956 0 0 1 15 2.82z"/>
</svg> Blooming Dales' Modern School</h2>
<pre><h3>   HIGHER SECONDARY SCHOOL</h3></pre>



My school days were very good.I had enjoyed a lot each and
every moment of my school days.
I was very naughty that time.I was an average student so i
had to pay my maximum time to study and not worried about
anything like future,career etc.
I think that was the golden period of my life.I can never
forget that days
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
<pre><h3>   BACHELORS IN MECHANICAL<br/>   ENGINEERING </h3></pre>

My college journey has been a roller coaster ride. 
I have tons of sweet and bitter stories and experiences which might take a whole night
 of narration and would still not end.
 But, what’s more important is the lessons and learnings we get out of those incidents
                     </div>
                     <img src={process.env.PUBLIC_URL + "/college.jpeg"} 
                        alt="pic"
                      
                        className="img2"/>
                        </div>


                       
        
           
                </div>           



    );
};

export default Academics;