import React from "react";
import categorieStyles from './categorie.module.css';

interface CategorieProps {
     image: string;
     title:string;
     information: string;
     navigation:string;
}

const CategorieCard:React.FC<CategorieProps> = ({image,title,information,navigation}) => {
     return(
          <div className={categorieStyles['categorie-container']}>
               <a href={navigation} className={categorieStyles.x}>
                    <img src={image} className={categorieStyles['categorie-image']} alt="categorie img"/>
                    <article>
                         <h3 className={categorieStyles['categorie-title']}>{title}</h3>
                         <p className={categorieStyles['categorie-info']}>{information}</p>
                    </article>
               </a>
          </div>
     );
}

export default CategorieCard