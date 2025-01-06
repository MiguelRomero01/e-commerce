import { Facebook, Instagram, X, YouTube } from "@mui/icons-material";

const SocialMedia = () => {
     
     return(
          <aside
               style={{
                    top:'0',
                    width:'1vw',
                    textAlign:"right"
               }}
          >
               <a href="_" >
                    <Instagram 
                         sx={{
                              fontSize:35, 
                              color:'white', 
                              transition: "all 0.3s ease",
                              "&:hover":{
                                   color:'#DD2A7B'
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
                                   color:'#d1d1d1'
                              }
                         }}/>
               </a>

               <a href="_" >
                    <Facebook 
                         sx={{
                              fontSize:35, 
                              color:'white', 
                              transition: "all 0.3s ease",
                              "&:hover":{
                                   color:'#1877F2'
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
                                   color:'#FF0000'
                              }
                         }}/>
               </a>
          </aside>
     )
}

export default SocialMedia;