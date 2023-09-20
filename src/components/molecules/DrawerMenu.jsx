import React from "react";
import Drawer from "@mui/material/Drawer";

export default function DrawerMenu() {
  return (
    <Drawer anchor="right" open={false} onClose={toggleDrawer(anchor, false)}>
      {list(anchor)}
    </Drawer>
  );
}
