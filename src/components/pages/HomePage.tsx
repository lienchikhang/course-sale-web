import React from "react";
import Sidebar from "../Sidebar";
import { Outlet } from "react-router-dom";

const HomePage: React.FC = () => {
  return (
    <section className="homepage">
      <div className="grid grid-cols-12 py-4">
        <div className="visible-div">
          <Sidebar />
        </div>
        {/* <div className="col-span-1 visible-div"></div> */}
        <div className="col-span-12 lg:col-span-11 mt-[58px]">
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default HomePage;
