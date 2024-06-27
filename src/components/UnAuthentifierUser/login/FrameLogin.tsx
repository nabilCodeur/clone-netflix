import { Link } from "react-router-dom";
import FormLogin from "./FormLogin";

const FrameLogin = () => { 
  return (
    <div className="flex flex-col w-2/3 gap-4 p-8 sm:w-1/2 md:w-1/3 bg-black/45 justify-stretch">
      <h1 className="text-2xl font-bold">Sign-in</h1>
      <FormLogin/>
      <p>New to Netflix ? <Link to={"/sign-up"}><b>Sign-up now</b></Link></p>
    </div>
  );
};

export default FrameLogin;
