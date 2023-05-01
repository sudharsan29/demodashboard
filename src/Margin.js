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
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
function Margin() {
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
    return <div></div>;
  }

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

  )
}

export default Margin