import { supabase } from "../../../../../services/supaBase";

export const GetTitle = async ( Title: string ) => {
     const { data, error } = await supabase
          .from('ImagesUploaded')
          .insert({ Title: Title });

     if (error) {
          console.log("Error inserting Image's title: ", error.message);
          return null;
     }

     return data;
}