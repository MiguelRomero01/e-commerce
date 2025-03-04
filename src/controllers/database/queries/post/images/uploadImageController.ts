import { supabase } from "../../../../services/database/supaBase";

export const uploadImage = async (file: File) => {
    try {
        const fileName = `${Date.now()}_${file.name}`;
        const { data, error } = await supabase.storage
            .from('Images')
            .upload(fileName, file);

        if (error) {
            console.log('Error uploading image: ', error.message);
            return null;
        }

        return data.path; // return the path of the image
    } catch (error) {
        console.error("Unexpected error during image upload:", error);
        return null;
    }
}