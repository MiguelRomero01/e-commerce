import { supabase } from "../../../services/supaBase";

export const saveURL_Image = async (path: string, title:string, description:string, price:number) => {
    try {
        const { data: url } = supabase.storage
            .from('Images')
            .getPublicUrl(path);

        if (!url) throw new Error("Failed to get public URL");

        const { error } = await supabase
            .from('Products')
            .insert({ 
                ImageURL: url.publicUrl,
                Title: title,
                Description: description,
                Price: price
            });

        if (error) {
            console.log('Error saving product: ', error.message);
            return null;
        }
    } catch (error) {
        console.error("Unexpected error during saving product:", error);
        return null;
    }
}