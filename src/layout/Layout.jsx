import { Outlet } from "react-router-dom";
import { Footer } from "../components/composer";

const Layout = () => {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
