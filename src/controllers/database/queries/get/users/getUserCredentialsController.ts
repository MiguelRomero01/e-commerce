import { supabase } from "../../../../services/database/supaBase";

export const getUserCredentials = async(username: string) => {
     try{
          const { data, error } = await supabase
               .from('registered_users')
               .select('password')
               .eq('username', username)
               .single();

          if (error || !data){
               console.log('Authentication error:', error || 'user not found');
               return false;
          }

          return data;
     } 
     catch(error){
          console.log('Error:', error);
          return false;
     }
}
