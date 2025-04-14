import React from "react";
import { Box, styled, Typography } from "@mui/material";

const Component = styled(Box)`
  display: flex;
  height: 50px;
  padding: 13px 10px;
  align-items: center;
  cursor: pointer;
  margin: 13px 0px;
  border-radius: 8px; /* Smooth corners */
  transition: background-color 0.3s ease; /* Smooth hover effect */
  &:hover {
    background-color: #f0f0f0; /* Light gray like WhatsApp */
  }
`;
const Image = styled(`img`)({
  width: 50,
  height: 50,
  borderRadius: "50%",
});
function Chating({ user }) {
  return (
    <>
      <Component>
        <Box>
          <Image src={user.picture} alt="image" />
        </Box>
        <Box>
          <Box>
            <Typography>{user.name}</Typography>
          </Box>
        </Box>
      </Component>
    </>
  );
}

export default Chating;
