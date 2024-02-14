import Grid from "@mui/system/Unstable_Grid/Grid";
import React from "react";
import Sidebar from "../Sidebar";
import { Outlet } from "react-router-dom";

const HomePage: React.FC = () => {
  return (
    <section className="homepage">
      <div className="grid grid-cols-12">
        <div className="col-span-1 fixed">
          <Sidebar />
        </div>
        <div className="col-span-1 visible-div"></div>
        <div className="col-span-11">
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default HomePage;
