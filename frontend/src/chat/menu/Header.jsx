import React, { useContext, useState } from "react";
import { AccountContext } from "../../context/AccountProvider";
import { Box, styled } from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import InfoDrawer from "../../components/drawer/InfoDrawer";
import HeaderMenu from "./HeaderMenu";

// ======================= STYLED COMPONENTS =======================

// Header bar styling
const Component = styled(Box)`
  height: 60px;
  background: rgb(238, 219, 219);
  padding: 8px 16px;
  display: flex;
  align-items: center;

  @media (max-width: 600px) {
    padding: 6px 10px;
    height: 55px;
  }
`;

// Profile image styling
const Image = styled("img")({
  height: 48,
  width: 48,
  borderRadius: "50%",
  cursor: "pointer",

  "@media (max-width: 600px)": {
    height: 40,
    width: 40,
  },
});

// Wrapper for right-side icons (Chat + Menu)
const Wrapper = styled(Box)`
  margin-left: auto;
  display: flex;
  align-items: center;
  z-index: 10;

  & > span {
    margin-left: 20px;
    cursor: pointer;
    display: flex;
    align-items: center;
    color: #000;
  }

  @media (max-width: 600px) {
    & > span {
      margin-left: 12px;
    }
  }
`;

// ======================= MAIN COMPONENT =======================

function Header() {
  const { account } = useContext(AccountContext);

  // ========== Drawer open/close state ==========
  const [openDrawer, setOpenDrawer] = useState(false);

  // ========== Function to open the drawer ==========
  // This is called when profile image OR menu profile option is clicked
  const toggleDrawer = () => {
    setOpenDrawer(true);
  };

  return (
    <>
      {/* ======================= HEADER BAR ======================= */}
      <Component>
        {/* === Profile Image === 
            On click → opens the InfoDrawer
        */}
        <Image
          src={account.picture}
          alt="google image"
          onClick={toggleDrawer}
        />

        {/* === Right-side Icons (Chat, Menu) === */}
        <Wrapper>
          {/* Chat icon - just a static icon here */}
          <span>
            <ChatIcon style={{ fontSize: 22 }} />
          </span>

          {/* HeaderMenu with 3-dot icon (More options) 
              Passes setOpenDrawer so that 'Profile' click can open the drawer
          */}
          <span>
            <HeaderMenu setOpenDrawer={setOpenDrawer} />
          </span>
        </Wrapper>
      </Component>

      {/* ======================= INFO DRAWER ======================= 
          open → decides visibility
          setOpen → lets drawer close itself (when clicking outside or close button)
      */}
      <InfoDrawer open={openDrawer} setOpen={setOpenDrawer} />
    </>
  );
}

export default Header;
