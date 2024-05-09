// Sur firebase en mode production
import { getFirestore } from "firebase/firestore";
import app from "./initialisation";


 const database = getFirestore(app)

 export default database