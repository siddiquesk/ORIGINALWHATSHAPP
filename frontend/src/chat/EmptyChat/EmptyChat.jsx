import React from "react";
import { Box, Typography, styled } from "@mui/material";
import { emptyChatImage } from "../../imagesall/data";

// Outer box styling
const Component = styled(Box)`
  background: #f8f9fa;
  padding: 30px 0;
  text-align: center;
  height: 100%;
`;

// Inner container styling
const Container = styled(Box)`
  padding: 0 20px;
`;

// Title styling
const Title = styled(Typography)`
  font-size: 24px;
  font-weight: 600;
  color: #128c7e; /* WhatsApp green shade */
  margin-top: 20px;
  margin-bottom: 10px;
`;

// Paragraph text styling
// Paragraph text styling
const SubText = styled(Typography)`
  font-size: 14px;
  color:rgb(156, 153, 153);
  margin-top: 10px;
  line-height: 1.6;
`;

// Image styling
const Image = styled("img")({
  width: 400,
  marginBottom: 20,
});

function EmptyChat() {
  return (
    <Component>
      <Container>
        <Image src={emptyChatImage} alt="chat image" />
        <Title>Whatshapp Web</Title>
        <SubText>
          With private messaging and calling, you can be yourself, speak freely
          and feel close to the most important people in your life no matter
          where they are.
        </SubText>
        <SubText>
          Cupiditate distinctio pariatur recusandae hic et architecto earum
          voluptate!
        </SubText>
      </Container>
    </Component>
  );
}

export default EmptyChat;
