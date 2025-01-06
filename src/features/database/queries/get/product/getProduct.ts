import { supabase } from "../../../../services/supaBase";

export const getProduct = async (id:number) => {
     const { data, error } = await supabase
          .from('Products')
          .select('*')
          .eq('id',id)
          .single();

     if(error){
          console.log('Error getting product: ', error.message);
          return null;
     }

     if(data.length === 0){
          return {data: [], message: 'No product found'}
     }

     return data;
}
