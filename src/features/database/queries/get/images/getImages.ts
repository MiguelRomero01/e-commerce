import { supabase } from "../../../../services/supaBase";

export const getImages = async () => {
     const { data, error } = await supabase
          .from('ImagesUploaded')
          .select('ImageURL, Title, Description, Price');

     if (error) {
          console.log('Error getting images: ', error.message);
          return [];
     }

     return data;
}