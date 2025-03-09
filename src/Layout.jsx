import { Outlet, useLocation } from "react-router-dom";

import TopMenu from "./components/TopMenu";
import Foot from "./components/Footer";
const Layout = () => {
  const location = useLocation();
  const showHeaderFooter = !/^\/booksession\/[^/]+$/.test(location.pathname);

  return (
    <>
      {showHeaderFooter && <TopMenu />}
      <main>
        <Outlet />
      </main>
      {showHeaderFooter && <Foot />}
    </>
  );
};

export default Layout;
