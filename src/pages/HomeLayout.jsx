import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <>
      <nav className="text-4xl text-pink-600">Comfy</nav>
      <Outlet />
    </>
  );
};

export default HomeLayout;
