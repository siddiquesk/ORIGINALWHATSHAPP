import React, { useContext, useEffect, useState } from "react";
import { Box } from "@mui/material";
import ChatHeader from "./ChatHeader";
import { AccountContext } from "../../context/AccountProvider";
import ChatSection from "./ChatSection";
import { getConversation } from "../../service/api";
function ChatBox() {
  const { person, account } = useContext(AccountContext);
  const [chat, setChat] = useState({});
  useEffect(() => {
    const getConversationDetails = async () => {
      if (!person?.sub || !account?.sub) return; // ❗ safe check

      try {
        const data = await getConversation({
          senderId: account.sub,
          reciverId: person.sub,
        });
        console.log("API Response:", data);
        setChat(data);
      } catch (err) {
        console.log("Error in getConversationDetails:", err.message);
      }
    };

    getConversationDetails();
  }, [person.sub]);

  return (
    <>
      <Box>
        <ChatHeader person={person} />
        <ChatSection person={person} chat={chat} />
      </Box>
    </>
  );
}

export default ChatBox;
