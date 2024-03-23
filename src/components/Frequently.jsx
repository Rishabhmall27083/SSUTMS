import React from 'react'
import Sistec from './Sistec';



const Frequently = () => {
  return (
    
<>

<style>{`
* {
	margin: 0;
	padding: 0;
}


 
.section-contact {
    padding: 120px;
		background-color: #fff;
}

.section-contact .header-section .title {
	position: relative;
	margin-bottom: 17px;
	text-transform: uppercase;
    font-weight: 700;
    font-size: 55px;
}

.section-contact .header-section .title .dot {
    display: inline-block;
	position: absolute;
    bottom: 8px;
    width: 8px;
    height: 8px;
    margin-left: 3px;
    background-color: #df383f;
}

.section-contact .header-section .description {
	font-family: "Roboto", sans-serif;
	color: #2a6287;
}

.section-contact .header-section .big-title {
	position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translate(-50%,70%);
    font-size: 120px;
    font-weight: 700;
    opacity: 0.15;
}

.section-contact .form-contact {

}

.section-contact .form-contact .single-input {
	position: relative;
    margin-top: 40px;
}

.section-contact .form-contact .single-input i {
	position: absolute;
    top: 5px;
    left: 15px;
    color: #de3842;
}

.section-contact .form-contact .single-input input,
.section-contact .form-contact .single-input textarea {
	width: 100%;
    border: none;
    border-bottom: 2px solid #07395c;
    padding-left: 50px;
    padding-bottom: 15px;
    font-size: 15px;
    font-weight: 700;
    text-transform: uppercase;
		transition: border .3s;
}

.section-contact .form-contact .single-input input::placeholder,
.section-contact .form-contact .single-input textarea::placeholder {
	color: rgba(7, 57, 92, .3);
}

.section-contact .form-contact .single-input input:focus,
.section-contact .form-contact .single-input textarea:focus {
	border-color: #df383f;
}

.section-contact .form-contact .single-input textarea {
	height: 150px;
	min-height: 50px;
}

.section-contact .form-contact .submit-input input {
	margin-top: 40px;
    padding: 15px 50px;
    background-color: #de3842;
    color: #fff;
    border: none;
    font-weight: 700;
    transition: background-color .3s;
}

.section-contact .form-contact .submit-input input:hover {
	background-color: #07395c;
}

@media (max-width: 575.99px) {
	.section-contact {
	    padding: 80px 60px;
	}

	.section-contact .header-section .title {
	    font-size: 40px;
	}

	.section-contact .header-section .big-title {
		font-size: 80px;
	}

	.section-contact .header-section .description {
		font-size: 14px;
	}
}

@media (min-width: 576px) and (max-width: 767.99px) {
	.section-contact {
	    padding: 80px 60px;
	}

	.section-contact .header-section .title {
	    font-size: 45px;
	}

	.section-contact .header-section .big-title {
		font-size: 100px;
	}
}

@media (min-width: 768px) and (max-width: 991.99px) {
	.section-contact {
	    padding: 80px 60px;
	}

	.section-contact .header-section .title {
	    font-size: 45px;
	}

	.section-contact .header-section .big-title {
		font-size: 100px;
	}
}`}</style>
  <title>Contact US Section</title>
  <link
    rel="stylesheet"
    type="text/css"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css"
  />
  <link
    rel="stylesheet"
    type="text/css"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/fontawesome.min.css"
  />
  <link
    rel="stylesheet"
    type="text/css"
    href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.css"
  />
  <link
    href="https://fonts.googleapis.com/css?family=Oswald:400,700|Roboto&display=swap"
    rel="stylesheet"
  />
  <div>
    {/* START CONTACT SECTION */}
    <div className="container" style={{marginTop:"400px"}}>
      <div className="section-contact">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10 col-xl-8">
            <div className="header-section text-center">
              <h2 className="title">
                Get In Touch
                <span className="dot" />
                <span className="big-title">CONTACT</span>
              </h2>
              <p className="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                consectetur commodo risus, nec pellentesque turpis efficitur
                non.
              </p>
            </div>
          </div>
        </div>
        <div className="form-contact">
          <form>
            <div className="row">
              <div className="col-md-6">
                <div className="single-input">
                  <i className="fas fa-user" />
                  <input
                    type="text"
                    name="name"
                    placeholder="ENTER YOUR NAME"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="single-input">
                  <i className="fas fa-envelope" />
                  <input
                    type="text"
                    name="email"
                    placeholder="ENTER YOUR EMAIL"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="single-input">
                  <i className="fas fa-phone" />
                  <input
                    type="text"
                    name="phoneNumber"
                    placeholder="ENTER YOUR PHONE NUMBER"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="single-input">
                  <i className="fas fa-check" />
                  <input
                    type="text"
                    name="subject"
                    placeholder="ENTER YOUR SUBJECT"
                  />
                </div>
              </div>
              <div className="col-12">
                <div className="single-input">
                  <i className="fas fa-comment-dots" />
                  <textarea
                    placeholder="ENTER YOUR MESSAGE"
                    defaultValue={""}
                  />
                </div>
              </div>
              <div className="col-12">
                <div className="submit-input text-center">
                  <input
                    type="submit"
                    name="submit"
                    defaultValue="SUBMIT NOW"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    {/* / END CONTACT SECTION */}
    
  </div>
  <>
  <style>{`.frequently_ask_que{
    padding: 5rem 0;
}


.faq_ask_que_items a{
    color: #111;
    font-size: 1.1rem;
}


.frequently_ask_que h3{
    font-size: 2.2rem;
}

.frequently_ask_que p{
    font-family: 'Rubik', sans-serif;
    font-size: 1.2rem;
    padding-left: 1.6rem;
}

.faq_ask_que_items .nav-pills .nav-link.active, .nav-pills .show>.nav-link {
    color: #fff;
    background-color: #E83B3E;
    
}


.faq_ask_que_items .nav-pills .nav-link{
    background: black;
    color: #fff;
    border-radius: 30px 27px 27px 30px;
    padding: 18px 0;
}


.accordion-items strong{
    font-size: 1.2rem;
    color: #111;
  cursor:pointer;
}


.accordion-items{
    padding: 14px 0;
    border-bottom: 1px solid rgb(230, 229, 229);
}`}</style>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>faq-finix</title>
  {/*bootstrap part*/}
  <link
    rel="stylesheet"
    href="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/css/bootstrap.min.css"
    integrity="sha384-r4NyP46KrjDleawBgD5tp8Y7UzmLA05oM1iAEQ17CSuDqnUK2+k9luXQOfXJCJ4I"
    crossOrigin="anonymous"
  />
  {/*google fonts*/}
  <link
    href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&family=Rubik:wght@300;400;500;600;700;800&display=swap"
    rel="stylesheet"
  />
  {/*font awesome part*/}
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
  />
  {/*custome css part*/}
  <link rel="stylesheet" href="style.css" />
  <section className="frequently_ask_que">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="f_ask_q_headingte text-center mb-5">
            <h3>Frequently ask question</h3>
            <p className="pt-3">Just find your answers below</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <div className="faq_ask_que_items">
            <div className="nav_pills">
              <ul className="nav nav-pills nav-fill justify-content-center">
                <li className="nav-item mr-5">
                  <a
                    data-toggle="tab"
                    className="nav-link active"
                    href="#testOne"
                  >
                    Top Questions
                  </a>
                </li>
                <li className="nav-item mr-5">
                  <a data-toggle="tab" className="nav-link" href="#testtwo">
                    Generel Questions
                  </a>
                </li>
                <li className="nav-item">
                  <a data-toggle="tab" className="nav-link" href="#testthreee">
                    About Finix
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-1" />
        <div className="col-lg-10">
          <div className="tab-content">
            <div className="tab-pane active" id="testOne">
              <div className="accordion mt-5">
                <div className="accordion-items">
                  <strong data-bs-target="#acrOne" data-bs-toggle="collapse">
                    What is State Aid?
                  </strong>
                  <div id="acrOne" className="accordion-collapse collapse show">
                    <p>
                      Lorem ipsum dolor consectetur adipiscing Fusce varius
                      euismod lacus eget feugiat rorem lorem ipsum dolor sit
                      amet, consectetuer adipiscing elit. Aenean commodo ligula
                      eget dolor massa sociis natoque penatibus. ipsum dolor
                      consectetur Fusce varius Fusce varius euismod lacus eget
                      feugiat...
                    </p>
                  </div>
                </div>
                <div className="accordion-items">
                  <strong data-bs-target="#acrtwo" data-bs-toggle="collapse">
                    Why do you charge interest on the loan?
                  </strong>
                  <div id="acrtwo" className="accordion-collapse collapse">
                    <p>
                      Lorem ipsum dolor consectetur adipiscing Fusce varius
                      euismod lacus eget feugiat rorem lorem ipsum dolor sit
                      amet, consectetuer adipiscing elit. Aenean commodo ligula
                      eget dolor massa sociis natoque penatibus. ipsum dolor
                      consectetur Fusce varius Fusce varius euismod lacus eget
                      feugiat...
                    </p>
                  </div>
                </div>
                <div className="accordion-items">
                  <strong data-bs-target="#acrthree" data-bs-toggle="collapse">
                    Can I apply for a loan if I have poor credit?
                  </strong>
                  <div id="acrthree" className="accordion-collapse collapse">
                    <p>
                      Lorem ipsum dolor consectetur adipiscing Fusce varius
                      euismod lacus eget feugiat rorem lorem ipsum dolor sit
                      amet, consectetuer adipiscing elit. Aenean commodo ligula
                      eget dolor massa sociis natoque penatibus. ipsum dolor
                      consectetur Fusce varius Fusce varius euismod lacus eget
                      feugiat...
                    </p>
                  </div>
                </div>
                <div className="accordion-items">
                  <strong data-bs-target="#acrfour" data-bs-toggle="collapse">
                    How long does the application process take?
                  </strong>
                  <div id="acrfour" className="accordion-collapse collapse">
                    <p>
                      Lorem ipsum dolor consectetur adipiscing Fusce varius
                      euismod lacus eget feugiat rorem lorem ipsum dolor sit
                      amet, consectetuer adipiscing elit. Aenean commodo ligula
                      eget dolor massa sociis natoque penatibus. ipsum dolor
                      consectetur Fusce varius Fusce varius euismod lacus eget
                      feugiat...
                    </p>
                  </div>
                </div>
                <div className="accordion-items">
                  <strong data-bs-target="#acrfive" data-bs-toggle="collapse">
                    My business internationally. Am I still eligible to apply?
                  </strong>
                  <div id="acrfive" className="accordion-collapse collapse">
                    <p>
                      Lorem ipsum dolor consectetur adipiscing Fusce varius
                      euismod lacus eget feugiat rorem lorem ipsum dolor sit
                      amet, consectetuer adipiscing elit. Aenean commodo ligula
                      eget dolor massa sociis natoque penatibus. ipsum dolor
                      consectetur Fusce varius Fusce varius euismod lacus eget
                      feugiat...
                    </p>
                  </div>
                </div>
                <div className="accordion-items">
                  <strong data-bs-target="#acrsix" data-bs-toggle="collapse">
                    What kind of financial advice do you give?
                  </strong>
                  <div id="acrsix" className="accordion-collapse collapse">
                    <p>
                      Lorem ipsum dolor consectetur adipiscing Fusce varius
                      euismod lacus eget feugiat rorem lorem ipsum dolor sit
                      amet, consectetuer adipiscing elit. Aenean commodo ligula
                      eget dolor massa sociis natoque penatibus. ipsum dolor
                      consectetur Fusce varius Fusce varius euismod lacus eget
                      feugiat...
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="testtwo">
              <div className="accordion mt-5">
                <div className="accordion-items">
                  <strong data-bs-target="#acone" data-bs-toggle="collapse">
                    What is State Aid?
                  </strong>
                  <div id="acone" className="accordion-collapse collapse show">
                    <p>
                      Lorem ipsum dolor consectetur adipiscing Fusce varius
                      euismod lacus eget feugiat rorem lorem ipsum dolor sit
                      amet, consectetuer adipiscing elit. Aenean commodo ligula
                      eget dolor massa sociis natoque penatibus. ipsum dolor
                      consectetur Fusce varius Fusce varius euismod lacus eget
                      feugiat...
                    </p>
                  </div>
                </div>
                <div className="accordion-items">
                  <strong data-bs-target="#actwo" data-bs-toggle="collapse">
                    Why do you charge interest on the loan?
                  </strong>
                  <div id="actwo" className="accordion-collapse collapse">
                    <p>
                      Lorem ipsum dolor consectetur adipiscing Fusce varius
                      euismod lacus eget feugiat rorem lorem ipsum dolor sit
                      amet, consectetuer adipiscing elit. Aenean commodo ligula
                      eget dolor massa sociis natoque penatibus. ipsum dolor
                      consectetur Fusce varius Fusce varius euismod lacus eget
                      feugiat...
                    </p>
                  </div>
                </div>
                <div className="accordion-items">
                  <strong data-bs-target="#acthree" data-bs-toggle="collapse">
                    Can I apply for a loan if I have poor credit?
                  </strong>
                  <div id="acthree" className="accordion-collapse collapse">
                    <p>
                      Lorem ipsum dolor consectetur adipiscing Fusce varius
                      euismod lacus eget feugiat rorem lorem ipsum dolor sit
                      amet, consectetuer adipiscing elit. Aenean commodo ligula
                      eget dolor massa sociis natoque penatibus. ipsum dolor
                      consectetur Fusce varius Fusce varius euismod lacus eget
                      feugiat...
                    </p>
                  </div>
                </div>
                <div className="accordion-items">
                  <strong data-bs-target="#acfour" data-bs-toggle="collapse">
                    How long does the application process take?
                  </strong>
                  <div id="acfour" className="accordion-collapse collapse">
                    <p>
                      Lorem ipsum dolor consectetur adipiscing Fusce varius
                      euismod lacus eget feugiat rorem lorem ipsum dolor sit
                      amet, consectetuer adipiscing elit. Aenean commodo ligula
                      eget dolor massa sociis natoque penatibus. ipsum dolor
                      consectetur Fusce varius Fusce varius euismod lacus eget
                      feugiat...
                    </p>
                  </div>
                </div>
                <div className="accordion-items">
                  <strong data-bs-target="#acfive" data-bs-toggle="collapse">
                    My business internationally. Am I still eligible to apply?
                  </strong>
                  <div id="acfive" className="accordion-collapse collapse">
                    <p>
                      Lorem ipsum dolor consectetur adipiscing Fusce varius
                      euismod lacus eget feugiat rorem lorem ipsum dolor sit
                      amet, consectetuer adipiscing elit. Aenean commodo ligula
                      eget dolor massa sociis natoque penatibus. ipsum dolor
                      consectetur Fusce varius Fusce varius euismod lacus eget
                      feugiat...
                    </p>
                  </div>
                </div>
                <div className="accordion-items">
                  <strong data-bs-target="#acsix" data-bs-toggle="collapse">
                    What kind of financial advice do you give?
                  </strong>
                  <div id="acsix" className="accordion-collapse collapse">
                    <p>
                      Lorem ipsum dolor consectetur adipiscing Fusce varius
                      euismod lacus eget feugiat rorem lorem ipsum dolor sit
                      amet, consectetuer adipiscing elit. Aenean commodo ligula
                      eget dolor massa sociis natoque penatibus. ipsum dolor
                      consectetur Fusce varius Fusce varius euismod lacus eget
                      feugiat...
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="testthreee">
              <div className="accordion mt-5">
                <div className="accordion-items">
                  <strong data-bs-target="#aone" data-bs-toggle="collapse">
                    What is State Aid?
                  </strong>
                  <div id="aone" className="accordion-collapse collapse show">
                    <p>
                      Lorem ipsum dolor consectetur adipiscing Fusce varius
                      euismod lacus eget feugiat rorem lorem ipsum dolor sit
                      amet, consectetuer adipiscing elit. Aenean commodo ligula
                      eget dolor massa sociis natoque penatibus. ipsum dolor
                      consectetur Fusce varius Fusce varius euismod lacus eget
                      feugiat...
                    </p>
                  </div>
                </div>
                <div className="accordion-items">
                  <strong data-bs-target="#atwo" data-bs-toggle="collapse">
                    Why do you charge interest on the loan?
                  </strong>
                  <div id="atwo" className="accordion-collapse collapse">
                    <p>
                      Lorem ipsum dolor consectetur adipiscing Fusce varius
                      euismod lacus eget feugiat rorem lorem ipsum dolor sit
                      amet, consectetuer adipiscing elit. Aenean commodo ligula
                      eget dolor massa sociis natoque penatibus. ipsum dolor
                      consectetur Fusce varius Fusce varius euismod lacus eget
                      feugiat...
                    </p>
                  </div>
                </div>
                <div className="accordion-items">
                  <strong data-bs-target="#athree" data-bs-toggle="collapse">
                    Can I apply for a loan if I have poor credit?
                  </strong>
                  <div id="athree" className="accordion-collapse collapse">
                    <p>
                      Lorem ipsum dolor consectetur adipiscing Fusce varius
                      euismod lacus eget feugiat rorem lorem ipsum dolor sit
                      amet, consectetuer adipiscing elit. Aenean commodo ligula
                      eget dolor massa sociis natoque penatibus. ipsum dolor
                      consectetur Fusce varius Fusce varius euismod lacus eget
                      feugiat...
                    </p>
                  </div>
                </div>
                <div className="accordion-items">
                  <strong data-bs-target="#afour" data-bs-toggle="collapse">
                    How long does the application process take?
                  </strong>
                  <div id="afour" className="accordion-collapse collapse">
                    <p>
                      Lorem ipsum dolor consectetur adipiscing Fusce varius
                      euismod lacus eget feugiat rorem lorem ipsum dolor sit
                      amet, consectetuer adipiscing elit. Aenean commodo ligula
                      eget dolor massa sociis natoque penatibus. ipsum dolor
                      consectetur Fusce varius Fusce varius euismod lacus eget
                      feugiat...
                    </p>
                  </div>
                </div>
                <div className="accordion-items">
                  <strong data-bs-target="#afive" data-bs-toggle="collapse">
                    My business internationally. Am I still eligible to apply?
                  </strong>
                  <div id="afive" className="accordion-collapse collapse">
                    <p>
                      Lorem ipsum dolor consectetur adipiscing Fusce varius
                      euismod lacus eget feugiat rorem lorem ipsum dolor sit
                      amet, consectetuer adipiscing elit. Aenean commodo ligula
                      eget dolor massa sociis natoque penatibus. ipsum dolor
                      consectetur Fusce varius Fusce varius euismod lacus eget
                      feugiat...
                    </p>
                  </div>
                </div>
                <div className="accordion-items">
                  <strong data-bs-target="#asix" data-bs-toggle="collapse">
                    What kind of financial advice do you give?
                  </strong>
                  <div id="asix" className="accordion-collapse collapse">
                    <p>
                      Lorem ipsum dolor consectetur adipiscing Fusce varius
                      euismod lacus eget feugiat rorem lorem ipsum dolor sit
                      amet, consectetuer adipiscing elit. Aenean commodo ligula
                      eget dolor massa sociis natoque penatibus. ipsum dolor
                      consectetur Fusce varius Fusce varius euismod lacus eget
                      feugiat...
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-1" />
      </div>
    </div>
  </section>
</>
<Sistec/>
<>

</>
</>

  )
}

export default Frequently;

