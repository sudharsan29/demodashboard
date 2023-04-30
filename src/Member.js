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
// import profile from "./Profile";
// import health from "./Health";
function Member() {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

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

  // const handleClick = (event) => {
  //   switch (event.target.id) {
  //     case 'profile-link':
  //       if (profile.checked) {
  //         event.preventDefault();
  //         navigate('/profile');
  //       }
  //       break;

  //     case 'health-link':
  //       if (health.checked) {
  //         event.preventDefault();
  //         navigate('/health');
  //       }
  //       break;
  //       default:
  //         break;
  //     }
  //   }

  function handleClick(event) {
    event.preventDefault(); // prevent the default link behavior

    // get the id of the link clicked
     const linkId = event.target.id;

    // perform different actions based on the link clicked
    if (linkId === "profile-link") {
      navigate("/profile");
    } else if (linkId === "health-link") {
      navigate("/health");
    } else if (linkId === "assistance-link") {
      navigate("/assistance");
    } else if (linkId === "prayojanaprofile-link") {
      navigate("/prayojanaprofile");
    }else if (linkId === "documents-link") {
      navigate("/documents");
    }
     else if (linkId === "doctors-link") {
      navigate("/doctors");
    } else if (linkId === "medicalcentrs-link") {
      navigate("/medicalcenters");
    } else if (linkId === "insurance-link") {
      navigate("/insurance");
    } else if (linkId === "helpers-link") {
      navigate("/helpers");
    } else if (linkId === "documents1-link") {
      navigate("/documents1");
    }
  }

  return (
    <div className="member">
      <div className="overlaycontainer">
        {/* full border */}
        <div className="stackedoverlayercontainer">
          {/* sub border */}

          <div className="breadcrumbs">
            <div className="breadcrumb1">
              <div className="text1">{userData.name}</div>
            </div>
            <div className="breadcrumb2">
              <div className="text2">
                <img src={margin}></img>
              </div>
            </div>
            <div className="breadcrumb3">
              <div className="text3">Member</div>
            </div>
          </div>

          <div className="controlbar">
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
              <li className="spouse1">
                {userData.spouse ? userData.spouse : "null"}
              </li>

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

            <div className="desktop">
              <div className="header">
                <div className="logo">
                  <div className="image1">
                    <img src={workflow} className="image"></img>
                  </div>
                </div>
              </div>
              {/* header */}

              <ul className="navigation">
                {/* another way to listing */}
                <li className="verticalnavigation33">
                  <img src={home} alt="img"></img>
                  <Link
                    to="/profile"
                    className="link31"
                    activeClassName="active"
                    onClick={handleClick}
                    id="profile-link"
                  >
                    profile
                  </Link>
                </li>
                <li className="verticalnavigation33">
                  <img src={users} className=""></img>
                  <Link
                    to="/health"
                    className="link31"
                    id="health-link"
                    activeClassName="active"
                    onClick={handleClick}
                  >
                    Health
                  </Link>
                </li>
                <li className="verticalnavigation33">
                  <img src={folder}></img>
                  <Link
                    to="/assistance"
                    className="link31"
                    activeClassName="active"
                    onClick={handleClick}
                    id="assistance-link"
                  >
                    Assistance
                  </Link>
                </li>
                <li className="verticalnavigation33">
                  <img src={calendar}></img>
                  <Link
                    to="/prayojanaprofile"
                    className="link31"
                    activeClassName="active"
                    onClick={handleClick}
                    id="prayojanaprofile-link"
                  >
                    Prayojana profile
                  </Link>
                </li>
                <li className="verticalnavigation33">
                  <img src={doctor}></img>
                  <Link
                    to="/documents"
                    className="link31"
                    activeClassName="active"
                    onClick={handleClick}
                    id="documents-link"
                  >
                    Documents
                  </Link>
                </li>

                <li className="verticalnavigation33">
                  <img src={chartbar}></img>
                  <Link
                    to="/doctors"
                    className="link31"
                    activeClassName="active"
                    onClick={handleClick}
                    id="doctors-link"
                  >
                    Doctors
                  </Link>
                </li>

                <li className="verticalnavigation33">
                  <img src={chartbar}></img>
                  <Link
                    to="/medicalcentrs"
                    className="link31"
                    activeClassName="active"
                    onClick={handleClick}
                    id="medicalcentrs-link"
                  >
                    Medical cenetrs
                  </Link>
                </li>

                <li className="verticalnavigation33">
                  <img src={chartbar}></img>
                  <Link
                    to="/insurance"
                    className="link31"
                    activeClassName="active"
                    onClick={handleClick}
                    id="insurance-link"
                  >
                    Insurances
                  </Link>
                </li>
                <li className="verticalnavigation33">
                  <img src={chartbar}></img>
                  <Link
                    to="/helpers"
                    className="link31"
                    activeClassName="active"
                    onClick={handleClick}
                    id="helpers-link"
                  >
                    Helpers
                  </Link>
                </li>
                <li className="verticalnavigation33">
                  <img src={chartbar}></img>
                  <Link
                    to="/documents1"
                    className="link31"
                    activeClassName="active"
                    onClick={handleClick}
                    id="documents1-link"
                  >
                    Documents
                  </Link>
                </li>
              </ul>

              {/* navigation */}
            </div>
            {/* desktop */}
          </div>

          {/* controlbar */}

          <div className="fulllines"></div>
          {/* lines */}
        </div>
      </div>
    </div>
  );
}

export default Member;
