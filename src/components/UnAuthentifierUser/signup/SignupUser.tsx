import SignUpBanner from "../banner/SignUpBanner";
import FormSignup from "./FormSignUp";
import SignupFrame from "./SignupFrame";

const SignupUser = () => {
  return (
    <div className="h-[100vh] bg-white text-gray-700 flex flex-col items-center justify-center">
      <SignUpBanner/>
      <hr  className="my-4"/>
      <SignupFrame/>
  
    </div>
  );
};

export default SignupUser;
