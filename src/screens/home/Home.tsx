import React, {useState} from "react";
import HomeStyles from './Home.module.css'

import Navbar from "./components/Navbar";
import HeroSection from "./components/Hero-Section";
import { handleFileUpload } from "../../features/services/fileUpload";
import ProductCard from "../../common/components/ProductCard";
import TitleWithUnderline from "../../common/components/Titles/TitleUnderline";
import { decimalSplit } from "../../features/services/decimalSplit";
import CategorieCard from "./components/Categories";

interface HomeProps {
     isLogged: boolean;
     onLogout: () => void;
 }

const handleFileChange = async (file:File, title:string, description:string, price:number) => {
     if (file && title && description && price) {
          await handleFileUpload(file,title, description, price);
     }else{
          alert('Please fill all the fields!');
     }
   };

   
const HomeScreen: React.FC<HomeProps> = ({ isLogged, onLogout }) => {
     {/*La seccion de añadir archivos para ser mandados a la db y demas se cambiará de aca a una cuenta de admin*/}
     const [file, setFile] = useState<File | null>(null);
     const [title, setTitle] = useState<string>('');
     const [description, setDescription] = useState<string>('');
     const [price, setPrice] = useState<number>(0);

     return(
          <div>
               <header>
                    <Navbar isLogged={isLogged} onLogout={onLogout} />
               </header>

               <main>
                    <HeroSection/>

               <section className={HomeStyles['top-sellers-container']}>
                    <TitleWithUnderline title={"Top Sellers"} level={2} />
                    <ProductCard/>
               </section>

               <section className={HomeStyles['categories-container']}>
                    <CategorieCard image={'/Images/Home/categories/persona1.jpeg'} information="nada" navigation="https://www.youtube.com/watch?v=nZ6hJmxAbOQ&list=RDSnROamdnYS4&index=28" title="sd"/>
                    <CategorieCard image={'/Images/Home/categories/persona2.jpeg'} information="nada" navigation="https://www.youtube.com/watch?v=nZ6hJmxAbOQ&list=RDSnROamdnYS4&index=28" title="sd"/>
                    <CategorieCard image={'/Images/Home/categories/persona3.jpg'} information="nada" navigation="https://www.youtube.com/watch?v=nZ6hJmxAbOQ&list=RDSnROamdnYS4&index=28" title="sd"/>
                    <CategorieCard image={'/Images/Home/categories/persona4.webp'} information="nada" navigation="https://www.youtube.com/watch?v=nZ6hJmxAbOQ&list=RDSnROamdnYS4&index=28" title="sd"/>
               </section>
                    <div>
                         <input type="file" onChange={(e) => setFile(e.target.files ? e.target.files[0] : null)} />
                         <input type="text" placeholder="Title" onChange={(e) => setTitle(e.target.value)}/>
                         <input type="text" placeholder="Description" onChange={(e) => setDescription(e.target.value)}/>
                         <input type="number" placeholder="Price" onChange={(e) => setPrice(parseInt(e.target.value))} />
                         <button onClick={() => file && handleFileChange(file, title, description, price)}>Upload</button>
                    </div>
               </main>
          </div>
     )
}

export default HomeScreen;