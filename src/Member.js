//import React from 'react'
import "./Member.css";
import margin from "./images/margin.png"
import workflow from "./images/workflow.png"
import home from "./images/Home.png"
import users from "./images/Users.png"
import folder from "./images/Folder.png"
import calendar from "./images/Calendar.png"
import doctor from "./images/doctor.png"
import chartbar from "./images/Chartbar.png"
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
function Member() {

  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
       
        const user = response.data.find((user) => user.id === 2);
        setUserData(user);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  if (!userData) {
    return <div>Loading...</div>;
  }







  return (
  <div className='member'>
     <div className='overlaycontainer'>  
            {/* full border */}
      <div className='stackedoverlayercontainer'>
        {/* sub border */}
       


        <div className='breadcrumbs'>
        
        <div className='breadcrumb1'>
          <div className='text1'>
          {userData.name}
          </div>
          </div>
          <div className='breadcrumb2'>
          <div className='text2'>
            <img src={margin}></img>
</div>
          </div>
          <div className='breadcrumb3'>
          <div className='text3'>
Member
</div>
          </div>
 </div>

      <div className='controlbar'>
      <div>
       <h1 className="labels">name:</h1>
        <h1 className="sublabel10">
        {userData.name}
        </h1 >
        <div className="divider1"></div>
    </div>
    
    <div>
       <h1 className="labels1">male:</h1>
        <h1 className="sublabel11">
        {userData.name}
        </h1 >
        <div className="divider2"></div>
    </div>
        

    <div>
       <h1 className="labels3">female:</h1>
        <h1 className="sublabel12">
        {userData.name}
        </h1 >
        <div className="divider3"></div>
    </div>
        
       
       
       
       
       
       
       
       
        <div className='desktop'>
          <div className='header'>
            
            <div className='logo'>
            <div className='image1'>
<img src={workflow}className='image'></img>
</div>
          </div>
         </div>
        {/* header */}
         <div className='navigation'>
        
        
        <div className='verticalnavigation'>
          <div className='content'>
        
        <div className='home'>
          <img src={home} className='home1'></img>
          <div className='text'>
          <Link to="/profile"className='link' activeClassName='active' >profile</Link>
          </div>
        </div>
        </div>
        </div> 

        
        <div className='verticalnavigation'>
          <div className='content3'>
          <div className='health3'>
            <img src={users}></img>
            <div className='text12'>
            <Link to="/health"className='link' activeClassName='active' >health</Link>
            </div>
          </div>
          </div>
          </div>
        


          <div className='verticalnavigation'>
          <div className='content4'>
          <div className='assistant4'>
          <img src={folder}></img>
          <div className='text4'>
            <Link to="/health"className='link' activeClassName='active' >assistance</Link>
            </div>
            </div>
            </div>
             </div>
        
            
            <div className='verticalnavigation'>
          <div className='content5'>
          <div className='assistant5'>
          <img src={calendar}></img>
          <div className='text5'>
            <Link to="/health"className='link' activeClassName='active' >prayojanaprofile</Link>
            </div>
            </div>
            </div>
             </div>
        
         
             <div className='verticalnavigation'>
          <div className='content6'>
          <div className='assistant6'>
          <img src={doctor}></img>
          <div className='text6'>
            <Link to="/health"className='link' activeClassName='active' >documents</Link>
            </div>
            </div>
            </div>
             </div>


             <div className='verticalnavigation'>
          <div className='content7'>
          <div className='assistant7'>
          <img src={chartbar}></img>
          <div className='text7'>
            <Link to="/health"className='link' activeClassName='active' >doctors</Link>
            </div>
            </div>
            </div>
             </div>



             <div className='verticalnavigation'>
          <div className='content8'>
          <div className='assistant8'>
          <img src={chartbar}></img>
          <div className='text8'>
            <Link to="/health"className='link' activeClassName='active' >medical center</Link>
            </div>
            </div>
            </div>
             </div>

 
             <div className='verticalnavigation'>
          <div className='content9'>
          <div className='assistant9'>
          <img src={chartbar}></img>
          <div className='text9'>
            <Link to="/health"className='link' activeClassName='active' >Insurance</Link>
            </div>
            </div>
            </div>
             </div>

           <div className='verticalnavigation'>
          <div className='content10'>
          <div className='assistant10'>
          <img src={chartbar}></img>
          <div className='text10'>
            <Link to="/health"className='link' activeClassName='active' >Helpers</Link>
            </div>
            </div>
            </div>
             </div>

              <div className='verticalnavigation'>
          <div className='content11'>
          <div className='assistant11'>
          <img src={chartbar}></img>
          <div className='text11'>
            <Link to="/health"className='link' activeClassName='active' >Documentaion</Link>
            </div>
            </div>
            </div>
             </div> 
        
            
        
        
        
        
       
        
        </div>


            
             
        {/* navigation */}
        
        
        </div>
      {/* desktop */}
      </div>
      
      {/* controlbar */}
     
      <div className='fulllines'></div>
    {/* lines */}
    
    

      </div>
      
    </div>
    </div>
    
  )
}

export default Member