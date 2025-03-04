import { supabase } from "../../../../services/database/supaBase";

export const getMembership = async (username: string | null) => {
  if(username === null){
    return { membership: null};
  }

  const { data, error } = await supabase
    .from("registered_users")
    .select("membership")
    .eq("username", username)
    .single();

  if (error || !data) {
    console.log("error: ", error);
    return { membership: "error" };
  }

  return { membership: data.membership };
};
