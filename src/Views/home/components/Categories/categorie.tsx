import React from "react";
import categorieStyles from './categorie.module.css';

import { CategorieProps } from "../../../../models/home/categoriePropsModel";

const CategorieCard:React.FC<CategorieProps> = ({image,title,information,navigation}) => {
     return(
          <div className={categorieStyles['categorie-container']}>
               <a href={navigation}>
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