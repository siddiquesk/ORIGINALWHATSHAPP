import React, { useContext, useState } from "react";
import { AccountContext } from "../../context/AccountProvider";
import { Box, styled, Typography } from "@mui/material";

const ImageBox = styled(Box)`
  display: flex;
  justify-content: center;
  margin-top: 15px;
`;

const Image = styled(`img`)({
  width: "150px",
  height: "150px",
  borderRadius: "50%",
});
const BoxWrapper = styled(Box)`
  background: rgb(255, 255, 255);
  color: rgb(20, 20, 20);
  margin: 20px 0px 0px 0px;
  padding: 14px 20px 14px 20px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  & :first-child {
    font-size: 14px;
    color: #009486;
    font-weight: 300;
  }
  & :last-child {
    margin-top: 10px;
    font-weight: 300;
    font-size: 15px;
  }
`;
const Description = styled(Box)`
  padding: 15px;
  & :first-child {
    font-size: 15px;
    font-weight: 300;
    color: rgb(131, 161, 180);
  }
`;
function Profile() {
  const { account } = useContext(AccountContext);

  return (
    <>
      <ImageBox>
        <Image src={account.picture} alt="image dp" />
      </ImageBox>
      <BoxWrapper>
        <Typography>Your Name</Typography>
        <Typography>{account.name}</Typography>
      </BoxWrapper>
      <Description>
        <Typography>
          This is not Your username or pin. This name will be visible to your
          whatshapp contact
        </Typography>
      </Description>
      <BoxWrapper>
        <Typography>About</Typography>
        <Typography>Eat! sleep! code! Repeat </Typography>
      </BoxWrapper>
    </>
  );
}

export default Profile;
