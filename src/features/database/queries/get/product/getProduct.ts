import { supabase } from "../../../../services/supaBase";

export const getProduct = async (id:number) => {
     const { data, error } = await supabase
          .from('ImagesUploaded')
          .select('*')
          .eq('id',id)
          .single();

     if(error){
          console.log('Error getting product: ', error.message);
          return null;
     }

     return data;
}
