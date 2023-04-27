import React from 'react'
import './Navbar.css';
import Profile from './images/profile.png'
import image from './images/logo.png'
import Search from'./images/Search.png'
import Bell from'./images/Bell.png'
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <div className='navbar'>
        <div className='frame'>
<div className='links'>
  <div className='frame1'>
  <img src={image} className='image'alt="#"/>
  </div>
  
  
  <div className='navbar1'>
    <div className='textname1'>
  
<div className='navtext1'>
 
  <Link to="/dashboard"className='link' activeClassName='active' >dashboard</Link>
  
</div>
    </div>
    <div className='bottomborder1'></div>
   </div>

  <div className='navbar2'>
    <div className='textname2'>
      <div className='navtext2'>
        
      <Link to="/interaction"className='link' activeClassName='active' >interaction</Link>
      
      </div>
      </div>
      <div className='bottomborder2'></div>
      </div>

      <div className='navbar3'>
    <div className='textname3'>
  
<div className='navtext3'>
<Link to="/task"className='link' activeClassName='active' >Tasks</Link>
</div>
    </div>
    <div className='bottomborder3'></div>
   </div>

     


   <div className='navbar4'>
    <div className='textname4'>
  
<div className='navtext4'>
<Link to="/calender"className='link' activeClassName='active'>calender</Link>
</div>
    </div>
    <div className='bottomborder4'></div>
   </div>


   <div className='navbar5'>
    <div className='textname5'>
  
<div className='navtext5'>
<Link to="/member"className='link' activeClassName='active'>Members</Link>
</div>
    </div>
    <div className='bottomborder5'></div>
   </div>


   <div className='navbar6'>
    <div className='textname6'>
  
<div className='navtext6'>
<Link to="/report"className='link' activeClassName='active'>Reports</Link>
</div>
    </div>
    <div className='bottomborder6'></div>
   </div>


   <div className='navbar7'>
    <div className='textname7'>
  
<div className='navtext7'>
<Link to="/admin"className='link' activeClassName='active' >Admin</Link>
</div>
    </div>
    <div className='bottomborder7'></div>
   </div>



   <div className='navbar8'>
    <div className='textname8'>
  
<div className='navtext8'>
<Link to="/setup"className='link' activeClassName='active' >Setup</Link>
</div>
    </div>
    <div className='bottomborder8'></div>
   </div>
</div>


<div className='searchbox'>
    <div className='searchcontent'>
      <div className='searchcontent1'>
        <img src={Search} className='img'></img>
        <div className='inputsearch'>
      <input type="text" placeholder="Search.." name="search"></input>
      </div>
      </div>
      <div className='triatingcontent'>
        <div className='pro'>
          <div className='bell'>
            <img src={Bell}></img>
          </div>
        </div>
        <div className='pro1'>
          <div className='avatar'>
            <img src={Profile}></img>
          </div>
        </div>
      </div>
    </div>
    <div className='line'></div>
</div>
        </div>
        </div>
  )
}

export default Navbar