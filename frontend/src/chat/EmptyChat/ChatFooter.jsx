import React from "react";
import { Box, styled, InputBase } from "@mui/material";
import EmojiEmotionsOutlinedIcon from "@mui/icons-material/EmojiEmotionsOutlined";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import MicNoneIcon from "@mui/icons-material/MicNone";

// Footer container
const Container = styled(Box)`
  height: 60px;
  background: rgb(255, 255, 255);
  display: flex;
  align-items: center;
  padding: 0 15px;
`;

// Wrapper around input field
const InputWrapper = styled(Box)`
  background: white;
  flex: 1;
  display: flex;
  align-items: center;
  padding: 5px 10px;
  margin: 0 10px;
`;

// Styled input field
const StyledInput = styled(InputBase)`
  flex: 1;
  font-size: 14px;
  padding-left: 10px;
`;

function ChatFooter() {
  return (
    <Container>
      <EmojiEmotionsOutlinedIcon
        style={{
          color: "#54656f",
          fontSize: 24,
          cursor: "pointer",
          marginRight: 6,
        }}
      />
      <AttachFileIcon
        style={{
          color: "#54656f",
          fontSize: 24,
          cursor: "pointer",
          transform: "rotate(45deg)",
          marginLeft: 8,
        }}
      />

      <InputWrapper>
        <StyledInput placeholder="Type a message" />
      </InputWrapper>

      <MicNoneIcon
        style={{ color: "#54656f", fontSize: 24, cursor: "pointer" }}
      />
    </Container>
  );
}

export default ChatFooter;
