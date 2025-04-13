import React, { useContext } from "react";
import { jwtDecode } from "jwt-decode";
import { Dialog, Box, Typography, List, ListItem, styled } from "@mui/material";
import { qrCodeImage } from "../../imagesall/data";
import { GoogleLogin } from "@react-oauth/google";
import { AccountContext } from "../../context/AccountProvider";

// ====== Styled Components ======

// Main container holding left & right sections
const Component = styled(Box)`
  display: flex;
  flex-direction: row;

  @media (max-width: 768px) {
    flex-direction: column; /* Stack for smaller screens */
    align-items: center;
  }
`;

// Left side content box
const Container = styled(Box)`
  padding: 56px 0px 56px 56px;

  @media (max-width: 768px) {
    padding: 20px;
    text-align: center;
  }
`;

// QR image styling
const QrImage = styled("img")({
  height: 264,
  width: 264,
  margin: "45px 0 0 130px",

  "@media (max-width: 768px)": {
    margin: "30px auto 0 auto",
    height: 200,
    width: 200,
  },
});

// Title (heading) text
const Title = styled(Typography)`
  font-size: 26px;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 22px;
  }
`;

// List styling for instructions
const ListStyle = styled(List)`
  & > li {
    padding: 0;
    font-size: 20px;
    margin-top: 15px;
    line-height: 28px;

    @media (max-width: 768px) {
      font-size: 16px;
      margin-top: 10px;
    }
  }
`;

// Dialog style customization
const dialogStyle = {
  height: "85%",
  marginTop: "5%",
  width: "70%",
  maxWidth: "100%",
  maxHeight: "100%",
  boxShadow: "none",
  overflow: "hidden",
};

function LoginDialog() {
  const { setAccount } = useContext(AccountContext);
  // On successful login, decode user info
  const onLoginSuccess = (res) => {
    if (res.credential) {
      const Decodeduser = jwtDecode(res.credential);
      setAccount(Decodeduser);
      console.log("Decoded User Info:", Decodeduser);
    } else {
      console.log("No credential token received.");
    }
  };

  // On login error
  const onLoginError = (res) => {
    console.log(res);
  };

  return (
    <>
      <Dialog open={true} PaperProps={{ sx: dialogStyle }} hideBackdrop={true}>
        <Component>
          {/* Left Text Section */}
          <Container>
            <Title>To use WhatsApp on your computer</Title>
            <ListStyle>
              <ListItem>1. Open WhatsApp on your phone</ListItem>
              <ListItem>
                2. Tap Menu or Settings and select WhatsApp Web
              </ListItem>
              <ListItem>
                3. Point your phone to this screen to capture the code
              </ListItem>
            </ListStyle>
          </Container>

          {/* Right QR Section with Google Login */}
          <Box style={{ position: "relative" }}>
            <QrImage src={qrCodeImage} alt="QR code" />
            <Box
              style={{
                position: "absolute",
                bottom: "120px",
                right: "30px",
                "@media (maxWidth: 768px)": {
                  position: "static",
                  marginTop: "20px",
                },
              }}>
              <GoogleLogin onSuccess={onLoginSuccess} onError={onLoginError} />
            </Box>
          </Box>
        </Component>
      </Dialog>
    </>
  );
}

export default LoginDialog;
