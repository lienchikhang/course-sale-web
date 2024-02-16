import React from "react";
import { Outlet } from "react-router-dom";
import { Footer, Header } from "../components";
import Sidebar from "../components/Sidebar";

const LayoutPrimary: React.FC = () => {
  return (
    <React.Fragment>
      <Header />
      <div className="grid grid-cols-12 p-4 sm:p-6 lg:py-4 lg:px-0">
        <div className="visible-div">
          <Sidebar />
        </div>
        <div className="col-span-12 lg:col-span-11 mt-[58px]">
          <Outlet />
        </div>
      </div>
      <div className="bg-slate-950 flex flex-col">
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default LayoutPrimary;
