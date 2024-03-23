// // import React from 'react'

// // function Socialmedia() {
// //   return (
// //     <>

// //     <style>
// //         {`
// //         .sticky-icon  {
// //             z-index:1;
// //             position:fixed;
// //             top:23%;
// //             right:0%;
// //             width:220px;
// //             display:flex;
// //             flex-direction:column;}  
// //         .sticky-icon a  {
// //             transform:translate(160px,0px);
// //             border-radius:50px 0px 0px 50px;
// //             text-align:left;
// //             margin:2px;
// //             text-decoration:none;
// //             text-transform:uppercase;
// //             padding:10px;
// //             font-size:22px;
// //             font-family:'Oswald', sans-serif;
// //             transition:all 0.8s;}
// //         .sticky-icon a:hover  {
// //             color:#FFF;
// //             transform:translate(0px,0px);}	
// //         .sticky-icon a:hover i  {
// //             transform:rotate(360deg);}
// //         /*.search_icon a:hover i  {
// //             transform:rotate(360deg);}*/
// //         .Facebook  {
// //             background-color:#2C80D3;
// //             color:#FFF;}
            
// //         .Youtube  {
// //             background-color:#fa0910;
// //             color:#FFF;}
            
// //         .Twitter  {
// //             background-color:#53c5ff;
// //             color:#FFF;}
            
// //         .Instagram  {
// //             background-color:#FD1D1D;
// //             color:#FFF;}
            
// //         .Google  {
// //             background-color:#d34836;
// //             color:#FFF;}						
// //         .sticky-icon a i {
// //             background-color:#FFF;
// //             height:40px;
// //             width:40px;
// //             color:#000;
// //             text-align:center;
// //             line-height:40px;
// //             border-radius:50%;
// //             margin-right:20px;
// //             transition:all 0.5s;}
// //         .sticky-icon a i.fa-facebook-f  {
// //             background-color:#FFF;
// //             color:#2C80D3;}
            
// //         .sticky-icon a i.fa-google-plus-g  {
// //             background-color:#FFF;
// //             color:#d34836;}
            
// //         .sticky-icon a i.fa-instagram  {
// //             background-color:#FFF;
// //             color:#FD1D1D;}
            
// //         .sticky-icon a i.fa-youtube  {
// //             background-color:#FFF;
// //             color:#fa0910;}
            
// //         .sticky-icon a i.fa-twitter  {
// //             background-color:#FFF;
// //             color:#53c5ff;}
// //         .fas fa-shopping-cart  {
// //             background-color:#FFF;}	
// //         #myBtn {
// //             height:50px;
// //           display: none;
// //           position: fixed;
// //           bottom: 20px;
// //           right: 30px;
// //           z-index: 99;
// //           text-align:center;
// //           padding:10px;
// //           text-align:center;
// //             line-height:40px;
// //           border: none;
// //           outline: none;
// //           background-color: #1e88e5;
// //           color: white;
// //           cursor: pointer;
// //           border-radius: 50%;
// //         }
// //         .fa-arrow-circle-up  {
// //             font-size:30px;}
        
// //         #myBtn:hover {
// //           background-color: #555;
// //         }	
        		
        
// //         `}
// //     </style>
// //     <link
// //       rel="stylesheet"
// //       href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css"
// //     />
// //     <link
// //       rel="stylesheet"
// //       href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
// //       integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
// //       crossOrigin="anonymous"
// //     />
// //     {/*Start Sticky Icon*/}
// //     <div className="sticky-icon">
// //       <a href="https://www.instagram.com/?hl=en" className="Instagram">
// //         <i className="fab fa-instagram" /> Instagram{" "}
// //       </a>
// //       <a href="https://www.facebook.com/" className="Facebook">
// //         <i className="fab fa-facebook-f"> </i> Facebook{" "}
// //       </a>
// //       <a href="https://aboutme.google.com/u/0/?referer=gplus" className="Google">
// //         <i className="fab fa-google-plus-g"> </i> Google +{" "}
// //       </a>
// //       <a href="https://www.youtube.com/" className="Youtube">
// //         <i className="fab fa-youtube" /> Youtube{" "}
// //       </a>
// //       <a href="https://twitter.com/login" className="Twitter">
// //         <i className="fab fa-twitter"> </i> Twitter{" "}
// //       </a>
// //     </div>
// //     {/*End Sticky Icon*/}
// //   </>
  
