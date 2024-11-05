import { Route, Routes } from "react-router-dom";
import LoginRegister from "../Auth/LoginRegister";
import { LogIn } from "../Auth/login/Login";
import { Request } from "../request/Request";
import ResponsiveAppBar from "../nav_var/navbar";

export const AppRoutes = () => {
  return (
    <>
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<LoginRegister />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/request" element={<Request />} />
      </Routes>
    </>
  );
};
