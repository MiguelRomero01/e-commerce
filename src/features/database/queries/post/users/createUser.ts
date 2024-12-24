import { supabase } from "../../../../services/supaBase";
import { CryptPassword } from "../../../../services/HashPassword";

export const addUser = async (username: string, password: string) => {
     try{
          const hashedPassoword = await CryptPassword(password);
          
          const { data, error } = await supabase
               .from('registered_users')
               .insert([
                    {
                         username: username,
                         password: hashedPassoword
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