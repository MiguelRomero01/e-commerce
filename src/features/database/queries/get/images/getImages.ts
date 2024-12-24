import { supabase } from "../../../../services/supaBase";

export const getImages = async () => {
     const { data, error } = await supabase
          .from('ImagesUploaded')
          .select('ImageURL');

     if (error) {
          console.log('Error getting images: ', error.message);
          return [];
     }

     return data;
}