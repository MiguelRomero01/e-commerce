import { getMembership } from "../../database/queries/get/users/getMembershipController";

export const getmembershipValue = async(username:any | null) => {
     const { membership } = await getMembership(username);
     const membershipsValues = {
          null: 0,
          amateur: 5,
          pro: 15,
          business: 30
     }

     return membershipsValues[membership as keyof typeof membershipsValues]
}