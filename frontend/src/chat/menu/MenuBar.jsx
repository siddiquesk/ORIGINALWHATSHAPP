import React from "react";
import Header from "./Header";
import { Box } from "@mui/material";
import SearchTopComp from "./SearchTopComp";
function MenuBar() {
  return (
    <>
      <Box>
        <Header />
        <SearchTopComp />
      </Box>
    </>
  );
}

export default MenuBar;
