import React, { useState } from "react";
import { Box } from "@mui/system";
import sidebarConstants from "../constants/sidebar.constants";
import "../css/siderbar.css";
import SiderbarItem from "./SiderbarItem";
import { ISideActive } from "../interfaces/siderbarItem.interface";

const Sidebar: React.FC = () => {
  let actT = localStorage.getItem("actTab");
  const [activeTab, setActiveTab] = useState<ISideActive | null>(
    actT ? JSON.parse(actT) : { active: "home" }
  );

  console.log("active", activeTab);

  return (
    <React.Fragment>
      <Box sx={{ bgcolor: "#fff", padding: "0 8px" }}>
        {sidebarConstants.actions.map((action, index) => {
          return (
            <SiderbarItem
              action={action}
              key={index}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          );
        })}
      </Box>
    </React.Fragment>
  );
};

export default Sidebar;
