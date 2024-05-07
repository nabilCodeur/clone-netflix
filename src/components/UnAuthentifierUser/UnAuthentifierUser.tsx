import { Route, Routes } from "react-router-dom";
import PageNotFound from "../PageNotFound";
import Home from "./Home";
import LoginUser from "./login/LoginUser";
import SignupUser from "./signup/SignupUser";

const UnAuthentifierUser = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginUser />} />
      <Route path="/sign-up" element={<SignupUser />} />
      <Route path="/*" element={<PageNotFound />} />
    </Routes>
  );
};

export default UnAuthentifierUser;
