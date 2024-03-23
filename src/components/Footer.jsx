import React from "react";
import Iete from "./images/IETE.png";
import Naac from "./images/NAAC.png";
import NPTEL from "./images/NPTEL.png";
import MPCST from "./images/MPCST.png";
import aicte from "./images/AICTE.png";
import logo from "./images/sssutms.jpg";

import ugc from "./images/ugc.png";
import ariia from "./images/ariia.png";

const Footer = () => {
  return (
    <>
      <style>
        {`




    
      



        .footer-widget a {
          color:white; /* Set the text color */
          text-decoration: none; /* Remove underline */
          transition: color 0.3s; /* Add a smooth color transition */
        }
        
        .footer-widget a:hover {
          color: #ff5e14; /* Change color on hover */
        }
        ul {
          margin: 8px;
          padding: 0px;
          list-style: none;
          
      }
      .footer-section {
        background: #151414;
        position: relative;
       
      }
      .footer-cta {
        border-bottom: 1px solid #373636;
      }

      .single-cta i {
        color: #ff5e14;
        font-size: 30px;
        float: left;
        margin-top: 8px;
      }
      .cta-text {
        padding-left: 15px;
        display: inline-block;
      }
      .cta-text h4 {
        color: #fff;
        font-size: 20px;
        font-weight: 600;
        margin-bottom: 2px;
      }
      .cta-text span {
        color: #757575;
        font-size: 15px;
      }
      .footer-content {
        position: relative;
        z-index: 2;
      }
      .footer-pattern img {
        position: absolute;
        top: 0;
        left: 0;
        height: 330px;
        background-size: cover;
        background-position: 100% 100%;
      }
      .footer-logo {
        margin-bottom: 20px;

      }
      .footer-logo img {
          max-width: 200px;
      }
      .footer-text p {
        margin-bottom: 14px;
        font-size: 14px;
            color: #7e7e7e;
        line-height: 28px;
        // font-family:sans-serif;
        font-family: helvetica;
      }

    .footer-social-icon {
        display: flex;
        align-items: center;
      }
      
      .footer-social-icon span {
        color: #fff;
        font-size: 20px;
        font-weight: 700;
        font-family: 'Poppins', sans-serif;
        margin-right: 10px;
      }
      
      .footer-social-icon a {
        color: #fff;
        font-size: 16px;
        margin-right: 15px;
      }
      .footer-div{
        margin-left:200px;
        margin-top:0px;
      }
      
      .footer-social-icon i {
        height: 40px;
        width: 40px;
        text-align: center;
        line-height: 38px;
        border-radius: 50%;
      }
      .fan{
        gap:30px;
      }
      .facebook-bg{
        background: #3B5998;
      }
      .instagram-bg{
        background: #966b9d;
      }
      .email-bg{
        background: #DD4B39;
      }

      .whatsapp-bg{
        background: #4f772d;
      }

      .footer-menu ul {
        list-style: none;
       padding: 0;
       // margin-left: 10px;
       display: flex;
       width:400px;
       justify-content: center;
     
   }


  .head{
    width:300px;
    margin-left:30px;
  }
  .header{
    margin-left:30px
  }
   .footer-menu li{
     display:flex;
     justify-content:center;
   
   }
   .footer-menu ul {
   list-style: none;
   color:white;
   padding: 0;
   margin-left:160px;
   display: flex;
   width:800px;
   justify-content: center;
   }

      .youtube-bg{
        background: #d90429;
      }
      .footer-widget-heading h3 {
        color: orange;
        font-size: 20px;
        font-weight: 600;
        margin-bottom: 20px;
        position: relative;
      }
      .footer-widget-heading h3::before {
        content: "";
        position: absolute;
        left: 0;
        bottom: -15px;
        height: 2px;
        width: 50px;
        // background: #ff5e14;
      }
      .footer-widget ul li {
     
        width: 100%;
      
      }
      .footer-widget ul li a:hover{
        color: #ff5e14;
      }
      .footer-widget ul li a {
        color: #878787;
        text-transform: capitalize;
      }
  .footy{
    gap:30px;

  
  }




  .footer-logo{
    margin-left:30px;
  }
      .copyright-area{
        background: #202020;
        padding: 25px 0;
      }
      .copyright-text p {
        margin: 0;
        font-size: 14px;
        color: #878787;
      }
      .copyright-text p a{
        color: #ff5e14;
      }
      .footer-menu li {
        display: inline-block;
        margin-left: 20px;
      }
      .footer-menu li:hover a{
        color: #ff5e14;
      }
      .footer-menu li a {
        font-size: 14px;
        color: #878787;
      }
      .logos{
        display: flex;
        justify-content:center;
        gap:30px;
        margin-left:480px;
        align-items:center;
        height: 70px;
        margin-bottom: 0;

      }
     .logoheight{
        height:100%;
     }
      
      @media screen and (max-width: 1024px) {
        
        .footer-div{
          margin-left:300px
        }
        
      }


      @media screen and (max-width: 768px) {
        .col-xl-4.col-md-4 {
          margin-right: 400px; 
        }


        .footer-social-icon{
          margin-right:800px;
        }

        .footer-menu li{
           display:inline-block;
        }
        .footer-menu{
          margin-right:300px;
         
        }

      }
      @media screen and (max-width: 480px){
     



        .logos{
    display: flex;
             justify-content:center;
              // gap: 10px;
        
              margin-left:0px;
               align-items:center;
              margin-bottom:0px
           
        }

        .header{
        display: flex;
        flex-wrap: wrap;
       gap:10px
        padding: 0;
        width:377px;
        margin-left:0px;
       }

       .head{
        display: flex;
        flex-wrap: wrap;
 padding: 0;
        width:300px;
        margin-left:0px;
       }

       .head a{
        font-size:18px
       }

        .footer-menu ul {
          display: flex;
          flex-wrap: wrap;
          // justify-content: center; /* Align items in the center */
          // list-style: none;
          padding:0px;
          width:377px;
          margin-left:0px;
          
        }
      

        .footer-section{
          height:1200px;
        }
   
        .footer-menu li{
            display:flex;
            justify-content:center;
            font-size:20px;
      }

  .footer-widget-heading  {
margin-left:130px;
  }

  .footy {
    display: flex;
    flex-wrap: wrap;
    font-size:20px;
    justify-content: space-between;
}

.footer-widget {
    width: auto;
}


.footer-widget ul {
  
  justify-content:space-between;
   width:160px;
 padding: 0;
 display: flex;
    gap:10px;
}



.footer-widget-cook ul {
  
   justify-content:space-between;
   width:300px;
padding: 0;
  display: flex;
    margin-left:20px;
}



.footer-widget-tee ul {
  
  justify-content:space-between;
  width:300px;
padding: 0;
display: flex;
  gap:10px;
   margin-left:20px;
}



.footer-widget ul li {
 margin-left:15px;
  white-space: nowrap;
 margin-bottom: 2px; /* Adjust margin between list items */
}
}


        .footer-div  {
          margin-left: 0; 
          display: inline-align;
          text-align: center;
          width: 100%; 
        }

       
        .logoheight{
          height:40%;
       }

       
      .logo{
   display:flex;
        width:320px
      }
   

      .footer-logo{
        margin-top:none;
     
      }
 }
 
}}
 `}
      </style>

      <footer className="footer-section">
        <div className="container">
          <div className="footer-cta pt-4 pb-4">
            <div className="row" style={{ display: "flex" }}>
              <div className="col-xl-4 col-md-4 logos">
                <img
                  src={MPCST}
                  alt="MPCST"
                  style={{ height: "50px", width: "50px" }}
                ></img>
                <img
                  src={Iete}
                  alt="IETE"
                  style={{ height: "50px", width: "50px" }}
                ></img>
                <img
                  src={Naac}
                  alt="NAAC"
                  style={{ height: "50px", width: "50px" }}
                ></img>
                <img
                  src={NPTEL}
                  alt="NPTEL"
                  style={{ height: "50px", width: "50px" }}
                ></img>{" "}
                <img
                  src={ugc}
                  alt="ugc"
                  style={{ height: "50px", width: "50px" }}
                ></img>
                <img
                  src={ariia}
                  alt="ariia"
                  style={{ height: "50px", width: "50px" }}
                ></img>
                <img
                  src={aicte}
                  alt="AICTE"
                  style={{ height: "50px", width: "50px" }}
                ></img>
              </div>
            </div>
          </div>
          <div className="footer-content pt-5 pb-5">
            <div className="row" style={{ marginRight: "100px" }}>
              {/* <div className="col-xl-4 col-lg-4 mb-50"> */}
              <div className="col-xl-5 col-lg-5 mb-50 fan">
                <div className="footer-widget">
                  <div className="footer-logo">
                    <figure className="logo fixed_flex" style={{ gap: "20px" }}>
                      {/* <img src={logo} alt="" style={{ height:'70px', width:'70px' }} /> */}
                      <img
                        src={logo}
                        alt=""
                        style={{
                          height: "70px",
                          width: "70px",
                          borderRadius: "50%",
                        }}
                      />

                      <figcaption>
                        <p
                          className="title"
                          style={{
                            fontSize: "15px",
                            fontFamily: "sans-serif",
                            color: "#d6ccc2",
                          }}
                        >
                          SRI SATYA SAI UNIVERSITY OF TECHNOLOGY & MEDICAL
                          SCIENCES
                        </p>
                      </figcaption>
                    </figure>
                    <br></br>
                    <div className="head">
                      <a
                        style={{
                          color: "#d6ccc2",
                          fontFamily: "sans-serif",
                          fontSize: "15px",
                        }}
                      >
                        <i
                          className="fa fa-map-marker"
                          style={{ marginBottom: "10px" }}
                        />{" "}
                        Opp.Oilfed Plant, Bhopal-Indore Road, Sehore (M.P), Pin
                        - 466001
                      </a>
                    </div>
                    <div className="header" style={{ color: "#d6ccc2" }}>
                      <i className="fa fa-phone" />
                      {"  "}
                      (+91) 07562-292740 | 7562292720 <br />
                      (+91) 7748900027 | 7748900028
                      <br />
                      (From 10:00 AM to 5:00 PM only)
                    </div>
                  </div>
                  <div className="footer-text">
                    <p></p>
                  </div>
                </div>
              </div>

              <div
                className="col-xl-7 col-lg-7 col-md-7 mb-30 footy"
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <div className="footer-widget">
                  <div className="footer-widget-heading">
                    <h3>Information</h3>
                  </div>
                  <ul className="uni">
                    <li>
                      <a
                        style={{
                          color: "#d6ccc2",
                          fontFamily: "sans-serif",
                          fontSize: "15px",
                        }}
                      >
                        About{" "}
                      </a>
                    </li>
                    <li>
                      <a
                        style={{
                          color: "#d6ccc2",
                          fontFamily: "sans-serif",
                          fontSize: "15px",
                        }}
                      >
                        Vision & Mission
                      </a>
                    </li>

                    <li>
                      <a
                        style={{
                          color: "#d6ccc2",
                          fontFamily: "sans-serif",
                          fontSize: "15px",
                        }}
                      >
                        Infrastructure
                      </a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a
                        style={{
                          color: "#d6ccc2",
                          fontFamily: "sans-serif",
                          fontSize: "15px",
                        }}
                      >
                        Calendar
                      </a>
                    </li>
                    <li>
                      <a
                        style={{
                          color: "#d6ccc2",
                          fontFamily: "sans-serif",
                          fontSize: "15px",
                        }}
                      >
                        Virtual Tour
                      </a>
                    </li>
                    <li>
                      <a
                        style={{
                          color: "#d6ccc2",
                          fontFamily: "sans-serif",
                          fontSize: "15px",
                        }}
                      >
                        Press & Media
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="footer-widget-cook">
                  <div className="footer-widget-heading">
                    <h3>Quick Links</h3>
                  </div>
                  <ul>
                    <li>
                      <a
                        style={{
                          color: "#d6ccc2",
                          fontFamily: "sans-serif",
                          fontSize: "15px",
                        }}
                      >
                        AICTE feedback{" "}
                      </a>
                    </li>
                    <li>
                      <a
                        style={{
                          color: "#d6ccc2",
                          fontFamily: "sans-serif",
                          fontSize: "15px",
                        }}
                      >
                        Pay Fees
                      </a>
                    </li>
                    <li>
                      <a
                        style={{
                          color: "#d6ccc2",
                          fontFamily: "sans-serif",
                          fontSize: "15px",
                        }}
                      >
                        Notifications
                      </a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a
                        style={{
                          color: "#d6ccc2",
                          fontFamily: "sans-serif",
                          fontSize: "15px",
                        }}
                      >
                        Approvals
                      </a>
                    </li>
                    <li>
                      <a
                        style={{
                          color: "#d6ccc2",
                          fontFamily: "sans-serif",
                          fontSize: "15px",
                        }}
                      >
                        Home
                      </a>
                    </li>

                    <li>
                      <a
                        style={{
                          color: "#d6ccc2",
                          fontFamily: "sans-serif",
                          fontSize: "15px",
                        }}
                      >
                        Announcements
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="footer-widget-tee">
                  <div className="footer-widget-heading">
                    <h3>Useful Links</h3>
                  </div>
                  <ul>
                    <li>
                      <a
                        style={{
                          color: "#d6ccc2",
                          fontFamily: "sans-serif",
                          fontSize: "15px",
                        }}
                      >
                        NIRF
                      </a>
                    </li>
                    <li>
                      <a
                        style={{
                          color: "#d6ccc2",
                          fontFamily: "sans-serif",
                          fontSize: "15px",
                        }}
                      >
                        Digi Locker
                      </a>
                    </li>
                    <li>
                      <a
                        style={{
                          color: "#d6ccc2",
                          fontFamily: "sans-serif",
                          fontSize: "15px",
                        }}
                      >
                        Career
                      </a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a
                        style={{
                          color: "#d6ccc2",
                          fontFamily: "sans-serif",
                          fontSize: "15px",
                        }}
                      >
                        Counselling
                      </a>
                    </li>
                    <li>
                      <a
                        style={{
                          color: "#d6ccc2",
                          fontFamily: "sans-serif",
                          fontSize: "15px",
                        }}
                      >
                        NPTEL
                      </a>
                    </li>

                    <li>
                      <a
                        style={{
                          color: "#d6ccc2",
                          fontFamily: "sans-serif",
                          fontSize: "15px",
                        }}
                      >
                        NAAC
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="footer-widget">
                  <div className="footer-widget-heading">
                    <h3>Resources</h3>
                  </div>
                  <ul>
                    <li>
                      <a
                        style={{
                          color: "#d6ccc2",
                          fontFamily: "sans-serif",
                          fontSize: "15px",
                        }}
                      >
                        Monthly Magazine
                      </a>
                    </li>
                    <li>
                      <a
                        style={{
                          color: "#d6ccc2",
                          fontFamily: "sans-serif",
                          fontSize: "15px",
                        }}
                      >
                        Brochure
                      </a>
                    </li>
                    <li>
                      <a
                        style={{
                          color: "#d6ccc2",
                          fontFamily: "sans-serif",
                          fontSize: "15px",
                        }}
                      >
                        {" "}
                        Study Material
                      </a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a
                        style={{
                          color: "#d6ccc2",
                          fontFamily: "sans-serif",
                          fontSize: "15px",
                        }}
                      >
                        Blog
                      </a>
                    </li>

                    <li>
                      <a
                        style={{
                          color: "#d6ccc2",
                          fontFamily: "sans-serif",
                          fontSize: "15px",
                        }}
                      >
                        MOUs
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-area">
          <div className="container">
            <div className="row">
              <div
                className="col-xl-4 col-md-4"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "20px",
                  marginLeft: "400px",
                  alignItems: "center",
                }}
              >
                <div className="footer-social-icon">
                  <a
                    style={{
                      color: "#d6ccc2",
                      fontFamily: "sans-serif",
                      fontSize: "15px",
                    }}
                  >
                    <i className="fab fa-whatsapp whatsapp-bg" />
                  </a>
                  <a
                    style={{
                      color: "#d6ccc2",
                      fontFamily: "sans-serif",
                      fontSize: "15px",
                    }}
                  >
                    <i className="fab fa-facebook-f facebook-bg" />
                  </a>
                  <a
                    style={{
                      color: "#d6ccc2",
                      fontFamily: "sans-serif",
                      fontSize: "15px",
                    }}
                  >
                    <i className="fa-brands fa-instagram instagram-bg" />
                  </a>
                  <a
                    style={{
                      color: "#d6ccc2",
                      fontFamily: "sans-serif",
                      fontSize: "15px",
                    }}
                  >
                    <i className="fa-solid fa-envelope email-bg" />
                  </a>
                  <a
                    style={{
                      color: "#d6ccc2",
                      fontFamily: "sans-serif",
                      fontSize: "15px",
                    }}
                  >
                    <i className="fab fa-youtube youtube-bg" />
                  </a>
                </div>
              </div>
              <div className="col-xl-8 col-lg-8 footer-div">
                <div className="footer-menu" style={{ marginTop: "25px" }}>
                  <ul>
                    {/* <li>
       <a style={{color:'#d6ccc2',fontFamily:'sans-serif',fontSize:'15px',}}>Home</a>
                    </li> */}

                    <li>
                      <a
                        style={{
                          color: "#d6ccc2",
                          fontFamily: "sans-serif",
                          fontSize: "15px",
                        }}
                      >
                        Security{" "}
                      </a>
                    </li>

                    <li>
                      <a
                        style={{
                          color: "#d6ccc2",
                          fontFamily: "sans-serif",
                          fontSize: "15px",
                        }}
                      >
                        Contact us{" "}
                      </a>
                    </li>
                    <li>
                      <a
                        style={{
                          color: "#d6ccc2",
                          fontFamily: "sans-serif",
                          fontSize: "15px",
                        }}
                      >
                        Site Map{" "}
                      </a>
                    </li>
                    <li>
                      <a
                        style={{
                          color: "#d6ccc2",
                          fontFamily: "sans-serif",
                          fontSize: "15px",
                        }}
                      >
                        Terms & Conditions{" "}
                      </a>
                    </li>
                    <li>
                      <a
                        style={{
                          color: "#d6ccc2",
                          fontFamily: "sans-serif",
                          fontSize: "15px",
                        }}
                      >
                        Privacy-Policy{" "}
                      </a>
                    </li>
                    <li>
                      <a
                        style={{
                          color: "#d6ccc2",
                          fontFamily: "sans-serif",
                          fontSize: "15px",
                        }}
                      >
                        Refund & Cancellation{" "}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div
                className="copyright-text"
                style={{ textAlign: "center", marginTop: "8px" }}
              >
                <p>©2024, SSSUTMS. All Rights Reserved</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
