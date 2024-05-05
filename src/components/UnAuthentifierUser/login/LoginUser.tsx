import backgroundAuthentification from "@/assets/background-authentification.jpg";
import LoginBanner from "../banner/LoginBanner";
import FrameLogin from "./FrameLogin";

const LoginUser = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundAuthentification}`,
        backgroundColor: "darkgray",
        backgroundBlendMode: "multiply",
      }}
      className="h-[100vh] flex flex-col items-center justify-center"
    >
      <LoginBanner />
      <FrameLogin />
    </div>
  );
};

export default LoginUser;
