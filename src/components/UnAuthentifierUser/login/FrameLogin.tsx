import { Link } from "react-router-dom";
import FormLogin from "./FormLogin";

const FrameLogin = () => {


  
  
  return (
    <div className="flex flex-col w-1/4 gap-4 p-8 bg-black/45 justify-stretch">
      <h1 className="text-2xl font-bold">Sign in</h1>
      <FormLogin/>
      <p>New to Netflix ? <Link to={"/sign-up"}><b>Sign-up now</b></Link></p>
    </div>
  );
};

export default FrameLogin;
