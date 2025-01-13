import { supabase } from "../../../../services/supaBase";

export const getProducts = async () => {
     const { data, error } = await supabase
          .from('Products')
          .select('id, Title, Price, ImageURL, Rating, Type');

     if (error) {
          console.log('Error getting product: ', error.message);
          return [];
     }


     return data;
}