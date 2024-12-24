import { uploadImage } from "../database/queries/post/images/uploadImage";
import { saveURL_Image } from "../database/queries/post/images/saveImageURL";
import { InsertTitle } from "../database/queries/post/images/info/setTitle";

export const handleFileUpload = async (file: File, Title: string) => {
    try {
        const path = await uploadImage(file);
        if (!path) throw new Error("Failed to upload image");


        await saveURL_Image(path);
    } catch (error) {
        console.error("Error uploading file and saving image URL:", error);
    }
}