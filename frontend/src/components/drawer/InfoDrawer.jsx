import React from "react";
import { Drawer, Typography, Box, styled } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Profile from "./Profile";
function InfoDrawer({ open, setOpen }) {
  const handleClose = () => {
    setOpen(false);
  };

  const Header = styled(Box)`
    background: #008069;
    height: 109px;
    color: #fff;
    cursor: pointer;
    display: flex;
    & > svg,
    & > p {
      margin-top: auto;
      margin-left: 5px;
      font-weight: 500;
    }
    padding: 20px 50px;
    font-size: 18px;
  `;

  const Component = styled(Box)`
    height: 85%;
    background: rgb(250, 250, 250);
  `;
  const drwaerStyle = {
    left: 20,
    top: 13,
    height: "96%",
    width: "33%",
    boxShadow: "none",
  };
  return (
    <>
      <Drawer
        open={open}
        onClose={handleClose}
        PaperProps={{ sx: drwaerStyle }}
        style={{ zIndex: 1500 }}
        hideBackdrop={true}>
        <Header>
          <ArrowBackIcon
            sx={{ cursor: "pointer", marginRight: 1 }}
            onClick={handleClose}
          />
          <Typography>Profile</Typography>
        </Header>
        <Component>
          <Profile />
        </Component>
      </Drawer>
    </>
  );
}

export default InfoDrawer;
