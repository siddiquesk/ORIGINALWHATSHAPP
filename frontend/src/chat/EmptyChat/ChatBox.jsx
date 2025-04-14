import React, { useContext } from "react";
import { Box} from "@mui/material";
import ChatHeader from "./ChatHeader";
import { AccountContext } from "../../context/AccountProvider";
import ChatSection from "./ChatSection";
import ChatFooter from "./ChatFooter";
function ChatBox() {
  const { person } = useContext(AccountContext);
  console.log("persone", person);
  return (
    <>
      <Box>
        <ChatHeader person={person} />
        <ChatSection person={person} />
        <ChatFooter />
      </Box>
    </>
  );
}

export default ChatBox;
