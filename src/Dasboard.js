import React from "react";
import "./Dasboard.css";
import exclamation from "./images/Exclamation.png";
import icon from "./images/Icon.png";
import Checkcircle from "./images/Checkcircle.png";
import Informationcircle from "./images/Informationcircle.png";
function Dasboard() {
  return (
    <div className="carebuddy">

      

      <div className="prayogana">
        <div className="textborder">
          Today
        </div>
        </div>
        <span className="texted12">
              <div className="badge2">4</div>
            </span>

      <div className="container">
        <div className="row">      {/* row */}
          <div className="col">     {/* coloumn*/}

            <div className="container1">
              <div className="items">
                <li className="stackitem1">
                  <li className="content1">
                    <li className="text">
                      <li className="title1">This is keywoard</li>
                      <li className="subtitle1">
                        This is a primary list group item
                      </li>
                    </li>
                  </li>
                </li>

                <li className="stackitem2">
                  <div className="border"></div>

                  <li className="content2">
                    <li className="text2">
                      <li className="title2">This is keywoard</li>
                      <li className="subtitle2">
                        This is a primary list group item
                      </li>
                    </li>
                  </li>
                </li>

                <li className="stackitem3">
                  <div className="border3"></div>

                  <li className="content3">
                    <li className="text3">
                      <li className="title3">This is keywoard</li>
                      <li className="subtitle3">
                        This is a primary list group item
                      </li>
                    </li>
                  </li>
                </li>
              </div>

              <button className="button1" onClick={""}>
                View All
              </button>
            </div>
          </div>
          {/* first stack item */}

          <div className="prayogana1">
            <div className="text1">you may attempt</div>
          </div>

          <div className="container2">
            <div className="items2">
              <li className="stackitem4">
                <li className="content4">
                  <li className="text4">
                    <li className="title4">This is keywoard</li>
                    <li className="subtitle4">
                      This is a primary list group item
                    </li>
                  </li>
                </li>
              </li>

              <li className="stackitem5">
                <div className="border5"></div>

                <li className="content5">
                  <li className="text5">
                    <li className="title5">This is keywoard</li>
                    <li className="subtitle5">
                      This is a primary list group item
                    </li>
                  </li>
                </li>
              </li>

              <li className="stackitem6">
                <div className="border6"></div>

                <li className="content6">
                  <li className="text6">
                    <li className="title6">This is keywoard</li>
                    <li className="subtitle6">
                      This is a primary list group item
                    </li>
                  </li>
                </li>
              </li>
            </div>
            <button className="button2" onClick={""}>
             
              View All
            </button>
          </div>
        </div>
        
{/* heading condition */}


        <div className="col1">
        <div className="colhead">
            <div className="coltext">Task</div>
            </div>
            <span className="texted">
              <div className="badge">8</div>
            </span>

           
            <div class="card-text1" >
              <div className="exclamation">
                <img src={exclamation} className="exclamation1" />
              </div>
  <div class="card-body">
    <h5 class="card-title1">Warning card title</h5>
    <p class="card-textp1">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>


<div class="card-text2" >
              <div className="icon">
                <img src={icon} className="icon1" />
              </div>
  <div class="card-body2">
    <h5 class="card-title2">Warning card title</h5>
    <ul className="list">
      <div className="bullet">
        <ul className="ul3"></ul>
    <li class="card-textp2">Some quick example text to build</li>
    </div>
    <div className="bullet1">
      <ul className="ul1"></ul>
    <li class="card-textsubp2">Some quick example text to</li>
    </div>
    </ul>
  </div>
</div>



<div class="card-text3" >

              <div className="Checkcircle">
                <img src={Checkcircle} className="Checkcircle1" />
              </div>

  <div class="card-body3">

    <div className="p3">
    <h5 class="card-title3">Warning card title</h5>
    <p class="card-textsubp3">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>

  <div className="action">
     <button type="buttonaction1" className="btn5">hellow</button>
 <button type="buttonaction2" className="btn6">Default</button>
 </div>
  </div>
</div>
            



 <div class="card-text6" >
              <div className="Informationcircle">
                <img src={Informationcircle} className="Informationcircle1" />
              </div>
  <div className="card-body6">
    <h5 className="card-title6">Warning card title</h5>
    <div className="card-textp6">
    <p className="card-textsubp6">details</p>
    </div>
  </div>
</div>


<div class="card-text7" >
  <div className="bordermobile">
    </div>
    <div class="card-body7">
  <div className="exclamation3">
                <img src={exclamation} className="exclamation4" />
              </div>
              
              <div className="last">
    <p class="card-textp7">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
  </div>
</div>
</div>


<button className="buttonlast" onClick={""}>View All </button>
              
<div className="col3">    
              <div className="colheadlast">
            <div className="coltextlast">Later this week</div>
            </div>
              <li className="stackitemlast1">
            
            <div className="lastborder"></div>
                  <li className="contentlast1">
                    <li className="textlast">
                      <li className="titlelast1">This is keywoard</li>
                      <li className="subtitlelast1">
                        This is a primary list group item
                      </li>
                    </li>
                  </li>
                </li>


                <li className="stackitemlast2">
                <div className="lastborder2"></div>
                  <li className="contentlast2">
                    <li className="textlast2">
                      <li className="titlelast2">This is keywoard</li>
                      <li className="subtitlelast2">
                        This is a primary list group item
                      </li>
                    </li>
                  </li>
                </li>

                <li className="stackitemlast3">
                <div className="lastborder3"></div>
                  <li className="contentlast3">
                    <li className="textlast3">
                      <li className="titlelast3">This is keywoard</li>
                      <li className="subtitlelast3">
                        This is a primary list group item
                      </li>
                    </li>
                  </li>
                </li>

                
                
               


                <div className="containerlast10">
              <div className="itemslast10">
                <li className="stackitemlast10">
                  <li className="contentlast10">
                    <li className="textlast10">
                      <li className="titlelast10">This is keywoard</li>
                      <li className="subtitlelast10">
                        This is a primary list group item
                      </li>
                    </li>
                  </li>
                </li>

                <li className="stackitem11">
                  <div className="border11"></div>
                   <li className="content11">
                    <li className="text11">
                      <li className="title11">This is jnoiknkjnkkeywoard</li>
                      <li className="subtitle11">
                        This is a primary list group item
                      </li>
                    </li>
                  </li>
                </li>

               
                <li className="stackitem12">
                  <div className="border12"></div>

                  <li className="content12">
                    <li className="text12">
                      <li className="title12">This is keywoard</li>
                      <li className="subtitle12">
                        This is a primary list group item
                      </li>
                    </li>
                  </li>
                </li>
              </div>
<button className="button12" onClick={""}>
                View All
              </button>
            </div>
          
          
          
            </div>
          
          </div>
         </div>
   
  );
}

export default Dasboard;
