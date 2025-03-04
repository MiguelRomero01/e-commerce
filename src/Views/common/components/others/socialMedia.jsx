import React from "react";
import { Facebook, Instagram, X, YouTube } from "@mui/icons-material";


import './socialMedia.css';
const SocialMedia = () => {

     return(
          <aside style={{ top:'0', width:'1vw', textAlign:"right" }}>
               {/* Instagram Gradient SVG*/}
               <svg style={{ width: 0, height: 0, position: 'absolute' }}>
                    <defs>
                         <linearGradient id="instagram-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#f09433" />
                              <stop offset="25%" stopColor="#e6683c" />
                              <stop offset="50%" stopColor="#dc2743" />
                              <stop offset="75%" stopColor="#cc2366" />
                              <stop offset="100%" stopColor="#bc1888" />
                         </linearGradient>
                    </defs>
               </svg>
               <a href="_" style={{ display: 'block', marginBottom: '10px' }}>
                    <Instagram 
                         sx={{
                              fontSize: 35, 
                              color: 'white', 
                              transition: "all 0.3s ease",
                              cursor: 'pointer',
                              display: 'block',
                              "&:hover": {
                                   fill: 'url(#instagram-gradient)',
                                   transform: 'scale(1.1)'
                              }
                         }}/>
               </a>

               <a href="_" >
                    <X 
                         sx={{
                              fontSize:35, 
                              color:'white', 
                              transition: "all 0.3s ease",
                              "&:hover":{
                                   color:'#d1d1d1',
                                   transform: 'scale(1.1)'
                              }
                         }}/>
               </a>

               <a href="_" >
                    <Facebook 
                         sx={{
                              fontSize:35, 
                              color:'white', 
                              transition: "all 0.3s ease",
                              zIndex:-1,
                              "&:hover":{
                                   color:'#1877F2',
                                   transform: 'scale(1.1)'
                              }
                         }}/>
               </a>

               <a href="_" >
                    <YouTube 
                         sx={{
                              fontSize:35, 
                              color:'white', 
                              transition: "all 0.3s ease",
                              "&:hover":{
                                   color:'#FF0000',
                                   transform: 'scale(1.1)'  
                              }
                         }}/>
               </a>
          </aside>
     )
}

export default SocialMedia;