// //   )
// // }

// // export default Socialmedia



// import React from 'react'

// function Socialmedia() {
//   return (
//     <>
//     <style>
//       {`
      
//       .sticky-icon {
//         z-index: 1;
//         position: fixed;
//         top: 25%;
//         left: 0%;
//         width: 210px;
//         display: flex;
//         flex-direction: column;
//     }

//     .sticky-icon a {
//         transform: translate(-163px, 0px);
//         border-radius: 0px 50px 50px 0px;
//         text-align: right;
//         margin: 2px;
//         text-decoration: none;
//         text-transform: uppercase;
//         padding: 5px;
//         font-size: 20px;
//         font-family: 'Oswald', sans-serif;
//         transition: all 0.8s;
//     }

//     .sticky-icon a:hover {
//         color: #FFF;
//         transform: translate(0px, 0px);
//     }

//     .sticky-icon a:hover i {
//         transform: rotate(360deg);
//     }

//     .Facebook {
//         background-color: #2C80D3;
//         color: #FFF;
//     }

//     .Youtube {
//         background-color: #fa0910;
//         color: #FFF;
//     }

//     .Twitter {
//         background-color: #53c5ff;
//         color: #FFF;
//     }

//     .Instagram {
//         background-color: #FD1D1D;
//         color: #FFF;
//     }

//     .Google {
//         background-color: #d34836;
//         color: #FFF;
//     }

//     .sticky-icon a i {
//         background-color: #FFF;
//         height: 35px;
//         width: 35px;
//         color: #000;
//         text-align: center;
//         line-height: 35px;
//         border-radius: 50%;
//         margin-right: 2px;
//         transition: all 0.5s;
//     }

//     .sticky-icon a i.fa-facebook-f {
//         background-color: #FFF;
//         color: #2C80D3;
//     }

//     .sticky-icon a i.fa-google-plus-g {
//         background-color: #FFF;
//         color: #d34836;
//     }

//     .sticky-icon a i.fa-instagram {
//         background-color: #FFF;
//         color: #FD1D1D;
//     }

//     .sticky-icon a i.fa-youtube {
//         background-color: #FFF;
//         color: #fa0910;
//     }

//     .sticky-icon a i.fa-twitter {
//         background-color: #FFF;
//         color: #53c5ff;
//     }

//     .fas fa-shopping-cart {
//         background-color: #FFF;
//     }

//     #myBtn {
//         height: 50px;
//         display: none;
//         position: fixed;
//         bottom: 20px;
//         right: 30px;
//         z-index: 99;
//         text-align: center;
//         padding: 10px;
//         text-align: center;
//         line-height: 40px;
//         border: none;
//         outline: none;
//         background-color: #1e88e5;
//         color: white;
//         cursor: pointer;
//         border-radius: 50%;
//     }

//     .fa-arrow-circle-up {
//         font-size: 30px;
//     }

//     #myBtn:hover {
//         background-color: #555;
//     }
//       `}
//     </style>
//     <meta charSet="UTF-8" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <title>Sticky Icons</title>
//     <link
//       rel="stylesheet"
//       href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css"
//     />
//     <link
//       rel="stylesheet"
//       href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
//       integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
//       crossOrigin="anonymous"
//     />
//     {/*Start Sticky Icon*/}
//     <div className="sticky-icon">
//       <a href="https://www.instagram.com/?hl=en" className="Instagram">
//         {" "}
//         Instagram <i className="fab fa-instagram" />
//       </a>
//       <a href="https://www.facebook.com/" className="Facebook">
//         {" "}
//         Facebook <i className="fab fa-facebook-f"> </i>{" "}
//       </a>
//       <a href="https://aboutme.google.com/u/0/?referer=gplus" className="Google">
//         {" "}
//         Google + <i className="fab fa-google-plus-g"> </i>
//       </a>
//       <a href="https://www.youtube.com/" className="Youtube">
//         {" "}
//         Youtube <i className="fab fa-youtube" />
//       </a>
//       <a href="" className="Twitter">
//         {" "}
//         Twitter <i className="fab fa-twitter"> </i>{" "}
//       </a>

//     </div>
//     {/*End Sticky Icon*/}
//   </>
  
