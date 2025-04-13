import React, { useContext } from "react";
import { AppBar, Toolbar, Typography, styled, Box } from "@mui/material";
import LoginDialog from "./account/LoginDialog";
import { AccountContext } from "../context/AccountProvider";
import ChatDialog from "../chat/ChatDialog";
const Component = styled(Box)`
  height: 100vh;
  background: rgb(238, 238, 238);
`;
const LoginHeader = styled(AppBar)`
  height: 200px;
  background-color: #00bfa5;
  box-shadow: none;
`;

const ChatHeader = styled(AppBar)`
  height: 120px;
  background-color: #00a884;
  box-shadow: none;
`;
function Messanger() {
  const { account } = useContext(AccountContext);
  console.log(account);
  return (
    <>
      <Component>
        {account ? (
          <>
            <ChatHeader>
              <Toolbar></Toolbar>
            </ChatHeader>
            <ChatDialog />
          </>
        ) : (
          <>
            <LoginHeader>
              <Toolbar>
                <Typography></Typography>
              </Toolbar>
            </LoginHeader>
            <LoginDialog />
          </>
        )}
      </Component>
    </>
  );
}

export default Messanger;
