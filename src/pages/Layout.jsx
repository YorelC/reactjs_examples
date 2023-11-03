import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <main className="bg-white">
      <Outlet />
    </main>
  );
}

export default Layout;