//   )
// }

// export default Socialmedia



import React from 'react'

function Socialmedia() {
  return (
    <>
    <style>
      {`
      
      .sticky-icon {
        z-index: 1;
        position: fixed;
        top: 25%;
        left: 0%;
        width: 210px;
        display: flex;
        flex-direction: column;
        height: 1px;
        
    }

    .sticky-icon a {
        transform: translate(-163px, 0px);
        border-radius: 0px 50px 50px 0px;
        text-align: right;
        margin: 2px;
        text-decoration: none;
        text-transform: uppercase;
        padding: 4px;
        font-size: 20px;
        font-family: 'Oswald', sans-serif;
        transition: all 0.8s;
    }

    .sticky-icon a:hover {
        color: #FFF;
        transform: translate(0px, 0px);
    }

    .sticky-icon a:hover i {
        transform: rotate(360deg);
    }

    .Facebook {
        background-color: #2C80D3;
        color: #FFF;
    }

    .Youtube {
        background-color: #fa0910;
        color: #FFF;
    }

    .Twitter {
        background-color: green;
        color: #FFF;
    }

    .Instagram {
      background: linear-gradient(to right, #f9ce34, #ee2a7b, #6228d7);
      color: #FFF;
  }

    .Google {
        background-color: #d34836;
        color: #FFF;
    }
    .addmission{
      background-color:  #752642;
      color: #FFF;
    }

    .sticky-icon a i {
        background-color: #FFF;
        height: 35px;
        width: 35px;
        color: #000;
        text-align: center;
        line-height: 35px;
        border-radius: 50%;
        margin-right: 2px;
        transition: all 0.5s;
    }

    .sticky-icon a i.fa-facebook-f {
        background-color: #FFF;
        color: #2C80D3;
    }

    .sticky-icon a i.fa-google-plus-g {
        background-color: #FFF;
        color: #d34836;
    }

    .sticky-icon a i.fa-instagram {
        background-color: #FFF;
        color: #FD1D1D;
    }

    .sticky-icon a i.fa-youtube {
        background-color: #FFF;
        color: #fa0910;
    }

    .sticky-icon a i.fa-twitter {
        background-color: #FFF;
        color: #53c5ff;
    }

    .fas fa-shopping-cart {
        background-color: #FFF;
    }

    #myBtn {
        height: 50px;
        display: none;
        position: fixed;
        bottom: 20px;
        right: 30px;
        z-index: 99;
        text-align: center;
        padding: 10px;
        text-align: center;
        line-height: 40px;
        border: none;
        outline: none;
        background-color: #1e88e5;
        color: white;
        cursor: pointer;
        border-radius: 50%;
    }

    .fa-arrow-circle-up {
        font-size: 30px;
    }

    #myBtn:hover {
        background-color: #555;
    }
      `}
    </style>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Sticky Icons</title>
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css"
    />
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
      integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
      crossOrigin="anonymous"
    />
    {/*Start Sticky Icon*/}
    <div className="sticky-icon">
      <a href="https://www.instagram.com/?hl=en" className="Instagram">
        {" "}
        Instagram <i className="fab fa-instagram" />
      </a>
      <a href="https://www.facebook.com/" className="Facebook">
        {" "}
        Facebook <i className="fab fa-facebook-f"> </i>{" "}
      </a>
      <a href="https://cdn.vectorstock.com/i/1000x1000/53/20/admissions-rubber-stamp-vector-12395320.webp" alt="Admissions Rubber Stamps" className="Google">
        {" "}
        Admission <i className="fab fa-google-plus-g"> </i>
      </a>
      <a href="https://www.youtube.com/" className="Youtube">
        {" "}
        Youtube <i className="fab fa-youtube" />
      </a>
      <a href="https://cdn-icons-png.flaticon.com/512/3670/3670051.png" className="Twitter">
        {" "}
        Whatsapp <i className="fab fa-whatsapp"> </i>{" "}
      </a>


      <a href="https://cdn-icons-png.flaticon.com/512/3670/3670051.png" className="addmission">
        {" "}
      Addmission   <i className="fab fa-whatsapp"> </i>{" "}
      </a>

      
    </div>
    {/*End Sticky Icon*/}
  </>
  
  )
}

export default Socialmedia