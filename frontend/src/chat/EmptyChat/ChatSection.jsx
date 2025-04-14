import React, { useContext, useState, useEffect } from "react";
import { Box, styled } from "@mui/material";
import { AccountContext } from "../../context/AccountProvider";
import { newMessage, getMessage } from "../../service/api";
import ChatFooter from "./ChatFooter";
import Messages from "./Messages";
// Styled component with background image
const Wrapper = styled(Box)`
  background-image: url("https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png");
  background-size: cover; /* Ensure the image covers the entire container */
  background-position: center; /* Centers the image */
  background-repeat: no-repeat; /* Prevents image repetition */
`;
const Component = styled(Box)`
  height: 78vh;
  overflow: y:scroll;
`;
const ScrollWrapper = styled(Box)`
  height: 78vh; /* Adjust as needed */
  overflow-y: auto; /* Enables scroll when content exceeds height */
  padding: 10px;
  display: flex;
  flex-direction: column;
  scrollbar-width: none; /* Hide scrollbar in Firefox */
  &::-webkit-scrollbar {
    display: none; /* Hide scrollbar in Chrome/Safari */
  }
`;

function ChatSection({ person, chat }) {
  const { account } = useContext(AccountContext);
  const [text, setText] = useState("");
  const [message, setMessage] = useState([]);
  const [MessageFlasg, setMessageFlag] = useState(false);

  useEffect(() => {
    if (chat?._id) {
      const getMessagesDetails = async () => {
        console.log("chat id:", chat._id);
        let alldata = await getMessage(chat._id);

        // Sort messages by createdAt ascending
        alldata.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));

        setMessage(alldata);
        console.log("sorted data", alldata);
      };
      getMessagesDetails();
    }
  }, [chat._id, person._id, MessageFlasg]);

  const sendText = async (e) => {
    const code = e.keyCode || e.which;
    if (code === 13) {
      let message = {
        senderId: account.sub,
        reciverId: person.sub,
        chatId: chat._id,
        type: "text",
        text: text,
      };

      await newMessage(message);
      setMessageFlag((prev) => !prev);
      setText("");
    }
  };
  return (
    <Wrapper>
      {/* Content inside Wrapper */}
      <Component>
        <ScrollWrapper>
          {message.map((msg, index) => (
            <Messages key={index} data={msg} />
          ))}
        </ScrollWrapper>
      </Component>
      <ChatFooter sendText={sendText} setText={setText} text={text} />
    </Wrapper>
  );
}

export default ChatSection;
