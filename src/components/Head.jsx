import React, { useEffect, useState } from 'react';
import PosI from "./images/Aboutus.3gp"

const Head = () => {

  return (
    <>
      <style>
        {`
          .c-footer {
            height: 50px;
            width: 122px;
            position: absolute;
            bottom: 0;
            left: 44%;
            z-index: 3;
        }
          .c-sprite {
              background-image: url(https://tigermilkrestaurants.com/wp-content/themes/qh-timber/theme/dist/assets/images/sprites/cactus-loop.png);
            width:100%;
            height:100%;
          }
          .c-sprite.-cactus.is-lazy-loaded {
              animation-timing-function: steps(152);
              animation-duration: 3s;
          }
          .c-sprite.-loop {
              animation-iteration-count: infinite;
          }
          .c-sprite.-looP {
              animation-play-state: running;
          }
          .c-sprite.is-lazy-loaded {
              animation: play 0s linear infinite;
              background-position: center left;
          }
          .c-sprite {
              margin: auto;
              background-size: auto 100%;
              background-repeat: no-repeat;
          }
          @keyframes play{
          100% {
              background-position: 100%;
          }
          }
          
          .c-sprite.-cactus::before {
              padding-bottom: calc(100% * (176/188));
          }
          
          #video-background {
              position:absolute ;
              top: 0;
              left: 0;
              width: 100%;
              height: 80%;
              object-fit: cover;
              z-index: -1;
            }
          
          .top-background {
              position: fixed;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              object-fit: cover;
              z-index: 0;
              backdrop-filter: blur(3px);
            }
          .menu-top{
            height:100px;
            position:relative;
            z-index:1;
            border-bottom:solid 1px;
            border-top:solid 1px;
            width:100%;
            color:white;
            display:grid;
            grid-template-columns: repeat(3,1fr);
            grid-template-areas:
              'logo company menu'
              
          }
          .logo{
          grid-area:logo
          }
          .company{
            grid-area:company;
            text-transform:uppercase;
            display:flex;
            justify-content:center;
            align-items:center;
            font-family:Uzi;
            font-size:clamp(22px,20px, 30px);
                mix-blend-mode: difference;
              background-blend-mode: difference;
          }
          .menu{
            grid-area:menu;
              display:flex;
            justify-content:flex-end;
            align-items:center;
            cursor:pointer;
          }
          
          .logo img{
            height:100px;
          }
            @font-face {
              font-family: "Uzi";
              src: url("https://raw.githubusercontent.com/vickkie/uzitrake/main/fonts/DiamondGrotesk.woff") format("woff");
              font-weight: bold;
              font-style: normal;
            }
          .menu svg{
            height:80px;
            
          }
          .menu:hover .menu svg path{
            transform:rotate(90deg);
            transform-duration: 3s;
          }
        
      `}</style>
        

      <div className="c-footer"></div>

      <video
        id="video-background"
        autoPlay
        muted
        loop
        poster="https://i.postimg.cc/MppHXDQq/frame-0318.webp"
      >
        <source src={PosI} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="top-background"></div>
    </>
  );
};

export default Head;
