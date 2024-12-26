import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/Hero-Section";
import { handleFileUpload } from "../../features/services/fileUpload";
import ProductCard from "../../common/components/ProductCard";

const handleFileChange = async (file:File, title:string, description:string, price:number) => {
     if (file && title && description && price) {
          await handleFileUpload(file,title, description, price);
     }else{
          alert('Please fill all the fields!');
     }
   };

   
const HomeScreen:React.FC = () => {
     const [file, setFile] = React.useState<File | null>(null);
     const [title, setTitle] = React.useState<string>('');
     const [description, setDescription] = React.useState<string>('');
     const [price, setPrice] = React.useState<number>(0);

     return(
          <div>
               <header>
                    <Navbar/>
               </header>

               <main>
                    <HeroSection/>
                    <ProductCard/>

                    <div>
                         <input type="file" onChange={(e) => setFile(e.target.files ? e.target.files[0] : null)} />
                         <input type="text" placeholder="Title" onChange={(e) => setTitle(e.target.value)}/>
                         <input type="text" placeholder="Description" onChange={(e) => setDescription(e.target.value)}/>
                         <input type="number" placeholder="Price" onChange={(e) => setPrice(parseFloat(e.target.value))} />
                         <button onClick={() => file && handleFileChange(file, title, description, price)}>Upload</button>
                    </div>
               </main>
          </div>
     )
}

export default HomeScreen;