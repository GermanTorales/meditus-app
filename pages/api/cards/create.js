import { db } from "lib/firebase";
const createCardExperimenta= async (data) => {

   try { return await db
    .collection("cards")
    .doc()
    .set(data)
       
   } catch (error) {
       console.log(error)
   }

  }
  export default createCardExperimenta