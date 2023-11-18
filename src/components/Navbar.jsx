import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import { Badge } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { mobile, tablet } from "../responsive";

const Container = styled.div`
  height: 70px;
  background-color: black;
  color: white;
  ${mobile({ height: "50px" })}
  ${tablet({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 15px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "12px 0px" })}
  ${tablet({ padding: "12px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
  ${tablet({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: none;
  min-width: 300px;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  justify-content: flex-end;
  ${mobile({ minWidth: "45px", marginLeft: "5px" })};
  ${tablet({ minWidth: "60px", marginLeft: "5px" })};
`;

const Input = styled.input`
  border: none;
  width: 300px;
  margin-right: 5px;
  height: 25px;
  ${mobile({
    width: "45px",
    height: "15px",
    fontSize: "10px",
    marginRight: "3px",
  })};
  ${tablet({
    width: "60px",
    height: "25px",
    fontSize: "14px",
    marginRight: "3px",
  })};
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })};
  ${tablet({ fontSize: "30px" })};
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-item: center;
  justify-content: flex-end;
  ${mobile({
    flex: "2",
    justifyContent: "center",
    alignItems: "center",
    marginRight: "10px",
  })};
  ${tablet({
    flex: "2",
    justifyContent: "center",
    alignItems: "center",
  })};
`;

const MenuItem = styled.div`
  font-size: 16px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "10px", marginLeft: "10px" })};
  ${tablet({ fontSize: "14px" })};
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ fontSize: 20 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>MAYNOOTH</Logo>
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
