//import React from 'react'
import "./Member.css";
import margin from "./images/margin.png";
import workflow from "./images/workflow.png";
import home from "./images/Home.png";
import users from "./images/Users.png";
import folder from "./images/Folder.png";
import calendar from "./images/Calendar.png";
import doctor from "./images/doctor.png";
import chartbar from "./images/Chartbar.png";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Margin from "./Margin";


function Member() {
  const [userData, setUserData] = useState(null);
  const [spouse, setSpouse] = useState(null);
  const navigate = useNavigate();
  const handleRadioChange = (e) => {
    setSpouse(e.target.value);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );

        const user = response.data.find((user) => user.id === 10);
        setUserData(user);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  if (!userData) {
    return <div>{userData ? userData.name : "Null Text"}</div>;
  }

  

  // function handleClick(event) {
  //   event.preventDefault(); 
   
  //    const linkId = event.target.id;

   
  //   if (linkId === "profile-link") {
  //     navigate("/profile");
  //   } else if (linkId === "health-link") {
  //     navigate("/health");
  //   } else if (linkId === "assistance-link") {
  //     navigate("/assistance");
  //   } else if (linkId === "prayojanaprofile-link") {
  //     navigate("/prayojanaprofile");
  //   }else if (linkId === "documents-link") {
  //     navigate("/documents");
  //   }
  //    else if (linkId === "doctors-link") {
  //     navigate("/doctors");
  //   } else if (linkId === "medicalcentrs-link") {
  //     navigate("/medicalcenters");
  //   } else if (linkId === "insurance-link") {
  //     navigate("/insurance");
  //   } else if (linkId === "helpers-link") {
  //     navigate("/helpers");
  //   } else if (linkId === "documents1-link") {
  //     navigate("/documents1");
  //   }
  // }

  return (
    <div>
   
          <Margin />
            <ul>
              <li className="name">Name</li>
              <li className="name1">
                {userData.name ? userData.name : "null"}
              </li>
              <div className="divider1"></div>

              <li className="gender">Gender</li>
              <li className="gender1">
                {userData.gender ? userData.gender : "null"}
              </li>
              <div className="divider2"></div>

              <li className="dateofbirth">Date Of Birth</li>
              <li className="dateofbirth1">
                {userData.mobilenumber ? userData.contact : "null"}
              </li>
              <div className="divider3"></div>

              <li className="nickname">Nick Name</li>
              <li className="nickname1">
                {userData.nickname ? userData.nickname : "null"}
              </li>
              <div className="divider4"></div>
 
              <li className="contacts">contact information</li>

              <li className="mobilenumber">Mobilenumber</li>
              <li className="mobilenumber1">
                {userData.phone ? userData.phone : "null"}
              </li>

          
            <li className="whatsapp">whatsapp number</li>
              <li className="whatsapp1">
                {userData.phone ? userData.phone : "null"}
              </li>

              <li className="landline">land line</li>
              <li className="landline1">
                {userData.street ? userData.street : "null"}
              </li>

              <li className="emailaddress">Email Address</li>
              <li className="emailaddress1">
                {userData.email ? userData.email : "null"}
              </li>
 
              <li className="othercontactnumber">Other Contact Number</li>
              <li className="othercontactnumber1">
                {userData.landline ? userData.contact : "null"}
              </li>
              <div className="divider5"></div>
              
              <li className="address">Address</li>

              <li className="homes">Home</li>
              <li className="homes1">
                {userData.address.city ? userData.address.city : "null"}
              </li>

              <li className="map">Map</li>
              <li className="map1">{userData.map ? userData.map : "null"}</li>
 
              <li className="spouse">Spouse</li>
            
  
      <label className="spouse1">
        <input
          type="radio"
          name="spouse1"
          value="yes"
          onChange={handleRadioChange}
        />{spouse === "yes" ? <span>alive</span> : null}
         <input
          type="radio"
          name="spouse1"
          value="no"
          onChange={handleRadioChange}
        />{spouse === "no" ? <span>notalive</span> : null}
      </label>

       <li className="spousename">Spouse Name</li>
              <li className="spousename1">
                {userData.spousename ? userData.spousename : "null"}
              </li>

              <li className="dateofbirthsub">Date of Birth</li>
              <li className="dateofbirthsub1">
                {userData.dateofbirth ? userData.dateofbirth : "null"}
              </li>

              <li className="weddinganniversary">Wedding Anniversary</li>
              <li className="weddinganniversary1">
                {userData.weddinganniversary
                  ? userData.cweddinganniversary
                  : "null"}
              </li>

              <li className="membershipstatus">Membership Status</li>
              <li className="membershipstatus1">
                {userData.membershipstatus ? userData.membershipstatus : "null"}
              </li>

              <li className="notes">Notes</li>
              <div className="noteshead">
                <li className="notes1">
                  {userData.notes ? userData.notes : "null"}
                </li>
              </div> 
            </ul>

           
    </div>
  );
}

export default Member;
