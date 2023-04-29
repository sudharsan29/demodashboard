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
       
        const user = response.data.find((user) => user.id === 5);
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
  const handleClick = (event) => {
    event.preventDefault();
    
  };






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
      
    

   
    <ul>
     <li className="name">Name</li>
    <li className="name1">{userData.name ? userData.name : 'null'}</li>
    <div className="divider1"></div>
    <li className="gender">Gender</li>
    <li className="gender1">{userData.gender ? userData.gender : 'null'}</li>
    <div className="divider2"></div>
    <li className="dateofbirth">Date Of Birth</li>
    <li className="dateofbirth1">{userData.mobilenumber ? userData.contact : 'null'}</li>
    <div className="divider3"></div>
    <li className="nickname">Nick Name</li>
    <li className="nickname1">{userData.nickname ? userData.nickname : 'null'}</li>
    <div className="divider4"></div>

    <li className="contacts">contact information</li>

    <li className="mobilenumber">Mobilenumber</li>
    <li className="mobilenumber1">{userData.phone ? userData.phone : 'null'}</li>

    <li className="whatsapp">whatsapp number</li>
    <li className="whatsapp1">{userData.phone ? userData.phone : 'null'}</li>

    <li className="landline">land line</li>
    <li className="landline1">{userData.street ? userData.street : 'null'}</li>

    <li className="emailaddress">Email Address</li>
    <li className="emailaddress1">{userData.email ? userData.email : 'null'}</li>

    <li className="othercontactnumber">Other Contact Number</li>
    <li className="othercontactnumber1">{userData.landline ? userData.contact : 'null'}</li>
<div className="divider5"></div>
    <li className="address">Address</li>

    <li className="homes">Home</li>
    <li className="homes1">{userData.address.city ? userData.address.city : 'null'}</li>

    <li className="map">Map</li>
    <li className="map1">{userData.map ? userData.map : 'null'}</li>

    <li className="spouse">Spouse</li>
    <li className="spouse1">{userData.spouse ? userData.spouse : 'null'}</li>

    <li className="spousename">Spouse Name</li>
    <li className="spousename1">{userData.spousename ? userData.spousename : 'null'}</li>

    <li className="dateofbirthsub">Date of Birth</li>
    <li className="dateofbirthsub1">{userData.dateofbirth ? userData.dateofbirth : 'null'}</li>

    <li className="weddinganniversary">Wedding Anniversary</li>
    <li className="weddinganniversary1">{userData.weddinganniversary ? userData.cweddinganniversary : 'null'}</li>

    <li className="membershipstatus">Membership Status</li>
    <li className="membershipstatus1">{userData.membershipstatus ? userData.membershipstatus : 'null'}</li>

    <li className="notes">Notes</li>
    <div className="noteshead">
    <li className="notes1">{userData.notes ? userData.notes : 'null'}</li>
    </div>
    </ul>
       
        <div className='desktop'>
          <div className='header'>
            
            <div className='logo'>
            <div className='image1'>
