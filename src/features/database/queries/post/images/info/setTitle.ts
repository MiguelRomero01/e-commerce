import { supabase } from "../../../../../services/supaBase";

export const InsertTitle = async (Title: string) => {
    try {
        const { data, error } = await supabase
            .from('ImagesUploaded')
            .insert({ Title: Title });

        if (error) {
            console.log("Error inserting Image's title: ", error.message);
            return null;
        }

        return data;
    } catch (error) {
        console.error("Unexpected error during inserting title:", error);
        return null;
    }
}