import { supabase } from "../../../../services/supaBase";

export const getFilterProducts = async (filter: any) => {
     let query = supabase.from('Products').select('*');

     if(filter.category && filter.category !== 'all'){
          query = query.eq('Type', filter.category);
     }

     if(filter.priceRange){
          query = query.gte('Price', filter.priceRange[0]).lte('Price', filter.priceRange[1]);
     }

     if(filter.rating){
          query = query.gte('Rating', filter.rating);
     }

     const {data, error} = await query;

     if(error){
          console.log('Error getting filter products: ', error.message);
          return [];
     }

     return data;
}
