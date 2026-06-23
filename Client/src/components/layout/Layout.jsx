import { Outlet } from "react-router-dom";
import Navbar from "./navbar";
import Footer from "./Footer";
import "../../styles/global.css";

const Layout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;