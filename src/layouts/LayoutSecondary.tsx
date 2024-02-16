import React from "react";
import HeaderLearning from "../components/HeaderLearning";
import FooterLearning from "../components/FooterLearning";
import { Outlet } from "react-router-dom";

const LayoutSecondary: React.FC = () => {
  return (
    <React.Fragment>
      <HeaderLearning />
      <Outlet />
      <FooterLearning />
    </React.Fragment>
  );
};

export default LayoutSecondary;
