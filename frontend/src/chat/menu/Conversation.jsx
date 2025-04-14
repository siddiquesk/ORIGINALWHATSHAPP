import React, { useEffect, useState, useContext } from "react";
import { showUser } from "../../service/api";

import { Box, styled, Divider } from "@mui/material";
import Chating from "./Chating";
import { AccountContext } from "./../../context/AccountProvider";

const Component = styled(Box)`
  height: 81vh;
  overflow: overlay;

`;

const StyleDivide = styled(Divider)`
  margin: 0 0 15px;
  background: rgb(243, 242, 242);
  
`;
function Conversation() {
  const [users, setUsers] = useState([]);
  const { account } = useContext(AccountContext);
  useEffect(() => {
    const fetchData = async () => {
      let response = await showUser();
      setUsers(response);
    };

    fetchData();
  }, []);

  return (
    <>
      <Component>
        {
          // Iterating over the 'users' array
          users.map(
            (data) =>
              // Check if the current user's 'sub' is NOT equal to the logged-in user's 'sub'
              data.sub !== account.sub && (
                // If they are not the same, render the 'Chating' component
                <>
                  <Chating user={data} />
                  <StyleDivide />
                </>
              )
          )
        }
      </Component>
    </>
  );
}

export default Conversation;
