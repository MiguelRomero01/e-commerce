import { supabase } from "../../../../services/database/supaBase";

export const getRelatedProducts = async (productType: string, productId: number) => {
     const { data, error } = await supabase
          .from("Products")
          .select("id, Title, Price, ImageURL, Rating, Type")
          .eq("Type", productType)
          .neq("id", productId);

     if (error) {
          console.log("Error getting related products: ", error.message);
          return [];
     }

     if (data.length === 0) {
          return { data: [], message: "No related products found" }
     }

     return data;
};
