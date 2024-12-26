import { uploadImage } from "../database/queries/post/images/uploadImage";
import { saveURL_Image } from "../database/queries/post/saveProduct";

export const handleFileUpload = async (file: File, Title: string, description:string, price:number) => {
    try {
        const path = await uploadImage(file);
        if (!path) throw new Error("Failed to upload image");

        await saveURL_Image(path, Title, description, price);
    } catch (error) {
        console.error("Error uploading file and saving image URL:", error);
    }
}