import { supabase } from "../../../../services/database/supaBase";
import { CryptPassword } from "../../../../services/helpers/hashPasswordController";

export const addUser = async (username: string, password: string, membership: null) => {
     try{
          const hashedPassoword = await CryptPassword(password);
          
          const { data, error } = await supabase
               .from('registered_users')
               .insert([
                    {
                         username: username,
                         password: hashedPassoword,
                         membership: membership
                    },
               ]);

          if (error) {
               console.log("Error to create the user", error.message)
               return false;
          }

          console.log('User was added successfully', data)
     }
     catch (error){
          console.log("Unspected Error: ", error);
          return false;
     }

     return true;
}