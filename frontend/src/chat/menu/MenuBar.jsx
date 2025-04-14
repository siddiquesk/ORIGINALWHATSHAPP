import React, { useState } from "react";
import Header from "./Header";
import { Box } from "@mui/material";
import SearchTopComp from "./SearchTopComp";
import Conversation from "./Conversation";

function MenuBar() {
  const [text, setText] = useState("");

  return (
    <>
      <Box>
        <Header />
        <SearchTopComp setText={setText} />
        <Conversation text={text} />
      </Box>
    </>
  );
}

export default MenuBar;
