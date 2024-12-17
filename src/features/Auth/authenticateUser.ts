import { getUserCredentials } from "../database/queries/getUserCredentials";
import bcrypt from 'bcryptjs';

export const authenticateUser = async (username: string, password: string) => {
     const userCredentials = await getUserCredentials(username);
     if (!userCredentials) {
          return false;
     }

     const isMatch = await bcrypt.compare(password, userCredentials.password)
     return isMatch;
};
