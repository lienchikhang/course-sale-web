import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import DrawerPart from "./DrawerPart";

const MenuPart = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setIsOpen(open);
    };
  return (
    <div>
      <button onClick={toggleDrawer(true)}>
        <MenuIcon />
      </button>
      <DrawerPart isOpen={isOpen} toggleDrawer={toggleDrawer} />
    </div>
  );
};

export default MenuPart;
