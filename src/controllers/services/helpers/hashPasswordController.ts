import bcrypt from 'bcryptjs';

export const CryptPassword = async (passoword: string) => {
     try{
          const salt = await bcrypt.genSalt(5);
          const hash = await bcrypt.hash(passoword, salt);
          return hash
     } 
     catch (error){
          console.log("Unspected Error:", error)
          return null;
     }
}