<img src={workflow}className='image'></img>
</div>
          </div>
         </div>
        {/* header */}

          <ul className='navigation'>
            {/* another way to listing */}

        {/* <li className='verticalnavigation'> 
           <div className='content'>
        
        <div className='home'>
          <img src={home} className='home1'></img>
          <div className='text'>
          <Link to="/profile"className='link1' activeClassName='active'onClick={handleClick} >profile</Link>
          </div>
        </div>
        </div>
        </li> 

        
        <li className='verticalnavigation'>
          <div className='content3'>
          <div className='health3'>
            <img src={users}></img>
            <div className='text12'>
            <Link to="/health"className='link' activeClassName='active' >health</Link>
            </div>
          </div>
          </div>
          </li>
        


          <li className='verticalnavigation'>
          <div className='content4'>
          <div className='assistant4'>
          <img src={folder}></img>
          <div className='text4'>
            <Link to="/health"className='link' activeClassName='active' >assistance</Link>
            </div>
            </div>
            </div>
             </li>
        
            
            <li className='verticalnavigation'>
          <div className='content5'>
          <div className='assistant5'>
          <img src={calendar}></img>
          <div className='text5'>
            <Link to="/health"className='link' activeClassName='active' >prayojanaprofile</Link>
            </div>
            </div>
            </div>
             </li>
        
         
             <li className='verticalnavigation'>
          <div className='content6'>
          <div className='assistant6'>
          <img src={doctor}></img>
          <div className='text6'>
            <Link to="/health"className='link' activeClassName='active' >documents</Link>
            </div>
            </div>
            </div>
             </li>


             <li className='verticalnavigation'>
          <div className='content7'>
          <div className='assistant7'>
          <img src={chartbar}></img>
          <div className='text7'>
            <Link to="/health"className='link' activeClassName='active' >doctors</Link>
            </div>
            </div>
            </div>
             </li>



             <li className='verticalnavigation'>
          <div className='content8'>
          <div className='assistant8'>
          <img src={chartbar}></img>
          <div className='text8'>
            <Link to="/health"className='link' activeClassName='active' >medical center</Link>
            </div>
            </div>
            </div>
             </li>

 
             <li className='verticalnavigation'>
          <div className='content9'>
          <div className='assistant9'>
          <img src={chartbar}></img>
          <div className='text9'>
            <Link to="/health"className='link' activeClassName='active' >Insurance</Link>
            </div>
            </div>
            </div>
             </li>

           <li className='verticalnavigation'>
          <div className='content10'>
          <div className='assistant10'>
          <img src={chartbar}></img>
          <div className='text10'>
            <Link to="/health"className='link' activeClassName='active' >Helpers</Link>
            </div>
            </div>
            </div>
             </li>

              <li className='verticalnavigation'>
          <div className='content11'>
          <div className='assistant11'>
          <img src={chartbar}></img>
          <div className='text11'>
            <Link to="/health"className='link' activeClassName='active' >Documentaion</Link>
            </div>
            </div>
            </div>
             </li> 
         */}

        <li className="verticalnavigation33">
        <img src={home} ></img>
        <Link to="/profile"className='link31' onClick={handleClick}  >profile</Link>
        </li>
        <li className="verticalnavigation33">
        <img src={users} className=""></img>
        <Link to="/profile"className='link31' activeClassName='active'onClick={handleClick} >Health</Link>
        </li>
        <li className="verticalnavigation33">
        <img src={folder}></img>
        <Link to="/profile"className='link31' activeClassName='active'onClick={handleClick} >Assistance</Link>
        </li>
        <li className="verticalnavigation33">
        <img src={calendar}></img>
        <Link to="/profile"className='link31' activeClassName='active'onClick={handleClick} >Prayojana profile</Link>
        </li>
        <li className="verticalnavigation33">
        <img src={doctor}></img>
        <Link to="/profile"className='link31' activeClassName='active'onClick={handleClick} >Documents</Link>
        </li>

        <li className="verticalnavigation33">
        <img src={chartbar}></img>
        <Link to="/profile"className='link31' activeClassName='active'onClick={handleClick} >Doctors</Link>
        </li>

        <li className="verticalnavigation33">
        <img src={chartbar}></img>
        <Link to="/profile"className='link31' activeClassName='active'onClick={handleClick} >Medical cenetrs</Link>
        </li>

        <li className="verticalnavigation33">
        <img src={chartbar}></img>
        <Link to="/profile"className='link31' activeClassName='active'onClick={handleClick} >Insurances</Link>
        </li>
        <li className="verticalnavigation33">
        <img src={chartbar}></img>
        <Link to="/profile"className='link31' activeClassName='active'onClick={handleClick} >Helpers</Link>
        </li>
        <li className="verticalnavigation33">
        <img src={chartbar}></img>
        <Link to="/profile"className='link31' activeClassName='active'onClick={handleClick} >Documents</Link>
        </li>
         </ul> 


            
             
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