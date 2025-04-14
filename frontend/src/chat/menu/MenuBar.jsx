import React from "react";
import Header from "./Header";
import { Box } from "@mui/material";
import SearchTopComp from "./SearchTopComp";
import Conversation from "./Conversation";
function MenuBar() {
  return (
    <>
      <Box>
        <Header />
        <SearchTopComp />
        <Conversation />
      </Box>
    </>
  );
}

export default MenuBar;
