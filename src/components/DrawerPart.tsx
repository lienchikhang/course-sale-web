import React from "react";
import { Box } from "@mui/system";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import { IDrawer } from "../interfaces/drawer.interface";
import drawerConstants from "../constants/drawer.constants";
import ListItemButton from "@mui/material/ListItemButton";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import AddRoadIcon from "@mui/icons-material/AddRoad";
import OtherHousesIcon from "@mui/icons-material/OtherHouses";
import SettingsIcon from "@mui/icons-material/Settings";
import InfoIcon from "@mui/icons-material/Info";

const DrawerPart: React.FC<IDrawer> = ({ isOpen, toggleDrawer }) => {
  const list = () => (
    <Box
      sx={{
        height: "100vh",
        width: "80vw",
        padding: "48px 0 0 32px",
        overflow: scrollY,
      }}
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      {drawerConstants.actions.map((action, index) => {
        return (
          <ListItemButton
            key={index}
            sx={{ padding: "20px 0 20px 20px", marginBottom: "12px" }}
          >
            {action.icon == "login" ? <LoginIcon /> : <LogoutIcon />}
            <span className="ml-4 font-medium">{action.text}</span>
          </ListItemButton>
        );
      })}
      <Divider sx={{ marginBottom: "24px" }} />
      {drawerConstants.pages.map((page, index) => {
        return (
          <ListItemButton
            key={index}
            sx={{ padding: "20px 0 20px 20px", marginBottom: "12px" }}
          >
            {page.icon == "home" ? <OtherHousesIcon /> : <AddRoadIcon />}
            <span className="ml-4 font-medium">{page.text}</span>
          </ListItemButton>
        );
      })}
      <Divider sx={{ marginBottom: "24px" }} />
      {drawerConstants.more.map((more, index) => {
        return (
          <ListItemButton
            key={index}
            sx={{ padding: "20px 0 20px 20px", marginBottom: "12px" }}
          >
            {more.icon == "introduce" ? <InfoIcon /> : <SettingsIcon />}
            <span className="ml-4 font-medium">{more.text}</span>
          </ListItemButton>
        );
      })}
    </Box>
  );

  return (
    <React.Fragment>
      <Drawer anchor={"left"} open={isOpen} onClose={toggleDrawer(false)}>
        {list()}
      </Drawer>
    </React.Fragment>
  );
};

export default DrawerPart;
