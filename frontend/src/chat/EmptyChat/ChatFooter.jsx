import React, { useState } from "react";
import { Box, styled, InputBase } from "@mui/material";
import EmojiEmotionsOutlinedIcon from "@mui/icons-material/EmojiEmotionsOutlined";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import MicNoneIcon from "@mui/icons-material/MicNone";

// Footer container
const Container = styled(Box)`
  height: 55px;
  background: #f0f0f0;
  display: flex;
  align-items: center;
  padding: 0 10px;
  position: relative;
`;

// Wrapper around input field
const InputWrapper = styled(Box)`
  background: white;
  flex: 1;
  display: flex;
  align-items: center;
  border-radius: 20px;
  padding: 5px 15px;
  margin: 0 10px;
`;

// Styled input field
const StyledInput = styled(InputBase)`
  flex: 1;
  font-size: 14px;
  padding-left: 10px;
`;

function ChatFooter({ sendText, setText, text }) {
  return (
    <Container>
      <EmojiEmotionsOutlinedIcon
        style={{
          color: "#54656f",
          fontSize: 24,
          cursor: "pointer",
        }}
      />
      <AttachFileIcon
        style={{
          color: "#54656f",
          fontSize: 24,
          cursor: "pointer",
          transform: "rotate(45deg)",
          marginLeft: 10,
        }}
      />
      <InputWrapper>
        <StyledInput
          placeholder="Type a message"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyPress={(e) => sendText(e)}
        />
      </InputWrapper>
      <MicNoneIcon
        style={{ color: "#54656f", fontSize: 24, cursor: "pointer" }}
      />
    </Container>
  );
}

export default ChatFooter;
