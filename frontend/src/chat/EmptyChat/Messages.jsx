import React, { useContext } from "react";
import { Typography, Box, styled } from "@mui/material";
import { formatDate } from "../../utils/Common";
import { AccountContext } from "../../context/AccountProvider";

const Own = styled(Box)`
  background: #dcf8c6; /* Light green for your own message */
  max-width: 60%;
  margin-left: auto;
  padding: 8px 12px;
  width: fit-content;
  display: flex;
  flex-direction: column;
  border-radius: 10px 0 10px 10px; /* Bubble shape */
  margin-bottom: 8px;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1);
`;

const Wrapper = styled(Box)`
  background: #ffffff; /* White for received messages */
  max-width: 60%;
  margin-right: auto;
  padding: 8px 12px;
  width: fit-content;
  display: flex;
  flex-direction: column;
  border-radius: 0 10px 10px 10px; /* Bubble shape */
  margin-bottom: 8px;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1);
`;

const Text = styled(Typography)`
  font-size: 14px;
  color: #303030;
  word-break: break-word;
`;

const Time = styled(Typography)`
  font-size: 10px;
  color: gray;
  align-self: flex-end;
  margin-top: 4px;
`;

function Messages({ data }) {
  const { account } = useContext(AccountContext);
  console.log("id hai", data.senderId);
  console.log("sender ", account);
  return (
    <>
      {account.sub === data.senderId ? (
        <Own>
          <Text>{data.text}</Text>
          <Time>{formatDate(data.createdAt)}</Time>
        </Own>
      ) : (
        <Wrapper>
          <Text>{data.text}</Text>
          <Time>{formatDate(data.createdAt)}</Time>
        </Wrapper>
      )}
    </>
  );
}

export default Messages;
