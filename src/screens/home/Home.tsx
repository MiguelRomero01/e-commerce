import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/Hero-Section";
import { handleFileUpload } from "../../features/services/fileUpload";
import { ImageGallery } from "./prueba";

const handleFileChange = async (e: any, title:string) => {
     const file = e.target.files[0];
     if (file) {
       await handleFileUpload(file,title);
     }
   };

   
const HomeScreen:React.FC = () => {
     const [title, setTitle] = React.useState<string>('');
     return(
          <div>
               <header>
                    <Navbar/>
               </header>

               <main>
                    <HeroSection/>
                    <div>
                    <input type="file" onChange={(e) => handleFileChange(e, title)} />
                    <input type="text" placeholder="Title" onChange={(e) => setTitle(e.target.value)}/>
                    <ImageGallery/>
    </div>
               </main>
          </div>
     )
}

export default HomeScreen;