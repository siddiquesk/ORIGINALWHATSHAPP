import React, { useState } from "react";
// Material UI se icon aur menu components import kiye gaye hain
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Box, styled, Menu, MenuItem } from "@mui/material";

// Yeh component Header ke andar use hota hai, jisme profile drawer open hota hai
function HeaderMenu({ setOpenDrawer }) {
  // anchorEl: yeh track karta hai kis element ke neeche menu khulega
  const [anchorEl, setAnchorEl] = useState(null);

  // 3-dot icon pe click hote hi yeh function chalega
  // aur anchorEl set ho jayega jahan menu dikhega
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Menu ko band karne ka function – anchorEl ko null kar deta hai
  const handleClose = () => {
    setAnchorEl(null);
  };

  // Menu ke andar ek ek option ka styling (padding, font, color)
  const MenuOption = styled(MenuItem)`
    font-size: 16px;
    padding: 15px 60px 5px 24px; // top, right, bottom, left
    color: #4a4a4a;
  `;

  // Pura menu dropdown ka styling
  const MenuBar = styled(Menu)`
    margin: 17px 0px 0px 32px; // upar se thoda neeche aur left shift
  `;

  return (
    <>
      {/* ========================== 3 DOT ICON ========================== */}
      {/* Is icon pe click karne se menu open hota hai */}
      <Box onClick={handleClick} style={{ cursor: "pointer" }}>
        <MoreVertIcon style={{ fontSize: 22 }} />
      </Box>

      {/* ========================== DROPDOWN MENU ========================== */}
      <MenuBar
        id="basic-menu"
        anchorEl={anchorEl} // ye batata hai menu kahan dikhana hai
        open={Boolean(anchorEl)} // agar anchorEl set hai to menu dikhega
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        onClose={handleClose} // kisi bhi click pe menu band hoga
      >
        {/* ========== PROFILE OPTION ========== */}
        {/* Jab user 'Profile' pe click kare:
              1. menu band karo (handleClose)
              2. drawer open karo (setOpenDrawer(true)) */}
        <MenuOption
          onClick={() => {
            handleClose(); // pehle menu band karo
            setOpenDrawer(true); // phir drawer open karo (profile dikhega)
          }}>
          Profile
        </MenuOption>

        {/* ========== MY ACCOUNT OPTION ========== */}
        {/* Sirf menu band karna hai, aur kuch nahi */}
        <MenuOption onClick={handleClose}>My account</MenuOption>
      </MenuBar>
    </>
  );
}

export default HeaderMenu;
