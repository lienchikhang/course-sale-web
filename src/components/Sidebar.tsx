import React from "react";
import { Box } from "@mui/system";
import sidebarConstants from "../constants/sidebar.constants";
import "../css/siderbar.css";
import SiderbarItem from "./SiderbarItem";

const Sidebar: React.FC = () => {
  return (
    <div className="sticky top-[74px]">
      <Box sx={{ bgcolor: "#fff", padding: "0 8px" }}>
        {sidebarConstants.actions.map((action, index) => {
          return (
            <SiderbarItem
              action={action}
              key={index}
            />
          );
        })}
      </Box>
    </div>
  );
};

export default Sidebar;
