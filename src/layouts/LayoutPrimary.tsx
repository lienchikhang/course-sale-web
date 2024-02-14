import { Container } from "@mui/system";
import React from "react";
import { Outlet } from "react-router-dom";
import { Footer, Header } from "../components";

const LayoutPrimary: React.FC = () => {
  return (
    <React.Fragment>
      <Container maxWidth="xl">
        <Header />
      </Container>
      <div className="py-4 p-4 sm:p-6 lg:p-0">
        <Outlet />
      </div>
      <Container maxWidth="xl">
        <Footer />
      </Container>
    </React.Fragment>
  );
};

export default LayoutPrimary;
