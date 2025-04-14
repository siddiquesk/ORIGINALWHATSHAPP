import React from "react";
import { Box, styled, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Container = styled(Box)`
  padding: 8px 16px;

  @media (max-width: 600px) {
    padding: 6px 10px;
  }
`;

const SearchBox = styled(Box)`
  background-color: white;
  display: flex;
  align-items: center;
  padding: 3px 12px;
  border-radius: 5px;
  border: 1px solid #ccc;
  border-bottom: 2px solid rgb(12, 158, 48);

  @media (max-width: 600px) {
    padding: 2px 8px;
  }
`;

const StyledInput = styled(InputBase)`
  margin-left: 10px;
  width: 100%;
  font-size: 16px;

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

function SearchTopComp({ setText }) {
  return (
    <Container>
      <SearchBox>
        <SearchIcon style={{ color: "#919191", fontSize: "20px" }} />
        <StyledInput
          placeholder="Search or start new chat"
          onClick={(e) => setText(e.target.value)}
        />
      </SearchBox>
    </Container>
  );
}

export default SearchTopComp;
