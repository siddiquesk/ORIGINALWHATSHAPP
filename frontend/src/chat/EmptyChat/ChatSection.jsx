import React from "react";
import { Box, styled } from "@mui/material";

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

function ChatSection() {
  return (
    <Wrapper>
      {/* Content inside Wrapper */}
      <Component></Component>
    </Wrapper>
  );
}

export default ChatSection;
