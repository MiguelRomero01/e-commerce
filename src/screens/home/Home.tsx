import React, {useState} from "react";
import HomeStyles from './Home.module.css'

import Navbar from "./components/Navbar";
import HeroSection from "./components/Hero-Section";
import { handleFileUpload } from "../../features/services/fileUpload";
import ProductCard from "../../common/components/ProductCard";
import TitleWithUnderline from "../../common/components/Titles/TitleUnderline";
import CategorieCard from "./components/Categories/categorie";
import { CartDropdown_ProductsType } from "../../features/services/Cart/CartDropdownProducts";
import UserReview from "./components/Reviews/userReview";
import { getTopProducts } from "../../features/database/queries/get/product/getTopProducts";
import { Footer } from "../../common/components/Footer";


interface HomeProps {
     isLogged: boolean;
     onLogout: () => void;
     cart: CartDropdown_ProductsType[];
     setCart: React.Dispatch<React.SetStateAction<CartDropdown_ProductsType[]>>;
}

const handleFileChange = async (file:File, title:string, description:string, price:number) => {
     if (file && title && description && price) {
          await handleFileUpload(file,title, description, price);
     }else{
          alert('Please fill all the fields!');
     }
   };

   
   const HomeScreen: React.FC<HomeProps> = ({ isLogged, onLogout, setCart, cart}) => {
     // La seccion de añadir archivos para ser mandados a la db y demas se cambiará de aca a una cuenta de admin
     const [file, setFile] = useState<File | null>(null);
     const [title, setTitle] = useState<string>('');
     const [description, setDescription] = useState<string>('');
     const [price, setPrice] = useState<number>(0);


     return(
          <div>
               <header>
                    <Navbar isLogged={isLogged} onLogout={onLogout} cart={cart} setCart={setCart} theme="light" />
               </header>

               <main>
                    <HeroSection/> {/*hero section*/}

               <section className={HomeStyles['top-sellers-section']}>
                    <TitleWithUnderline title={"Best Sellers"} level={2} />
                    <div className={HomeStyles['top-sellers-container']}>
                         <ProductCard setCart={setCart} cart={cart} getProduct_Function={getTopProducts()}/>
                    </div>
               </section>

               <section className={HomeStyles['categories-section']}>
                    <TitleWithUnderline title={'Find your Style'} level={2}/><br></br>
                    <div className={HomeStyles['categories-container']}>
                         <CategorieCard 
                              image={'/Images/Home/categories/persona2.jpeg'} 
                              information="Transport yourself to the moment when it was just you and your favorite song against the world." 
                              navigation="" 
                              title="Remember your favorite artist"
                         />

                         <CategorieCard 
                              image={'/Images/Home/categories/persona1.jpeg'} 
                              information="For when you just want to be yourself and nothing more." 
                              navigation="" 
                              title="Improve your casual style"
                         />
                         
                         <CategorieCard 
                              image={'/Images/Home/categories/persona3.jpg'} 
                              information="We all need a change, so why not start right now?" 
                              navigation="" 
                              title="Discover your new style"
                         />

                         <CategorieCard 
                              image={'/Images/Home/categories/persona4.jpg'} 
                              information="Unleash your inner self and explore what the world has to offer you." 
                              navigation="" 
                              title="Do you wish to explore the world?"
                         />
                    </div>
               </section>


               <section className={HomeStyles['reviews-section']}>
                    <TitleWithUnderline title={"Reviews"} level={2} />
                    <div className={HomeStyles['reviews-container']}>
                         <UserReview/>
                    </div>
               </section>

                    <div>
                         <input type="file" onChange={(e) => setFile(e.target.files ? e.target.files[0] : null)} />
                         <input type="text" placeholder="Title" onChange={(e) => setTitle(e.target.value)}/>
                         <input type="text" placeholder="Description" onChange={(e) => setDescription(e.target.value)}/>
                         <input type="number" placeholder="Price" onChange={(e) => setPrice(parseFloat(e.target.value))} />
                         <button onClick={() => file && handleFileChange(file, title, description, price)}>Upload</button>
                    </div>
               </main>

               <footer>
                    <Footer/>
               </footer>
          </div>
     )
}

export default HomeScreen;