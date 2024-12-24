import { Title } from "@mui/icons-material";
import { supabase } from "../../../../services/supaBase";

export const saveURL_Image = async (path: string) => {
    try {
        const { data: url } = supabase.storage
            .from('Images')
            .getPublicUrl(path);

        if (!url) throw new Error("Failed to get public URL");

        const { error } = await supabase
            .from('ImagesUploaded')
            .insert({ 
                ImageURL: url.publicUrl,
                
            });

        if (error) {
            console.log('Error saving image URL: ', error.message);
            return null;
        }
    } catch (error) {
        console.error("Unexpected error during saving image URL:", error);
        return null;
    }
}