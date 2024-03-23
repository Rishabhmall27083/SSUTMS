import logo from "./images/SSSUTMS_Logo2.png";
import { useState } from "react";
import $ from "jquery";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);

  const [isOpen8, setIsOpen8] = useState(false);
  const [isOpen9, setIsOpen9] = useState(false);
  const [isOpen10, setIsOpen10] = useState(false);

  const [isOpen12, setIsOpen12] = useState(false);
  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };
  const handleMouseEnter2 = () => {
    setIsOpen2(true);
  };

  const handleMouseLeave2 = () => {
    setIsOpen2(false);
  };
  const handleMouseEnter3 = () => {
    setIsOpen3(true);
  };

  const handleMouseLeave3 = () => {
    setIsOpen3(false);
  };
  const handleMouseEnter4 = () => {
    setIsOpen4(true);
  };

  const handleMouseLeave4 = () => {
    setIsOpen4(false);
  };
  const handleMouseEnter5 = () => {
    setIsOpen5(true);
  };

  const handleMouseLeave5 = () => {
    setIsOpen5(false);
  };

  const handleMouseEnter8 = () => {
    setIsOpen8(true);
  };

  const handleMouseLeave8 = () => {
    setIsOpen8(false);
  };

  const handleMouseEnter9 = () => {
    setIsOpen9(true);
  };

  const handleMouseLeave9 = () => {
    setIsOpen9(false);
  };
  const handleMouseEnter10 = () => {
    setIsOpen10(true);
  };

  const handleMouseLeave10 = () => {
    setIsOpen10(false);
  };

  const handleMouseEnter12 = () => {
    setIsOpen12(true);
  };

  const handleMouseLeave12 = () => {
    setIsOpen12(false);
  };
  return (
    <>
      <style>{`
        .navbar {
          box-shadow: 0 5px 5px rgba(0, 0, 0, 0.1);
        }
        // .navbar-brand{
        //   pading-right: 80px;
        // }
        .navbar .navbar-brand img {
          max-width: 100px;
        }
        .navbar .navbar-nav .nav-link {
          color: #000;
        }
        @media screen and (min-width: 1024px) {
          .navbar {
            letter-spacing: 0.1em;
          }
          .navbar .navbar-nav .nav-link {
            padding: 0.5em 1em;
          }
          .search-and-icons {
            width: 30%;
          }
          .search-and-icons form {
            flex: 1;
          }
        }
        @media screen and (min-width: 768px) {
          .navbar .navbar-brand img {
            max-width: 4em;
          }
          .navbar .navbar-collapse {
            display: flex;
            flex-direction: column-reverse;
            align-items: flex-end;
          }
          .search-and-icons {
            display: flex;
            align-items: center;
          }
        }
        .search-and-icons form input {
          border-radius: 0;
          height: 2em;
          background: #fff
            url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='grey' class='bi bi-search' viewBox='0 0 16 16'%3E%3Cpath d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z'/%3E%3C/svg%3E")
            no-repeat 95%;
        }
        .search-and-icons form input:focus {
          background: #fff;
          box-shadow: none;
        }
        .search-and-icons .user-icons div {
          padding-right: 1em;
        }
        .contact-info p,
        .contact-info a {
          font-size: 0.7em;
          padding-right: 2em;
          // color: grey;
        }
        .contact-info a {
          padding-right: 0;
        }
        .small-font {
          font-size: 0.8rem; /* Adjust the size as needed */
          font-weight:bolder;

        }


        .bull{
          list-style-type:disc
        }


      
        

       @import url('https://fonts.googleapis.com/css2?family=Basic&family=Doppio+One&display=swap')
        
      `}</style>
      <nav className="navbar navbar-expand-md bg-body-tertiary sticky-top">
        <div className="container-xl">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="Logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="contact-info d-md-flex">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li
                  className="nav-item dropdown"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    style={{ color: "#dd2d4a" }}
                  >
                    <b>Academics</b>
                  </a>
                  <div className={`dropdown-menu ${isOpen ? "show" : ""}`}>
                    <a className="dropdown-item" href="#">
                      {" "}
                      <b style={{ color: "black" }}>Academic Calendar</b>
                    </a>
                    <a className="dropdown-item" href="#">
                      <b style={{ color: "black" }}>Study Materials</b>
                    </a>
                    <a className="dropdown-item" href="#">
                      <b style={{ color: "black" }}>Scholarship</b>
                    </a>
                  </div>
                </li>

                <li
                  className="nav-item dropdown"
                  onMouseEnter={handleMouseEnter2}
                  onMouseLeave={handleMouseLeave2}
                >
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    style={{ color: "#dd2d4a" }}
                  >
                    <b> Schools & Department</b>
                  </a>
                  <div
                    className={`dropdown-menu ${isOpen2 ? "show" : ""}`}
                    style={{ width: "200%", marginLeft: "-60px" }}
                  >
                    <a className="dropdown-item" href="#">
                      <b style={{ color: "black" }}>
                        {" "}
                        Department Of Engineering & Technology{" "}
                      </b>
                    </a>
                    <a className="dropdown-item" href="#">
                      <b style={{ color: "black" }}>
                        Department Of Computer Science & Application
                      </b>
                    </a>
                    <a className="dropdown-item" href="#">
                      <b style={{ color: "black" }}>
                        Department Of Mathematics & Computing
                      </b>
                    </a>
                    <a className="dropdown-item" href="#">
                      <b style={{ color: "black" }}>
                        {" "}
                        Department Of Science & Life Sciences
                      </b>
                    </a>
                    <a className="dropdown-item" href="#">
                      <b style={{ color: "black" }}>
                        Department Of Polytechnic
                      </b>
                    </a>
                    <a className="dropdown-item" href="#">
                      <b style={{ color: "black" }}>
                        {" "}
                        Department Of Humanities & Language
                      </b>{" "}
                    </a>

                    <a className="dropdown-item" href="#">
                      <b style={{ color: "black" }}>
                        School Of Education & Physical Education
                      </b>
                    </a>
                    <a className="dropdown-item" href="#">
                      <b style={{ color: "black" }}>School Of Management</b>
                    </a>
                    <a className="dropdown-item" href="#">
                      <b style={{ color: "black" }}>
                        School Of Hospitality Management
                      </b>
                    </a>
                    <a className="dropdown-item" href="#">
                      <b style={{ color: "black" }}>School Of Design</b>
                    </a>
                    <a className="dropdown-item" href="#">
                      <b style={{ color: "black" }}>
                        School Of Planning & Architecture
                      </b>
                    </a>
                    <a className="dropdown-item" href="#">
                      <b style={{ color: "black" }}>School Of Commerce</b>
                    </a>
                    <a className="dropdown-item" href="#">
                      <b style={{ color: "black" }}>School Of Law</b>
                    </a>

                    <a className="dropdown-item" href="#">
                      <b style={{ color: "black" }}>School Of Agriculture</b>
                    </a>

                    <a className="dropdown-item" href="#">
                      <b style={{ color: "black" }}>School Of Pharmacy</b>
                    </a>
                    <a className="dropdown-item" href="#">
                      <b style={{ color: "black" }}>School Of Nursing</b>
                    </a>
                    <a className="dropdown-item" href="#">
                      <b style={{ color: "black" }}>
                        School Of Ayurveda & Siddha Studies (BAMS)
                      </b>
                    </a>
                    <a className="dropdown-item" href="#">
                      <b style={{ color: "black" }}>
                        School Of Homeopathy (BHMS)
                      </b>
                    </a>
                    <a className="dropdown-item" href="#">
                      <b style={{ color: "black" }}>School Of Paramedical</b>
                    </a>

                    <a className="dropdown-item" href="#">
                      <b style={{ color: "black" }}>
                        Diploma, Vocational & Professional Education
                      </b>
                    </a>

                    {/* <div style={{marginLeft:"35%",marginTop:"-475px"}}>
                      
                      <a className="dropdown-item" href="#">
                        <b style={{ color: "black" }}>
                          {" "}
                          Department Of Engineering & Technology{" "}
                        </b>
                      </a>
                      <a className="dropdown-item" href="#">
                        <b style={{ color: "black" }}>
                          Department Of Computer Science & Application
                        </b>
                      </a>
                      <a className="dropdown-item" href="#">
                        <b style={{ color: "black" }}>
                          Department Of Mathematics & Computing
                        </b>
                      </a>
                      <a className="dropdown-item" href="#">
                        <b style={{ color: "black" }}>
                          {" "}
                          Department Of Science & Life Sciences
                        </b>
                      </a>
                      <a className="dropdown-item" href="#">
                        <b style={{ color: "black" }}>
                          Department Of Polytechnic
                        </b>
                      </a>
                      <a className="dropdown-item" href="#">
                        <b style={{ color: "black" }}>
                          {" "}
                          Department Of Humanities & Language
                        </b>{" "}
                      </a>
  
                      <a className="dropdown-item" href="#">
                        <b style={{ color: "black" }}>
                          School Of Education & Physical Education
                        </b>
                      </a>
                      <a className="dropdown-item" href="#">
                        <b style={{ color: "black" }}>School Of Management</b>
                      </a>
                      <a className="dropdown-item" href="#">
                        <b style={{ color: "black" }}>
                          School Of Hospitality Management
                        </b>
                      </a>
                      <a className="dropdown-item" href="#">
                        <b style={{ color: "black" }}>School Of Design</b>
                      </a>
                      <a className="dropdown-item" href="#">
                        <b style={{ color: "black" }}>
                          School Of Planning & Architecture
                        </b>
                      </a>
                      <a className="dropdown-item" href="#">
                        <b style={{ color: "black" }}>School Of Commerce</b>
                      </a>
                      <a className="dropdown-item" href="#">
                        <b style={{ color: "black" }}>School Of Law</b>
                      </a>
  
                      <a className="dropdown-item" href="#">
                        <b style={{ color: "black" }}>School Of Pharmacy</b>
                      </a>
                      <a className="dropdown-item" href="#">
                        <b style={{ color: "black" }}>School Of Nursing</b>
                      </a>
                      <a className="dropdown-item" href="#">
                        <b style={{ color: "black" }}>
                          School Of Ayurveda & Siddha Studies (BAMS)
                        </b>
                      </a>
                      <a className="dropdown-item" href="#">
                        <b style={{ color: "black" }}>
                          School Of Homeopathy (BHMS)
                        </b>
                      </a>
                      <a className="dropdown-item" href="#">
                        <b style={{ color: "black" }}>School Of Paramedical</b>
                      </a>
  
                      <a className="dropdown-item" href="#">
                        <b style={{ color: "black" }}>
                          School Of Vocational & Bridge Learning
                        </b>
                      </a>
  
                      
  
  
                      </div> */}
                  </div>
                </li>

                <li
                  className="nav-item dropdown"
                  onMouseEnter={handleMouseEnter3}
                  onMouseLeave={handleMouseLeave3}
                >
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    style={{ color: "#dd2d4a" }}
                  >
                    <b>UG Programs</b>
                  </a>
                  <div
                    className={`dropdown-menu ${isOpen3 ? "show" : ""}`}
                    style={{
                      width: "210vh",
                      marginLeft: "-535px",
                      height: "82vh",
                      backgroundColor: "",
                    }}
                  >
                    <a className="dropdown-item" href="#">
                      <b style={{ color: "black" }}> </b>
                    </a>
                    <a className="dropdown-item" href="#">
                      <b style={{ color: "black" }}>
                        <span
                          style={{
                            color: "brown",
                            textDecoration: "underline",
                          }}
                        >
                          {" "}
                          DEPARTMENT OF ENGINEERING & TECHNOLOGY
                        </span>
                        <ul className="bull">
                          <li>B.Tech. Aeronautical Engineering</li>
                          <li>B.Tech. Chemical Engineering</li>
                          <li>B.Tech. Civil Engineering</li>
                          <li>B.Tech. Computer Science Engineering</li>
                          <li>
                            B.Tech. Electrical And Electronics Engineering
                          </li>
                          <li>B.Tech. Eletrical Engineering</li>
                          <li>
                            B.Tech. Electronics And Communication Engineering
                          </li>
                          <li>B.Tech. Information Technology</li>
                          <li>B.Tech. Mechanical Engineering</li>
                          <li>B.Tech. Mining Engineering</li>
                        </ul>
                      </b>
                    </a>
                    {/* <a className="dropdown-item" href="#">
                      <b style={{ color: "black" }}></b>
                    </a> */}

                    <a className="dropdown-item" href="#">
                      <b style={{ color: "black" }}>
                        <span
                          style={{
                            color: "brown",
                            textDecoration: "underline",
                          }}
                        >
                          {" "}
                          DEPARTMENT OF COMPUTER SCIENCE & APPLICATION{" "}
                        </span>
                        <ul className="bull">
                          <li> Bachelor of Computer Application (BCA) </li>
                        </ul>
                      </b>
                    </a>

                    <a className="dropdown-item" href="#">
                      <b style={{ color: "black" }}>
                        <span
                          style={{
                            color: "brown",
                            textDecoration: "underline",
                          }}
                        >
                          {" "}
                          DEPARTMENT OF POLYTECHNIC
                        </span>
                        <ul className="bull">
                          <li> Computer Science Engineering </li>
                          <li>Electrical Engineering</li>
                          <li> Civil Engineering</li>
                          <li>Mechanical Engineering </li>
                          <li>Chemical Engineering</li>
                        </ul>
                      </b>
                    </a>

                    <a className="dropdown-item" href="#">
                      <b style={{ color: "black" }}>
                        <span
                          style={{
                            color: "brown",
                            textDecoration: "underline",
                          }}
                        >
                          DEPARTMENT OF MATHEMATICS AND COMPUTING SCIENCES
                        </span>
                        <ul className="bull">
                          <li> Bachelor Of Science (B.Sc.) in Mathematics</li>
                          <li>
                            {" "}
                            Bachelor Of Science (B.Sc.) in Computer Application
                          </li>
                        </ul>
                      </b>
                    </a>

                    <a className="dropdown-item" href="#">
                      <b style={{ color: "black" }}>
                        <span
                          style={{
                            color: "brown",
                            textDecoration: "underline",
                          }}
                        >
                          {" "}
                          SCHOOL OF LAW
                        </span>
                        <ul className="bull">
                          <li>Bachelor Of Legislative Law (LLB)</li>
                        </ul>
                      </b>
                    </a>

                    <div style={{ marginLeft: "37%", marginTop: "-608px" }}>
                      {/* <a className="dropdown-item" href="#" style={{marginTop:"26px"}} >
                        <b style={{ color: "black" }}>School Of Commerce</b>
                      </a> */}

                      <a
                        className="dropdown-item"
                        href="#"
                        style={{ marginTop: "125px" }}
                      >
                        <b style={{ color: "black" }}>
                          <span
                            style={{
                              color: "brown",
                              textDecoration: "underline",
                            }}
                          >
                            {" "}
                            DEPARTMENT OF SCIENCE AND LIFE SCIENCES
                          </span>
                          <ul className="bull">
                            <li>Bachelor Of Science (B.Sc.) in Biology </li>
                            <li>Bachelor Of Science (B.Sc.) in Biochemistry</li>
                            <li>Bachelor Of Science (B.Sc.) in Microbiology</li>
                            {/* <li> Bachelor Of Science (B.Sc.)in Mathematics</li>
                          <li>Bachelor Of Science (B.Sc.)in Computer Science </li>
                          <li> Eletrical Engineering</li>
                          <li> Electronics And Communication Engineering</li>
                          <li> Information Technology</li>
                          <li> Mechanical Engineering</li>
                          <li> Mining Engineering</li> */}
                          </ul>
                        </b>
                      </a>

                      <a className="dropdown-item" href="#">
                        <b style={{ color: "black" }}>
                          <span
                            style={{
                              color: "brown",
                              textDecoration: "underline",
                            }}
                          >
                            {" "}
                            SCHOOL OF COMMERCE
                          </span>
                          <ul className="bull">
                            <li>Bachelor Of Commerce (B.Com.)</li>
                          </ul>
                        </b>
                      </a>

                      <a className="dropdown-item" href="#">
                        <b style={{ color: "black" }}>
                          <span
                            style={{
                              color: "brown",
                              textDecoration: "underline",
                            }}
                          >
                            {" "}
                            SCHOOL OF HUMANITIES AND LIFE SCIENCES
                          </span>
                          <ul className="bull">
                            <li>Bachelor Of Arts (B.A.)</li>
                            <li>
                              Bachelor Of Arts (B.A.) in Computer Application
                            </li>
                          </ul>
                        </b>
                      </a>

                      <a className="dropdown-item" href="#">
                        <b style={{ color: "black" }}>
                          <span
                            style={{
                              color: "brown",
                              textDecoration: "underline",
                            }}
                          >
                            {" "}
                            SCHOOL OF PHARMACY
                          </span>
                          <ul className="bull">
                            <li> Bachelor Of Pharmacy (B.Pharma)</li>
                            {/* <li>Electrical Engineering</li>
                          <li> Civil Engineering</li>
                          <li>Mechanical Engineering </li>
                          <li>Chemical Engineering</li> */}
                          </ul>
                        </b>
                      </a>

                      <a className="dropdown-item" href="#">
                        <b style={{ color: "black" }}>
                          <span
                            style={{
                              color: "brown",
                              textDecoration: "underline",
                            }}
                          >
                            {" "}
                            SCHOOL OF NURSING
                          </span>
                          <ul className="bull">
                            <li>Bachelor Of Science (B.Sc) in Nursing</li>
                          </ul>
                        </b>
                      </a>

                      <a className="dropdown-item" href="#">
                        <b style={{ color: "black" }}>
                          <span
                            style={{
                              color: "brown",
                              textDecoration: "underline",
                            }}
                          >
                            {" "}
                            SCHOOL OF AYURVEDA AND SIDDHA STUDIES
                          </span>
                          <ul className="bull">
                            <li>B.A.M.S</li>
                          </ul>
                        </b>
                      </a>

                      <a className="dropdown-item" href="#">
                        <b style={{ color: "black" }}>
                          <span
                            style={{
                              color: "brown",
                              textDecoration: "underline",
                            }}
                          >
                            SCHOOL OF HOMEOPATHY
                          </span>
                          <ul className="bull">
                            <li>B.H.M.S</li>
                          </ul>
                        </b>
                      </a>

                      <a className="dropdown-item" href="#">
                        <b style={{ color: "black" }}>
                          <span
                            style={{
                              color: "brown",
                              textDecoration: "underline",
                            }}
                          >
                            SCHOOL OF PARAMEDICAL
                          </span>
                          <ul className="bull">
                            <li>Bachelor Of Physiotherapy (BPT)</li>
                            <li>Bachelor Of Medical Lab Technology (BMLT)</li>
                            <li>Diploma in Medical Lab Technology (DMLT)</li>
                          </ul>
                        </b>
                      </a>
                    </div>
                    <div style={{ marginLeft: "70%", marginTop: "-483px" }}>
                      <a className="dropdown-item" href="#">
                        <b style={{ color: "black" }}>
                          <span
                            style={{
                              color: "brown",
                              textDecoration: "underline",
                            }}
                          >
                            {" "}
                            SCHOOL OF EDUCATION AND PHYSICAL EDUCATION
                          </span>
                          <ul className="bull">
                            <li>Bachelor Of Education (B.Ed.)</li>
                            <li>
                              Bachelor Of Arts & Bachelor Of Education (BA
                              B.Ed.)
                            </li>
                            <li>Bachelor Of Physical Education (B.P.Ed.)</li>
                          </ul>
                        </b>
                      </a>

                      <a className="dropdown-item" href="#">
                        <b style={{ color: "black" }}>
                          <span
                            style={{
                              color: "brown",
                              textDecoration: "underline",
                            }}
                          >
                            SCHOOL OF MANAGEMENT
                          </span>
                          <ul className="bull">
                            <li>Bachelor Of Business Administration (BBA)</li>
                          </ul>
                        </b>
                      </a>
                      <a className="dropdown-item" href="#">
                        <b style={{ color: "black" }}>
                          <span
                            style={{
                              color: "brown",
                              textDecoration: "underline",
                            }}
                          >
                            {" "}
                            SCHOOL OF HOSPITALITY MANAGEMENT{" "}
                          </span>
                          {/* <ul className="bull"></ul>     */}
                          <ul className="bull">
                            <li>Bachelor Of Hotel Management and Catering</li>
                          </ul>
                        </b>
                      </a>

                      <a className="dropdown-item" href="#">
                        <b style={{ color: "black" }}>
                          <span
                            style={{
                              color: "brown",
                              textDecoration: "underline",
                            }}
                          >
                            SCHOOL OF DESIGN AND ARCHITECTURE
                          </span>
                          <ul className="bull">
                            {/* <li>Bachelor Of Architecture (B.Arch)</li> */}
                            <li>
                              Bachelor Of Design (B.Des in Industrial Design)
                            </li>
                            <li>
                              Bachelor Of Design (B.Des in Communication Design)
                            </li>
                            <li>
                              Bachelor Of Design (B.Des in Textile Design)
                            </li>
                            <li>
                              Bachelor Of Design (B.Des in Interior Design)
                            </li>
                            <li>
                              Bachelor Of Design (B.Des in Product Design)
                            </li>
                          </ul>
                        </b>
                      </a>
                      <a className="dropdown-item" href="#">
                        <b style={{ color: "black" }}>
                          <span
                            style={{
                              color: "brown",
                              textDecoration: "underline",
                            }}
                          >
                            {" "}
                            SCHOOL OF PLANNING AND ARCHITECTURE
                          </span>
                          <ul className="bull">
                            <li>Bachelor Of Architecture (B.Arch)</li>
                          </ul>
                        </b>
                      </a>

                      <a className="dropdown-item" href="#">
                        <b style={{ color: "black" }}>
                          <span
                            style={{
                              color: "brown",
                              textDecoration: "underline",
                            }}
                          >
                            SCHOOL OF PARAMEDICAL
                          </span>
                          <ul className="bull">
                            <li>Bachelor Of Physiotherapy (BPT)</li>
                            <li>Bachelors in Medical Lab Technology (BMLT)</li>
                            <li>Diploma in Medical Lab Technology (DMLT)</li>
                          </ul>
                        </b>
                      </a>
                      <a className="dropdown-item" href="#">
                        <b style={{ color: "black" }}>
                          <span
                            style={{
                              color: "brown",
                              textDecoration: "underline",
                            }}
                          >
                            DIPLOMA VOCATIONAL AND PROFESSIONAL COURSES
                          </span>
                          <ul className="bull"></ul>
                        </b>
                      </a>
                    </div>
                  </div>
                </li>

                <li
                  className="nav-item dropdown"
                  onMouseEnter={handleMouseEnter4}
                  onMouseLeave={handleMouseLeave4}
                >
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    style={{ color: "#dd2d4a" }}
                  >
                    <b>PG Programs</b>
                  </a>
                  <div
                    className={`dropdown-menu ${isOpen4 ? "show" : ""}`}
                    style={{
                      width: "150vh",
                      marginLeft: "-450px",
                      height: "82vh",
                      backgroundColor: "",
                    }}
                  >
                    <div style={{ marginLeft: "25px", marginTop: "20px" }}>
                      <a className="dropdown-item" href="#">
                        <b style={{ color: "black" }}>
                          <span
                            style={{
                              color: "brown",
                              textDecoration: "underline",
                            }}
                          >
                            {" "}
                            DEPARTMENT OF ENGINEERING & TECHNOLOGY
                          </span>
                          <ul className="bull">
                            <li>M.Tech Computer Science and Engineering</li>
                            <li>M.Tech Computer Technology & Applications</li>
                            <li>M.Tech Digital Communication</li>
                            <li>M.Tech Electrical Power System</li>
                            <li>M.Tech Industrial Design</li>
                            <li>M.Tech Information Technology</li>
                            <li>M.Tech Power Electronics</li>
                            <li>M.Tech Software Engineering</li>
                            <li>M.Tech Structural Design</li>
                            <li>M.Tech Thermal Engineering</li>
                            <li>M.Tech VLSI</li>
                          </ul>
                        </b>
                      </a>

                      {/* <a className="dropdown-item" href="#">
                      <b style={{ color: "black" }}></b>
                    </a> */}

                      <a className="dropdown-item" href="#">
                        <b style={{ color: "black" }}>
                          <span
                            style={{
                              color: "brown",
                              textDecoration: "underline",
                            }}
                          >
                            {" "}
                            DEPARTMENT OF COMPUTER SCIENCE & APPLICATION{" "}
                          </span>
                          <ul className="bull">
                            <li>Master Of Computer Application (MCA) </li>
                          </ul>
                        </b>
                      </a>

                      <a className="dropdown-item" href="#">
                        <b style={{ color: "black" }}>
                          <span
                            style={{
                              color: "brown",
                              textDecoration: "underline",
                            }}
                          >
                            DEPARTMENT OF MATHEMATICS AND COMPUTING SCIENCES
                          </span>
                          <ul className="bull">
                            <li> Master Of Science (M.Sc.) In Mathematics</li>
                            <li>
                              {" "}
                              Master Of Science (M.Sc.) In Computer Application
                            </li>
                          </ul>
                        </b>
                      </a>

                      <a className="dropdown-item" href="#">
                        <b style={{ color: "black" }}>
                          <span
                            style={{
                              color: "brown",
                              textDecoration: "underline",
                            }}
                          >
                            {" "}
                            DEPARTMENT OF SCIENCE AND LIFE SCIENCES
                          </span>
                          <ul className="bull">
                            <li>Master Of Science (M.Sc.)in Physics</li>
                            <li>Master Of Science (M.Sc.)in Chemistry</li>
                            <li>Master Of Science (M.Sc.)in Botany </li>
                            <li>Master Of Science (M.Sc.)in Zoology</li>
                            {/* <li>Master Of Science (M.Sc.)in Biochemistry</li> */}
                          </ul>
                        </b>
                      </a>
                    </div>

                    <div style={{ marginLeft: "55%", marginTop: "-430px" }}>
                      {/* <a className="dropdown-item" href="#" style={{marginTop:"26px"}} >
                        <b style={{ color: "black" }}>School Of Commerce</b>
                      </a> */}
                      <a className="dropdown-item" href="#">
                        <b style={{ color: "black" }}>
                          <span
                            style={{
                              color: "brown",
                              textDecoration: "underline",
                            }}
                          >
                            {" "}
                            SCHOOL OF COMMERCE
                          </span>
                          <ul className="bull">
                            <li>Master Of Commerce (M.Com.)</li>
                          </ul>
                        </b>
                      </a>

                      <a className="dropdown-item" href="#">
                        <b style={{ color: "black" }}>
                          <span
                            style={{
                              color: "brown",
                              textDecoration: "underline",
                            }}
                          >
                            {" "}
                            SCHOOL OF HUMANITIES AND LANGUAGES
                          </span>
                          <ul className="bull">
                            <li>Master Of Arts (M.A.) in Hindi</li>
                            <li>Master Of Arts (M.A.) in English</li>
                            <li>Master Of Arts (M.A.) in History</li>
                            <li>Master Of Arts (M.A.) in Political Science </li>
                            <li>Master Of Arts (M.A.) in Sociology</li>
                            <li>Master Of Arts (M.A.) in Psychology</li>
                          </ul>
                        </b>
                      </a>

                      <a className="dropdown-item" href="#">
                        <b style={{ color: "black" }}>
                          <span
                            style={{
                              color: "brown",
                              textDecoration: "underline",
                            }}
                          >
                            {" "}
                            SCHOOL OF PHARMACY
                          </span>
                          <ul className="bull">
                            <li>
                              {" "}
                              Master Of Pharmacy (M. Pharma) in Pharmaceutics
                            </li>
                            <li>
                              {" "}
                              Master Of Pharmacy (M. Pharma) in Pharmacology
                            </li>
                            {/* <li>Electrical Engineering</li>
                          <li> Civil Engineering</li>
                          <li>Mechanical Engineering </li>
                          <li>Chemical Engineering</li> */}
                          </ul>
                        </b>
                      </a>

                      <a className="dropdown-item" href="#">
                        <b style={{ color: "black" }}>
                          <span
                            style={{
                              color: "brown",
                              textDecoration: "underline",
                            }}
                          >
                            SCHOOL OF MANAGEMENT
                          </span>
                          <ul className="bull">
                            <li>Master Of Business Administration (MBA)</li>
                          </ul>
                        </b>
                      </a>
                    </div>
                  </div>
                </li>

                <li
                  className="nav-item dropdown"
                  onMouseEnter={handleMouseEnter5}
                  onMouseLeave={handleMouseLeave5}
                >
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    style={{ color: "#dd2d4a" }}
                  >
                    <b>Events</b>
                  </a>
                  <div className={`dropdown-menu ${isOpen5 ? "show" : ""}`}>
                    <a className="dropdown-item" href="#">
                      Department 1
                    </a>
                    <a className="dropdown-item" href="#">
                      Department 2
                    </a>
                    <a className="dropdown-item" href="#">
                      Department 3
                    </a>
                  </div>
                </li>

                <li
                  className="nav-item dropdown"
                  onMouseEnter={handleMouseEnter12}
                  onMouseLeave={handleMouseLeave12}
                >
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    style={{ color: "#dd2d4a" }}
                  >
                    <b>Students</b>
                  </a>
                  <div className={`dropdown-menu ${isOpen12 ? "show" : ""}`}>
                    <a className="dropdown-item" href="#">
                      Department 1
                    </a>
                    <a className="dropdown-item" href="#">
                      Department 2
                    </a>
                    <a className="dropdown-item" href="#">
                      Department 3
                    </a>
                  </div>
                </li>

                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="#"
                    style={{ color: "#dd2d4a" }}
                  >
                    <b>Alumni</b>
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="#"
                    style={{ color: "#dd2d4a" }}
                  >
                    <b>For Recruiters</b>
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="#"
                    style={{ color: "#dd2d4a" }}
                  >
                    <b>Online Programs</b>
                  </a>
                </li>
              </ul>
            </div>

            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  <b>Home</b>
                </a>
              </li>

              <li
                className="nav-item dropdown"
                onMouseEnter={handleMouseEnter8}
                onMouseLeave={handleMouseLeave8}
              >
                <a className="nav-link dropdown-toggle" href="#">
                  <b>About</b>
                </a>

                <div className={`dropdown-menu ${isOpen8 ? "show" : ""}`}>
                  <a className="dropdown-item small-font" href="#">
                    History & Milestones
                  </a>
                  <a className="dropdown-item small-font" href="#">
                    Vision & Mission
                  </a>
                  <a className="dropdown-item small-font" href="#">
                    Leadership
                  </a>
                  <a className="dropdown-item small-font" href="#">
                    Committee & Cell
                  </a>
                  <a className="dropdown-item small-font" href="#">
                    MOU & Collaboration
                  </a>
                  <a className="dropdown-item small-font" href="#">
                    Statues
                  </a>
                  <a className="dropdown-item small-font" href="#">
                    Best Practices
                  </a>
                  <a className="dropdown-item small-font" href="#">
                    Press Media
                  </a>
                </div>
              </li>

              <li
                className="nav-item dropdown"
                onMouseEnter={handleMouseEnter9}
                onMouseLeave={handleMouseLeave9}
              >
                <a className="nav-link dropdown-toggle" href="#">
                  <b>Examination</b>
                </a>
                <div className={`dropdown-menu ${isOpen9 ? "show" : ""}`}>
                  <a className="dropdown-item small-font" href="#">
                    Results
                  </a>
                  <a className="dropdown-item small-font" href="#">
                    Apply for Exam
                  </a>
                  <a className="dropdown-item small-font" href="#">
                    Exam Schedule
                  </a>
                  <a className="dropdown-item small-font" href="#">
                    {" "}
                    Exam Notification
                  </a>

                  <a className="dropdown-item small-font" href="#">
                    {" "}
                    Apply for Certificates
                  </a>
                </div>
              </li>

              <li
                className="nav-item dropdown"
                onMouseEnter={handleMouseEnter10}
                onMouseLeave={handleMouseLeave10}
              >
                <a className="nav-link dropdown-toggle" href="#">
                  <b>Research</b>
                </a>
                <div className={`dropdown-menu ${isOpen10 ? "show" : ""}`}>
                  <a className="dropdown-item small-font" href="#">
                    Research & Promotion Policy
                  </a>
                  <a className="dropdown-item small-font" href="#">
                    Doctoral Programs PhD
                  </a>
                  <a className="dropdown-item small-font" href="#">
                    Centre Of Excellence
                  </a>
                  <a className="dropdown-item small-font" href="#">
                    Consultancy Services{" "}
                  </a>
                  <a className="dropdown-item small-font" href="#">
                    MOU & Collaboration
                  </a>
                  <a className="dropdown-item small-font" href="#">
                    Centre For Development Of Entreprenurship
                  </a>
                  <a className="dropdown-item small-font" href="#">
                    Institutes Innovation Cell
                  </a>
                  <a className="dropdown-item small-font" href="#">
                    Press Media
                  </a>
                </div>
              </li>

              <li className="nav-item">
                <a className="nav-link">
                  <b>Placement</b>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link">
                  <b>Contact</b>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link">
                  <b>Campus</b>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link">
                  {" "}
                  <b>Activities</b>
                </a>
              </li>
              <li className="nav-item">
                <button
                  type="button"
                  class="btn btn-danger"
                  style={{ color: "white", marginLeft: "10px" }}
                >
                  {" "}
                  <b> ERP</b>
                </button>
              </li>
              <li className="nav-item" style={{ color: "" }}>
                <button
                  type="button"
                  class="btn btn-danger"
                  style={{ marginLeft: "10px" }}
                >
                  <b>ADMISSION</b>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
