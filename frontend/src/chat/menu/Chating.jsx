import React, { useContext } from "react";
import { Box, styled, Typography } from "@mui/material";
import { AccountContext } from "../../context/AccountProvider";
import { setConversation } from "../../service/api";
const Component = styled(Box)`
  display: flex;
  height: 50px;
  padding: 13px 10px;
  align-items: center;
  cursor: pointer;
  margin: 13px 0px;
  border-radius: 8px; /* Smooth corners */
`;
const Image = styled(`img`)({
  width: 50,
  height: 50,
  borderRadius: "50%",
});

function Chating({ user }) {
  const { setPerson, account } = useContext(AccountContext);
  const getUsersCall = async () => {
    setPerson(user);
    await setConversation({ senderId: account.sub, reciverId: user.sub });
  };

  return (
    <>
      <Component onClick={getUsersCall}>
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
