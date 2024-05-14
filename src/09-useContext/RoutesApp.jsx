import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import LoginPage from "./LoginPage";
import AboutPage from "./AboutPage";
import { UserProvider } from "./context/UserProvider";

export const RoutesApp = () => {
  return (
      <UserProvider>
          <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/about" element={<AboutPage />} />

              <Route path="/*" element={<Navigate to={"/"} />}/>
          </Routes>
      </UserProvider>
  );
};
