import { getAuth} from "firebase/auth";
import app from "./initialisation";

const authentification = getAuth(app)

export default authentification