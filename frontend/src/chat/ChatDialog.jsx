import React from "react";
// EmptyChat aur MenuBar ko import kiya gaya hai, jo dialog ke left aur right side components hain
import EmptyChat from "./EmptyChat/EmptyChat";
import MenuBar from "./menu/MenuBar";
import { Dialog, Box, styled } from "@mui/material";

// Dialog ki styling ke liye style object
const dialogStyle = {
  height: "96%", // Dialog ki height ko 96% set kiya gaya
  width: "100%", // Full screen width
  maxWidth: "100vw", // Maximum width ko viewport width ke barabar set kiya gaya
  margin: "20px", // Dialog ke around margin
  maxHeight: "100vh", // Maximum height ko full viewport height
  boxShadow: "none", // Shadow remove kiya gaya
  overflow: "hidden", // Overflow ko hidden kiya gaya
  borderRadius: 0, // Border radius ko 0 set kiya gaya (sharp corners)
};

// Box ko styled component banaya gaya hai jo flexbox layout use karega
const Component = styled(Box)`
  display: flex;
`;

// LeftComponent ko minimum width 450px diya gaya hai
const LeftComponent = styled(Box)`
  min-width: 450px;
`;

// RightComponent ko 73% width di gayi hai aur minimum width 300px, saath hi height 100vh set kiya gaya hai
const RightComponent = styled(Box)`
  width: 73%;
  min-width: 300px;
  height: 100vh;
  border-left: 1px solid rgba(0, 0, 0, 0.14); // Left border for separation
`;

function ChatDialog() {
  return (
    <>
      {/* Dialog component, jo full-screen modal ke tarah open hota hai */}
      <Dialog
        open={true} // Dialog ko open rakha gaya hai
        PaperProps={{ sx: dialogStyle }} // PaperProps me dialogStyle ko apply kiya gaya
        hideBackdrop={true} // Backdrop ko hide kar diya gaya
        maxWidth={"md"} // Maximum width medium set kiya gaya
      >
        <Component>
          {/* Left side menu bar */}
          <LeftComponent>
            <MenuBar /> {/* MenuBar component */}
          </LeftComponent>

          {/* Right side empty chat section */}
          <RightComponent>
            <EmptyChat /> {/* EmptyChat component */}
          </RightComponent>
        </Component>
      </Dialog>
    </>
  );
}

export default ChatDialog;
