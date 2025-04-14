import React from "react";
import { Box, styled, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MoreVertIcon from "@mui/icons-material/MoreVert";


// Styled components
const Header = styled(Box)`
  height: 60px;
  background: #075e54; /* WhatsApp green */
  padding: 10px 20px;
  display: flex;
  align-items: center;
  color: white;
`;

const Image = styled(`img`)({
  height: 40,
  width: 40,
  borderRadius: "50%",
  objectFit: "cover",
  cursor: "pointer",
  border: "2px solid white", // Border around profile picture
});

const Name = styled(Typography)`
  margin-left: 15px;
  margin-top: 3px;
  font-weight: bold;
`;

const RightContainer = styled(Box)`
  margin-left: auto;
  padding: 8px 10px;
  display: flex;
  align-items: center;
  & > svg {
    font-size: 25px;
    color: white;
    cursor: pointer;
    margin-left: 10px;
  }
`;

const OnlineStatus = styled(Box)`
  margin-left: 15px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #25d366; /* WhatsApp online green */
`;

const Online = styled(Typography)`
  font-size: 12px;
  color: #25d366;
  margin-left: 10px;
`;

function ChatHeader({ person }) {
  return (
    <Header>
      <Image src={person.picture} alt="dp" />
      <Box>
        <Name>{person.name}</Name>
        <Box display="flex" alignItems="center">
          <OnlineStatus />
          <Online>Online</Online>
        </Box>
      </Box>
      <RightContainer>
        <SearchIcon />
        <MoreVertIcon />
      </RightContainer>
    </Header>
  );
}

export default ChatHeader;
